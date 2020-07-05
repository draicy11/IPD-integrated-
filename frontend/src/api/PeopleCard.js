import React from 'react';
import {Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './api.css'



const PeopleCard = (props) => {
  const {  image_url, id , name ,price}= props;

    return (
      <Card style={{ width: '18rem'}} border="#e6e6e6" key={id}    className=" zoom shadow bg-white rounded m-2">
        <Link to={"/" + id}><Card.Img variant="top" src={image_url} style={{ height: '20rem' }}/></Link>
        <Card.Body style={{backgroundImage: "radial-gradient( circle farthest-corner at 18.7% 37.8%,  rgba(250,250,250,1) 0%, rgba(225,234,238,1) 90% )"}}  >
          <Card.Title className="lead" style={{fontFamily:"Bebas Neue",color:"#27323f"}}>{name}</Card.Title>
            <Card.Text style={{fontFamily:"Dosis",color:"#27323f"}} > ₹{price}</Card.Text>
              <Button className="nav-item ml-auto " variant="success mr-2" > <Link style={{color:'white'}} to={"/" + id}>Buy Now</Link></Button>         
        </Card.Body>
    </Card>
    );
  }




  export default (PeopleCard);

  //   {props.onCart(props.token,props.id)}
  // props.onCart(props.token,props.id);
  // connect(mapStateToProps, mapDispatchToProps)