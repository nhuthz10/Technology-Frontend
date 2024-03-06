import React from "react";
import { Routes, Route } from "react-router-dom";
import { path } from "../utils";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import NotFound from "../pages/NotFoundPage/NotFound";

const User = () => {
  return (
    <Routes>
      <Route path={path.USER_PROFILE} element={<ProfilePage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default User;
