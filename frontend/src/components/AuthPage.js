import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, NavLink } from 'react-bootstrap';
import './AuthPage.css';
import { Link } from 'react-router-dom';

const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const switchAuthModeHandler = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <Container className="auth-container">
            <Row>
                <Col className="logo-container">
                    <span>Logo</span>
                </Col>
            </Row>
            <Row>
                <Col className="title-container">
                    <h1>TeddyJudge</h1>
                </Col>
            </Row>
            <Form>
                {!isSignUp && (
                    <>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Link to="/dashboard">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Link>
                    </>
                )}
                {isSignUp && (
                    <>
                        <Form.Group controlId="formSignUpEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formSignUpPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formSignUpConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </>
                )}
                <Row className="auth-switch">
                    <Col>
                        {isSignUp ? (
                            <NavLink onClick={switchAuthModeHandler}>
                                Already have an account? Log in here
                            </NavLink>
                        ) : (
                            <NavLink onClick={switchAuthModeHandler}>
                                Don't have an account? Sign up here
                            </NavLink>
                        )}
                    </Col>

                </Row>
            </Form>
        </Container>
    );
};

export default AuthPage;
