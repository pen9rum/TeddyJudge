import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './THomeworkPage.css';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import THomeworkContainer from '../Homework/THomeworkContainer';
import axios from 'axios';

const THomeworkPage = () => {

    const [homeworkData, setHomeworkData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/homework')
            .then(response => {
                setHomeworkData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <Container className="thomework-page-container">
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>上傳新作業</h2>

                </Col>
            </Row>
            <Row >
                <Col className="section-container text-center  d-flex justify-content-center align-items-center p-0">
                    <Button className="btn-detail" variant="primary">Go</Button>
                </Col>
            </Row>
            <Row>
                <Col className="section-container">
                    <h2>查看作業狀態</h2>
                    <div className="section-content">
                        {homeworkData.map((hw) => (
                            <div key={hw.id} className="homework-wrapper">
                                <THomeworkContainer homeworkTitle={hw.title} dueDate={hw.dueDate} />
                            </div>
                        ))}
                    </div>

                </Col>
            </Row>

        </Container>
    );
};

export default THomeworkPage;
