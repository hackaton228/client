import React from "react";
import "./header.scss";
import MyInput from "../UI/input/MyInput";
import {Link} from "react-router-dom";
import offliner_logo from "../../img/offliner_logo.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
        <img src={offliner_logo} alt="" />
      </div>

      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>

      <Link to='/auth' className="header-userMenu">Market - profile</Link>
    </nav>
  );
};

export default Header;
