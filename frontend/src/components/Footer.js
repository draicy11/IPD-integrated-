import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return (
            <div>
            <footer className="footer-content " >
                    <div className="layer footer">
                        <div className="container-fluid" style={{backgroundColor:"#4b5e65" , boxShadow:"5px 6px 8px #ABB2B9"}}>
                            <div className="row footer-top-inner-w3ls">
                                <div className="col-lg-5 col-md-6 footer-top ">
                                    <h2>
                                        <Link style={{fontFamily:"Galada",color:"#ececec" ,fontSize: "50px"}} to ="/">The Authentic Store</Link>
                                    </h2>
                                    <p className="my-3" style={{color:"#ececec"}}>We make timeless, responsibly-made sneakers that are designed to be great, and made to be worn.</p>
                                    <p style={{color:"#ececec"}}>
                                       The most Authentic outlet of shoes in India.
                                    </p>
                                </div>
                                <div className="align1" >
                                    <div className="footer-w3pvt" >
                                        <h4 className="mb-3 w3pvt_title" style={{color:"#ececec"}}>Quick Links </h4>
                                        <hr/>
                                        <ul className="list-info-w3pvt last-w3ls-contact mt-lg-4">
                                            <li>
                                            <Link to ="/about" style={{color:"#ececec",fontSize:"1.2em"}}>About Us</Link>
            
                                            </li>
                                            <li className="my-2">
                                            <Link to ="/visitus" style={{color:"#ececec",fontSize:"1.2em"}}>Visit Us</Link>
            
                                            </li>
                                            <li className="my-2">
                                            <Link to ="/products" style={{color:"#ececec",fontSize:"1.2em"}}>Products</Link>
            
                                            </li>
                                        </ul>
                                    </div>
                                </div>
            
                            </div>
                            
                            <p className="copy-right-grids text-li text-center my-sm-4 my-4" style={{color:"#ececec"}}>© 2020 THE AUTHENTIC STORE. All Rights Reserved | Design by
                            <br/>   <a href="https://github.com/draicy11" style={{color:"#ececec"}}>  Aman Negi</a><br/>
                                <a href="https://github.com/mrinaal29" style={{color:"#ececec"}}>  Mrinaal Lalit </a><br/>
                                <a href="https://github.com/siddharth-2001" style={{color:"#ececec"}}> Siddharth  Bharmoria<br/></a><br/>
                            </p>              
                            <div className="move-top text-right"><a href="#" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;