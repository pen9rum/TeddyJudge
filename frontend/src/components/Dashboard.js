import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import NavbarLogo from './NavbarLogo';
import './Dashboard.css';


const Dashboard = () => {
    const userName = '泰迪熊';


    return (
        <Container className="dashboard-container">
            <Row>
                <NavbarLogo />
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
