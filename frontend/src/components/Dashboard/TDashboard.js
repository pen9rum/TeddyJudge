import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import './TDashboard.css';



const TDashboard = () => {
    const navigate = useNavigate();
    const teacherName = '泰迪熊';

    return (
        <Container className="tdashboard-container">
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
                    <h2>Hi, {teacherName}老師 您回來了</h2>
                </Col>
            </Row>
            <Row>

                <Col className="section-container">
                    <h2>想做甚麼呢?</h2>
                </Col>


            </Row>

            <Row>
                <Col>
                    <Button onClick={() => navigate("/thomework")}>HW</Button>
                </Col>
                <Col>
                    <Button onClick={() => navigate("/tcontest")}>Contest</Button>
                </Col>
                <Col>
                    <Button onClick={() => navigate("/tcourse")}>Course</Button>
                </Col>
            </Row>

        </Container>
    );
};

export default TDashboard;
