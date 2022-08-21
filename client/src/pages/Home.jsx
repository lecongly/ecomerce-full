import React from "react";
import CarouselSlide from "../components/CarouselSlide";
import Head from "../components/Head";
import Header from "../components/Header";
import Shop from "../components/Shop";

const Home = () => {
  return (
    <>
      <Head />
      <Header />
      <CarouselSlide />
      <Shop />
    </>
  );
};

export default Home;
