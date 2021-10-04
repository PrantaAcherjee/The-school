import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./Services.css"
import { useState, useEffect } from "react";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fourth.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="school-features">
            <h1 id="h-1">Our school features:</h1>
            <div className="">
                <Row xs={1} md={2} className="g-4">
                    {
                        services.map(service => <Col>
                            <Card>
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title className="text-success ">{service.title}</Card.Title>
                                    <Card.Text>
                                        {service.desc}
                                    </Card.Text>
                                </Card.Body>
                                <button className="w-25 mx-auto bg-warning text-white btn">Get Admission</button>
                            </Card>
                        </Col>)
                    }


                </Row>
            </div>
        </div>
    );
};

export default Services;