import React, { useState } from "react";
import "./ProductSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import Cart from "../Cart/Cart";
import { LIMIT_PRODUCT_INTRODUCE } from "../../utils/constants";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--white-color)",
        position: "absolute",
        transform: "translateY(-50%)",
        top: "50%",
        right: "34px",
        height: "3.8rem",
        width: "3.8rem",
        borderRadius: "50%",
        zIndex: 10,
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        style={{
          fontSize: "var(--text-fontSize)",
          color: "var(--primary-color)",
        }}
        icon={faAngleRight}
      ></FontAwesomeIcon>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--white-color)",
        position: "absolute",
        transform: "translateY(-50%)",
        top: "50%",
        left: "20px",
        height: "3.8rem",
        width: "3.8rem",
        borderRadius: "50%",
        zIndex: 10,
        boxShadow: "0px 4px 4px 0px #00000040",
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon
        style={{
          fontSize: "var(--text-fontSize)",
          color: "var(--primary-color)",
        }}
        icon={faAngleLeft}
      ></FontAwesomeIcon>
    </div>
  );
};

const ProductSlider = () => {
  const [isShowNext, setIsShowNext] = useState(true);
  const [isShowPrev, setIsShowPrev] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: isShowNext ? <NextArrow /> : null,
    prevArrow: isShowPrev ? <PrevArrow /> : null,
  };

  const handleChangeSilder = (currentSlide) => {
    currentSlide === 0 ? setIsShowPrev(false) : setIsShowPrev(true);
    currentSlide + 6 === LIMIT_PRODUCT_INTRODUCE
      ? setIsShowNext(false)
      : setIsShowNext(true);
  };

  return (
    <div className="product-silder-container">
      <h1 className="product-silder-title">Sản phẩm bán chạy</h1>
      <Slider {...settings} afterChange={handleChangeSilder}>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
        <div className="product-silder-wrap">
          <Cart />
        </div>
      </Slider>
    </div>
  );
};

export default ProductSlider;
