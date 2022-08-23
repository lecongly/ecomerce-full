import React from "react";
import Blog from "../components/Blog";
import CarouselSlide from "../components/CarouselSlide";
import Content from "../components/Content";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import Shop from "../components/Shop";

const Home = () => {
  return (
    <>
      <Header />
      <CarouselSlide />
      <Shop />
      <Products />
      <Content />
      <Feature />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
