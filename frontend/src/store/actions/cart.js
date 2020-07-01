
import axios from 'axios';


export const create_cart = token => {
    return dispatch => {

		axios.get(`http://127.0.0.1:8000/api/cart/user/${token}`)
	}
}	
export const addTo_cart = (token , product_id) => {
    return dispatch => {

		axios.get(`http://127.0.0.1:8000/api/cart/add/${token}/${product_id}`)
		.then(res=>{
			console.log("sent");
		})
	}
}	
