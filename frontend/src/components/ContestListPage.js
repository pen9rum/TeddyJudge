import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import NavbarLogo from './NavbarLogo';
import styles from './ContestListPage.module.css';
import ContestListContainer from './ContestListContainer';
import { useParams } from 'react-router-dom';


const ContestListPage = () => {
    const { param } = useParams();
    var isGoOrReview = param;

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
            <Row className={`${styles.rowWidth70em} `}>
                <Col lg={4} className="text-center">
                    <h2>Contest 3</h2>
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
                    <Col className={`mb-5`}>
                        < ContestListContainer contestTitle={"123"} result={"RE"} score={"0"} scoreTotal={"100"} isAnsOrNot={false} />
                        < ContestListContainer contestTitle={"Paper"} score={"0"} scoreTotal={"100"} isAnsOrNot={false} />
                        < ContestListContainer contestTitle={"Run"} score={"0"} scoreTotal={"100"} isAnsOrNot={false} />
                        < ContestListContainer contestTitle={"Monster"} score={"0"} scoreTotal={"100"} isAnsOrNot={false} />
                    </Col>
                </Row>)

            }


        </Container >
    );
};

export default ContestListPage;
