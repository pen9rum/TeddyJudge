import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HomeworkPage.css';
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo';
import HomeworkContainer from './HomeworkContainer';
import ScoreContainer from './ScoreContainer';

const HomeworkPage = () => {
    return (
        <Container className="homework-page-container">
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
                    <h2>當週作業</h2>
                    <div className="section-content">
                        <div className="homework-wrapper">
                            <HomeworkContainer homeworkTitle="HW 2" dueDate="12/31/2023" />
                        </div>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col className="section-container">
                    <h2>需補作業</h2>
                    <div className="section-content">
                        <div className="homework-wrapper">
                            <HomeworkContainer homeworkTitle="HW 2" dueDate="12/31/2023" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>成績查看</h2>

                    <div className="section-content">
                        <div className='score-wrapper'>
                            <ScoreContainer homeworkTitle="HW 2" score="90" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeworkPage;
