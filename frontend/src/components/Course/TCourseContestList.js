import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TCourseContestList.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import TCourseListContainer from './TCourseListContainer';
import axios from 'axios';

const TCourseContestList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const contestTitle = location.state?.fileTitle;
    const [data, setData] = useState([
        { id: 1, title: "Sample title 1" },
        { id: 2, title: "Sample title 2" },
        { id: 3, title: "Sample title 3" }
    ]);

    useEffect(() => {
        axios.get(`YOUR_API_URL/${contestTitle}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [contestTitle]);

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
                <Col className={` ${styles.sectionContainer} d-flex justify-content-start align-items-start`}>
                    <h2>{contestTitle}</h2>
                </Col>
            </Row>

            <Row>
                <Col className={styles.sectionContainer}>
                    {data.map(item => (
                        <TCourseListContainer key={item.id} fileTitle={item.title} nextRouter={"/tcourse/modify"} />
                    ))}
                </Col>
            </Row>
        </Container >
    );
};

export default TCourseContestList;
