import React from 'react';
import { Container, Row, Col , Button ,ButtonGroup} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import { connect } from 'react-redux';
import * as actionsCart from '../store/actions/cart';

import {Link} from 'react-router-dom';

import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';


class ProductDetail extends React.Component{


    state = {
        product: {},
        quantity:"",
        size:"",
        clicks: 1,      
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
      console.log(this.state);
      this.props.onCart(this.props.token,this.state.product.id,this.state.clicks,this.state.size);

    }
    handleClickXS=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"XS"
        
      });
      console.log(this.state);
    }
    handleClickS=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"S"
        
      });
      console.log(this.state);
    }
    handleClickM=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"M"
        
      });
      console.log(this.state);
    }
    handleClickL=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"L"
        
      });
      console.log(this.state);
    }
    handleClickXL=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"XL"
        
      });
      console.log(this.state);
    }


    // shoes
    handleClick6=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"6"
        
      });
      console.log(this.state);
    }
    handleClick7=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"7"
        
      });
      console.log(this.state);
    }
    handleClick8=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"8"
        
      });
      console.log(this.state);
    }
    handleClick9=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"9"
        
      });
      console.log(this.state);
    }
    handleClick10=(e)=>{
      e.preventDefault();
      
      this.setState({
        size:"10"
        
      });
      console.log(this.state);
    }

    IncrementItem = () => {
      this.setState({ clicks: this.state.clicks + 1 });
      console.log(this.state);
    }
    DecreaseItem = () => {
      if(this.state.clicks>1){
      this.setState({ clicks: this.state.clicks - 1 });}
      console.log(this.state);
    }

    



    render(){
        return (
        <div>

          <Container fluid>
            <Row style={{paddingTop: "10px"}} className="justify-content-md-center"  >
              <Col style={{marginRight:"15px"}}>
                <Container style={{paddingTop: "35px",paddingBottom:"35px",paddingLeft:"35px",paddingRight:"35px"}} fluid>
                  <Row>
                  <Col><Image src={this.state.product.image_url} rounded fluid /></Col>
                    <Col style={{paddingLeft: "50px",paddingTop:"20px",backgroundImage: "radial-gradient( circle farthest-corner at 18.7% 37.8%,  rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90% )"}}>
                    <h2  style={{color:"#44566c",fontWeight:"bolder",fontSize: "3em"}}>
                        {this.state.product.name}
                    </h2>
                    <br/>
                    <div className="info">
                      
                        <h4  style={{color:"#44566c"}}>
                          Price :
                        </h4>
                        <p style={{fontSize: "2em"}}>
                        ₹ {this.state.product.price}
                        </p>
                        <div  >
                            <h4 style={{color:"#44566c"}}>Select Size :</h4>
                            {                    
                            this.state.product.category==="SH" ?
                            <div>
                              <ButtonGroup aria-label="Basic example">
                                <Button variant="light" onClick={this.handleClick6}>UK 6</Button>
                                <Button variant="light" onClick={this.handleClick7}>UK 7</Button>
                                <Button variant="light" onClick={this.handleClick7}>UK 8</Button>
                                <Button variant="light" onClick={this.handleClick9}>UK 9</Button>
                                <Button variant="light" onClick={this.handleClick10}>UK 10</Button>
                              </ButtonGroup>
                            </div>
                            :
                            <div>
                              <ButtonGroup aria-label="Basic example">
                                <Button variant="light" onClick={this.handleClickXS}>XS</Button>
                                <Button variant="light" onClick={this.handleClickS}>S</Button>
                                <Button variant="light" onClick={this.handleClickM}>M</Button>
                                <Button variant="light" onClick={this.handleClickL}>L</Button>
                                <Button variant="light" onClick={this.handleClickXL}>XL</Button>
                              </ButtonGroup>
                            </div>
                            }
                            <br/>
                            <div>
                              <br/>                              
                            <h4 style={{color:"#44566c"}}>Set Quantity :</h4>
                            <br/>
                              <AddCircleOutlineTwoToneIcon style={{fontFamily:"Raleway",color:"#44566c",fontSize:"2em"}} onClick={this.IncrementItem}>Click to increment by 1</AddCircleOutlineTwoToneIcon><br/>
                              <div style={{fontFamily:"Dosis",color:"#44566c",fontSize:"3em"}}>{"\t"+ this.state.clicks }</div>        
                              <RemoveCircleOutlineOutlinedIcon onClick={this.DecreaseItem} style={{fontFamily:"Raleway",color:"#44566c",fontSize:"2em"}}>Click to decrease by 1</RemoveCircleOutlineOutlinedIcon>
                            </div>
                    

                        </div>
                        <br/><br/>
                        <div className="buy" >
                          <Button className="nav-item ml-auto"  variant="success mr-2" > <Link style={{color:'white',fontSize:"1.5em" ,fontFamily:'Dosis'}} onClick={this.handleChange}>Add To Cart</Link></Button>
                        </div>
                        <br/>
                        <div className="details">
                            <h3  style={{color:"#44566c"}}>
                                Description :
                            </h3>
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
        onCart: (token , product_id , quan ,size) => dispatch(actionsCart.addTo_cart(token,product_id,quan,size))
         
    }
}
const mapStateToProps = state =>{
  return {
    token : state.token,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);




