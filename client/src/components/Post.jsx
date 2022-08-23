import React from "react";
import {
  Star,
  GetApp,
  Alarm,
  StackedLineChart,
  Equalizer,
  KeyboardArrowRight,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  Visibility,
} from "@mui/icons-material";
const Post = ({ post }) => {
  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-primary hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-10 grid-rows-2 md:grid-rows-1">
      <div className="col-span-4 row-span-1 relative">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1806&q=80"
          alt="img"
        />
        <div className="absolute top-0 m-5 bg-[#E74040] text-white px-2.5 text-sm font-bold rounded leading-6">
          Sale
        </div>
        <div className="flex absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className={iconStyle}>
            <FavoriteBorderOutlined />
          </div>
          <div className={iconStyle}>
            <ShoppingCartOutlined />
          </div>
          <div className={iconStyle}>
            <Visibility />
          </div>
        </div>
      </div>
      <div className="col-span-6 p-[25px] flex flex-col gap-y-2.5 shadow-md">
        <div className="flex justify-between items-center ">
          <h1 className="text-primary font-bold text-sm">English Department</h1>
          <div className="bg-[#252B42] rounded-lg flex justify-center items-center p-[5px] gap-[5px]">
            <Star className="text-[#FFCE31] text-xs" />
            <p className="text-xs text-white">4.9</p>
          </div>
        </div>
        <h1 className="font-bold text-[#252B42]">Graphic Design</h1>
        <p className="text-sm text-[#737373]">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className=" flex items-center font-bold text-sm text-[#737373] gap-x-2.5">
          <GetApp fontSize="inherit" />
          <p>15 Sales</p>
        </div>
        <p className="font-bold text-[#23856D]">$6.25</p>
        {/* colors */}
        <div className="flex items-center gap-x-2.5">
          <div className="w-4 h-4 cursor-pointer rounded-full bg-[#23A6F0]"></div>
          <div className="w-4 h-4 cursor-pointer rounded-full bg-[#23856D]"></div>
          <div className="w-4 h-4 cursor-pointer rounded-full bg-[#E77C40]"></div>
          <div className="w-4 h-4 cursor-pointer rounded-full bg-[#252B42]"></div>
        </div>
        {/* charts */}
        <div className="flex items-center text-xs text-[#737373] gap-x-[13px] py-[15px]">
          <div className="flex items-center gap-x-[5px]">
            <Alarm className="text-primary" />
            <p>22h</p>
          </div>
          <div className="flex items-center gap-x-[5px]">
            <StackedLineChart className="text-[#E77C40]" />
            <p>64 Lessons</p>
          </div>
          <div className="flex items-center gap-x-[5px]">
            <Equalizer className="text-[#23856D]" />
            <p>Progress</p>
          </div>
        </div>
        {/* btn */}
        <div className="flex items-center border w-max px-5 py-2.5 font-bold rounded-lg cursor-pointer transition-all text-primary border-primary hover:text-white hover:bg-primary">
          <p>Learn More</p>
          <KeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Post;
