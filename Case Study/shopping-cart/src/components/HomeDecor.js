import React from 'react'
import homedecor1 from '../images/homedecor1.jpg';
import homedecor2 from '../images/homedecor2.jpg';
import homedecor3 from '../images/homedecor3.png';
import homedecor4 from '../images/homedecor4.jpg';
import { connect } from 'react-redux';
import { addToCart } from '../Actions/cartAction';

const  HomeDecor = (props) => {
    console.log(props);
    return (
        <div className="container">
            
<div className="image">
<img className="image-resize" src={homedecor1} alt="image6"/>
    <h3>homedecor1</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('homedecor1') } className="addToCart cart6" href="#">Add to Cart</a>
</div>

<div className="image">
<img className="image-resize" src={homedecor2} alt="image6"/>
    <h3>homedecor2</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('homedecor2') } className="addToCart cart6" href="#">Add to Cart</a>
</div>

<div className="image">
<img className="image-resize" src={homedecor3} alt="image6"/>
    <h3>homedecor3</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('homedecor3') } className="addToCart cart6" href="#">Add to Cart</a>
</div>
<div className="image">
<img className="image-resize" src={homedecor4} alt="image6"/>
    <h3>homedecor4</h3>
    <h3>60 Rs</h3>
    <a onClick={() => props.addToCart('homedecor4') } className="addToCart cart6" href="#">Add to Cart</a>
</div>
           
            
        </div>
    )
}

export default connect(null, { addToCart })(HomeDecor);


