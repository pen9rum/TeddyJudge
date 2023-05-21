import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TCourseList.module.css';
import { useNavigate } from 'react-router-dom';
import TCourseListContainer from './TCourseListContainer';


const TCourseList = () => {
    const navigate = useNavigate();
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
                <Col className={`${styles.sectionContainer} d-flex justify-content-start`}>
                    <h2>HW</h2>
                </Col>
            </Row>

            <Row>
                <Col className={styles.sectionContainer}>
                    < TCourseListContainer fileTitle={"HW1"} nextRouter={"/tcourse/modify"} />
                </Col>
            </Row>

            <Row>
                <Col className={`${styles.sectionContainer} d-flex justify-content-start`}>
                    <h2>Contest</h2>
                </Col>
            </Row>

            <Row>
                <Col className={styles.sectionContainer}>
                    < TCourseListContainer fileTitle={"Contest 1"} nextRouter={"/tcourse/contestlist"} />
                </Col>
            </Row>


        </Container>
    );
};

export default TCourseList;
