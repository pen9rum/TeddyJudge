// ProblemPage.js
import React from 'react';
import { Container, Row, Col, Button, FormControl } from 'react-bootstrap';
import './ProblemPage.css'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo';
import { Link } from 'react-router-dom';

const ProblemPage = () => {
    return (
        <Container className="problem-page-container">
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row className="row-70em">
                <Col>
                    <h1>HW</h1>
                </Col>
                <Col>
                    <h1>0/100</h1>
                </Col>
            </Row>
            <Row className="row-70em">
                <Col className="d-flex justify-content-start">
                    <a className="a-pdf" href="https://example.com" target="_blank" rel="noopener noreferrer">
                        HW1 -&gt; PDF
                    </a>
                </Col>
            </Row>
            <Row className="row-70em">
                <Col className='col-submit'>
                    <h4>SUBMIT:</h4>
                </Col>
            </Row>
            <Row className="row-70em">
                <Col>
                    <FormControl className='formControl-code' as="textarea" placeholder="輸入您的程式碼" />
                </Col>
            </Row>
            <Row className="mt-3  row-70em">

                <Col className="d-flex justify-content-end">
                    <Link to="/result">
                        <Button>Submit</Button>
                    </Link>
                </Col>
            </Row>
        </Container >
    );
};

export default ProblemPage;
