import React from "react";
import "./Cart.scss";
import logo from "../../assets/Logo_Technology.png";
import CustomRating from "../CustomRating/CustomRating";

const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const Cart = () => {
  return (
    <div className="cart-container">
      <img src={logo} alt="" className="cart-img"></img>
      <div className="cart-content">
        <p className="cart-product-name">
          Nồi cơm điện tử Toshiba RC-18NTFV(W) (1.8 Lít)...
        </p>
        <CustomRating
          className="cart-product-ratting"
          name="simple-controlled"
          value={5}
          readOnly
        />
        <p className="cart-product-price">
          {currencyFormatter.format(12345678)}
          <span
            style={{
              textDecoration: "underline",
              marginLeft: 2,
            }}
          >
            đ
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
