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
        },
        shirt1: {
            name: "shirt1",
            tagName: 'shirt1',
            price: 10.00,
            numbers: 0,
            inCart: false
        },
        shirt2: {
            name: "shirt2",
            tagName: 'shirt2',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
        shirt3: {
            name: "shirt3",
            tagName: 'shirt3',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        cosmetics11: {
            name: "cosmetics11",
            tagName: 'cosmetics11',
            price: 10.00,
            numbers: 0,
            inCart: false
        },
        cosmetics12: {
            name: "cosmetics12",
            tagName: 'cosmetics12',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
        cosmetics13: {
            name: "cosmetics13",
            tagName: 'cosmetics13',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        cosmetics14: {
            name: "cosmetics14",
            tagName: 'cosmetics14',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        homedecor1: {
            name: "homedecor1",
            tagName: 'homedecor1',
            price: 10.00,
            numbers: 0,
            inCart: false
        },
        homedecor2: {
            name: "homedecor2",
            tagName: 'homedecor2',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
        homedecor3: {
            name: "homedecor3",
            tagName: 'homedecor3',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        homedecor4: {
            name: "homedecor4",
            tagName: 'homedecor4',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        gadgets1: {
            name: "gadgets1",
            tagName: 'gadgets1',
            price: 10.00,
            numbers: 0,
            inCart: false
        },
        gadgets2: {
            name: "gadgets2",
            tagName: 'gadgets2',
            price: 20.00,
            numbers: 0,
            inCart: false
        },
        gadgets3: {
            name: "gadgets3",
            tagName: 'gadgets3',
            price: 30.00,
            numbers: 0,
            inCart: false
        },
        gadgets4: {
            name: "gadgets4",
            tagName: 'gadgets4',
            price: 30.00,
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