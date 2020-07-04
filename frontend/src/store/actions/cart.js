
import axios from 'axios';


export const create_cart = token => {
    return dispatch => {

		axios.get(`http://127.0.0.1:8000/api/cart/user/${token}`)
		.then(res => {
			console.log(res)
		})
	}
}	
export const addTo_cart = (token , product_id, quan) => {
    return dispatch => {
		// axios.get(`http://127.0.0.1:8000/api/cart/add/${token}/${product_id}/${quan}/&{size}`)
		axios.get(`http://127.0.0.1:8000/api/cart/add/${token}/${product_id}/${quan}`)
		.then(res=>{
			
			alert("Product added successfully to your cart.");
			console.log("sent");
		})
		.catch(err => {
			alert("Product added successfully to your cart.");
			
			
		})
	}
}	
