import React from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

const Update = () => {

    // this is get method 

    const [fromData, setFormData] = useState({})

    useEffect(() => {

        const getBlog = async () => {


        }


    }, [])

    // this is update method 

    const submitBlog = async () => {
        console.log()
    }

    return (
        <Container>
            <Row className='mx-auto'>
                <Col lg={4} md={6} sm={12}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="des" type="text" placeholder="Description" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Update;
