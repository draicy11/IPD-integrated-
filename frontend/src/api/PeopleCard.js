import React from 'react';
import {Card,Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actionsCart from '../store/actions/cart';

const PeopleCard = (props) => {
  const {  image_url, id , name ,price}= props;
   
    return (
      <Card style={{ width: '18rem' }} key={id} className="shadow bg-white rounded m-2">
        <Card.Img variant="top" src={image_url} style={{ height: '12rem' }}/>
        <Card.Body className="bg-white">
          <Card.Title className="lead">{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
          <Button variant="primary mr-2" >Buy now</Button>
          <Button onClick={props.onCart} variant="success">Add to cart</Button>
        </Card.Body>
    </Card>
    );
  }


  const mapDispatchToProps = dispatch => {
    return {
        onCart: (username , product_id ) => dispatch(actionsCart.addTo_cart(username,product_id))
         
    }
}


  export default connect(null, mapDispatchToProps)(PeopleCard);
