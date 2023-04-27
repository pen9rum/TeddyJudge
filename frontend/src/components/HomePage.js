import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './HomePage.css';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';
import schoolLogoImage from '../images/school_logo.jpg'

const HomePage = () => {
    return (
        <Container className="homepage-container">
            <Row>
                <Col className="logo-container_home">
                    <Image src={logoImage} alt="Logo 1" fluid />
                </Col>
                <Col className="x-container">
                    x
                </Col>
                <Col className="logo-container_home">
                    <Image src={schoolLogoImage} alt="Logo 2" fluid />
                </Col>
            </Row>
            <Row>
                <Col className="title-container_home">
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
