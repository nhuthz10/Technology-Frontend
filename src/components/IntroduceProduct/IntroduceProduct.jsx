import React from "react";
import "./IntroduceProduct.scss";
import ProductSlider from "../ProductSlider/ProductSlider";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import CartSkeleton from "../Cart/CartSkeleton";
import ProductSliderSkeleton from "../ProductSlider/ProductSliderSkeleton";
import { Grid } from "@mui/material";

const Product = () => {
  return (
    <div className="introduce-product-container">
      <ProductSliderSkeleton></ProductSliderSkeleton>
      <ProductSlider />
      <ProductSlider />
      <ProductSlider />
      <ProductSlider />
      <div className="suggestion-today">
        <h1 className="suggestion-today-title">Gợi ý hôm nay</h1>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <CartSkeleton />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
          <Grid item xs={2}>
            <Cart />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
