import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ContestContainer.module.css';
import { Link } from 'react-router-dom';

const ContestContainer = ({ contestTitle, status, score, dueDate, buttonTitle }) => {


    return (
        <Container className="score-container">
            <Row className="row-score">
                <Col>
                    <Row>
                        <Col className="text-start mt-3">
                            <h4 className="mx-3">{contestTitle}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center  due-date">
                            {status ? (
                                <h4><span className="red-90">{score}</span>/400</h4>
                            ) : (
                                <h4> {dueDate}</h4>
                            )}
                        </Col>
                    </Row>

                </Col>



                <Col className=" text-center col-btn-detail d-flex justify-content-end  p-0 ">
                    <Link to="/result">
                        <Button className="btn-detail" variant="primary" >
                            {buttonTitle}
                        </Button>
                    </Link>

                </Col>




            </Row>
        </Container>
    );
};

export default ContestContainer;
