import React from 'react';
import {Link} from 'react-router-dom';


class Footer extends React.Component{
    render(){
        return (
            <div>
            <footer className="footer-content">
                    <div className="layer footer">
                        <div className="container-fluid">
                            <div className="row footer-top-inner-w3ls">
                                <div className="col-lg-4 col-md-6 footer-top ">
                                    <h2>
                                        <Link to ="/">THE AUTHENTIC STORE</Link>
                                    </h2>
                                    <p className="my-3">We make timeless, responsibly-made sneakers that are designed to be great, and made to be worn.</p>
                                    <p>
                                       The most Authentic outlet of shoes in India.
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                    <div className="footer-w3pvt">
                                        <h3 className="mb-3 w3pvt_title">Quick Links </h3>
                                        <hr/>
                                        <ul className="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                            <li>
                                            <Link to ="/about">About Us</Link>
            
                                            </li>
                                            <li className="my-2">
                                            <Link to ="/visitus">Visit Us</Link>
            
                                            </li>
                                            <li className="my-2">
                                            <Link to ="/">Site Map</Link>
            
                                            </li>
                                        </ul>
                                    </div>
                                </div>
            
                            </div>
            
                            <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2020 THE AUTHENTIC STORE. All Rights Reserved | Design by
                            <br/><a href="https://github.com/draicy11">  Aman Negi  </a><br/>
                                <a href="https://github.com/mrinaal29"> Mrinaal Lalit </a><br/> 
                                <a href="https://github.com/siddharth-2001"> Siddharth  Bharmoria<br/></a> <br/>
                            </p>              
                            <div className="move-top text-right"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;