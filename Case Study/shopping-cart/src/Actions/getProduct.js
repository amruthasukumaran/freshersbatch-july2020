import { GET_PRODUCTS } from './types';

export const getProducts = (productName) => {
    return(dispatch) => {
        console.log("Getting products");
        dispatch({
            type: GET_PRODUCTS,
            payload: productName
        });
    }
}