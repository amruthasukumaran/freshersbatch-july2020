import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import icecreamReducer from './icecream/icecreamReducer'
import iceCreamReducer from './icecream/icecreamReducer'


const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer
})

export default rootReducer