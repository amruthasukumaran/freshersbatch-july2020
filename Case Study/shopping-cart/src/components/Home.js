import React from 'react'
import virat1 from '../images/virat1.jpg';
import womens2 from '../images/womens2.jpg';
import cosmetics1 from '../images/cosmetics1.jpg';
import gadgets3 from '../images/gadgets3.jpg';
import homedecor from '../images/homedecor.jpg';
import { Link } from 'react-router-dom';



const  Home = () => {

    return (
        <div className="container">
            <div className="image">
            <Link to={'/products'}><img className="image-resize" src={womens2} alt="image1"/></Link>
                <h3>Women's Fashion</h3>
            </div>
            <div className="image">
            <Link to={'/shirts'}><img className="image-resize" src={virat1} alt="image1"/></Link>
                <h3>Men's Fashion</h3>
            </div>
            <div className="image">
            <Link to={'/cosmetics'}><img className="image-resize" src={cosmetics1} alt="image1"/></Link>
                <h3>Cosmetics</h3>
            </div>
            <div className="image">
            <Link to={'/gadgets'}><img className="image-resize" src={gadgets3} alt="image1"/></Link>
                <h3>Electronics</h3>
            </div>
            <div className="image">
            <Link to={'/homedecor'}><img className="image-resize" src={homedecor} alt="image1"/></Link>
                <h3>Home Decor</h3>
            </div>

            
        </div>
    )
}

export default Home;