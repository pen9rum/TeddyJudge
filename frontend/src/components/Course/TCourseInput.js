import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TCourseInput.module.css';
import { useNavigate } from 'react-router-dom';


const TCourseInput = () => {
    const navigate = useNavigate();
    const inputFileRef = useRef(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
        // You can now use this file object for further processing, e.g., upload it to a server.
    };

    const handleClick = () => {
        inputFileRef.current.click();
    }

    return (
        <Container className={styles.courseContainer}>
            <Row >
                <NavbarLogo />
            </Row>
            <Row className={`${styles.navigationRow} `} >
                <Col className={styles.navigationContainer}>
                    <Navbar />
                </Col>
            </Row>

            <Row>
                <Form className={styles.sectionContainer}>
                    <Form.Group className="mb-3" controlId="formLectureName" as={Row}>
                        <Form.Label column sm={7}>
                            講義名稱
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control type="text" placeholder="輸入講義名稱" />
                        </Col>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPDFUpload" as={Row}>
                        <Form.Label column sm={7}>
                            PDF匯入處
                        </Form.Label>
                        <Col sm={3}>
                            <input type="file" ref={inputFileRef} accept=".pdf" onChange={handleFileUpload} hidden />
                            <Button variant="primary" type="button" onClick={handleClick}>
                                Upload
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Row>

            <Row  >
                <Col className={`${styles.sectionContainer} d-flex justify-content-end align-items-end`}>
                    <Button variant="primary" onClick={() => navigate('/tcourse')}>
                        完成
                    </Button>
                </Col>
            </Row>


        </Container >
    );
};

export default TCourseInput;
