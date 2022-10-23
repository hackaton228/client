import React from "react";
import "./banner.scss";

const Banner = () => {
  const productItem = document.getElementsByClassName("product")
  let lastElement = false
  let firstElement = false
  
  const nextCard = (e) => {
    e.preventDefault()
    for(let i = 0; i < productItem.length; i++) {
      if(productItem.item(i).className === "product active") {
        console.log(productItem.item(i))
        if(productItem.item(i).id == productItem.length) {
          lastElement = true
        }
        if(lastElement) {
          productItem.item(i).classList.value = "product"
          productItem.item(0).classList.value = "product active"
          lastElement = false
        }
        productItem.item(i).classList.value = "product"
        productItem.item(i+1).classList.value = "product active"
        break
      }
    }
  }
  const prevCard = (e) => {
    e.preventDefault()
    for(let i = 0; i < productItem.length; i++) {
      if(productItem.item(i).className === "product active") {
        console.log(productItem.item(i))
        if(productItem.item(i).id == 1) {
          firstElement = true
        }
        if(firstElement) {
          productItem.item(i).classList.value = "product"
          productItem.item(productItem.length-1).classList.value = "product active"
          firstElement = false
        }
        productItem.item(i).classList.value = "product"
        productItem.item(i-1).classList.value = "product active"
        break
      }
    }
  }
  
  return (
    <div className="banner">
  
      <div className="banner-card">
  
        <div className="products">
          <div className="product active" id="1">
            <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Stag.svg" alt=""/></div>
            <h1 className="title">The Magnificent Stag</h1>
            <p className="description">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.</p>
          </div>
  
          <div className="product" id="2">
            <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Bear.svg"/></div>
            <h1 className="title">The Courageous Bear</h1>
            <p className="description">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.</p>
          </div>
          
          <div className="product" id="3">
            <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Mouse.svg"/></div>
            <h1 className="title">The Sneaky Mouse</h1>
            <p className="description">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.</p>
          </div>
          
          <div className="product" id="4">
            <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Fox.svg"/></div>
            <h1 className="title">The Cunning Fox</h1>
            <p className="description">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus.</p>
          </div>
        </div>
  
  
  
        <div className="banner-footer">
          <div className="btn" onClick={prevCard}>Prev</div>
          <div className="btn" onClick={nextCard}>Next</div>
        </div>
      </div>
      
  
      {/*{DiscountElement.map((item, id) => { return (*/}
      {/*  <div key={id} className="banner-slider">*/}
          {/*<div className="banner_box-discount">*/}
          {/*  <p className="banner_name-product">{item.title}</p>*/}
          {/*  <p className="banner_discount">Скидка {item.price/5} руб.</p>*/}
          {/*  <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>*/}
          {/*    <p className="banner_promo-txt">по промокоду</p>*/}
          {/*    <div className="banner_promo">Осень</div>*/}
          {/*    <div className="banner_price-product">{item.price} руб.</div>*/}
          {/*    <div className="banner_new-price">{item.price - item.price/5}</div>*/}
          {/*  </div>*/}
          {/*  <div className="banner_button-box">*/}
          {/*    <Link to="/category/:1">*/}
          {/*      <button className="banner_button">*/}
          {/*        Подробнее*/}
          {/*      </button>*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*/!*product => берётся из бека и закружается сюда по id который приходит из объекта самого продукта*!/*/}
          {/*<img src={product} alt=""/>*/}
        {/*</div>)*/}
      {/*})}*/}
   </div>
  );
};

export default Banner;
