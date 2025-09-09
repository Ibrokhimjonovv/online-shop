import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./header.scss";

const Header = () => {
    const [productTypes, setProductTypes] = useState(false);
    return (
        <header id='header'>
            <div className="header-inner">
                <div className="logo">
                    <Link to="/">Brand.shop</Link>
                </div>
                <div className="menus">
                    <nav>
                        <ul>
                            <li>
                                <Link to="#" onClick={() => setProductTypes(!productTypes)} className={productTypes ? "active" : ""}>Product for...</Link>
                                {
                                    productTypes && 
                                    <div className="product-types">
                                        <ul>
                                            <li>
                                                <Link to="/men">
                                                    <h3>Men's Clothes</h3>
                                                    <p>In attractive and spectacular colors and designs</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/women">
                                                    <h3>Women's Clothes</h3>
                                                    <p>Ladies, your style and tastes are important to us</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/kids">
                                                    <h3>Kids Clothes</h3>
                                                    <p>For all ages, with happy and beautiful colors</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/bags-shoes">
                                                    <h3>Bags and Shoes</h3>
                                                    <p>Suitable for men, women and all tastes and styles</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </li>
                            <li>
                                <Link to="#">On sale</Link>
                            </li>
                            <li>
                                <Link to="#">New arrivals</Link>
                            </li>
                            <li>
                                <Link to="#">Brands</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="right-nav">
                        <ul>
                            <li>
                                <Link to="#">
                                    <i className='bxr  bxs-cart bx-flip-horizontal' style={{ color: '#000' }}></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className='bxr  bxs-user-circle bx-flip-horizontal' style={{ color: '#000' }}></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header