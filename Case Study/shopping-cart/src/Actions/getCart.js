import { GET_CART_ITEMS } from './types';

export const getCart = () => {
    return(dispatch) => {
        console.log("Getting cart");
        dispatch({
            type: GET_CART_ITEMS
        });
    }
}