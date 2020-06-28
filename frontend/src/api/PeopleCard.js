import React from 'react';
import {Card,Button } from 'react-bootstrap';
import "./Box.css";
const PeopleCard = (props) => {
  const {  image_url, id , name ,price}= props;
   
    return (
      <Card style={{ width: '18rem' }} key={id} className="shadow bg-white rounded m-2">
        <Card.Img variant="top" src={image_url} style={{ height: '12rem' }}/>
        <Card.Body className="bg-white">
          <Card.Title className="lead">{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
          <Button variant="primary mr-2" >Buy now</Button>
          <Button variant="success">Add to cart</Button>
        </Card.Body>
    </Card>
    );
  }

export default PeopleCard;
