import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product from  "../../images/product_item.jpg";
import "./banner.scss";
import { DecountElement } from "../../utils/GetCategories";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_box-discount">
        <p className="banner_name-product">{DecountElement.title}</p>
        <p className="banner_discount">Скидка {DecountElement.price/5} руб.</p>
        <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
          <p className="banner_promo-txt">по промокоду</p>
          <div className="banner_promo">Осень</div>
          <div className="banner_price-product">{DecountElement.price} руб.</div>
          <div className="banner_new-price">{DecountElement.price - DecountElement.price/5}</div>
        </div>
        <div className="banner_button-box">
          <Link to="/category/:1">
            <button className="banner_button">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
      {/*product => берётся из бека и закружается сюда по id который приходит из объекта самого продукта*/}
      <img src={product} alt=""/>
   </div>
  );
};

export default Banner;
