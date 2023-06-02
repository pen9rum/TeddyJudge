import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TCourseModify.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../../api/api';

const TCourseModify = () => {
    const [homeWorkTitle, setHomeWorkTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [pdfFile, setPdfFile] = useState(null);
    const [testCase, setTestCase] = useState("");
    const [testCaseAnswer, setTestCaseAnswer] = useState("");

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

    const handleStartTimeUpdate = () => {
        api.updateHomeworkStartTime(homeWork, startTime)
            .then(success => alert(success ? 'Start time update successful' : 'Start time update failed'))
            .catch(error => alert('Error updating start time: ' + error));
    };

    const handleEndTimeUpdate = () => {
        api.updateHomeworkEndTime(homeWork, endTime)
            .then(success => alert(success ? 'End time update successful' : 'End time update failed'))
            .catch(error => alert('Error updating end time: ' + error));
    };

    const handlePDFUpdate = () => {
        api.updateHomeworkPDF(homeWork, pdfFile)
            .then(success => alert(success ? 'PDF update successful' : 'PDF update failed'))
            .catch(error => alert('Error updating PDF: ' + error));
    }

    const handleTestCaseUpdate = () => {
        api.updateTestCase(homeWork, testCase)
            .then(success => alert(success ? 'Test case update successful' : 'Test case update failed'))
            .catch(error => alert('Error updating Test case: ' + error));
    }

    const handleTestCaseAnswerUpdate = () => {
        api.updateTestCaseAnswer(homeWork, testCaseAnswer)
            .then(success => alert(success ? 'Test case answer update successful' : 'Test case answer update failed'))
            .catch(error => alert('Error updating Test case answer: ' + error));
    }


    const navigate = useNavigate();
    const location = useLocation();
    const homeWork = location.state?.fileTitle;

    return (
        <Container className={styles.courseContainer}>
            <Row >
                <NavbarLogo />
            </Row>
            <Row className={`${styles.navigationRow} `} >
                <Col className={styles.navigationContainer}>
                    <Navbar />
                </Col>
            </Row>

            <Row>
                <Col className={styles.sectionContainer}>
                    <h2>{homeWork}</h2>
                </Col>
                <Col>
                    <h2>/</h2>
                </Col>
                <Col>
                    <h2>{homeWorkTitle}</h2>
                </Col>
            </Row>

            <Row>
                <Form className={styles.sectionContainer}>
                    <Form.Group className="mb-3" controlId="formStartTime" as={Row}>
                        <Form.Label column sm={5} >
                            開始時間
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                        </Col>
                        <Col sm={4}>
                            <Button variant="primary" type="button" onClick={handleStartTimeUpdate}>更改</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEndTime" as={Row}>
                        <Form.Label column sm={5}>
                            結束時間
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                        </Col>
                        <Col sm={4}>
                            <Button variant="primary" type="button" onClick={handleEndTimeUpdate}>更改</Button>
                        </Col>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formPDFUpload" as={Row}>
                        <Form.Label column sm={5}>
                            PDF匯入處
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="file" accept=".pdf" onChange={handlePdfFileChange} />
                        </Col>
                        <Col sm={4}>
                            <Button variant="primary" type="button" onClick={handlePDFUpdate}>更改</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestDataUpload" as={Row}>
                        <Form.Label column sm={5}>
                            隱藏測資
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="file" accept=".txt" onChange={handleTestCaseFileChange} />
                        </Col>
                        <Col sm={4}>
                            <Button variant="primary" type="button" onClick={handleTestCaseUpdate}>更改</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestAnswerUpload" as={Row}>
                        <Form.Label column sm={5}>
                            隱藏測資答案
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="file" accept=".txt" onChange={handleTestCaseAnsFileChange} />
                        </Col>
                        <Col sm={4}>
                            <Button variant="primary" type="button" onClick={handleTestCaseAnswerUpdate}>更改</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Row>

            <Row>
                <Col className={`${styles.sectionContainer} d-flex justify-content-end align-items-end`}>
                    <Button onClick={() => navigate(-1)}>Return</Button>
                </Col>
            </Row>

        </Container>
    );
};

export default TCourseModify;
