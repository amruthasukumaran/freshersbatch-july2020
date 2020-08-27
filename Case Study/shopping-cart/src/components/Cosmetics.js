import React from 'react'
import cosmetics11 from '../images/cosmetics11.jpg';
import cosmetics12 from '../images/cosmetics12.jpg';
import cosmetics13 from '../images/cosmetics13.jpg';
import cosmetics14 from '../images/cosmetics14.jpg';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/cartAction';

const  Cosmetics = (props) => {
    console.log(props);
    return (
        <div className="container">
            
<div className="image">
<img className="image-resize" src={cosmetics11} alt="image6"/>
    <h3>cosmetics11</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('cosmetics11') } className="addToCart cart6" href="#">Add to Cart</a>
</div>

<div className="image">
<img className="image-resize" src={cosmetics12} alt="image6"/>
    <h3>cosmetics12</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('cosmetics12') } className="addToCart cart6" href="#">Add to Cart</a>
</div>

<div className="image">
<img className="image-resize" src={cosmetics13} alt="image6"/>
    <h3>cosmetics13</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('cosmetics13') } className="addToCart cart6" href="#">Add to Cart</a>
</div>
<div className="image">
<img className="image-resize" src={cosmetics14} alt="image6"/>
    <h3>cosmetics14</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('cosmetics14') } className="addToCart cart6" href="#">Add to Cart</a>
</div>
           
            
        </div>
    )
}

export default connect(null, { addToCart })(Cosmetics);


