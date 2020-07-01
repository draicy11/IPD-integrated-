import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
 

import reducer from './store/reducers/auth';

import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
	));

const app = (
	<Provider store = { store }>     
		<App/>                       
	</Provider>
	);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//Provider is the wrapper used to let the app know that we are using a store
//store contains reducers that handles the state of the application