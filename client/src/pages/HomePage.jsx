import React, { useContext } from "react";
import { useAuth } from "../context/AuthContextProvider";

import FeaturedProductList from "../components/FeaturedProductList";

import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProductList />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;
