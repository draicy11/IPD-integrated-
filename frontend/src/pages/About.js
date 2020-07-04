import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Card} from 'react-bootstrap';

class About extends Component {
    render() { 
        return ( 
            <div style = {{backgroundImage:"radial-gradient( circle farthest-corner at 10% 20%,  rgba(239,246,249,1) 0%, rgba(206,239,253,1) 90% )"}}>
                <Jumbotron fluid style = {{backgroundColor: "white"}} >
                    <Container style = {{backgroundColor: "white"}}>
                    <h1 className="heading text-center mb-3 mb-sm-5" style={{color:"#44566c",fontWeight:"bolder",fontSize: "5em"}}>About Us</h1>
                    <h5 className="heading text-center mb-3 mb-sm-5"> </h5>
                    <p style={{textAlign:"center", fontFamily:"Dosis"}} className="change">
                    This is a project developed by a group of three students. This website's frontend has been 
                    developed in ReactJS and the backend is developed in Django(Python). Also, the Django REST framework and the Axios API
                    is used to connect the two. 
                    </p>
                    </Container>
                </Jumbotron>
                <Container fluid>
                    <Row style={{paddingTop: "35px"}} className="justify-content-md-center"  >
                        <Col  style={{marginRight:"15px"}}>
                        <h4 className="heading text-left mb-3 mb-sm-5" style={{color:"#44566c",fontWeight:"bolder",fontSize: "2em"}}> Developer's Team :</h4>
                        </Col>
                    </Row>
                    <Row className="align-content-center" >
                    <Col   style={{paddingBottom:"45px"}} >
                        <Card className="shadow bg-white rounded m-2" border="#e6e6e6" bg='light' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/images/2.jpeg" style={{height:"20rem"}} />
                            <Card.Body style={{backgroundColor:"white"}}>
                                <Card.Title style={{color:"#44566c",fontWeight:"bolder"}}>Mrinaal Lalit</Card.Title>
                                <Card.Text className="text-font">
                                Responsible for developing the frontend and UI.
                                </Card.Text>                           
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="shadow bg-white rounded m-2" border="#e6e6e6" bg='light' style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="./assets/images/3.jpeg"  style={{height:"18rem"}} />
                            <Card.Body style={{backgroundColor:"white"}}>
                                <Card.Title style={{color:"#44566c",fontWeight:"bolder"}}>Siddharth Bharmoria</Card.Title>
                                <Card.Text  className="text-font">
                                Responsible for setting up the server and models for the data.
                                </Card.Text>                           
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="shadow bg-white rounded m-2" border="#e6e6e6" bg='light' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="./assets/images/1.jpg"  style={{height:"18rem"}} />
                            <Card.Body style={{backgroundColor:"white"}}>
                                <Card.Title style={{color:"#44566c",fontWeight:"bolder"}}>Aman Negi</Card.Title>
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