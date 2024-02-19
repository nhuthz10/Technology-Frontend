import React, { useState } from "react";
import logo from "../../assets/Logo_Technology.png";
import Search from "../Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import "./Header.scss";

const Header = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/" || location.pathname === "home";

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickLogin = () => {
    setIsOpenLogin(true);
  };

  return (
    <div className="header-container">
      <div className="header-logo" onClick={handleClickHome}>
        <img src={logo} alt="" className="header-logo-img"></img>
      </div>
      <div className="header-content">
        <div className="header-wrap-search-option">
          <div className="header-search">
            <Search></Search>
          </div>
          <div className="header-wrap-option-cart">
            <div className="header-option">
              <button
                onClick={handleClickHome}
                className="header-option-home"
                style={{
                  color: isHome ? "var(--primary-color)" : "",
                }}
              >
                <FontAwesomeIcon
                  className="header-option-icon-home"
                  icon={faHouse}
                ></FontAwesomeIcon>
                Trang chủ
              </button>
              <button
                className="header-option-login"
                onClick={handleClickLogin}
              >
                <FontAwesomeIcon
                  className="header-option-icon-login"
                  icon={faFaceSmile}
                ></FontAwesomeIcon>
                Đăng nhập
              </button>
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
      <LoginPage
        isOpenLogin={isOpenLogin}
        setIsOpenLogin={setIsOpenLogin}
      ></LoginPage>
    </div>
  );
};

export default Header;
