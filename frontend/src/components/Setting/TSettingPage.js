import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TSettingPage.module.css';
import { useNavigate } from 'react-router-dom';

const TSettingPage = () => {
    const navigate = useNavigate();
    return (
        <Container className={styles.settingPageContainer}>
            <Row>
                <NavbarLogo />
            </Row>
            <Row className={styles.navigationRow}>
                <Col className={styles.navigationContainer}>
                    <Navbar />
                </Col>
            </Row>

            <Row className={styles.rowWidth40em}>
                <Col className="text-start">
                    <h3>名字 : </h3>
                </Col>
                <Col>
                    <input></input>
                </Col>
            </Row>

            <Row className={styles.rowWidth40em}>
                <Col className="text-start">
                    <h3>背景顏色 : </h3>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Form.Group controlId="exampleComboBox">
                        <Form.Select className={styles.selectCustomer}>
                            <option value="option1">White</option>
                            <option value="option2">Dark</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className={styles.rowWidth40em}>
                <Col className="text-start">
                    <h3>密碼 : </h3>
                </Col>
                <Col>
                    <input></input>
                </Col>
            </Row>

            <Row className={styles.rowWidth40em}>
                <Col className="text-start">
                    <h3>更改密碼 : </h3>
                </Col>
                <Col>
                    <input></input>
                </Col>
            </Row>

            <Row className={styles.rowWidth40em}>
                <Col className="text-start">
                    <h3>確認更改 : </h3>
                </Col>
                <Col>
                    <input></input>
                </Col>
            </Row>

            <Row className={styles.rowWidth40em}>
                <Col className="d-flex justify-content-end">
                    <Button onClick={() => navigate(-1)}>
                        SAVE+RETURN
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default TSettingPage;
