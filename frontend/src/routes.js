import React ,{ useEffect, useState } from 'react';
import { Route , Switch} from 'react-router-dom';

import Home from './pages/Home'
import VisitUs from './pages/VisitUs';
import Login from './pages/Login';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';


const BaseRouter = (props) =>{
    return(
        
	<div>
        <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path ='/products' component={Product}/>
         <Route exact path ='/visitus' component={VisitUs}/>
         <Route exact path ='/login' component={() => <Login isAuthenticated={props.isAuthenticated} history={props.history}/>}/>
         <Route exact path ='/about' component={About}/>
         <Route exact path ='/signup' component={SignUp}/>
         <Route exact path ='/:productId' component={ProductDetail}/>
        </Switch>		 
    </div>
    );
}

export default BaseRouter;