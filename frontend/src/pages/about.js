import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    render() { 
        return ( 
            <div>
            
            <div class="breadcrumb-agile">
            <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                <Link  to = "/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">About</li>
            </ol>
        </div>
        <section class="services py-5" id="services">
        <div class="container py-md-5">
        <h3 class="heading text-center mb-3 mb-sm-5">Categories</h3>
            <div class="row ab-info">
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
                        <a href="single.html"><img src="./assets/images/services2.jpg" alt=" women shoe" class="img-fluid"/></a>
                        <div class="ab-info-con">
                            <h4>Men's Footwear</h4>
                            <a  class="btn btn-outline-info"><Link to ="/Product">Explore</Link></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ab-content ab-content1">
                    <div class="ab-content-inner">
                        <a href="single.html"><img src="./assets/images/services1.jpg" alt="news image" class="img-fluid"/></a>
                        <div class="ab-info-con">
                            <h4>Women's Footwear</h4>
                            <a class="btn btn-outline-info"> <Link to ="/Product">Explore</Link></a>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
        </section>


                    <section class="testimonials py-5" id="testimonials">
                    <div class="container py-md-5">
                        <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
                        <div class="row mt-3">

                            <div class="col-md-4 test-grid text-left px-lg-3">
                                <div class="test-info">

                                    <p>The product is good to see and I hope quality might also good And the shoe is very comfortable to walk it has sponge .So really good and perfect And the product is perfect.</p>
                                    <h3 class="mt-md-4 mt-3"> Raghav Thakur</h3>

                                    <div class="test-img text-center mb-3">
                                        <img src="./assets/images/test1.jpg" class="img-fluid" alt="user-image"/>
                                    </div>
                                    <div class="mobl-footer test-soc text-center">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                        <span class="fa fa-facebook-f"></span>
                                    </a>
                                            </li>
                                            <li class="mx-1">
                                                <a href="#">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                                <div class="test-info">

                                    <p>The product is good to see and I hope quality might also good And the shoe is very comfortable to walk it has sponge .So really good and perfect And the product is perfect.</p>
                                    <h3 class="mt-md-4 mt-3">Raveesh Malhotra</h3>
                                    <div class="test-img text-center mb-3">
                                        <img src="./assets/images/test2.jpg" class="img-fluid" alt="user-image"/>
                                    </div>
                                    <div class="mobl-footer test-soc text-center">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                        <span class="fa fa-facebook-f"></span>
                                    </a>
                                            </li>
                                            <li class="mx-1">
                                                <a href="#">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 test-grid text-left px-lg-3">
                                <div class="test-info">

                                    <p>The product is good to see and I hope quality might also good And the shoe is very comfortable to walk it has sponge .So really good and perfect And the product is perfect.</p>
                                    <h3 class="mt-md-4 mt-3">Harjot singh Gill</h3>

                                    <div class="test-img text-center mb-3">
                                        <img src="./assets/images/test3.jpg" class="img-fluid" alt="user-image"/>
                                    </div>
                                    <div class="mobl-footer test-soc text-center">
                                        <ul class="list-unstyled">
                                            <li>
                                                <a href="#">
                                        <span class="fa fa-facebook-f"></span>
                                    </a>
                                            </li>
                                            <li class="mx-1">
                                                <a href="#">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    </section>
            </div>

         );
    }
}
 
export default About;