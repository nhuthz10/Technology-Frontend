import React, { useState } from "react";
import logo from "../../assets/Logo_Technology.png";
import Search from "../Search/Search";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  handleChangeLogin,
  handleChangeUserInfor,
} from "../../redux/userSlice";
import { menuUser } from "../../utils";

const Header = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isHome = location.pathname === "/" || location.pathname === "home";

  const isLogin = useSelector((state) => state.user.isLogin);

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickLogin = () => {
    setIsOpenLogin(true);
  };

  const handleClickLogout = () => {
    dispatch(handleChangeLogin(false));
    dispatch(handleChangeUserInfor(null));
    localStorage.clear();
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
              {isLogin ? (
                <Tippy
                  interactive
                  placement="bottom"
                  delay={[0, 300]}
                  offset={[0, 10]}
                  render={(attrs) => (
                    <div
                      className="account-option-list"
                      tabIndex="-1"
                      {...attrs}
                    >
                      {menuUser.length > 0 &&
                        menuUser.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              to={item.path}
                              className="account-option-item"
                              style={{
                                borderTopLeftRadius: index === 0 ? 10 : 0,
                                borderTopRightRadius: index === 0 ? 10 : 0,
                                borderBottomLeftRadius:
                                  index === menuUser.length - 1 ? 10 : 0,
                                borderBottomRightRadius:
                                  index === menuUser.length - 1 ? 10 : 0,
                              }}
                            >
                              {item.lable}
                            </Link>
                          );
                        })}
                    </div>
                  )}
                >
                  <button className="header-option-login">
                    <FontAwesomeIcon
                      className="header-option-icon-login"
                      icon={faFaceSmile}
                    ></FontAwesomeIcon>
                    Tài khoản
                  </button>
                </Tippy>
              ) : (
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
              )}
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
