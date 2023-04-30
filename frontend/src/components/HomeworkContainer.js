import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './HomeworkContainer.module.css';
import PropTypes from 'prop-types';

// A reusable homework container component with a title, due date, and navigation button
const HomeworkContainer = ({ homeworkTitle, dueDate }) => {
    return (
        <Container className={styles.homeworkContainer}>
            <Row>
                <Col>
                    <Row className="mt-3">
                        <Col className={`text-start ${styles.homeworkTitle}`}>
                            <header>
                                <h4 className="mx-3">{homeworkTitle}</h4>
                            </header>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-start ">
                            <h4 className="mx-3">Due</h4>
                        </Col>
                        <Col className={`text-end  ${styles.dueDate}`}>
                            <h4 className="mx-3">{dueDate}</h4>
                        </Col>
                    </Row>
                </Col>



                <Col className={`text-center ${styles.colBtnGo} d-flex justify-content-end p-0`}>
                    <Link to="/problem" >
                        <Button className={`btn-go ${styles.btnGo}`} variant="primary">
                            Go
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

// Define propTypes for better maintainability and error checking
HomeworkContainer.propTypes = {
    homeworkTitle: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
};

export default HomeworkContainer;
