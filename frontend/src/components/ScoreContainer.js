import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ScoreContainer.css';
import { Link } from 'react-router-dom';

const ScoreContainer = ({ homeworkTitle, score }) => {


    return (
        <Container className="score-container">
            <Row className="row-score">
                <Col>
                    <Row>
                        <Col className="text-center py-2">
                            <h4>{homeworkTitle}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center py-2">

                        </Col>
                    </Row>
                </Col>

                <Col className="text-center py-2 due-date">
                    <h4>{score}/100</h4>
                </Col>

                <Col className=" text-center col-btn-detail mt-1 mb-1 d-flex justify-content-end  ">
                    <Link to="/result">
                        <Button className="btn-detail" variant="primary" >
                            Detail
                        </Button>
                    </Link>

                </Col>

                <Col className="text-center col-btn-detail mt-1 mb-1 d-flex justify-content-end">
                    <Link to="/problem">
                        <Button className="btn-submit" variant="primary" >
                            Submit
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default ScoreContainer;
