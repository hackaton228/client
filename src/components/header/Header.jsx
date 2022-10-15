import React from "react";
import "./header.scss";
import MyInput from "../UI/input/MyInput";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">
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
