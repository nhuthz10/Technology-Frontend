import React from "react";
import "./Comment.scss";
import CustomRating from "../CustomRating/CustomRating";

const Comment = ({ avatar, rating, isFirst, isLast }) => {
  return (
    <div
      className="comment-container"
      style={{
        borderTop: isFirst ? "1px solid #e6e3e3" : "none",
        borderBottom: isLast ? "none" : "1px solid #e6e3e3",
      }}
    >
      <div className="comment-user-infor">
        <img src={avatar} alt="" className="comment-user-avatar"></img>
        <div className="comment-user-infor-content">
          <h1 className="comment-user-infor-name">Minh Nhut</h1>
          <span className="comment-user-infor-time">1 hours ago</span>
        </div>
      </div>
      <div className="comment-content">
        <CustomRating
          className="comment-content-rating"
          value={rating}
          readOnly={true}
        ></CustomRating>
        <p className="comment-content-text">Good product</p>
      </div>
    </div>
  );
};

export default Comment;
