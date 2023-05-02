import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import NavbarLogo from './NavbarLogo';
import styles from './ContestPage.module.css';
import ContestContainer from './ContestContainer';

const ContestPage = () => {
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
            <Row className={`${styles.rowWidth70em} `}>
                <Col lg={4} className="text-center">
                    <h2>下次Contest</h2>
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em} `}>
                <Col>
                    < ContestContainer contestTitle={"Contest 3"} status={false} dueDate={"12/31/2023"} btnStatus={true} />
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em} mt-5`}>
                <Col lg={4} className="text-center mx-4">
                    <h2>先前的Contest</h2>
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em}`}>
                <Col >
                    < ContestContainer contestTitle={"Contest 2"} status={true} score={"285"} btnStatus={false} />
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em}`}>
                <Col className={`mb-5`}>
                    < ContestContainer contestTitle={"Contest 1"} status={true} score={"315"} btnStatus={false} />
                </Col>
            </Row>


        </Container>
    );
};

export default ContestPage;
