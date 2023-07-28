import React from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ name: "", des: "" })
    const [getData, setGetData] = useState({})

    // this is get method 

    useEffect(() => {
        getBlog()
    }, [])

    // Update formData state when getData changes
    useEffect(() => {
        setFormData(getData);
    }, [getData]);

    const getBlog = async () => {
        try {
            await axios.get(`http://localhost:4000/blog/getblogbyid/${id}`)
                .then((response) => {
                    const { data } = response
                    setGetData(data)
                })

        } catch (err) {
            console.log(err)
        }
    }

    // this is update method 

    const handleChange = async (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const submitBlog = async (e) => {
        e.preventDefault()
        try {

            await axios.put(`http://localhost:4000/blog/updateblog/${id}`, formData)
                .then((res) => {
                    console.log(res)
                    navigate("/")
                })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Row>
                <Col lg={6} md={8} sm={12} className='mx-auto'>
                    <h3>Id: {id}</h3>
                    <p> <b>Name</b>: {getData.name}</p>
                    <p> <b>Description</b>: {getData.des}</p>
                    <Form onSubmit={submitBlog}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="name" type="text" placeholder="Name" onChange={handleChange} value={formData.name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control name="des" type="text" placeholder="Description" onChange={handleChange} value={formData.des} />
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
