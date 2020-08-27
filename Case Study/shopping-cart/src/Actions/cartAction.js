import { ADD_TO_CART } from './types';

export const addToCart = (productName) => {
    return(dispatch) => {
        console.log("adding to cart");
        console.log("Product: ",productName);
        dispatch({
            type: ADD_TO_CART,
            payload: productName
        });
    }
}