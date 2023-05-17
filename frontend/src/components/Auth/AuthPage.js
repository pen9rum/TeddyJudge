import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, Button, NavLink } from 'react-bootstrap';
import './AuthPage.css';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../images/logo.png';
import schoolLogoImage from '../../images/school_logo.jpg'
import Image from 'react-bootstrap/Image';
import { AuthContext } from './AuthContext';
import { RoleContext } from './RoleContext';

const AuthPage = () => {
    const { role } = useContext(RoleContext);
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const { setIsAuthenticated } = useContext(AuthContext);

    const switchAuthModeHandler = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // let id, password;
        // if (role === 'student') {
        //     id = e.target.elements.formBasicId.value;
        //     password = e.target.elements.formBasicPassword.value;
        //     // ... 學生身份驗證邏輯 ...
        // } else if (role === 'teacher') {
        //     id = e.target.elements.formTeacherId.value;
        //     password = e.target.elements.formTeacherPassword.value;
        //     // ... 老師身份驗證邏輯 ...
        // }

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
                {role === 'student' && !isSignUp && (
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
                {role === 'student' && isSignUp && (
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
                {role === 'teacher' && (
                    <>
                        <Form.Group className="form-group_authpagh" controlId="formTeacherId">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="id" placeholder="Enter id" />
                        </Form.Group>

                        <Form.Group className="form-group_authpagh" controlId="formTeacherPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </>
                )}
                {role === 'student' && (
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
                )}



            </Form>
        </Container>
    );
};

export default AuthPage;
