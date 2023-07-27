import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import axios from "axios";

function App() {

  // this is get method 

  const [ fromData, setFormData ] = useState({})

  useEffect(()=>{

    const getBlog = async () =>{

      
    }


  },[])

  // this is post method 

  const submitBlog = async () =>{
    console.log()
  }

  // this is delete method 

  const deleteBlog = async () =>{

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="my-5 text-center">Post a Post</h1>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12} className="my-5">

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
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={8} md={6} sm={12} className="my-5">
              up comming post 
            </Col>
          </Row>
        </Container>

      </header>
    </div>
  );
}

export default App;
