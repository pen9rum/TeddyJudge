import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './THomeworkPage.css';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


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


    return (
        <Container className="thomework-page-container">
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>{homeworkTitle}</h2>
                </Col>
                <Col className="section-container">
                    <h2>PDF1</h2>
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>AVG:</h2>
                </Col>
                <Col className="section-container">
                    <h2>{score}</h2>
                </Col>
            </Row>


            <Row>
                <Col className="section-container">
                    <h2>可能太難了!(60↓)</h2>
                </Col>
            </Row>

            <Row>
                <Col className="section-container">
                    <h2>可能稍難喔(60~80)</h2>
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>難度剛剛好(80~100)</h2>
                </Col>
            </Row>


        </Container>
    );
};

export default THomeworkDetail;
