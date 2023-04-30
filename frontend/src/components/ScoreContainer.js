import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ScoreContainer.css';

const ScoreContainer = ({ homeworkTitle, score }) => {
    const handleClick = () => {
        alert('Go Button clicked!');
    };

    return (
        <Container className="score-container">
            <Row>
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

                <Col className="text-center col-btn-go">
                    <Button className="btn-detail" variant="primary" onClick={handleClick}>
                        Detail
                    </Button>
                </Col>

                <Col className="text-center col-btn-go">
                    <Button className="btn-submit" variant="primary" onClick={handleClick}>
                        Submit
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ScoreContainer;
