import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './ContestListPage.module.css';
import ContestListContainer from './ContestListContainer';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import api from '../../api/api';

const ContestListPage = () => {
    const { param } = useParams();
    var isGoOrReview = param;
    const location = useLocation();
    const contestTitle = location.state?.contestTitle;
    console.log(contestTitle);

    const navigate = useNavigate();
    const [data, setData] = useState([
        { id: 1, title: "Sample title 1" },
        { id: 2, title: "Sample title 2" },
        { id: 3, title: "Sample title 3" }
    ]);

    const handleBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchData = async () => {
            let contestData = await api.getContestByName(contestTitle);
            if (contestData && contestData.homeworks) {
                const homeworkNames = contestData.homeworks.map(homework => homework.homeworkName);
                contestData = { ...contestData, homeworkNames };
            }
            setData(contestData);
            console.log(contestData);
        };

        fetchData();
    }, [contestTitle]);

    return (
        <Container className={`${styles.contestListPage}`}>
            <Row >
                <NavbarLogo />
            </Row>
            <Row className={`${styles.navigationRow} `} >
                <Col className={styles.navigationContainer}>
                    <Navbar />
                </Col>
            </Row>
            <Row className={`${styles.rowWidth70em} mt-2 mb-3`}>
                <Col lg={4} className="text-center">
                    <h2>Contest 3</h2>
                </Col>
                <Col>
                    <h2>
                        <span className={`${styles.textRed}`}>285</span>/400
                    </h2>
                </Col>
            </Row>

            {data.homeworkNames && isGoOrReview === 'Go' ? (
                <Row className={`${styles.rowWidth70em}`}>
                    <Col className={`mb-5`}>
                        {data.homeworkNames.map((homework, index) => (
                            <ContestListContainer
                                key={index}
                                contestTitle={homework}
                                score={"0"} // update these as necessary with your real data
                                scoreTotal={"100"} // update these as necessary with your real data
                                isAnsOrNot={true} // update these as necessary with your real data
                            />
                        ))}
                    </Col>
                </Row>
            )
                : (<Row className={`${styles.rowWidth70em}`}>
                    <Col >
                        < ContestListContainer contestTitle={"123"} result={"RE"} score={"70"} scoreTotal={"100"} isAnsOrNot={false} />
                        < ContestListContainer contestTitle={"Paper"} score={"50"} scoreTotal={"100"} isAnsOrNot={false} />
                        < ContestListContainer contestTitle={"Run"} score={"100"} scoreTotal={"100"} isAnsOrNot={false} />
                        < ContestListContainer contestTitle={"Monster"} score={"65"} scoreTotal={"100"} isAnsOrNot={false} />
                    </Col>
                </Row>)

            }

            <Row className={`${styles.rowWidth70em}`}>
                <Col lg={9} className="text-end mt-3">
                    <Button variant="primary" onClick={handleBack}>
                        Return
                    </Button>
                </Col>
            </Row>


        </Container >
    );
};

export default ContestListPage;
