import React from "react";
import { Phone, Mail, Facebook, Twitter } from "@mui/icons-material";
const Head = () => {
  return (
    <div className="flex justify-between items-center bg-[#252B42] h-[60px] text-white px-5">
      <div className="flex flex-1 justify-start">
        <div className="flex items-center">
          <Phone fontSize="10px" className="icon" />
          <p>(+84)981352118</p>
        </div>
        <div className="flex items-center ml-2">
          <Mail fontSize="10px" className="icon" />
          <p>lecongly.contact@gmail.com</p>
        </div>
      </div>
      <div className="flex-1 text-center">
        <p>Follow Us and get a chance to win 80% off</p>
      </div>
      <div className="flex-1 flex justify-end items-center gap-2">
        <p>Follow Us : </p>
        <Facebook fontSize="10px" className="icon" />
        <Twitter fontSize="10px" className="icon" />
      </div>
    </div>
  );
};

export default Head;
