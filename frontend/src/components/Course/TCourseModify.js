import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TCourseModify.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import useFileUpload from './useFileUpload';

const TCourseModify = () => {
    const [homeWorkTitle, setHomeWorkTitle] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    useEffect(() => {
        axios.get('YOUR_API_URL_HERE')
            .then(response => {
                setHomeWorkTitle(response.data.homeWorkTitle);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    useEffect(() => {
        axios.get('YOUR_API_URL_HERE')
            .then(response => {
                setHomeWorkTitle(response.data.homeWorkTitle);
                setStartTime(response.data.startTime);
                setEndTime(response.data.endTime);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleStartTimeUpdate = () => {
        console.log(startTime);
        axios.put('YOUR_API_URL_HERE', { startTime })
            .then(response => console.log(response))
            .catch(error => console.error('There was an error!', error));
    };

    const handleEndTimeUpdate = () => {
        console.log(endTime);
        axios.put('YOUR_API_URL_HERE', { endTime })
            .then(response => console.log(response))
            .catch(error => console.error('There was an error!', error));
    };

    const fileUpload1 = useFileUpload();
    const fileUpload2 = useFileUpload();
    const fileUpload3 = useFileUpload();

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
                            <input type="file" ref={fileUpload1.inputFileRef} accept=".pdf" onChange={fileUpload1.handleFileUpload} hidden />
                            <Button variant="primary" type="button" onClick={fileUpload1.handleClick}>Upload</Button>
                            <div>{fileUpload1.fileName}</div>
                        </Col>
                        <Col sm={4}>
                            <Button variant="primary" type="button" onClick={() => fileUpload1.handleUpdate('YOUR_API_URL_HERE')}>更改</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestDataUpload" as={Row}>
                        <Form.Label column sm={5}>
                            隱藏測資
                        </Form.Label>
                        <Col sm={3}>
                            <input type="file" ref={fileUpload2.inputFileRef} accept=".pdf" onChange={fileUpload2.handleFileUpload} hidden />
                            <Button variant="primary" type="button" onClick={fileUpload2.handleClick}>Upload</Button>
                            <div>{fileUpload2.fileName}</div>
                        </Col>
                        <Col sm={4}>
                            <Button variant="primary" type="button" onClick={() => fileUpload2.handleUpdate('YOUR_API_URL_HERE')}>更改</Button>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTestAnswerUpload" as={Row}>
                        <Form.Label column sm={5}>
                            隱藏測資答案
                        </Form.Label>
                        <Col sm={3}>
                            <input type="file" ref={fileUpload3.inputFileRef} accept=".pdf" onChange={fileUpload3.handleFileUpload} hidden />
                            <Button variant="primary" type="button" onClick={fileUpload3.handleClick}>Upload</Button>
                            <div>{fileUpload3.fileName}</div>
                        </Col>
                        <Col sm={4}>
                            <Button variant="primary" type="button" onClick={() => fileUpload3.handleUpdate('YOUR_API_URL_HERE')}>更改</Button>
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
