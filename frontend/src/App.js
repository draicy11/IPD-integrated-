import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';

import Header from './components/Header'
import Footer from './components/Footer'

import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

class App extends Component {



  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render(){
    return (
      <div >
        <Router>
            <Header {...this.props} />
            <BaseRouter {...this.props} />
            <Footer/>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

const mapStateToProps = state =>{
  return {
    isAuthenticated: state.token !== null,
    token : state.token
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


//mapdispatchtoprops--> this converts a method as a  property
//mapstatetoprop-->this converts states from the store(i.e redux) to properties that can be used in application
//The {...this.props} in header tag gives us the access to the props that are made with 
//  mapStateToProps throughout the app