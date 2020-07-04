import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as actionCart from './cart';
import {  Redirect} from "react-router-dom";
import React   from 'react';



export const authStart = () => {
	return {
		type : actionTypes.AUTH_START
	}
}	



export const authSuccess = token => {
	return {
		type : actionTypes.AUTH_SUCCESS,
		token : token
	}
}	


export const authFail = error => {
	return {
		type : actionTypes.AUTH_FAIL,
		error : error
	}
}	

export const logout = () => {
	localStorage.removeItem('user');
	localStorage.removeItem('expirationDate');
	
	return {
		type : actionTypes.AUTH_LOGOUT
	}

}

export const checkTimeout = expirationTime =>{
	return dispatch =>{
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000)
	}
}
export const backUser = (username) =>{
	return dispatch => {
		axios.get(`http://127.0.0.1:8000/login/${username}/`)

		.then(res => {
			console.log(res);
			console.log("BackUser Created");

		})
		.catch(err => {
			dispatch(authFail(err)); 
			console.log(err.response);
			console.log("BackUser Not Created");
		})
		
	}
}

export const authLogin = (username , password) =>{
	return dispatch => {
		dispatch(authStart());

		axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password,
        })

		.then(res => {
			console.log(res);
			const token = res.data.key;
			const user = username;
			const expirationDate = new Date(new Date().getTime() + (2 * 24 * 3600) * 1000);
			localStorage.setItem('token' , token);
			localStorage.setItem('expirationDate' , expirationDate);
			localStorage.setItem('username',user);
			dispatch(authSuccess(token));
			dispatch(checkTimeout(2*24*3600));
			dispatch(actionCart.create_cart(token));
			dispatch(backUser(localStorage.username));
			

		})
		.catch(err => {
			dispatch(authFail(err)); 
			console.log(err.response);
			alert("Wrong Credentials! \nAre You a Member? If Not, then Sign Up!! ")
			
			
		})
	}
}

export const authSignup = (username ,email, password1, password2) =>{
	return dispatch => {
		dispatch(authStart());

		axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
        })
		.then(res => {
			const token = res.data.key;
			const user = username;
			const expirationDate = new Date(new Date().getTime() + (2 * 24 * 3600) * 1000);
			localStorage.setItem('token' , token);
			localStorage.setItem('expirationDate' , expirationDate);
			localStorage.setItem('username',user);
			dispatch(authSuccess(token));
			dispatch(checkTimeout(2*24*3600));			
			dispatch(actionCart.create_cart(token));
			console.log(res);
			alert("You have successfuly Signed Up!!")
			dispatch(backUser(localStorage.username));
		})
		.catch(err => {
			dispatch(authFail(err))
			console.log(err);
			alert("Oops! Something went wrong!!")
		})
	}
}


export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if(token===undefined){
			dispatch(logout());
		}
		else{
			const expirationDate = new Date(localStorage.getItem('expirationDate'));
			if (expirationDate <= new Date()){
				dispatch(logout());
			}
			else{
				dispatch(authSuccess(token));
				dispatch(checkTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000 ));
			}
		}
	}
}

