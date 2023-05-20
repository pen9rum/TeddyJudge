import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './THomeworkPage.css';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import HomeworkContainer from '../Homework/HomeworkContainer';
import ScoreContainer from '../Score/ScoreContainer';

const THomeworkPage = () => {
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
                    <h2>上傳新作業</h2>

                </Col>
            </Row>
            <Row >
                <Col className="section-container text-center  d-flex justify-content-center align-items-center p-0">
                    <Button className="btn-detail" variant="primary">Go</Button>
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>查看作業狀態</h2>
                    <div className="section-content">
                        <div className="homework-wrapper">
                            <HomeworkContainer homeworkTitle="HW 2" dueDate="12/31/2023" />
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default THomeworkPage;
