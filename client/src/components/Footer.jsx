import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-10 md:px-5 lg:px-2.5">
          <div className="flex items-center justify-between py-10 border-b">
            <h1 className="font-bold text-2xl text-[#252B42]">LCL</h1>
            <div className="flex text-primary lg:px-[62px] gap-x-5">
              <Facebook />
              <Instagram />
              <Twitter />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto px-10 md:px-5 lg:px-2.5">
          <div className="my-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[30px]">
            {/* col 1 */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-y-5 font-bold">
              <h1 className="text-[#252B42]">Company Info</h1>
              <div className="flex flex-col gap-y-2.5 text-sm text-[#737373]">
                <p className="cursor-pointer w-max">About Us</p>
                <p className="cursor-pointer w-max">Carrier</p>
                <p className="cursor-pointer w-max">We are hiring</p>
                <p className="cursor-pointer w-max">Blog</p>
              </div>
            </div>
            {/* col2 */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-y-5 font-bold">
              <h1 className="text-[#252B42]">Legal</h1>
              <div className="flex flex-col gap-y-2.5 text-sm text-[#737373]">
                <p className="cursor-pointer w-max">About Us</p>
                <p className="cursor-pointer w-max">Carrier</p>
                <p className="cursor-pointer w-max">We are hiring</p>
                <p className="cursor-pointer w-max">Blog</p>
              </div>
            </div>
            {/* col3 */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-y-5 font-bold">
              <h1 className="text-[#252B42]">Features</h1>
              <div className="flex flex-col gap-y-2.5 text-sm text-[#737373]">
                <p className="cursor-pointer w-max">Business Marketing</p>
                <p className="cursor-pointer w-max">User Analytic</p>
                <p className="cursor-pointer w-max">Live Chat</p>
                <p className="cursor-pointer w-max">Unlimited Support</p>
              </div>
            </div>
            {/* col4 */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-y-5 font-bold">
              <h1 className="text-[#252B42]">Resources</h1>
              <div className="flex flex-col gap-y-2.5 text-sm text-[#737373]">
                <p className="cursor-pointer w-max">IOS & Android</p>
                <p className="cursor-pointer w-max">Watch a Demo</p>
                <p className="cursor-pointer w-max">Customers</p>
                <p className="cursor-pointer w-max">API</p>
              </div>
            </div>
            {/* col5 */}
            <div className="col-span-1 lg:col-span-3 flex flex-col gap-y-5 font-bold">
              <h1 className="text-[#252B42]">Get In Touch</h1>
              <div className="flex w-full">
                <input
                  type="text"
                  className="font-normal py-[15px] pl-[20px] outline-none border rounded-l-md"
                  placeholder="Your email"
                />
                <div className="btn primary !rounded-l-none">Subscribe</div>
              </div>
              <p className="font-normal text-[#737373]">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-10 md:px-5 lg:px-2.5">
          <p className="font-bold text-sm text-[#737373] py-[25px]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
