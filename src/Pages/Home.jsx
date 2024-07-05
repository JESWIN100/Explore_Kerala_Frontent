import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Home.css'; // Assuming you have custom CSS for Home component
import DUMMY_DATA from '../json/data'; // Assuming DUMMY_DATA is correctly imported
import { Link } from 'react-router-dom';

function Home() {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(DUMMY_DATA.DUMMY_DATA);
    }, []);

    return (
        <Container>
            <Row>
                <Col className="main-head text-center m-5">
                    <h1 className="explore-kerala">Explore Kerala</h1>
                </Col>
            </Row>

            <Row xs={1} md={2} lg={3} className="g-4">
                {list.map((row) => (
                    <Col key={row.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={row.imageUrl} />
                            <Card.Body>
                                <Card.Title>{row.title}</Card.Title>
                                <Card.Text>{row.text}</Card.Text>
                                <Button variant="primary" as={Link} to={`/detailspage/${row.id}`}>Know More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;
