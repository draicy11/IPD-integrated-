import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Contact extends React.Component{
    render(){
        return (
            <div>
           
               

                <div class="breadcrumb-agile">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                        <Link  to = "/">Home</Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </div>

                    <section class="content-info py-5">
                        <div class="container py-md-5">
                            <div class="text-center px-lg-5">
                                <h3 class="heading text-center mb-3 mb-sm-5">Visit Us</h3>
                                <div class="title-desc text-center px-lg-5">
                                    <p class="px-lg-5 sub-wthree"> we are a group of three students who are making this site as a training project by our teacher.
                                       So , We are <br/>Aman Negi<br/>Mrinaal Lalit<br/>Sidhharth Bharmoria.
                                        </p>
                                </div>
                            </div>
                            <div class="contact-w3pvt-form mt-5">
                                <form action="#" class="w3layouts-contact-fm" method="post">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label>First Name</label>
                                                <input class="form-control" type="text" name="Name" placeholder="" required=""/>
                                            </div>
                                            <div class="form-group">
                                                <label>Last Name</label>
                                                <input class="form-control" type="text" name="Name" placeholder="" required=""/>
                                            </div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input class="form-control" type="email" name="Email" placeholder="" required=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label>Write Message</label>
                                                <textarea class="form-control" name="Message" placeholder="" required=""></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group mx-auto mt-3">
                                            <button type="submit" class="btn submit">Submit</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </section>
                

                    <div class="map-w3layouts">
                        
                        <iframe src="https://www.google.com/maps/d/embed?mid=1R-qYxoVywmqYGkS9xSd8XC_b3qw" width="640" height="480"></iframe>
                    </div>
            </div>

        )
    }
}
export default Contact;