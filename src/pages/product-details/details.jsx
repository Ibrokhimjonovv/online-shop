import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../context/context'
import './details.scss'

const Details = () => {
  const { id } = useParams()
  const product = products.find(p => Number(p.id) === Number(id))
  const [mainImg, setMainImg] = useState(product ? product.img : '')
  const [qty, setQty] = useState(1)

  if (!product) return (
    <div className="product-details--notfound">
      <h2>Mahsulot topilmadi</h2>
      <p>Qaytadan sinab ko'ring yoki <Link to="/">bosh sahifaga</Link> o'ting.</p>
    </div>
  )

  const { title, price, discount, rating, category, type, otherImages } = product
  const hasDiscount = discount && discount > price
  const discountPercent = hasDiscount ? Math.round((1 - price / discount) * 100) : 0

  const handleAddToCart = () => {
    alert(`${title} savatga qo'shildi (qty: ${qty})`)
  }

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
            <span>Kategoriya: {category}</span>
            <span>Turi: {type}</span>
          </div>

          <div className="info__price">
            <div className="price__now">${price.toFixed(2)}</div>
            {hasDiscount > 0 && <div className="price__old">${discount.toFixed(2)}</div>}
            {hasDiscount > 0 && <div className="price__badge">-{discountPercent}%</div>}
          </div>

          <p className="info__description">
            Bu yerga mahsulot haqida qisqacha tavsif yoziladi.
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
                Savatchaga qo'shish
              </button>
              <button className="btn btn--outline">Bir zumda sotib olish</button>
            </div>
          </div>

          <div className="info__extras">
            <div>Yetkazib berish: 2-5 ish kuni</div>
            <div>To'lov: karta yoki naqd</div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="product-details__related">
        <h3>O'xshash mahsulotlar</h3>
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
