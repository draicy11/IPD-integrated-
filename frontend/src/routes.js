import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home'
import Contact from './pages/Contact';
// import Login from './pages/Login';
import About from './pages/About';
// import SignUp from './pages/SignUp';
import Product from './components/Product';


const BaseRouter = () =>(
	<div>
		 <Route exact path='/' component={Home}/>
         <Route path ='/contact' component={Contact}/>

         <Route path ='/about' component={About}/>
        
         <Route path ='/product' component={Product}/>
</div>
	);

export default BaseRouter;