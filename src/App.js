import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import NotFound from "./pages/NotFoundPage/NotFound.jsx";
import LayoutUser from "./layout/LayoutUser.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.jsx";
import { path } from "./utils";

function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <LayoutUser>
            <HomePage />
          </LayoutUser>
        }
      ></Route>
      <Route
        path={path.HOME}
        element={
          <LayoutUser>
            <HomePage />
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
  );
}

export default App;
