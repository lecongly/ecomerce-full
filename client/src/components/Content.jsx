import React from "react";

const Content = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-[90px] mb-20">
      <div className="col-span-7 w-full grid grid-cols-2 gap-x-4">
        <img
          className="w-full object-cover"
          src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="content-img1"
        />
        <img
          className="w-full object-cover"
          src="https://images.unsplash.com/photo-1530021232320-687d8e3dba54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="content-img2"
        />
      </div>
      <div className="col-span-5 flex flex-col justify-center">
        <p className="font-bold text-primary mb-4">Featured Products</p>
        <h1 className="font-bold text-5xl mb-4">We love what we do</h1>
        <p className="text-sm text-[#737373] w-[350px] mb-4">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
        <p className="text-sm text-[#737373] w-[350px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  );
};

export default Content;
