import React from "react";
import logo from "../../assets/Logo_Technology.png";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={logo} alt="" className="header-logo-img"></img>
      </div>
      <div className="header-content">
        <div className="header-wrap-search-option">
          <div className="header-search">
            <Search></Search>
          </div>
          <div className="header-wrap-option-cart">
            <div className="header-option">
              <button className="header-option-login">Đăng nhập</button>
            </div>
            <div className="header-cart">
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
              <span className="header-cart-notification">0</span>
            </div>
          </div>
        </div>

        <div className="header-product-type">
          <span className="product-type-item">Điện gia dụng</span>
          <span className="product-type-item">Điện gia dụng</span>
          <span className="product-type-item">Điện gia dụng</span>
          <span className="product-type-item">Điện gia dụng</span>
          <span className="product-type-item">Điện gia dụng</span>
          <span className="product-type-item">Điện gia dụng</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
