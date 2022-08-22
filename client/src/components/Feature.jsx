import React from "react";
import { LocalLibrary, Balcony, TrendingUp } from "@mui/icons-material";
const Feature = () => {
  return (
    <div className="container mx-auto flex flex-col items-center my-20">
      <div className="text-center my-20">
        <p className="text-xl text-[#737373] font-normal mb-2.5">
          Featured Products
        </p>
        <h1 className="uppercase font-bold text-[#252B42] text-2xl mb-2.5 ">
          THE BEST SERVICES
        </h1>
        <p className="text-sm text-[#737373] ">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[30px] ">
        <div className="w-full text-7xl flex flex-col items-center border py-9 px-11 text-center">
          <LocalLibrary fontSize="inherit" color="primary" className="mb-5" />
          <h1 className="text-2xl mb-5 font-bold">Easy Wins</h1>
          <p className="text-sm text-[#737373]">
            Get your best looking smile now!
          </p>
        </div>
        <div className="w-full text-7xl flex flex-col items-center border py-9 px-11 text-center">
          <Balcony fontSize="inherit" color="primary" className="mb-5" />
          <h1 className="text-2xl mb-5 font-bold">Concrete</h1>
          <p className="text-sm text-[#737373]">
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div className="w-full text-7xl flex flex-col items-center border py-9 px-11 text-center">
          <TrendingUp fontSize="inherit" color="primary" className="mb-5" />
          <h1 className="text-2xl mb-5 font-bold">Hack Growth</h1>
          <p className="text-sm text-[#737373]">
            Overcame any hurdle or any other problem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
