import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import HomeworkContainer from '../Homework/HomeworkContainer';
import './Dashboard.css';
import api from '../../api/api';


const Dashboard = () => {
    const { id } = useContext(AuthContext);
    const [studentName, setStudentName] = useState('');

    useEffect(() => {
        const fetchStudentName = async () => {
            const name = await api.getStudentNameById(id);
            setStudentName(name);
            console.log(name);
            console.log(id);
        };
        fetchStudentName();
    }, [id]);

    return (
        <Container className="dashboard-container">
            <Row>
                <NavbarLogo />
            </Row>
            <Row className="navigation-row">
                <Col className="navigation-container">
                    <Navbar />
                </Col>
            </Row>
            <Row>
                <Col className="welcome-container">
                    <h2>Hi, {studentName} 你回來了</h2>
                </Col>
            </Row>
            <Row>

                <Col className="section-container">
                    <h2>你還沒完成的作業</h2>
                </Col>
                <div className="section-content">
                    <div className="mt-3 mb-3">
                        <HomeworkContainer homeworkTitle="HW 2" dueDate="12/31/2023" />
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Dashboard;
