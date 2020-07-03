import React from 'react';
import { Container, Row, Col , Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import { connect } from 'react-redux';
import * as actionsCart from '../store/actions/cart';

import {Link} from 'react-router-dom';


class ProductDetail extends React.Component{


    state = {
        product: {}
        }

    componentDidMount() {
      const productId = this.props.match.params.productId;
      fetch(`http://127.0.0.1:8000/api/products/${productId}`)
      .then(response =>{
        return response.json()
    }).then(data => {
        this.setState({
          product : data        
        });
    })
    .catch(err => {
      console.log(err)
    })
}
      handleChange=(e)=>{
      e.preventDefault();
      this.props.onCart(this.props.token,this.state.product.id);

    }



    render(){
        return (
        <div>

          <Container fluid>
            <Row style={{paddingTop: "35px"}} className="justify-content-md-center"  >
              <Col style={{marginRight:"15px"}}>
                <Container style={{paddingTop: "35px",paddingBottom:"35px",paddingLeft:"35px",paddingRight:"35px"}} fluid>
                  <Row>
                  <Col><Image src={this.state.product.image_url} rounded fluid /></Col>
                    <Col style={{paddingLeft: "50px"}}>
                    <h2 style={{color: "grey"}}>
                        {this.state.product.name}
                    </h2>
                    <div className="info">
                        <h4 className="text-muted">
                          {this.state.product.price}
                        </h4>
                        <div className="size">
                            <p>Select Size</p>
                        </div>
                        <br/>
                        <div className="buy" >
                          <Button className="nav-item ml-auto" variant="success mr-2" > <Link style={{color:'white'}} onClick={this.handleChange}>Add To Cart</Link></Button>
                        </div>
                        <br/>
                        <div className="details">
                            <h4>
                                Description
                            </h4>
                            <p>
                                 {this.state.product.description}
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

  const mapDispatchToProps = dispatch => {
    return {
        onCart: (token , product_id ) => dispatch(actionsCart.addTo_cart(token,product_id))
         
    }
}
const mapStateToProps = state =>{
  return {
    token : state.token,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);