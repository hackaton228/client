import React from "react";
import "./Header.scss";
import "../../style.scss";

import logo from "../../images/header/offliner_logo.svg";
import search from "../../images/header/search_icon.svg";
import cart from "../../images/header/cart_icon.svg";
import like from "../../images/header/like_icon.svg";
import profile from "../../images/header/user_icon.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header__logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>

      <div className="">
        <form action="" className="">
          <input type="text" className="header__search" />
          <button className="header__button">
            <img src={search} alt="" />
          </button>
        </form>
      </div>

      <div className="header__actions">
        <a href="">
          <img src={like} alt="" className="header__action-btn" />
        </a>
        <a href="">
          <img src={cart} alt="" />
        </a>
        <a href="">
          <img src={profile} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
