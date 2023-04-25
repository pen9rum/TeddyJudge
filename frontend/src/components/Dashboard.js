import React from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Navbar from './Navbar';
import './Dashboard.css';

const Dashboard = () => {
    const userName = '泰迪熊';


    return (
        <Container className="dashboard-container">
            <Row>
                <Col className="logo-container">
                    <span>Logo</span>
                </Col>
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col className="welcome-container">
                    <h2>Hi, {userName}</h2>
                </Col>
            </Row>
            <Row>
                <Col className="question-container">
                    <Button variant="outline-secondary" className="question-button">
                        Question1
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className="due-container">
                    <span>Due: 2023-05-01</span>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
