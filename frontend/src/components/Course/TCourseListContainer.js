import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './TCourseListContainer.module.css';



const TCourseListContainer = ({ fileTitle }) => {
    return (
        <Container className={styles.downloadFileContainer}>
            <Row>

                <Col className={`text-start`}>
                    <h4 className="mx-3 mt-4">{fileTitle}</h4>
                </Col>


                <Col className={`text-center ${styles.colBtnGo} d-flex justify-content-end p-0`}>
                    <Button className={`btn-go ${styles.btnGo}`} variant="primary">
                        Go
                    </Button>

                </Col>
            </Row >
        </Container >
    );
};


export default TCourseListContainer;
