import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './ContestPage.module.css';
import ContestContainer from './ContestContainer';
import api from '../../api/api';

const ContestPage = () => {

    const [contests, setContests] = useState([]);

    useEffect(() => {
        const fetchContests = async () => {
            const contestData = await api.getContestData();
            setContests(contestData);
        }

        fetchContests();
    }, []); // empty array as dependency so this only runs on mount


    // Separate contests into upcoming and past based on the current date
    const currentDate = new Date().toISOString(); // current date in same format as your API
    const upcomingContests = contests.filter(contest => contest.startTime > currentDate);
    const curContests = contests.filter(contest => (contest.startTime < currentDate) && (contest.endTime > currentDate));
    const pastContests = contests.filter(contest => contest.endTime < currentDate);
    console.log(upcomingContests);
    console.log(pastContests);

    return (
        <Container className={styles.contestContainer}>
            <Row >
                <NavbarLogo />
            </Row>
            <Row className={`${styles.navigationRow} `} >
                <Col className={styles.navigationContainer}>
                    <Navbar />
                </Col>
            </Row>
            <Row className={`${styles.rowWidth70em} `}>
                <Col lg={4} className="text-center">
                    <h2>下次Contest</h2>
                </Col>
            </Row>

            <Row className={`${styles.rowWidth70em} `}>
                {upcomingContests.map(contest => (
                    <Col>
                        <ContestContainer
                            contestTitle={contest.contestname}
                            status={false}
                            dueDate={new Date(contest.startTime).toLocaleDateString()}
                            btnStatus={true}
                        />
                    </Col>

                ))}
            </Row>

            <Row className={`${styles.rowWidth70em} mt-5`}>
                <Col lg={4} className="text-center">
                    <h2>進行中的Contest</h2>
                </Col>
            </Row>


            {curContests.map(contest => (
                <Row className={`${styles.rowWidth70em} `}>

                    <Col>
                        <ContestContainer
                            contestTitle={contest.contestname}
                            status={false}
                            // dueDate={new Date(contest.endTime).toLocaleDateString()}
                            btnStatus={true}
                        />
                    </Col>
                </Row>
            ))}

            <Row className={`${styles.rowWidth70em} mt-5`}>
                <Col lg={4} className="text-center mx-4">
                    <h2>先前的Contest</h2>
                </Col>
            </Row>

            {pastContests.map(contest => (
                <Row className={`${styles.rowWidth70em}`}>

                    <Col>
                        <ContestContainer
                            contestTitle={contest.contestname}
                            status={true}
                            score={contest.totalscore}
                            btnStatus={false}
                        />
                    </Col>
                </Row>
            ))}


        </Container>
    );
};

export default ContestPage;
