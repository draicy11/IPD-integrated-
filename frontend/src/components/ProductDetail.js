import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import axios from 'axios';


class ProductDetail extends React.Component{

  constructor(){
    super()
    // We will create the state object now. The things inside the state can change.
    this.state = {
        selectedValue: 'Nothing selected', 
        data: [],
        }
    };



    render(){
        return (
        <div>

          <Container fluid>
            <Row style={{paddingTop: "35px"}} className="justify-content-md-center"  >
              <Col style={{marginRight:"15px"}}>
                <Container style={{paddingTop: "35px"},{paddingBottom:"35px"},{paddingLeft:"35px"},{paddingRight:"35px"}} fluid>
                  <Row>
                  <Col><Image src="https://hypebeast.com/image/2014/10/adidas-originals-fashion-space-by-onoma-architects-4.jpg" rounded fluid /></Col>
                    <Col style={{paddingLeft: "50px"}}>
                    <h2 style={{color: "grey"}}>
                        YEEZY
                    </h2>
                    <div className="info">
                        <h4 className="text-muted">
                          ₹6969
                        </h4>
                        <div className="size">
                            <p>Select Size</p>
                        </div>
                        <br/>
                        <div className="buy" >
                          <a href="/" className="btn btn-outline-success active" role="button" aria-pressed="true">Add To Cart</a>
                        </div>
                        <br/>
                        <div className="details">
                            <h4>
                                Description
                            </h4>
                            <p>
                                ITS GOOD
                            </p>  
                        </div>
                    </div>
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

export default ProductDetail;