import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

class Header extends React.Component{
    render(){


      
        return(
          
            <nav className="navbar navbar-expand-lg  sticky-top " style={{backgroundColor:"#e6e6e6",boxShadow:"5px 6px 8px #ABB2B9"}}>
                <Link to = "/"><div className="navbar-brand logo" style={{fontFamily:"Playfair Display, serif", fontSize:"30px",color:"#44566c"}}>
                        THE AUTHENTIC STORE   
                    </div>
                </Link>

                <ul className="navbar-nav navItem-custom" >
                  <li className="nav-item active ml-2" >
                    <Link  to ="/" style={{fontFamily:"Raleway",color:"#44566c"}}>Home</Link>
                  </li>
                  <li className="nav-item ml-2 navItem-custom">
                    <Link style={{fontFamily:"Raleway",color:"#44566c"}} to ="/visitus">Visit Us</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link style={{fontFamily:"Raleway",color:"#44566c"}} to ="/about">About Us</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link style={{fontFamily:"Raleway",color:"#44566c"}} to ="/products">Products</Link>
                  </li>
                </ul>
                {
                    
                  this.props.isAuthenticated ?
                  <div className="ml-auto">
                    
                    <a href="/login" style={{fontFamily:"Raleway",color:"#44566c"}}><ShoppingCartRoundedIcon id="cart" >Cart</ShoppingCartRoundedIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <a className="nav-item ml-auto" style={{fontFamily:"Raleway",color:"#44566c"}} onClick={this.props.logout}>Log Out</a>&nbsp;&nbsp;&nbsp;
                  <a className="nav-item ml-auto" style={{fontFamily:"Raleway",color:"#44566c"}} href="/">Welcome, {localStorage.username}</a>
                  </div>
                  
                  
                  :
                
                  <div className="nav-item ml-auto" >
                  
                    <Link to ="/login" style={{fontFamily:"Raleway",color:"#44566c"}}>Sign In</Link>&nbsp;
                   
                  </div>
                  
                }
            </nav>
         
        )

        
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}


export default connect(null,mapDispatchToProps)(Header);


