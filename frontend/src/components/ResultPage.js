// ProblemPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ResultPage.css'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo';



const ResultPage = () => {
    return (
        <Container className="result-page-container">
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row className="row-width-70em">
                <Col className="d-flex justify-content-center">
                    <h1>HW1-Math Operation</h1>
                </Col>
                <Col className="d-flex justify-content-center">
                    <h1> <span className="red-90">90</span>/100</h1>
                </Col>
            </Row>
            <Row className="row-width-70em">
                <Col className="d-flex justify-content-start">
                    <h3>
                        扣分原因:
                    </h3>
                </Col>
            </Row>
            <Row className="row-width-70em">
                <Col className="label-deduct-points text-start">
                    <label htmlFor="exampleInput">
                        <ul className="mt-3">
                            <li>測資10 Time Limit</li>
                        </ul>
                    </label>
                </Col>
            </Row>

        </Container>
    );
};

export default ResultPage;
