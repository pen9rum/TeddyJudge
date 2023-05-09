import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import NavbarLogo from '../Navbar/NavbarLogo';
import styles from './ContestListPage.module.css';
import ContestListContainer from './ContestListContainer';
import { useParams, useNavigate } from 'react-router-dom';


const ContestListPage = () => {
    const { param } = useParams();
    var isGoOrReview = param;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

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

            {isGoOrReview === 'Go' ? (
                <Row className={`${styles.rowWidth70em}`}>
                    <Col className={`mb-5`}>
                        < ContestListContainer contestTitle={"123"} result={"RE"} score={"0"} scoreTotal={"100"} isAnsOrNot={true} />
                        < ContestListContainer contestTitle={"Paper"} score={"0"} scoreTotal={"100"} isAnsOrNot={true} />
                        < ContestListContainer contestTitle={"Run"} score={"0"} scoreTotal={"100"} isAnsOrNot={true} />
                        < ContestListContainer contestTitle={"Monster"} score={"0"} scoreTotal={"100"} isAnsOrNot={true} />
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
