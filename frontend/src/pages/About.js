import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card} from 'react-bootstrap';

class About extends Component {
    render() { 
        return ( 
            <div>
                <Jumbotron fluid >
                    <Container>
                    <h1 className="heading text-center mb-3 mb-sm-5">About Us</h1>
                    <h5 className="heading text-center mb-3 mb-sm-5"> </h5>
                    <p style={{textAlign:"center"}} className="change">
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
                    <Row className="align-content-center" className="about-1">
                    <Col   style={{paddingTop: "35px"},{paddingBottom:"45px"}} >
                        <Card className="text-center" border="dark" bg='light' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/images/2.jpeg" style={{height:"13rem"}} />
                            <Card.Body>
                                <Card.Title>Mrinaal Lalit</Card.Title>
                                <Card.Text className="text-font">
                                Responsible for developing the frontend and UI.
                                </Card.Text>                           
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="dark" bg='light' style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="./assets/images/3.jpeg"  style={{height:"13rem"}} />
                            <Card.Body>
                                <Card.Title>Siddharth Bharmoria</Card.Title>
                                <Card.Text  className="text-font">
                                Responsible for setting up the server and models for the data.
                                </Card.Text>                           
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="dark" bg='light' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/images/1.jpeg"  />
                            <Card.Body>
                                <Card.Title>Aman Negi</Card.Title>
                                <Card.Text  className="text-font">
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