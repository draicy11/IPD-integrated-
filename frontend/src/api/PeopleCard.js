import React from 'react';
import {Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';



const PeopleCard = (props) => {
  const {  image_url, id , name ,price}= props;

    return (
      <Card style={{ width: '17rem' }} border="#e6e6e6" key={id} className="shadow bg-white rounded m-2">
        <Card.Img variant="top" src={image_url} style={{ height: '22rem' }}/>
        <Card.Body style={{backgroundColor:"#e6e6e6"}}  >
          <Card.Title className="lead" style={{fontFamily:"Arimo",color:"#27323f"}}>{name}</Card.Title>
            <Card.Text style={{fontFamily:"Arimo",color:"#27323f"}} >{price}</Card.Text>
              <Button className="nav-item ml-auto " variant="success mr-2" > <Link style={{color:'white'}} to={"/" + id}>Buy Now</Link></Button>         
        </Card.Body>
    </Card>
    );
  }




  export default (PeopleCard);

  //   {props.onCart(props.token,props.id)}
  // props.onCart(props.token,props.id);
  // connect(mapStateToProps, mapDispatchToProps)