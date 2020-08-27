import { BUY_CAKE } from './Types'

export const buyCake = (number = 1) => {
    return{
        type : BUY_CAKE,
        payload : number
    }
} 