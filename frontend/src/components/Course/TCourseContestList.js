import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './TCourseContestList.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import TCourseListContainer from './TCourseListContainer';
import axios from 'axios';
import api from '../../api/api';

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
        const fetchData = async () => {
            let contestData = await api.getContestByName(contestTitle);
            if (contestData && contestData.homeworks) {
                const homeworkNames = contestData.homeworks.map(homework => homework.homeworkName);
                contestData = { ...contestData, homeworkNames };
            }
            setData(contestData);
        };

        fetchData();
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
                    {data.homeworkNames && data.homeworkNames.map((homeworkName, index) => (
                        <TCourseListContainer key={index} fileTitle={homeworkName} nextRouter={"/tcourse/modify"} />
                    ))}
                </Col>
            </Row>

        </Container >
    );
};

export default TCourseContestList;
