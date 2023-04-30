import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './SettingPage.css'
import Navbar from './Navbar'
import NavbarLogo from './NavbarLogo';



const SettingPage = () => {
    return (
        <Container className="setting-page-container">
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>

            <Row className="row-width-40em">
                <Col className="text-start">
                    <h3>名字 : </h3>
                </Col>
                <Col>
                    <input></input>
                </Col>
            </Row>

            <Row className="row-width-40em">
                <Col className="text-start">
                    <h3>背景顏色 : </h3>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Form.Group controlId="exampleComboBox">
                        <Form.Select className="select-customer">
                            <option value="option1">White</option>
                            <option value="option2">Dark</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="row-width-40em">
                <Col className="text-start">
                    <h3>密碼 : </h3>
                </Col>
                <Col>
                    <input></input>
                </Col>
            </Row>

            <Row className="row-width-40em">
                <Col className="text-start">
                    <h3>更改密碼 : </h3>
                </Col>
                <Col>
                    <input></input>
                </Col>
            </Row>

            <Row className="row-width-40em">
                <Col className="text-start">
                    <h3>確認更改 : </h3>
                </Col>
                <Col>
                    <input></input>
                </Col>
            </Row>

            <Row className="row-width-40em">
                <Col className="d-flex justify-content-end">
                    <Button>
                        RETURN
                    </Button>
                </Col>
            </Row>


        </Container>
    );
};

export default SettingPage;
