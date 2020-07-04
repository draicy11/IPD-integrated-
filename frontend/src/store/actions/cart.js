
import axios from 'axios';


export const create_cart = token => {
    return dispatch => {

		axios.get(`http://127.0.0.1:8000/api/cart/user/${token}`)
		.then(res => {
			console.log(res)
		})
	}
}	
export const addTo_cart = (token , product_id, quan, size) => {
    return dispatch => {
		// axios.get(`http://127.0.0.1:8000/api/cart/add/${token}/${product_id}/${quan}/&{size}`)
		axios.get(`http://127.0.0.1:8000/api/cart/add/${token}/${product_id}/${quan}/${size}`)
		.then(res=>{
			
			alert("Product added successfully to your cart.");
			console.log("sent");
		})
		.catch(err => {
			alert("Oops ! Something went Wrong.\nCheck if You are logged in.");
			console.log(err);
			
		})
	}
}	
