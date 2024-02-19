import React from "react";
import "./ProductSlider.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Grid } from "@mui/material";

const Cart = () => {
  return (
    <div
      style={{
        borderRadius: 10,
      }}
    >
      <Skeleton
        height={200}
        width="100%"
        style={{ marginBottom: 16 }}
      ></Skeleton>
      <div>
        <Skeleton height={18} style={{ marginBottom: 4 }}></Skeleton>
        <Skeleton height={18} style={{ marginBottom: 4 }}></Skeleton>
        <Skeleton height={18}></Skeleton>
      </div>
    </div>
  );
};

const ProductSliderSkeleton = () => {
  return (
    <div className="product-silder-container">
      <Skeleton height={40} style={{ marginBottom: 16 }}></Skeleton>
      <Grid container spacing={2}>
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
  );
};

export default ProductSliderSkeleton;
