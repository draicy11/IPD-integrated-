import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
             <div>
             <header>
             <div class="container">
                 <div class="topnav">
                     <div class="header-agile">
                         <h1>
                            <Link to = "/"  class="navbar-brand logo">
                                  THE AUTHENTIC STORE	
                                 </Link>
                         </h1>
                     </div>
                     <div class="topnav-centered">
                         <nav>
                             <label for="drop" class="toggle mt-lg-0 mt-1"><span class="fa fa-bars" aria-hidden="true"></span></label>
                             <input type="checkbox" id="drop" />
                                 <ul class="menu">
                                     <li class="mr-lg-3 mr-2 active"><Link to ="/">Home</Link></li>
                                     <li class="mr-lg-3 mr-2"><Link to ="/About">About</Link></li>
                                     <li class="mr-lg-3 mr-2"><Link to ="/Contact">Contact</Link></li>
                                     <li class="mr-lg-3 mr-2"><Link to ="/Login">Sign In</Link></li>
                                     <li class="mr-lg-3 mr-2"><Link to ="/Cart">Sign Up</Link></li>
                                     <div class="topnav-right"> 
                                     <i class="fa fa-heart" ></i>&nbsp; 
                                     <span>&#124;</span>&nbsp; 
                                     <i class="fa fa-shopping-cart" ></i> 
                                     
                                     </div>
                                     
                                 </ul>
                         </nav>
                     </div>
         
                 </div>
             </div>
         </header>
             </div>
        )

        
    }
}
export default Header;