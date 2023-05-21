import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TContestPage.module.css';
import { useNavigate } from 'react-router-dom';


const TContestPage = ({ setQuestionCount }) => {
    const navigate = useNavigate();
    const [questionCount, setLocalQuestionCount] = useState(0);  // <-- add this


    const handleInputChange = (event) => {
        setLocalQuestionCount(event.target.value);  // <-- modify this
        setQuestionCount(event.target.value);
    };

    const handleSetQuestionCount = () => {
        localStorage.setItem('questionCount', questionCount);
    };

    const handleNextClick = () => {
        handleSetQuestionCount();
        navigate("input");
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
                    <h2>輸入題數</h2>
                </Col>
                <Col>
                    <Form.Control type="number" placeholder="輸入題數" onChange={handleInputChange} />
                </Col>
            </Row>


            <Row>
                <Form className={styles.sectionContainer}>
                    <Form.Group className="mb-3" controlId="formStartTime" as={Row}>
                        <Form.Label column sm={7} >
                            <h2>開始時間</h2>
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="datetime-local" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEndTime" as={Row}>
                        <Form.Label column sm={7}>
                            <h2>結束時間</h2>
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="datetime-local" />
                        </Col>
                    </Form.Group>
                </Form>
            </Row>

            <Row >
                <Col className={styles.sectionContainer}>
                    <Button onClick={() => handleNextClick()}>Next</Button>
                </Col>
            </Row>



        </Container >
    );
};

export default TContestPage;
