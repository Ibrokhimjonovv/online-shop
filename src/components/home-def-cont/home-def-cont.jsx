import React from 'react'
import { Link } from 'react-router-dom';
import "./home-def-cont.scss";

const HomeDefCont = () => {
  return (
    <div id='home-def-container'>
        <div className="def-container-inner">
            <div className="def-left">
                <h1 id='tttitle'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <Link to="/shop">Shop Now</Link>
                <div className="lies">
                    <div className="cube">
                        <h1>200+</h1>
                        <p>International Brands</p>
                    </div>
                    <div className="cube">
                        <h1>2,000+</h1>
                        <p>High-Quality Products</p>
                    </div>
                    <div className="cube">
                        <h1>30,000+</h1>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeDefCont