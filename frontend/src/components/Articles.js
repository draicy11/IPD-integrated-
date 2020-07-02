import React from 'react';
import Link from 'react-router-dom';

const article = (props) => {
    const {  image_url, id , name ,price}= props;
    return(
       
          <div>
            <div style={{paddingTop: "35px"}} className="justify-content-md-center"  >
              <div style={{marginRight:"15px"}}>
                <div style={{paddingTop: "35px"},{paddingBottom:"35px"},{paddingLeft:"35px"},{paddingRight:"35px"}} fluid>
                  <div>
                  <div>
                  <img src={image_url} rounded fluid /></div>
                    <div style={{paddingLeft: "50px"}}>
                    <h2 style={{color: "grey"}}>
                        {name}
                    </h2>
                    <div className="info">
                        <h4 className="text-muted">
                        {price}
                        </h4>
                        <div className="size">
                            <p>Select Size</p>
                        </div>
                        <br/>
                        <div className="buy" >
                          <a href="/" className="btn btn-outline-success active" role="button" aria-pressed="true">Add To Cart</a>
                        </div>
                        <br/>
                        <div className="details">
                            <h4>
                                {name}
                            </h4>
                            <p>
                                ITS GOOD
                            </p>  
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{paddingTop: "5px"}}></div>
          </div>
    
    );
    }
