import React from 'react';
import './header.scss'
import MyInput from "../UI/input/MyInput";

const Header = () => {
  return (
    <nav className="header">
      <div className="logo">logo</div>
      <MyInput></MyInput>
      <div className="header-userMenu">
        Market - profile
      </div>
    </nav>
  );
};

export default Header;