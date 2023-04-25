import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container className="homepage-container">
            <Row>
                <Col className="logo-container">
                    <span>Logo</span>
                </Col>
            </Row>
            <Row>
                <Col className="title-container">
                    <h1>TeddyJudge</h1>
                </Col>
            </Row>
            <Row>
                <Col className="button-container">
                    <Button variant="primary" className="role-button">老師</Button>
                    <Link to="/auth">
                        <Button variant="secondary" className="role-button">學生</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
