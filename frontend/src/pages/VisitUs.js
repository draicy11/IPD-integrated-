import React from 'react';
import { Container, Row, Col,Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'



class VisitUs extends React.Component{
    render(){
        return (
        <div>
          <Jumbotron fluid>
            <Container>
            <h1 className="heading text-center mb-3 mb-sm-5">Visit Us</h1>
            <h5 className="heading text-center mb-3 mb-sm-5"> </h5>
            <p style={{textAlign:"center"}} className="px-lg-5 sub-wthree">
              At any of the following Stores mentioned Below..
            </p>
            </Container>
          </Jumbotron>

          <Container fluid>
            <Row style={{paddingTop: "35px"}} className="justify-content-md-center"  >
              <Col style={{marginRight:"15px"}}>
                <Container style={{paddingTop: "35px"},{paddingBottom:"35px"},{paddingLeft:"35px"},{paddingRight:"35px"}} fluid>
                  <Row>
                    <Col >
                      <p style={{textAlign:"center"}} className="px-lg-5 sub-wthree">
                        <h5>The Authentic Store , Chandigarh</h5><br/>
                        Chandigarh is where it all started for us, so it only made sense to open our first store at the home place.<br/> 
                        Stop by for exclusive drops, merch, events, and great people watching. 
                      </p>
                      <p style={{textAlign:"left"}} className="px-lg-5 sub-wthree">
                        <b>Location:</b><br/>

                      </p>
                      <p style={{textAlign:"left"}} className="px-lg-5 sub-wthree">
                        <b>Open Hours:</b><br/>
                        Monday - Sunday: 12pm - 7pm
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col style={{marginLeft:"15px"}} ><Image src="https://kissmiklos.com/i/12/40/0/2223.jpg" rounded fluid /></Col>
            </Row>
            <Row style={{paddingTop: "70px"}} className="justify-content-md-center">
              <Col><Image src="https://hypebeast.com/image/2014/10/adidas-originals-fashion-space-by-onoma-architects-4.jpg" rounded fluid /></Col>
              <Col>
                <Container style={{paddingTop: "35px"},{paddingBottom:"35px"},{paddingLeft:"35px"},{paddingRight:"35px"}} fluid>
                  <Row>
                    <Col >
                      <p style={{textAlign:"center"}} className="px-lg-5 sub-wthree">
                        <h5>The Authentic Store , Ambala</h5><br/>
                        Expanding our reach...We are now available in the city of Ambala. 
                        Stop by for exclusive drops, merch, events, and great people watching. 
                      </p>
                      <p style={{textAlign:"left"}} className="px-lg-5 sub-wthree">
                        <b>Location:</b><br/>

                      </p>
                      <p style={{textAlign:"left"}} className="px-lg-5 sub-wthree">
                        <b>Open Hours:</b><br/>
                        Monday - Sunday: 12pm - 7pm
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <div style={{paddingTop: "5px"}}></div>
          </Container>
        </div>    
        )
    }
}

export default VisitUs;