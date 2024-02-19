import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_Technology.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Navbar.scss";

const ItemSkeleton = () => {
  return (
    <div style={{ display: "flex" }}>
      <Skeleton height={36} width={36} style={{ marginRight: 10 }}></Skeleton>
      <Skeleton height={36} style={{ width: "180px" }}></Skeleton>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="nav-container">
      <h1 className="nav-title">Danh mục</h1>
      <div className="nav-list">
        <Link className="nav-item">
          <ItemSkeleton></ItemSkeleton>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>{" "}
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
        <Link className="nav-item">
          <img className="nav-item-img" src={logo} alt=""></img>
          <span className="nav-item-content">Đồ Chơi - Mẹ và bé</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
