import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Footer extends React.Component{
    render(){
        return (
            <div>
            <footer class="footer-content">
                    <div class="layer footer">
                        <div class="container-fluid">
                            <div class="row footer-top-inner-w3ls">
                                <div class="col-lg-4 col-md-6 footer-top ">
                                    <h2>
                                        <Link to ="/">THE AUTHENTIC STORE</Link>
                                    </h2>
                                    <p class="my-3">We make timeless, responsibly-made sneakers that are designed to be great, and made to be worn.</p>
                                    <p>
                                       The most Authentic outlet of shoes in India.
                                    </p>
                                </div>
                                <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                                    <div class="footer-w3pvt">
                                        <h3 class="mb-3 w3pvt_title">CUSTOMER SERVICE </h3>
                                        <hr/>
                                        <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                            <li>
                                                <p> REVIEWS</p>
            
                                            </li>
                                            <li class="my-2">
                                                <p>FAQ</p>
            
                                            </li>
                                            <li class="my-2">
                                                <p>REFER A FRIEND</p>
            
                                            </li>
                                            <li class="my-2">
                                                <p>CONTACT US</p>
            
                                            </li>
                                            <li class="my-2">
                                            <p>ABOUT US </p>
        
                                        </li>
            
            
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                    <div class="footer-w3pvt">
                                        <h3 class="mb-3 w3pvt_title">Contact Us</h3>
                                        <hr/>
                                        <div class="last-w3ls-contact">
                                            <p>
                                                <a href="mailto:example@email.com">pussgrc@gmail.com</a>
                                            </p>
                                        </div>
                                        <div class="last-w3ls-contact my-2">
                                            <p>+91 6589741325</p>
                                        </div>
                                        <div class="last-w3ls-contact">
                                            <p>Panajb University SSG regional centre
                                                <br/>Bajwara, Una Road <br/> HOSHIARPUR.</p>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
            
                            <p class="copy-right-grids text-li text-center my-sm-4 my-4">© 2020 THE AUTHENTIC STORE. All Rights Reserved | Design by
                                <a href="./index.html"> <br/> aman negi <br/>  mrinaal lalit  <br/> siddharth  bharmoria<br/></a>
                            </p>
                            <div class="w3ls-footer text-center mt-4">
                                <ul class="list-unstyled w3ls-icons">
                                    <li>
                                        <a href="#">
                                        <span class="fa fa-facebook-f"></span>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span class="fa fa-dribbble"></span>
                                    </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                        <span class="fa fa-vk"></span>
                                    </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="move-top text-right"><a href="#home" class="move-top"> <span class="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;