import React from 'react'
import gadgets1 from '../images/gadgets1.png';
import gadgets2 from '../images/gadgets2.jpg';
import gadgets3 from '../images/gadgets3.jpeg';
import gadgets4 from '../images/gadgets4.jpg';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/cartAction';

const  Gadgets= (props) => {
    console.log(props);
    return (
        <div className="container">
            
<div className="image">
<img className="image-resize" src={gadgets1} alt="image6"/>
    <h3>gadgets1</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('gadgets1') } className="addToCart cart6" href="#">Add to Cart</a>
</div>

<div className="image">
<img className="image-resize" src={gadgets2} alt="image6"/>
    <h3>gadgets2</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('gadgets2') } className="addToCart cart6" href="#">Add to Cart</a>
</div>

<div className="image">
<img className="image-resize" src={gadgets3} alt="image6"/>
    <h3>gadgets3</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('gadgets3') } className="addToCart cart6" href="#">Add to Cart</a>
</div>
<div className="image">
<img className="image-resize" src={gadgets4} alt="image6"/>
    <h3>gadgets4</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('gadgets4') } className="addToCart cart6" href="#">Add to Cart</a>
</div>
           
            
        </div>
    )
}

export default connect(null, { addToCart })(Gadgets);


