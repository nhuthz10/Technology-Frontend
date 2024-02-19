import React from "react";
import "./Comment.scss";
import CustomRating from "../CustomRating/CustomRating";
import like from "../../assets/like.png";
import quantity_commented from "../../assets/quantity_commented.png";
import like_comment from "../../assets/like_comment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ avatar, rating, isFirst, isLast }) => {
  return (
    <div
      className="comment-container"
      style={{
        borderTop: isFirst ? "1px solid #e6e3e3" : "none",
        borderBottom: isLast ? "none" : "1px solid #e6e3e3",
      }}
    >
      <div className="comment-wrap-user-infor">
        <div className="comment-user-infor">
          <img src={avatar} alt="" className="comment-user-avatar"></img>
          <div className="comment-user-infor-content">
            <h1 className="comment-user-infor-name">Minh Nhut</h1>
            <span className="comment-user-infor-time">1 hours ago</span>
          </div>
        </div>
        <div className="comment-user-wrap-quantity">
          <div className="comment-user-quantity-title">
            <img
              className="comment-user-quantity-img"
              src={quantity_commented}
              alt=""
            ></img>
            <span className="comment-user-quantity-text">Đã viết</span>
          </div>
          <div className="comment-user-wrap-quantity-commented">
            <span className="comment-user-quantity-commented">10</span>
            <span className="comment-user-quantity-text">Đánh giá</span>
          </div>
        </div>
        <div className="comment-user-wrap-like">
          <div className="comment-user-like-title">
            <img className="comment-user-like-img" src={like} alt=""></img>
            <span className="comment-user-like-text">Đã viết</span>
          </div>
          <div className="comment-user-wrap-liked">
            <span className="comment-user-quantity-liked">10</span>
            <span className="comment-user-liked-text">Lượt thích</span>
          </div>
        </div>
      </div>

      <div className="comment-content">
        <CustomRating
          className="comment-content-rating"
          value={rating}
          readOnly={true}
        ></CustomRating>
        <div className="comment-bought">
          <FontAwesomeIcon
            className="comment-bought-icon"
            icon={faCircleCheck}
          ></FontAwesomeIcon>
          Đã mua hàng
        </div>
        <p className="comment-content-text">Good product</p>
        <div className="comment-option-btn">
          <button className="comment-btn-like">
            <img
              src={like_comment}
              alt=""
              className="comment-btn-like-img"
            ></img>
            1
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
