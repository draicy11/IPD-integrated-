import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
            <Header/>
            <BaseRouter />
            <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
