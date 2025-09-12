import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./cart.scss"

const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(savedCart)
  }, [])

  const handleRemove = (id) => {
  const itemElement = document.getElementById(`cart-item-${id}`);
  if (itemElement) {
    itemElement.classList.add("removing");
    setTimeout(() => {
      const updated = cart.filter(item => item.id !== id);
      setCart(updated);
      localStorage.setItem("cart", JSON.stringify(updated));
    }, 300); // 0.3s dan keyin o‘chadi
  }
};


  const handleQtyChange = (id, type) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
        : item
    )
    setCart(updated)
    localStorage.setItem("cart", JSON.stringify(updated))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const discount = cart.reduce((sum, item) => {
    if (item.discount && item.discount > item.price) {
      return sum + (item.discount - item.price) * item.qty
    }
    return sum
  }, 0)
  const total = subtotal
  

  if (cart.length === 0) {
    return (
      <div className="cart empty">
        <h2>Your cart is empty</h2>
        <a href="/">Go shopping</a>
      </div>
    )
  }

  return (
    <div className="cart">
      <div className="cart__header">
        <h2>Your Cart</h2>
        <span>Home / Cart</span>
      </div>

      <div className="cart__content">
        {/* Cart Items */}
        <div className="cart__items">
          {cart.map(item => {
            const hasDiscount = item.discount && item.discount > item.price
            const discountPercent = hasDiscount
              ? Math.round((1 - item.price / item.discount) * 100)
              : 0

            return (
              <div className="cart__item" id={`cart-item-${item.id}`} key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="cart__info">
                  <h3>{item.title}</h3>
                  <div className="cart__prices">
                    <span className="price-now">${item.price.toFixed(2)}</span>
                    {hasDiscount && (
                      <>
                        <span className="price-old">${item.discount.toFixed(2)}</span>
                        <span className="price-badge">-{discountPercent}%</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="cart__actions">
                  <button onClick={() => handleQtyChange(item.id, "dec")}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => handleQtyChange(item.id, "inc")}>+</button>
                </div>

                <button className="cart__remove" onClick={() => handleRemove(item.id)}>
                  🗑
                </button>
              </div>
            )
          })}
        </div>

        {/* Order Summary */}
        <div className="cart__summary">
          <h3>Order Summary</h3>
          <div className="summary__row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary__row">
            <span>Discount</span>
            <span className="discount">-${discount.toFixed(2)}</span>
          </div>
          <div className="summary__row">
            <span>Delivery Fee</span>
            <span className="free">Free</span>
          </div>
          <div className="summary__total">
            <span>Total</span>
            <span>${(subtotal - discount).toFixed(2)}</span>
          </div>

          <div className="summary__promo">
            <input type="text" placeholder="Add promo code" />
            <button>Apply</button>
          </div>

          <button className="summary__checkout">Go to Checkout →</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
