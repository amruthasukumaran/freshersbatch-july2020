import { ADD_TO_CART , GET_CART_ITEMS, INCREASE_QUANTITY, DECREASE_QUANTITY,  CLEAR_PRODUCT } from "../Actions/types";

const initialState = {
    cartNumbers: 0,
    cartCost: 0,
    products: {
        dress1: {
            name: "dress1",
            tagName: 'dress1',
            price: 10.00,
            numbers: 0,
            inCart: false
        },
        dress2: {
            name: "dress2",
            tagName: 'dress2',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
        dress3: {
            name: "dress3",
            tagName: 'dress3',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        dress4: {
            name: "dress4",
            tagName: 'dress4',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        dress5: {
            name: "dress5",
            tagName: 'dress5',
            price: 50.00,
            numbers: 0,
            inCart: false
        },
        dress6: {
            name: "dress6",
            tagName: 'dress6',
            price: 60.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
     let productSelected = "";
  switch(action.type) {
       case ADD_TO_CART: 
      productSelected = { ...state.products[action.payload] }
      productSelected.numbers += 1;
      productSelected.inCart = true;
      console.log(productSelected);


       return{
           ...state,
           cartNumbers: state.cartNumbers + 1,
           cartCost: state.cartCost + state.products[action.payload].price,
           products: {
              ...state.products,
              [action.payload]: productSelected
          }
      }
       case GET_CART_ITEMS: 
      return{
          ...state
      }
      case INCREASE_QUANTITY: 
      productSelected = {...state.products[action.payload]}
      productSelected.numbers += 1;
      return{
          ...state,
          cartNumbers: state.cartNumbers + 1,
          cartCost: state.cartCost + state.products[action.payload].price,
          products: {
              ...state.products,
              [action.payload]: productSelected
          }
      }
      case DECREASE_QUANTITY: 
      productSelected = {...state.products[action.payload]}
       let newCartCost = 0;
       let newCartNumbers = 0;
      if(productSelected.numbers === 0){
        productSelected.numbers = 0;
        newCartCost = state.cartCost;
        newCartNumbers = state.cartNumbers
      }else {
        productSelected.numbers -= 1;
        newCartCost =  state.cartCost - state.products[action.payload].price;
        newCartNumbers = state.cartNumbers - 1 
      }
      
      return{
          ...state,
          cartNumbers: newCartNumbers,
          cartCost:newCartCost,
          products: {
              ...state.products,
              [action.payload]: productSelected
          }
      }

      case CLEAR_PRODUCT:
          productSelected = {...state.products[action.payload]};
          let numbersBackup = productSelected.numbers;
          productSelected.numbers = 0;
          productSelected.inCart = false;
          return {
              ...state,
              cartNumbers: state.cartNumbers - numbersBackup,
              cartCost: state.cartCost - (numbersBackup * productSelected.price),
              products: {
                  ...state.products,
                  [action.payload]: productSelected
              }
          }

      default:
          return state;
  }
}