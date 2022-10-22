import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/offliner_logo.svg";
import facebook from "../../images/icons/facebook.svg";
import instagram from "../../images/icons/instagram.svg";
import whatsapp from "../../images/icons/whatsapp.svg";
import apple from "../../images/icons/apple.svg";
import googlePlay from "../../images/icons/google-play.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="header__logo">
          <Link href="/">
            <img src={logo} alt="offline" />
          </Link>
        </div>
        <ul className="footer-nav-col-1">
          <li>
            <Link to="/">О компании</Link>
          </li>
          <li>
            <Link to="/">
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link to="/">
              Поддержка
            </Link>
          </li>
          <ul className="social-icons">
            <li className="icon">
                <Link to="/">
                  <img src={facebook} alt="facebook"/>
                </Link>
            </li>
            <li className="icon">
              <Link to="/">
                <img src={instagram} alt="instagram"/>
              </Link>
            </li>
            <li className="icon">
              <Link to="/">
                <img src={whatsapp} alt="whatsapp"/>
              </Link>
            </li>
          </ul>
        </ul>
        <ul className="footer-nav-col-2">
          <li>
            <Link to="/">Скачайте приложение</Link>
          </li>
          <ul className="social-icons">
            <li className="icon">
              <Link to="/">
                <img src={apple} alt="apple"/>
              </Link>
            </li>
            <li className="icon">
              <Link to="/">
                <img src={googlePlay} alt="googlePlay"/>
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
