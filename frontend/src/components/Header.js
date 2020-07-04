import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

class Header extends React.Component{
    render(){


      
        return(
          
            <nav className="navbar navbar-expand-lg  sticky-top " >
                <Link to = "/"><div className="navbar-brand " >
                        The Authentic Store   
                    </div>
                </Link>

                <ul className="navbar-nav navItem-custom" >
                  <li className="nav-item active ml-2"  >
                    <Link  to ="/" >Home</Link>
                  </li>
                  <li className="nav-item ml-2 navItem-custom">
                    <Link  to ="/visitus">Visit Us</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link  to ="/about">About Us</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link  to ="/products">Products</Link>
                  </li>
                </ul>
                {
                    
                  this.props.isAuthenticated ?
                  <div className="ml-auto">
                    
                    <a href="/login" ><ShoppingCartRoundedIcon id="cart" >Cart</ShoppingCartRoundedIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <a className="nav-item ml-auto"  onClick={this.props.logout}>Log Out</a>&nbsp;&nbsp;&nbsp;
                  <a className="nav-item ml-auto"  href="">Welcome, {localStorage.username}</a>
                  </div>
                  
                  
                  :
                
                  <div className="nav-item ml-auto" >
                  
                    <Link to ="/login" >Sign In</Link>&nbsp;
                   
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


