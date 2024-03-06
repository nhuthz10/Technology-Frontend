import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import IntroduceProduct from "../../components/IntroduceProduct/IntroduceProduct";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <IntroduceProduct />
    </div>
  );
};

export default HomePage;
