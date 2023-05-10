import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, NavLink } from 'react-bootstrap';
import './AuthPage.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../images/logo.png';
import schoolLogoImage from '../../images/school_logo.jpg'
import Image from 'react-bootstrap/Image';
import { AuthContext } from './AuthContext';

const AuthPage = () => {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const { setIsAuthenticated } = useContext(AuthContext);

    const switchAuthModeHandler = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add your authentication logic here, for example
        // const id = e.target.elements.formBasicId.value;
        // const password = e.target.elements.formBasicPassword.value;

        // const isAuthenticated = await authenticateUser(id, password); // You need to implement this function
        const isAuthenticated = true;
        if (isAuthenticated) {
            setIsAuthenticated(true);
            navigate('/dashboard');
        } else {
            // Handle failed authentication
        }
    }

    return (
        <Container className="auth-container">
            <Row>
                <Col className="logo-container_authpage">
                    <Image src={logoImage} alt="Logo 1" fluid />
                </Col>
                <Col className="x-container">
                    x
                </Col>
                <Col className="logo-container_authpage">
                    <Image src={schoolLogoImage} alt="Logo 2" fluid />
                </Col>
            </Row>
            <Row>
                <Col className="title-container_authpage">
                    <h1>TeddyJudge</h1>
                </Col>
            </Row>
            <Form onSubmit={handleSubmit}>
                {!isSignUp && (
                    <>
                        <Form.Group className="form-group_authpagh" controlId="formBasicId">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="id" placeholder="Enter id" />
                        </Form.Group>

                        <Form.Group className="form-group_authpagh" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </>
                )}
                {isSignUp && (
                    <>
                        <Form.Group className="form-group_authpagh" controlId="formSignUpId">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="id" placeholder="Enter id" />
                        </Form.Group>

                        <Form.Group className="form-group_authpagh" controlId="formSignUpPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="form-group_authpagh" controlId="formSignUpConfirmPassword">
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
