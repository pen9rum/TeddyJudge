import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import NavbarLogo from './NavbarLogo';
import HomeworkContainer from './HomeworkContainer';
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
                    <h2>Hi, {userName} 你回來了</h2>
                </Col>
            </Row>
            <Row>

                <Col className="section-container">
                    <h2>你還沒完成的作業</h2>
                </Col>
                <div className="section-content">
                    <div className="mt-3 mb-3">
                        <HomeworkContainer homeworkTitle="HW 2" dueDate="12/31/2023" />
                    </div>
                </div>
            </Row>


        </Container>
    );
};

export default Dashboard;
