import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomeworkContainer.css';

const HomeworkContainer = ({ homeworkTitle, dueDate }) => {
    const handleClick = () => {
        alert('Go Button clicked!');
    };

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

                <Col className="text-center col-btn-go">
                    <Button className="btn-go" variant="primary" onClick={handleClick}>
                        Go
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeworkContainer;
