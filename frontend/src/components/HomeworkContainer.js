import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeworkContainer.css';

const HomeworkContainer = ({ homeworkTitle, dueDate }) => {


    return (
        <Container className="homework-container">
            <Row>
                <Col>
                    <Row>
                        <Col className="text-center py-2">
                            <h4>{homeworkTitle}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center py-2">
                            <h4>Due</h4>
                        </Col>
                    </Row>
                </Col>

                <Col className="text-center py-2 due-date">
                    <h4>{dueDate}</h4>
                </Col>

                <Col className="text-center col-btn-go d-flex justify-content-end ">
                    <Link to="/problem">
                        <Button className="btn-go " variant="primary" >
                            Go
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeworkContainer;
