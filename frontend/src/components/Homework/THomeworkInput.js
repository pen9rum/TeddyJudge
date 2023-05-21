// THomeworkPage.js

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './THomeworkInput.module.css';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';

import axios from 'axios';

const THomeworkInput = () => {


    return (
        <Container className={styles.thomeworkPageContainer}>
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col className={styles.sectionContainer}>
                    <h2>上傳新作業</h2>
                </Col>
            </Row>
            <Row>
                <Form className={styles.sectionContainer}>
                    <Form.Group className="mb-3" controlId="formStartTime" as={Row}>
                        <Form.Label column sm={7} >
                            開始時間
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="datetime-local" />
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEndTime" as={Row}>
                        <Form.Label column sm={7}>
                            結束時間
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="datetime-local" />
                        </Col>
                    </Form.Group>

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

        </Container>
    );
};

export default THomeworkInput;
