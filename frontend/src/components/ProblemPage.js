// ProblemPage.js
import React from 'react';
import { Container, Row, Col, ListGroup, Button, FormControl } from 'react-bootstrap';
import './ProblemPage.css'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo';


const ProblemPage = () => {
    return (
        <Container>
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>HW</h1>
                </Col>
                <Col>
                    <h1>0/100</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-start">
                    <a className="a-pdf" href="https://example.com" target="_blank" rel="noopener noreferrer">
                        HW1 -&gt; PDF
                    </a>
                </Col>
            </Row>
            <Row>
                <Col className='col-submit'>
                    <h4>SUBMIT:</h4>
                </Col>
            </Row>
            <Row >
                <Col>
                    <FormControl className='formControl-code' as="textarea" placeholder="輸入您的程式碼" />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="d-flex justify-content-end">
                    <Button>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProblemPage;
