import React, {Component} from 'react';
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
                                <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                                    <div className="footer-w3pvt">
                                        <h3 className="mb-3 w3pvt_title">CUSTOMER SERVICE </h3>
                                        <hr/>
                                        <ul className="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                            <li>
                                                <p> REVIEWS</p>
            
                                            </li>
                                            <li className="my-2">
                                                <p>FAQ</p>
            
                                            </li>
                                            <li className="my-2">
                                                <p>REFER A FRIEND</p>
            
                                            </li>
                                            <li className="my-2">
                                                <p>CONTACT US</p>
            
                                            </li>
                                            <li className="my-2">
                                            <p>ABOUT US </p>
        
                                        </li>
            
            
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                    <div className="footer-w3pvt">
                                        <h3 className="mb-3 w3pvt_title">Contact Us</h3>
                                        <hr/>
                                        <div className="last-w3ls-contact">
                                            <p>
                                                <a href="mailto:example@email.com">pussgrc@gmail.com</a>
                                            </p>
                                        </div>
                                        <div className="last-w3ls-contact my-2">
                                            <p>+91 6589741325</p>
                                        </div>
                                        <div className="last-w3ls-contact">
                                            <p>Panajb University SSG regional centre
                                                <br/>Bajwara, Una Road <br/> HOSHIARPUR.</p>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
            
                            <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2020 THE AUTHENTIC STORE. All Rights Reserved | Design by
                                <a href="./index.html"> <br/> aman negi <br/>  mrinaal lalit  <br/> siddharth  bharmoria<br/></a>
                            </p>
                            <div className="w3ls-footer text-center mt-4">
                                <ul className="list-unstyled w3ls-icons">
                                    <li>
                                        <a href="#">
                                        <span className="fa fa-facebook-f"></span>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span className="fa fa-dribbble"></span>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span className="fa fa-vk"></span>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="move-top text-right"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;