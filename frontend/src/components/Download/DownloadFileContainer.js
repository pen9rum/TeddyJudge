import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './DownloadFileContainer.module.css';



const DownloadFileContainer = ({ fileTitle, fileSize }) => {
    return (
        <Container className={styles.downloadFileContainer}>
            <Row>
                <Col lg={10}>
                    <Row className="mt-3">
                        <Col className={`text-start`}>
                            <header>
                                <h4 className="mx-3">{fileTitle}</h4>
                            </header>
                        </Col>
                    </Row>
                    <Row >
                        <Col className={`text-end`}>
                            <h4 className="mx-3">{fileSize}</h4>
                        </Col>
                    </Row>
                </Col>

                <Col className={`text-center ${styles.colBtnGo} d-flex justify-content-end p-0`}>
                    <Button className={`btn-go ${styles.btnGo}`} variant="primary">
                        Download
                    </Button>

                </Col>
            </Row >
        </Container >
    );
};




export default DownloadFileContainer;
