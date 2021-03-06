import React from 'react';
import { Container, Row, Col,Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'



class VisitUs extends React.Component{
    render(){
        return (
        <div>
          <Jumbotron fluid>
            <Container >
            <h1 className="heading text-center mb-3 mb-sm-5" style={{color:"#44566c",fontWeight:"bolder",fontSize: "5em"}}>Visit Us</h1>
            <h5 className="heading text-center mb-3 mb-sm-5"> </h5>
            <p style={{textAlign:"center", fontFamily:"Dosis"}} className="change">
              At any of the following Stores mentioned Below..
            </p>
            </Container>
          </Jumbotron>

          <Container fluid  className="cont" >
            <Row style={{paddingTop: "35px"}} className="justify-content-md-center"  >
              <Col style={{marginRight:"15px"}}>
                <Container  fluid>
                  <Row>
                    <Col >
                      <p style={{textAlign:"center"}} className="px-lg-5 sub-wthree">
                        <b style={{color:"#44566c",fontWeight:"bolder", fontSize:"1.5em"}}>The Authentic Store , Chandigarh</b><br/><br/>
                        Chandigarh is where it all started for us, so it only made sense to open our first store at our home place.<br/> 
                        Stop by for exclusive drops, merch, events, and great people watching. 
                      </p>
                      <p style={{textAlign:"left"}} className="px-lg-5 sub-wthree">
                        <b style={{color:"#44566c",fontWeight:"bolder"}}>Location:</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCO 123,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sector - 17,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chandigarh
                      </p>
                      <p style={{textAlign:"left"}} className="px-lg-5 sub-wthree">
                        <b style={{color:"#44566c",fontWeight:"bolder"}}>Open Hours:</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monday - Sunday: 12pm - 7pm
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
                <Container  fluid>
                  <Row>
                    <Col >
                      <p style={{textAlign:"center"}} className="px-lg-5 sub-wthree">
                        <b style={{color:"#44566c",fontWeight:"bolder",fontSize:"1.5em"}}>The Authentic Store , Ambala</b><br/><br/>
                        Expanding our reach...We are now available in the city of Ambala. 
                        Stop by for exclusive drops, merch, events, and great people watching. 
                      </p>
                      <p style={{textAlign:"left"}} className="px-lg-5 sub-wthree">
                        <b style={{color:"#44566c",fontWeight:"bolder"}}>Location:</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCO 435,,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Near Pheonix Club,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ambala Cantt.
                      </p>
                      <p style={{textAlign:"left"}} className="px-lg-5 sub-wthree">
                        <b style={{color:"#44566c",fontWeight:"bolder"}}>Open Hours:</b><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Monday - Sunday: 12pm - 7pm
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