import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    const [formData, setFormData] = useState({ name: "", des: "" })
    const [getData, setGetData] = useState([])

    // this is post method 

    const handleChange = async (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        })
    }

    const handleSubmit = async (e) => {
        // e.preventDefault()
        try {

            const response = await axios.post("http://localhost:4000/blog/postblog", formData)
            console.log(response)

        } catch {

        }
    }


    // this is get method 

    const getBlog = async () => {

        try {

            const { data } = await axios.get("http://localhost:4000/blog/getblog")
            setGetData(data)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {

        getBlog()

    }, [])

    // this is delete method 

    const deleteBlog = async (id) => {
        try {

            const { data } = await axios.delete("http://localhost:4000/blog/deleteblog/"+id)
            console.log(data)
            window.location.reload();

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Row>
                <Col lg={4} md={6} sm={12} className="my-5">

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Name" onChange={handleChange} value={formData.name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="des" type="text" placeholder="Description" onChange={handleChange} value={formData.des} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col lg={8} md={6} sm={12} className="my-5">
                    {getData.data && getData.data.map((item) => (
                        <Row className="border my-3" key={item.id}>
                            <Col lg={4} md={6}>
                                <h5>Id : {item.id}</h5>
                            </Col>
                            <Col lg={4} md={6}>
                                <p>Name : {item.name}</p>
                            </Col>
                            <Col lg={4} md={6}>
                                <p>Description : {item.des}</p>
                                <Button variant="danger" type="submit" onClick={() => deleteBlog(item.id)} className="me-2">
                                    Delete
                                </Button>
                                <Link to={`/updateblog/${item.id}`}>
                                    <Button variant="success" type="submit">
                                        Update
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    ))
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
