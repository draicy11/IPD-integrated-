import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

class Header extends React.Component{
    render(){


      
        return(
          
            <nav className="navbar navbar-expand-lg bg-dark sticky-top ">
                <Link to = "/"><div className="navbar-brand logo">
                        THE AUTHENTIC STORE   
                    </div>
                </Link>

                <ul className="navbar-nav" >
                  <li className="nav-item active ml-2">
                    <Link to ="/">Home</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link to ="/visitus">Visit Us</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link to ="/about">About Us</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link to ="/Product">Products</Link>
                  </li>
                </ul>
                {
                    
                  this.props.isAuthenticated ?
                  <div className="nav-item ml-auto">
                  <Link to ="/login">Cart</Link>&nbsp;&nbsp;&nbsp;
                  <a className="nav-item ml-auto" style={{color:'lightblue'}} onClick={this.props.logout}>Log Out</a>
                  </div>
                  
                  
                  :
                
                  <div className="nav-item ml-auto" style={{color:'green'}}>
                  
                    <Link to ="/login">Sign In</Link>&nbsp;
                   
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