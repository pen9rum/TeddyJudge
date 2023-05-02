import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './ContestListContainer.module.css';


const ContestListContainer = ({ contestTitle, result, score, scoreTotal, isAnsOrNot }) => {
    return (
        <Container className={styles.contestListContainer}>
            <Row>
                <Col className={`text-start mx-3 align-self-center`}>
                    <header>
                        <h4 className="">{contestTitle}</h4>
                    </header>
                </Col>
                <Col className={`text-end  align-self-center`}>
                    <h4 className="">{result}</h4>
                </Col>

                <Col className={`text-end  align-self-center`}>
                    <h4 className=""> <span className={styles.scoreText}> {score} </span> / {scoreTotal}</h4>
                </Col>


                {isAnsOrNot ? (
                    <Col className={`text-center ${styles.colBtnAns} d-flex justify-content-end p-0`}>
                        <Link to="/problem" >
                            <Button className={`btn-go ${styles.btnAns}`} variant="primary">
                                Ans
                            </Button>
                        </Link>
                    </Col>
                ) : (<Col className={`text-center ${styles.colBtnAns} d-flex justify-content-end p-0`}>
                    <Link to="/contestReview" >
                        <Button className={`btn-go ${styles.btnReview}`} variant="primary">
                            Review
                        </Button>
                    </Link>
                </Col>)
                }
            </Row>
        </Container>
    );
};



export default ContestListContainer;
