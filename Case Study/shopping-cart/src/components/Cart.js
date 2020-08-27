import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Dress1 from '../images/Dress1.jpg';
import Dress2 from '../images/Dress2.jpg';
import Dress3 from '../images/Dress3.jpg';
import Dress4 from '../images/Dress4.jpg';
import Dress5 from '../images/Dress5.jpg';
import Dress6 from '../images/Dress6.jpg';
import '../styles.css'
import { productQuantity, clearProduct } from '../Actions/productQuantity';

function Cart({cartProps, productQuantity, clearProduct}) {
    console.log(cartProps);
    
    let productsInCart = [];

    Object.keys(cartProps.products).forEach( function(item){
        console.log(item);
        console.log(cartProps.products[item].inCart);
        if(cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
        }
        console.log(productsInCart);
    });

    const productImages = (product) => {
          if( product.tagName === 'dress1') {
              return Dress1;
          }else if( product.tagName === 'dress2') {
            return Dress2;
          }else if( product.tagName === 'dress3' ){
            return Dress3;
          }else if( product.tagName === 'dress4'){
            return Dress4;
          }else if( product.tagName === 'dress5'){
            return Dress5;
          }else if( product.tagName === 'dress6'){
            return Dress6;
          }
    }


    productsInCart = productsInCart.map( (product, index) => {
        console.log("my product is ");
        console.log(product);

        return(
            <Fragment key={index}>
                
               <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle">
                   </ion-icon><img src={productImages(product)}/>
                   <span className="sm-hide">{product.name}</span>
               </div>
               <div className="price sm-hide">Rs{product.price},00</div>
               <div className="quantity">
                 <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                 <span>{product.numbers}</span>
                 <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
               </div>
                 <div className="total">Rs{product.numbers * product.price}</div>
            </Fragment>
        )
    }) 

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                {productsInCart}
            </div>
            <div className="cartTotalContainer">
               <h4 className="cartTotalTitle">Cart Total</h4>
               <h4 className="cartTotal">{cartProps.cartCost}</h4>
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, { productQuantity, clearProduct})(Cart);
