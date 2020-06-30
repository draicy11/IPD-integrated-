import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class About extends Component {
    render() { 
        return ( 
            <div>
                <Jumbotron fluid>
                    <Container>
                    <h1 className="heading text-center mb-3 mb-sm-5">About Us</h1>
                    <h5 className="heading text-center mb-3 mb-sm-5"> </h5>
                    <p style={{textAlign:"center"}} className="px-lg-5 sub-wthree">
                    This is a project developed by a group of three students. This website's frontend has been 
                    developed in ReactJS and the backend is developed in Django(Python). Also, the Django REST framework
                    is used to connect the two. 
                    </p>
                    </Container>
                </Jumbotron>
                <Container fluid>
                    <Row style={{paddingTop: "35px"}} className="justify-content-md-center"  >
                        <Col  style={{marginRight:"15px"}}>
                        <h4 className="heading text-left mb-3 mb-sm-5"> Developer's Team :</h4>
                        </Col>
                    </Row>
                    <Row className="align-content-center">
                    <Col >
                        <Card className="text-center" border="dark" bg='light' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://kissmiklos.com/i/12/40/0/2223.jpg" />
                            <Card.Body>
                                <Card.Title>Mrinaal Lalit</Card.Title>
                                <Card.Text>
                                Responsible for developing the frontend and UI.
                                </Card.Text>                           
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="dark" bg='light' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://kissmiklos.com/i/12/40/0/2223.jpg" />
                            <Card.Body>
                                <Card.Title>Siddharth Bharmoria</Card.Title>
                                <Card.Text>
                                Responsible for setting up the server and models for the data.
                                </Card.Text>                           
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="dark" bg='light' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://kissmiklos.com/i/12/40/0/2223.jpg" />
                            <Card.Body>
                                <Card.Title>Aman Negi</Card.Title>
                                <Card.Text>
                                Responsible for setting up the REST API to connect the frontend and backend.
                                </Card.Text>                           
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    <div style={{paddingTop: "5px"}}></div>
                </Container>
            </div>

         );
    }
}
 
export default About;