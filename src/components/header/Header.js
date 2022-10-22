import React, {useState} from "react";
import { Link } from "react-router-dom";
import SearchField from "../searchField/SearchField";
import logo from "../../images/offliner_logo.svg";
import cart from "../../images/cart_icon.svg";
import like from "../../images/like_icon.svg";
import profile from "../../images/user_icon.svg";
import "./header.scss";

const Header = () => {
  let interval;
  const [search, setSearch] = useState('');
  
  const searchChange = (e) => {
    clearInterval(interval)
    interval = setTimeout(() => {
      setSearch(e.target.value)
    }, 500)
  }
  
  console.log(search)
  
  return (
    <div className="header-container">
      <div className="header__logo">
        <Link href="/">
          <img src={logo} alt="offline" />
        </Link>
      </div>
      <SearchField value={search} onChange={searchChange}/>
      <div className="header__actions">
        <Link to="/">
          <img src={like} alt="" />
        </Link>
        <Link to="/">
          <img src={cart} alt="" />
        </Link>
        <Link to="/auth">
          <img src={profile} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
