import React from "react";
import HeroCarousel from "../../components/Home/HeroCarousel";
import Products from "../../components/Home/ProductsSection/Products";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Header/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Products />
      <Footer />
    </>
  );
};

export default Dashboard;
