import React from 'react';
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact';
import Login from './pages/Login';
import About from './pages/about';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignUp from './pages/Cart';
import Product from './Product';


function App() {
  return (
    <div>
    <Router>
          <Header/>
          <Switch>
               <Route exact path='/' component={Home}/>
               <Route path ='/Contact' component={Contact}/>
               <Route path ='/Login' component={Login}/>
               <Route path ='/About' component={About}/>
               <Route path ='/Cart' component={SignUp}/>
               <Route path ='/Product' component={Product}/>


          </Switch>
                 
        <Footer/>
    </Router>
    </div>
  );
}


export default App;
