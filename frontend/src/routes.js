import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home'
import VisitUs from './pages/VisitUs';
import Login from './pages/Login';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Product from './components/Product';


const BaseRouter = () =>(
	<div>
		 <Route exact path='/' component={Home}/>
         <Route path ='/visitus' component={VisitUs}/>
         <Route path ='/login' component={Login}/>
         <Route path ='/about' component={About}/>
         <Route path ='/signup' component={SignUp}/>
         <Route path ='/product' component={Product}/>
</div>
	);

export default BaseRouter;