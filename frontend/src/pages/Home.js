import React  from 'react';
import {Link} from 'react-router-dom';

 class Home extends React.Component{
     render(){
         return(
            <div>
            
       
            <div class="banner_w3lspvt" id="home">
                <div class="csslider infinity" id="slider1">
                    <input type="radio" name="slides" id="slides_1"/>
                    <input type="radio" name="slides" id="slides_2"/>
                    <input type="radio" name="slides" id="slides_3"/>
                    
            
                    <ul class="banner_slide_bg">
                        
                        <li>
                            <div class="slider-info bg2">
                                <div class="bs-slider-overlay1">
                                    <div class="banner-text">
                                        <div class="container">
                                            <h4 class="movetxt agile-title text-capitalize">We Help You Choose the Best Shoes Available In The Market. </h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            				
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="slider-info bg3">
                                <div class="bs-slider-overlay2">
                                    <div class="banner-text">
                                        <div class="container">
                                        <h2 class="movetxt agile-title text-capitalize">We Create The Best Range Shoes For the Customer</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="slider-info bg4">
                                <div class="bs-slider-overlay3">
                                    <div class="banner-text">
                                        <div class="container">
                                            <h4 class="movetxt agile-title text-capitalize">We Design Latest Trending Shoes. </h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            		
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="navigation"> 
                        <div>
                          <label for="slides_1"></label>
                          <label for="slides_2"></label>
                          <label for="slides_3"></label>
                          
                        </div>
                    </div>
                </div>
            </div>
                
            
                <section class="services py-5" id="services">
                    <div class="container py-md-5">
                    <h3 class="heading text-center mb-3 mb-sm-5">Categories</h3>
                        <div class="row ab-info">
                        
                            <div class="col-md-4 ab-content ab-content1">
                                <div class="ab-content-inner">
                                    <a href="single.html"><img src="./assets/images/ser6.jpg" alt=" SHOES" class="img-fluid"/></a>
                                    <div class="ab-info-con">
                                        <h4>SHOES</h4>
                                        <a href="Product" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-4 ab-content ab-content1">
                                <div class="ab-content-inner">
                                    <a href="single.html"><img src="./assets/images/ser8.jpg" alt="JACKETS" class="img-fluid"/></a>
                                    <div class="ab-info-con">
                                        <h4>APPARELS</h4>
                                        <a href="Product" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 ab-content ab-content1">
                                <div class="ab-content-inner">
                                    <a href="single.html"><img src="./assets/images/ser7.jpg" alt="JEANS" class="img-fluid"/></a>
                                    <div class="ab-info-con">
                                        <h4>JEANS</h4>
                                        <a href="Product" class="read-more two btn m-0 px-3"><span class="fa fa-arrow-circle-o-right"> </span></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                     
                    </div>
                </section>
              
            <section class="pricing py-5">	
                <div class="container py-md-5">
                    <h3 class="heading text-capitalize text-center mb-3 mb-sm-5"> Our Pricing</h3>
                    <div class="row pricing-grids">
                        <div class="col-lg-6  mb-lg-0 mb-5">
                            <div class="padding">
                                 <h3>TRENDING BRANDS</h3>
                                <div class="menu-item">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>ADDIDAS</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h>Starting from RS 3000</h>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="menu-item my-4">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>REEBOK</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7>Starting from RS 1800</h7>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="menu-item">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>PUMA</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7>Starting from RS 1500</h7>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="menu-item mt-4">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>NIKE</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7>Starting from RS 4500</h7>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="menu-item mt-4">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>WOODLAND</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7>Starting from RS 3000</h7>
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="menu-item mt-4">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>CONVERSE</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7> Starting from RS 2500</h7>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="col-lg-6  mb-lg-0 mb-5">
                            <div class="padding">
                                <h3>ON SALE</h3>
                                
                                <div class="menu-item">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>FILA</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7>Starting from RS 1700</h7>
                                        </div>
                                    </div>
                                    
                                </div>
                               
                                <div class="menu-item my-4">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>AJACS</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7> Starting from RS 2100</h7>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="menu-item">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>CROCS</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7>Starting from RS 1500</h7>
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="menu-item mt-4">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>ASICS</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7> Starting from RS 1800</h7>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="menu-item mt-4">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>VANS</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7> Starting from RS 3000</h7>
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="menu-item mt-4">
                                    <div class="row border-dot no-gutters">
                                        <div class="col-8 menu-item-name">
                                            <h6>NUMERO-UNO</h6>
                                        </div>
                                        <div class="col-4 menu-item-price text-right">
                                            <h7>Starting from RS 1800</h7>
                                        </div>
                                    </div>
                                </div>
                            </div>		
                        </div>
                                
                    </div>		
                </div>		
            </section>
           
                <section class="order-sec py-5">
                    <div class="container py-md-5">
                        <div class="test-info text-center">
                            <h3 class="tittle order">
                                Your favourite footwear , at your doorstep <br/> <h5> select, try and then buy it .</h5></h3>
                            <h4 class="tittle my-2">FLAT 50% OFF ON PREPAID ORDERS  </h4>
            
                            <div class="read-more mx-auto m-0 text-center">
                                <a href="contact.html" class="read-more scroll btn">REGISTER NOW and BOOK APPOINTMENT</a> </div>
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
         )
     }
 }
 export default Home;