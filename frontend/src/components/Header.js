import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <Link to = "/"><div className="navbar-brand logo">
                        THE AUTHENTIC STORE   
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul className="navbar-nav mr-auto ">
                  <li className="nav-item active">
                    <Link to ="/">Home </Link>
                  </li>
                  <li className="nav-item">
                    <Link to ="/Contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link to ="/Login">Sign In</Link>
                  </li>
                  <li className="nav-item">
                    <Link to ="/signup">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link to ="/Product">About</Link>
                  </li>
                </ul>
              </div>
            </nav>
        )

        
    }
}
export default Header;