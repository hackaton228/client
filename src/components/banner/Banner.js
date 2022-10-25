import React from "react";
import { Link } from "react-router-dom";
import { DiscountElement } from "../../utils/GetCategories";
import product from "../../images/product_item.jpg"
import "./banner.scss";

const Banner = () => {
  console.log("RENDER BANNER")
  const productItems = document.getElementsByClassName("product")
  const bannerButtons = document.getElementsByClassName("banner-button-slider")
  
  setTimeout(() => {
    productItems[0].classList.add("active")
    bannerButtons[0].classList.add("btn-active")
  },300)
  
  Object.filter = (obj, predicate) =>
    Object.fromEntries(Object.entries(obj).filter(predicate));

  const prevCard = (e) => {
    for(let i = 0; i < productItems.length; i++) {
      productItems[i].classList.value = "product"
      bannerButtons[i].classList.value = "banner-button-slider"
    }
    const filteredProductItem = Object.filter(productItems, productItem => productItem[1].id === e.target.id)
    const filteredBannerButton = Object.filter(bannerButtons, bannerButton => bannerButton[1].id === e.target.id)
    for(let i = 0; i < productItems.length; i++) {
      if(filteredProductItem[i]) {
        filteredProductItem[i].classList.add("active")
        filteredBannerButton[i].classList.add("btn-active")
      }
    }
  }
  
  return (
    <div className="banner">
      <div className="banner-card">
        <div className="products">
          {DiscountElement.map(item => { return (
            <div className="product" key={item.id} id={item.id}>
              <div className="banner_box">
                <div>
                  <p className="banner-name-product">{item.title}</p>
                  <p className="banner-discount">Скидка {item.price} руб.</p>
                  <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
                    <p className="banner-promo-txt">по промокоду</p>
                    <div className="banner-promo">Осень</div>
                    <div className="banner-price-product">{item.price} руб.</div>
                    <div className="banner-new-price">{item.price}</div>
                  </div>
                  <div className="banner-button_box">
                    {/*дописать Link на категорию к котрой относиться*/}
                    <Link to="/category/:1">
                      <button className="banner-button">
                        Подробнее
                      </button>
                    </Link>
                  </div>
                </div>
                {/*product => берётся из бека и закружается сюда по id который приходит из объекта самого продукта*/}
                <img style={{borderRadius: "0 20px 20px 0"}} src={product} alt=""/>
              </div>
            </div>
          )})
          }
        </div>
        <div className="banner-button-slider_box">
          {DiscountElement.map(item => { return (
            <button className="banner-button-slider" onClick={prevCard} key={item.id} id={item.id}/>
          )})
          }
        </div>
      </div>
   </div>
  );
};

export default Banner;
