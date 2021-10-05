import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useState, useEffect } from "react";
const ServicesTwo = () => {
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch('./nine.json')
            .then(res => res.json())
            .then(data => setDisplay(data));
    }, [])
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="bg-secondary">
                <h2 className="text-warning">Our sepecial services:</h2>
                <div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            display.map(dp => <Col
                                key={dp.key}>
                                <Card>
                                    <Card.Img variant="top" src={dp.img} />
                                    <Card.Body>
                                        <Card.Title className="text-primary">{dp.title}</Card.Title>
                                        <Card.Text>
                                            Thanks for stay with us.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted d-flex align-items-center justify-content-between">
                                            <div>
                                                <h4 className="text-info">Follow us in social media </h4>
                                            </div>
                                            <div>

                                                <i class="fab fa-instagram-square text-danger"></i>
                                                <i class="fab fa-twitter-square text-info"></i>
                                                <i class="fab fa-pinterest text-danger"></i>
                                            </div>
                                        </small>
                                    </Card.Footer>
                                </Card>


                            </Col>)
                        }
                    </Row>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ServicesTwo;