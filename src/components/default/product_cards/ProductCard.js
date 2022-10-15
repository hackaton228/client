import React, { useEffect, useState } from "react";
import "./ProductCard.scss";

const ProductCard = ({
  image,
  discountPrice,
  is_favorite,
  is_in_cart,
  in_cart_quantity,
  quantity,
  price,
  title,
  id,
}) => {
  return (
    <div className="product-card_lg">
      <div
        className="product-card_lg__img"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="product-card_lg__quantity-n-price">
        <p>В наличи {quantity} шт.</p>

        <p>{price} р.</p>
      </div>

      <div className="product-card_lg__title">{title}</div>

      <div className="product-card_lg__price-n-cart">
        <p>{discountPrice} р.</p>
        <button>В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;
