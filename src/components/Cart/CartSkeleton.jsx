import React from "react";
import "./Cart.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CartSkeleton = () => {
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

export default CartSkeleton;
