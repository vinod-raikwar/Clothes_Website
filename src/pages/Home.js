import React from 'react';
import Carousel from "../components/Carousels.js";
import Banner from "../components/Banner.js";
import SellerCards from "../components/SellerCards.js";
import StorieCards from "../components/StorieCards.js";
import ShippingBar from "../components/ShippingBar.js";
import Trending from "../components/Trending.js";
import TextComponent from "../components/TextComponent.js";

function Home() {
  return (
    <>
        <Banner />
        <TextComponent />
        <SellerCards />
        <Carousel />
        <StorieCards />
        <ShippingBar />
        <Trending />
    </>
  )
}

export default Home;