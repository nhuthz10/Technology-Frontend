import React from "react";
import Header from "../components/Header/Header";
import "./LayoutUser.scss";
import Loading from "../components/Loading/Loading";
import { useSelector } from "react-redux";

const LayoutUser = ({ children }) => {
  const loading = useSelector((state) => state.app.loading);
  return (
    <Loading isLoading={loading}>
      <div className="layout-user-container">
        <Header />
        <div className="layout-user-content">{children}</div>
      </div>
    </Loading>
  );
};

export default LayoutUser;
