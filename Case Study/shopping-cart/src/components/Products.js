import React from 'react'
import Dress1 from '../images/Dress1.jpg';
import Dress2 from '../images/Dress2.jpg';
import Dress3 from '../images/Dress3.jpg';
import Dress4 from '../images/Dress4.jpg';
import Dress5 from '../images/Dress5.jpg';
import Dress6 from '../images/Dress6.jpg';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/cartAction';

const  Products = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="image">
                <img className="image-resize" src={Dress1} alt="image1"/>
                <h3>Dress1</h3>
                <h3>10 Rs</h3>
                <a onClick={() => props.addToCart('dress1') } className="addToCart cart1" href="#">Add to Cart</a>  
            </div>
            <div className="image">
            <img className="image-resize" src={Dress2} alt="image2"/>
                <h3>Dress2</h3>
                <h3>20 Rs</h3>
                <a onClick={() => props.addToCart('dress2') } className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
            <img className="image-resize" src={Dress3} alt="image3"/>
                <h3>Dress3</h3>
                <h3>30 Rs</h3>
                <a onClick={() => props.addToCart('dress3') } className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
            <img className="image-resize" src={Dress4} alt="image4"/>
                <h3>Dress4</h3>
                <h3>40 Rs</h3>
                <a onClick={() => props.addToCart('dress4') } className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            <div className="image">
            <img className="image-resize" src={Dress5} alt="image5"/>
                <h3>Dress5</h3>
                <h3>50 Rs</h3>
                <a onClick={() => props.addToCart('dress5') } className="addToCart cart5" href="#">Add to Cart</a>
            </div>
            <div className="image">
            <img className="image-resize" src={Dress6} alt="image6"/>
                <h3>Dress6</h3>
                <h3>60 Rs</h3>
                <a onClick={() => props.addToCart('dress6') } className="addToCart cart6" href="#">Add to Cart</a>
            </div>
           
            
        </div>
    )
}

export default connect(null, { addToCart })(Products);