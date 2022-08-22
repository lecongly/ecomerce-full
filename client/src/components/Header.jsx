import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  KeyboardArrowDown,
  Search,
  ShoppingCart,
  FavoriteBorder,
  Person,
  Menu,
  Close,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      {/* Announce */}
      {/* <div className="hidden md:flex justify-between items-center bg-[#252B42] h-[60px] text-white px-5">
        <div className="hidden lg:flex flex-1 justify-start">
          <div className="flex items-center">
            <Phone fontSize="10px" className="icon" />
            <p>(+84)981352118</p>
          </div>
          <div className="flex items-center ml-2">
            <Mail fontSize="10px" className="icon" />
            <p>lecongly.contact@gmail.com</p>
          </div>
        </div>
        <div className="flex-1 lg:text-center">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className="flex-1 flex justify-end items-center gap-2">
          <p>Follow Us : </p>
          <Facebook fontSize="10px" className="icon" />
          <Twitter fontSize="10px" className="icon" />
        </div>
      </div> */}
      {/* Header */}
      <div className=" fixed z-50 bg-white w-full h-[60px] flex justify-between items-center px-5">
        <div className="relative z-10 logo">
          <Link to={"/"} className="text-3xl font-bold">
            LCL
          </Link>
        </div>

        {/* menu */}
        <div
          className={` ${
            isOpenMenu ? "flex " : "hidden "
          }flex-col absolute bg-white/80 w-full top-0 left-0 text-center pt-20 pb-10 gap-4 font-semibold md:flex md:relative md:flex-row md:p-0 md:bg-inherit md:w-max`}
        >
          <Link to="/">Home</Link>
          <Link to="/">
            Shop
            <div className="hidden md:inline-block">
              <KeyboardArrowDown />
            </div>
          </Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Page</Link>
        </div>
        {/* tools */}
        <div className="relative flex items-center flex-end text-[#23A6F0]">
          <form className="search-form hidden lg:flex">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Search />
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-2 pl-10 w-full text-sm text-gray-900 rounded-lg border border-[#23A6F0] focus:ring-[#23A6F0] focus:border-[#d50cf0] outline-none "
                placeholder="Search"
                required
              />
            </div>
          </form>
          <Link to="/login" className="ml-2 flex items-center">
            <Person className="mr-1" />
            <p className="hidden md:block">Login / Register</p>
          </Link>
          <div className="ml-3 flex gap-3">
            <Link to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCart />
              </Badge>
            </Link>
            <Link to="/">
              <Badge badgeContent={1} color="primary">
                <FavoriteBorder />
              </Badge>
            </Link>
            <div className="md:hidden" onClick={toggleMenu}>
              {isOpenMenu ? <Close /> : <Menu />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
