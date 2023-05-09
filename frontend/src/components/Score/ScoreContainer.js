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
                        <Col className="text-start mt-3">
                            <h4 className="mx-3">{homeworkTitle}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center  due-date">
                            <h4><span className="red-90">{score}</span>/100</h4>
                        </Col>
                    </Row>

                </Col>



                <Col className=" text-center col-btn-detail d-flex justify-content-end  p-0 ">
                    <Link to="/result">
                        <Button className="btn-detail" variant="primary" >
                            Detail
                        </Button>
                    </Link>

                </Col>

                <Col className="text-center col-btn-detail d-flex justify-content-end p-0 ">
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
