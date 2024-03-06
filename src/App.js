import "./App.scss";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import NotFound from "./pages/NotFoundPage/NotFound.jsx";
import LayoutUser from "./layout/LayoutUser.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import User from "./router/User.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { path } from "./utils";

import { jwtDecode } from "jwt-decode";
import { handleRefershTokenService } from "./services/userService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { handleChangeLogin } from "./redux/userSlice";
import { axiosJWT } from "./axios.js";

function App() {
  const dispatch = useDispatch();
  axiosJWT.interceptors.request.use(
    async (config) => {
      let access_token = localStorage.getItem("access_token");
      let refresh_token = localStorage.getItem("refresh_token");
      const currentTime = new Date();
      const decoded = jwtDecode(access_token);
      const decodedRefreshToken = jwtDecode(refresh_token);
      if (decoded?.exp < currentTime.getTime() / 1000) {
        if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
          const data = await handleRefershTokenService(refresh_token);
          localStorage.setItem("access_token", data);
          config.headers["token"] = `Bearer ${data}`;
        } else {
          dispatch(handleChangeLogin(false));
          toast.error("Phiên bản đăng nhập đã hết hạn");
        }
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <LayoutUser>
              <HomePage />
            </LayoutUser>
          }
        ></Route>
        <Route path={path.LOGIN} element={<LoginPage />}></Route>
        <Route
          path={path.HOME}
          element={
            <LayoutUser>
              <HomePage />
            </LayoutUser>
          }
        ></Route>
        <Route
          path={path.USER}
          element={
            <LayoutUser>
              <User />
            </LayoutUser>
          }
        ></Route>
        <Route
          path={path.PRODUCT}
          element={
            <LayoutUser>
              <ProductPage />
            </LayoutUser>
          }
        ></Route>
        <Route
          path={path.PRODUCT_DETAIL}
          element={
            <LayoutUser>
              <ProductDetailPage />
            </LayoutUser>
          }
        ></Route>
        <Route path={path.NOT_FOUND} element={<NotFound />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: "1.8rem" }}
      />
    </>
  );
}

export default App;
