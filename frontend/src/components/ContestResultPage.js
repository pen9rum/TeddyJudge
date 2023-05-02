import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import NavbarLogo from './NavbarLogo';
import styles from './ContestResultPage.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import ContestResultContainer from './ContestResultContainer'

const ContestResultPage = () => {
    const { param } = useParams();
    var questionTitle = param;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Container className={styles.contestResultContainer}>
            <Row >
                <NavbarLogo />
            </Row>
            <Row className={`${styles.navigationRow}`} >
                <Col className={styles.navigationContainer}>
                    <Navbar />
                </Col>
            </Row>
            <Row className={`${styles.rowWidth70em} `}>
                <Col lg={4} className="text-start mx-5">
                    <h2>{questionTitle}</h2>
                </Col>

                <Col>
                    <h2>70/100</h2>
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em} `}>
                <Col lg={4} className="text-start mx-5">

                    <a className="a-pdf" href="https://example.com" target="_blank" rel="noopener noreferrer">
                        {questionTitle} -&gt; PDF
                    </a>
                </Col>

                <Col>
                    <Button className={`${styles.btnGo}`} variant="primary">
                        Your code
                    </Button>

                </Col>
            </Row>
            <Row className={`${styles.rowWidth70em} `}>
                <Col lg={4} className="text-start mx-5">
                    <h2>扣分 : </h2>
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em}`}>
                <Col className={`${styles.colContestResultContainer}`}>
                    < ContestResultContainer deductionReason={'Example TestCase'} score={'0'} />
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em}`}>
                <Col className={`${styles.colContestResultContainer}`}>
                    < ContestResultContainer deductionReason={'Format'} score={'10'} />
                </Col>
            </Row>
            <Row className={`${styles.rowWidth70em}`}>
                <Col className={`${styles.colContestResultContainer}`}>
                    < ContestResultContainer deductionReason={'Hidden TestCase'} score={'20'} />
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em}`}>
                <Col lg={9} className="text-end mt-3">
                    <Button variant="primary" onClick={handleBack}>
                        Return
                    </Button>
                </Col>
            </Row>

        </Container>
    );
};

export default ContestResultPage;
