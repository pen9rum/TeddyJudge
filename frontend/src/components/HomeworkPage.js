import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HomeworkPage.css';
import Navbar from './Navbar'

const HomeworkPage = () => {
    return (
        <Container className="homework-page-container">
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>當週作業</h2>
                    <div className="section-content"></div>
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>需補作業</h2>
                    <div className="section-content"></div>
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>成績查看</h2>
                    <div className="section-content"></div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeworkPage;
