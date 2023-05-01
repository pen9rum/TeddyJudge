import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Navbar from './Navbar';
import NavbarLogo from './NavbarLogo';
import styles from './CoursePage.module.css';
import DownloadFileContainer from './DownloadFileContainer';

const CoursePage = () => {


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
            <Row className={`${styles.rowWidth70em} `}>
                <Col lg={8}></Col>
                <Col className={`text-end mt-1`}>
                    <h3>
                        學期
                    </h3>
                </Col>
                <Col >
                    <Form.Group controlId="exampleComboBox">
                        <Form.Select className="select-customer">
                            <option value="option1">112-1</option>
                            <option value="option2">112-2</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em} `}>
                <Col lg={4} className="text-center">
                    <h2>講義</h2>
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em} `}>
                <Col>
                    < DownloadFileContainer fileTitle={"HW1.pdf"} fileSize={"253.87kb"} />
                    < DownloadFileContainer fileTitle={"HW2.pdf"} fileSize={"300.82kb"} />
                    < DownloadFileContainer fileTitle={"Course1.pdf"} fileSize={"111.26kb"} />
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em} mt-5`}>
                <Col lg={4} className="text-center mx-4">
                    <h2>考試回顧</h2>
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em}`}>
                <Col className={`mb-5`}>
                    < DownloadFileContainer fileTitle={"Q1.Exam.pdf"} />
                    < DownloadFileContainer fileTitle={"Q2.Exam.pdf"} />
                </Col>
            </Row>


        </Container>
    );
};

export default CoursePage;
