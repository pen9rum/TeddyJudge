// THomeworkPage.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './THomeworkPage.module.css';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import THomeworkContainer from '../Homework/THomeworkContainer';
import axios from 'axios';

const THomeworkPage = () => {
    const navigate = useNavigate();
    const [homeworkData, setHomeworkData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/homework')
            .then(response => {
                setHomeworkData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

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
                <Col className={`${styles.sectionContainer} text-center  d-flex justify-content-center align-items-center p-0`}>
                    <Button
                        className={`${styles.btnDetail}`}
                        variant="primary"
                        onClick={() => navigate('input')}
                    >
                        Go
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className={styles.sectionContainer}>
                    <h2>查看作業狀態</h2>
                    <div className={styles.sectionContent}>
                        {homeworkData.map((hw) => (
                            <div key={hw.id} className={styles.homeworkWrapper}>
                                <THomeworkContainer homeworkTitle={hw.title} dueDate={hw.dueDate} />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default THomeworkPage;
