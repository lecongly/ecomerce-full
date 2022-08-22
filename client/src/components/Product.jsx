import React, { useState } from "react";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";

const Product = ({ product }) => {
  const [hoverEffects, setHoverEffects] = useState(" opacity-0");

  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#23A6F0] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
  function handleHoverEnter() {
    setHoverEffects(" opacity-1 bg-[rgba(0,0,0,0.2)]");
  }

  function handleHoverExit() {
    setHoverEffects(" opacity-0");
  }
  return (
    <div
      className="h-[640px] text-center shadow-lg relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img
        className="w-full h-[430px] object-cover"
        src={product.image}
        alt={product.name}
      />
      <h1 className="mt-[25px] mb-2.5 font-bold text-[#252B42]">
        {product.name}
      </h1>
      <h2 className="text-[#737373] mb-2.5">{product.description}</h2>
      <p className="text-[#23856D] font-bold mb-2.5">${product.price}</p>
      <div className="flex justify-center items-center gap-x-2">
        <div className="w-4 h-4 cursor-pointer rounded-full bg-[#23A6F0]"></div>
        <div className="w-4 h-4 cursor-pointer rounded-full bg-[#23856D]"></div>
        <div className="w-4 h-4 cursor-pointer rounded-full bg-[#E77C40]"></div>
        <div className="w-4 h-4 cursor-pointer rounded-full bg-[#252B42]"></div>
      </div>
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] top-0 ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
