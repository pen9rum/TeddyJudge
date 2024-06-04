import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Container, Row, Col } from 'react-bootstrap';
import './LeaderBoardHomework.css';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import HomeworkContainer from '../Homework/HomeworkContainer';
import ScoreContainer from '../Score/ScoreContainer';
import api from '../../api/api';
import { useLocation, useNavigate } from 'react-router-dom';


const LeaderBoardHomework = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { homeworkTitle } = location.state;
    const {leaderBoardHomeworkData, setLeaderBoardHomeworkData} = useState(null);
    const { id } = useContext(AuthContext);

    useEffect(() =>{
            async function fetchLeaderBoardData(){
                console.log(homeworkTitle);
                const data = await api.getLeaderBoardHomework(homeworkTitle);
                console.log(data);
                // setLeaderBoardHomeworkData(data);                          
            };

            fetchLeaderBoardData();
            // console.log(leaderBoardHomeworkData);

        }, [homeworkTitle]);


    return (
        <Container className="leaderboardhomework-page-container">
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>

        </Container>
    );
};

export default LeaderBoardHomework;
