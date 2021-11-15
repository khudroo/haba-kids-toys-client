import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import Products from "../Products/Products";
import TopBanner from "../TopBanner/TopBanner";
import Reviews from "../Reviews/Review";
import PremiumDes from "../PremiumDes/PremiumDes";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <TopBanner></TopBanner>
      <Products></Products>
      <PremiumDes></PremiumDes>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
