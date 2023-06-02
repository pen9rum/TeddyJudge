import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TContestInput.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

import api from '../../api/api';


const TContestInput = () => {
    const [questionCount, setQuestionCount] = useState(localStorage.getItem('questionCount') || 0);
    const [currentPage, setCurrentPage] = useState(1);
    const [homeworkName, setHomeworkName] = useState("");
    const [pdfFile, setPdfFile] = useState(null);

    const [homeworks, setHomeworks] = useState([]);
    const [pdfFiles, setPdfFiles] = useState([]);
    const [testCase, setTestCase] = useState("");
    const [testCaseAnswer, setTestCaseAnswer] = useState("");

    const location = useLocation();
    const contestName = location.state?.contestName;
    const startTime = location.state?.startTime;
    const endTime = location.state?.endTime;
    const navigate = useNavigate();


    useEffect(() => {
        const initialHomeworks = new Array(questionCount).fill({
            homeworkName: "",
            testCase: "",
            testCaseAnswer: "",
            startTime: "",
            endTime: "",
            average: 0,
            pdfUrl: "",
            pdf: null
        });
        setHomeworks(initialHomeworks);
    }, [questionCount]);

    useEffect(() => {
        const initialPdfFiles = new Array(questionCount).fill(null);
        setPdfFiles(initialPdfFiles);
    }, [questionCount]);


    const handlePdfFileChange = async (e) => {
        const file = e.target.files[0];
        setPdfFile(file);
    };

    const readFileContent = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = event => resolve(event.target.result);
            reader.onerror = error => reject(error);
            reader.readAsText(file);
        });
    };

    const handleTestCaseFileChange = async (e) => {
        const file = e.target.files[0];
        const content = await readFileContent(file);
        setTestCase(content);
    };

    const handleTestCaseAnsFileChange = async (e) => {
        const file = e.target.files[0];
        const content = await readFileContent(file);
        setTestCaseAnswer(content);
    };


    const handleNextPage = () => {
        const newHomework = {
            homeworkName: homeworkName,
            testCase: testCase,  // Replace with actual data
            testCaseAnswer: testCaseAnswer,  // Replace with actual data
            startTime: startTime,
            endTime: endTime,
            average: 0,  // Replace with actual data
            pdfUrl: null,  // Replace with actual data
            pdf: null  // Replace with actual data
        };
        setHomeworks(prevHomeworks => {
            const updatedHomeworks = [...prevHomeworks];
            updatedHomeworks[currentPage - 1] = newHomework;
            return updatedHomeworks;
        });


        setPdfFiles(prevPdfFiles => {
            const updatedPdfFiles = [...prevPdfFiles];
            updatedPdfFiles[currentPage - 1] = pdfFile;
            return updatedPdfFiles;
        });

        if (currentPage < questionCount) {
            setCurrentPage(prevPage => {
                return prevPage + 1;
            });

        }
        else {

            const updatedHomeworks = [...homeworks];
            updatedHomeworks[currentPage - 1] = newHomework;


            const updatedPdfFiles = [...pdfFiles];
            updatedPdfFiles[currentPage - 1] = pdfFile;


            console.log(updatedHomeworks)
            console.log(updatedPdfFiles)

            const contestData = {
                id: 1,  // replace with actual data
                contestname: contestName,  // replace with actual data
                totalscore: 100,  // replace with actual data
                averagescore: 90,  // replace with actual data
                startTime: startTime,  // replace with actual data
                endTime: endTime,  // replace with actual data
                homeworks: updatedHomeworks
            };

            // Call the API to add the new contest
            api.addContest(contestData, updatedPdfFiles)
                .then(result => {
                    if (result) {
                        alert("File uploaded successfully."); // Show a success message
                        // Contest added successfully, navigate to the contest route
                        navigate("/tcontest");

                    } else {
                        // Handle error
                    }
                });
        }

        // Reset UI-related states after the page number is changed
        setHomeworkName("");
        setPdfFile(null);
        setTestCase("");
        setTestCaseAnswer("");
    };


    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => {
                // Reset UI-related states after the page number is changed
                setHomeworkName("");
                setPdfFile(null);
                setTestCase("");
                setTestCaseAnswer("");
                return prevPage - 1;
            });
        }
        else {
            navigate("/tcontest"); // Go back to contest route from the first page
        }
    };



    return (
        <Container className={styles.contestContainer}>
            <Row >
                <NavbarLogo />
            </Row>
            <Row className={`${styles.navigationRow} `} >
                <Col className={styles.navigationContainer}>
                    <Navbar />
                </Col>
            </Row>
            <Row className={styles.sectionContainer}>
                <Col lg={4} className="text-center">
                    <h2>題目</h2>
                </Col>
                <Col>
                    <h2>{currentPage}/{questionCount}</h2>
                </Col>
            </Row>

            <Row className={styles.sectionContainer}>
                <Col lg={7} className="text-center">
                    <h2>題目名稱</h2>
                </Col>
                <Col lg={3}>
                    <Form.Control type="text" placeholder="輸入題目名稱" value={homeworkName} onChange={(e) => setHomeworkName(e.target.value)} />
                </Col>
            </Row>


            <Row>
                <Form className={styles.sectionContainer}>
                    <Form.Group className="mb-3" controlId="formPDFUpload" as={Row} >
                        <Form.Label column sm={7}>
                            PDF匯入處
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="file" accept=".pdf" value={pdfFile ? undefined : ""} onChange={handlePdfFileChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestDataUpload" as={Row}>
                        <Form.Label column sm={7}>
                            隱藏測資
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="file" accept=".txt" value={pdfFile ? undefined : ""} onChange={handleTestCaseFileChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestAnswerUpload" as={Row}>
                        <Form.Label column sm={7}>
                            隱藏測資答案
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="file" accept=".txt" value={pdfFile ? undefined : ""} onChange={handleTestCaseAnsFileChange} />
                        </Col>
                    </Form.Group>
                </Form>
            </Row>

            <Row >
                <Col className={styles.sectionContainer}>
                    <Button onClick={handlePreviousPage}>Previous</Button>
                    {currentPage === questionCount ?
                        <Button onClick={() => navigate("")}>End</Button> :
                        <Button onClick={handleNextPage}>Next</Button>
                    }
                </Col>
            </Row>



        </Container >
    );
};

export default TContestInput;
