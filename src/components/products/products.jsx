import React from "react";
import "./products.scss";
import { products } from "../../context/context";

const Star = ({ type }) => {
    if (type === "full") {
        return (
            <svg
                className="me-1"
                width="20"
                height="20"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                    fill="#FFC633"
                />
            </svg>
        );
    }
    if (type === "half") {
        return (
            <svg
                className="me-1"
                width="20"
                height="20"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="half-grad">
                        <stop offset="50%" stopColor="#FFC633" />
                        <stop offset="50%" stopColor="#E0E0E0" />
                    </linearGradient>
                </defs>
                <path
                    d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                    fill="url(#half-grad)"
                />
            </svg>
        );
    }
    return (
        <svg
            className="me-1"
            width="20"
            height="20"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                fill="#E0E0E0"
            />
        </svg>
    );
};

const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} type="full" />);
    }
    if (halfStar) {
        stars.push(<Star key="half" type="half" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-${i}`} type="empty" />);
    }
    return stars;
};

const Products = () => {
    // Mahsulotlarni kategoriyaga qarab guruhlab olish
    const categories = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    // category stringini chiroyli ko'rinishga o'tkazish
    const formatCategory = (category) => {
        return category.replace(/-/g, " ");
    };

    return (
        <div id="products-container">
            {Object.entries(categories).map(([category, items]) => (
                <div key={category} className="category-block">
                    <h1 className="products-title">{formatCategory(category)}</h1>
                    <div className="products-container">
                        {items.map((product) => (
                            <div className="product" key={product.id}>
                                <div className="img-container">
                                    <img src={product.img} alt={product.title} />
                                </div>
                                <div className="datas">
                                    <div className="product-title">{product.title}</div>
                                    <div className="rating">
                                        {renderStars(product.rating)}
                                        <span className="product-rating">{product.rating}/5</span>
                                    </div>
                                    <div className="price">
                                        <div className="new-price">${product.price}</div>
                                        {
                                            product.discount > 0 && <>
                                                <div className="old-price">${product.discount}</div>
                                                <div className="discount">
                                                    -{Math.round(
                                                        ((product.discount - product.price) /
                                                            product.discount) *
                                                        100
                                                    )}
                                                    %
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
