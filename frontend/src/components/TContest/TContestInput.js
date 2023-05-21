import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TContestInput.module.css';
import { useNavigate } from 'react-router-dom';
import { QuestionCountContext } from './QuestionCountContext';  // Make sure the path is correct


const TContestInput = () => {
    const [questionCount, setQuestionCount] = useState(localStorage.getItem('questionCount') || 0);

    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        console.log("Current Page: ", currentPage);
        console.log("Total question number: ", questionCount);
    }, [currentPage]);


    useEffect(() => {
        // Here, you can generate pages based on questionCount
        // This effect will run whenever questionCount changes
    }, [questionCount]);

    const handleNextPage = () => {
        if (currentPage < questionCount) {
            setCurrentPage(prevPage => prevPage + 1); // increment currentPage
        }
        else {
            navigate("/tcontest"); // Go back to contest route at the end
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1); // decrement currentPage
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


            <Row>
                <Form className={styles.sectionContainer}>


                    <Form.Group className="mb-3" controlId="formPDFUpload" as={Row}>
                        <Form.Label column sm={7}>
                            PDF匯入處
                        </Form.Label>
                        <Col sm={3}>
                            <Button variant="primary" type="button">Upload</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestDataUpload" as={Row}>
                        <Form.Label column sm={7}>
                            隱藏測資
                        </Form.Label>
                        <Col sm={3}>
                            <Button variant="primary" type="button">Upload</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestAnswerUpload" as={Row}>
                        <Form.Label column sm={7}>
                            隱藏測資答案
                        </Form.Label>
                        <Col sm={3}>
                            <Button variant="primary" type="button">Upload</Button>
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
