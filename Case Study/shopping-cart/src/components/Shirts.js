import React from 'react'
import shirt1 from '../images/shirt1.jpg';
import shirt2 from '../images/shirt2.jpg';
import shirt3 from '../images/shirt3.jpg';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/cartAction';

const  Shirts = (props) => {
    console.log(props);
    return (
        <div className="container">
            
<div className="image">
<img className="image-resize" src={shirt1} alt="image6"/>
    <h3>shirt1</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('shirt1') } className="addToCart cart6" href="#">Add to Cart</a>
</div>

<div className="image">
<img className="image-resize" src={shirt2} alt="image6"/>
    <h3>shirt2</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('shirt2') } className="addToCart cart6" href="#">Add to Cart</a>
</div>

<div className="image">
<img className="image-resize" src={shirt3} alt="image6"/>
    <h3>shirt3</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('shirt3') } className="addToCart cart6" href="#">Add to Cart</a>
</div>
           
            
        </div>
    )
}

export default connect(null, { addToCart })(Shirts);


