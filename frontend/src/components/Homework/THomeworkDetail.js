// THomeworkDetail.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './THomeworkDetail.module.css';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import api from '../../api/api';

const THomeworkDetail = () => {
    const [score, setScore] = useState(null);
    const location = useLocation();
    const homeworkTitle = location.state.homeworkTitle ? location.state.homeworkTitle : "Default";

    useEffect(() => {
        axios.get(`http://localhost:8080/api/score/${homeworkTitle}`)
            .then(response => {
                setScore(response.data.score);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, [homeworkTitle]); // Only re-run the effect if homeworkTitle changes

    async function downloadPDF(hwTitle) {
        try {
            const response = await api.get(`/homework/${hwTitle}/pdf`, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${hwTitle}.pdf`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error("Download failed:", error);
        }
    }





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
                    <h2>{homeworkTitle}</h2>
                </Col>
                <Col className={styles.sectionContainer}>
                    <h2><Button onClick={() => downloadPDF(homeworkTitle)}>PDF Download</Button></h2>
                </Col>
            </Row>
            <Row>
                <Col className={styles.sectionContainer}>
                    <h2>AVG:</h2>
                </Col>
                <Col className={styles.sectionContainer}>
                    <h2>{score}</h2>
                </Col>
            </Row>
            <Row>
                <Col className={styles.sectionContainer}>
                    <h2>可能太難了!(60↓)</h2>
                </Col>
            </Row>
            <Row>
                <Col className={styles.sectionContainer}>
                    <h2>可能稍難喔(60~80)</h2>
                </Col>
            </Row>
            <Row>
                <Col className={styles.sectionContainer}>
                    <h2>難度剛剛好(80~100)</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default THomeworkDetail;
