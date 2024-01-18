import React from "react";
import Header from "../components/Header/Header";
import "./LayoutUser.scss";

const LayoutUser = ({ children }) => {
  return (
    <div className="layout-user-container">
      <Header />
      <div className="layout-user-content">{children}</div>
    </div>
  );
};

export default LayoutUser;
