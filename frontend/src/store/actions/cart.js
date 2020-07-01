
import axios from 'axios';


export const create_cart = username => {
    return dispatch => {

		axios.get(`http://127.0.0.1:8000/api/cart/user/${username}`)
	}
}	
export const addTo_cart = (username , product_id) => {
    return dispatch => {

		axios.get(`http://127.0.0.1:8000/api/cart/add/${username}/${product_id}`)
	}
}	
