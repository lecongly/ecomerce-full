import React from "react";
import Carousel from "react-material-ui-carousel";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
const items = [
  {
    name: "New Collection",
    description:
      "We know how large objects will act, but things on a small scale.",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];
const CarouselSlide = () => {
  return (
    <Carousel
      className=" bg-[url('https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-contain mt-2 py-10"
      PrevIcon={<ArrowBackIos />}
      NextIcon={<ArrowForwardIos />}
      animation={"slide"}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={` container m-auto w-full h-full flex flex-col justify-center mb-10 object-cover py-48`}
        >
          <h2 className="text-6xl font-bold text-white min-h mb-9">
            {item.name}
          </h2>
          <p className="text-2xl font-light text-white mb-9">
            {item.description}
          </p>
          <button className="btn primary max-w-[300px]  ">Shop now</button>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlide;
