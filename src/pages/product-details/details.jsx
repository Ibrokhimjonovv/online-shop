import React, { useContext, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Context, products } from '../../context/context'
import './details.scss'
import { toast } from "react-toastify"

const Details = () => {
    const { id } = useParams()
    const product = products.find(p => Number(p.id) === Number(id))
    const [mainImg, setMainImg] = useState(product ? product.img : '')
    const [qty, setQty] = useState(1)
    const { cart, updateCart } = useContext(Context);

    if (!product) return (
        <div className="product-details--notfound">
            <h2>Product not found</h2>
            <p>Try again or <Link to="/">go back to home</Link>.</p>
        </div>
    )

    const { title, price, discount, rating, category, type, otherImages } = product
    const hasDiscount = discount && discount > price
    const discountPercent = hasDiscount ? Math.round((1 - price / discount) * 100) : 0

    const handleAddToCart = () => {
        const existing = cart.find(item => item.id === product.id);
        let newCart;

        if (existing) {
            newCart = cart.map(item =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            );
        } else {
            newCart = [...cart, { ...product, qty: 1 }];
        }

        updateCart(newCart);


        // ✅ Toast notification
        toast.success(`${title} added to cart!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored"
        })
    }

    const formatCategory = (category) => {
        return category.replace(/-/g, " ");
    };

    return (
        <div id="product-detail" className="product-details">
            <div className="product-details__container">
                {/* Gallery */}
                <div className="product-details__gallery">
                    <div className="product-details__main-img">
                        <img src={mainImg} alt={title} />
                    </div>
                    <div className="product-details__thumbs">
                        {[product.img, ...otherImages].map((src, idx) => (
                            <button
                                key={idx}
                                className={`thumb ${src === mainImg ? 'active' : ''}`}
                                onClick={() => setMainImg(src)}
                            >
                                <img src={src} alt={`${title} ${idx}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info */}
                <div className="product-details__info">
                    <h1 className="info__title">{title}</h1>

                    <div className="info__meta">
                        <span>⭐ {rating}</span>
                        <span>Category: <span style={{ textTransform: "capitalize" }}>{formatCategory(category)}</span></span>
                        <span>Type: <span style={{ textTransform: "capitalize" }}>{type}</span></span>
                    </div>

                    <div className="info__price">
                        <div className="price__now">${price.toFixed(2)}</div>
                        {hasDiscount > 0 && <div className="price__old">${discount.toFixed(2)}</div>}
                        {hasDiscount > 0 && <div className="price__badge">-{discountPercent}%</div>}
                    </div>

                    <p className="info__description">
                        Here you can add a short description about the product.
                    </p>

                    <div className="info__actions">
                        <div className="actions__qty">
                            <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
                            <input
                                type="number"
                                value={qty}
                                onChange={e => setQty(Math.max(1, Number(e.target.value) || 1))}
                            />
                            <button onClick={() => setQty(q => q + 1)}>+</button>
                        </div>

                        <div className="actions__buttons">
                            <button className="btn btn--primary" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                            <button className="btn btn--outline">Buy Now</button>
                        </div>
                    </div>

                    <div className="info__extras">
                        <div>Delivery: 2-5 business days</div>
                        <div>Payment: card or cash</div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="product-details__related">
                <h3>Related Products</h3>
                <div className="related__list">
                    {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
                        <Link key={p.id} to={`/shop/${p.id}`} className="related__card">
                            <img src={p.img} alt={p.title} />
                            <div className="related__title">{p.title}</div>
                            <div className="related__price">${p.price.toFixed(2)}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Details
