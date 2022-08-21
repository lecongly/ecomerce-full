import React from "react";
import { Link } from "react-router-dom";
import {
  KeyboardArrowDown,
  Search,
  ShoppingCart,
  FavoriteBorder,
} from "@mui/icons-material";
import Badge from "@mui/material/Badge";
const Header = () => {
  return (
    <div className="h-[60px] flex justify-between items-center px-5">
      <div className="logo">
        <Link to={"/"} className="text-3xl font-bold">
          LCL
        </Link>
      </div>
      <div className="menu flex gap-4 font-semibold ">
        <Link to="/">Home</Link>
        <Link to="/">
          Shop <KeyboardArrowDown />
        </Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Page</Link>
      </div>
      <div className="flex items-center flex-end text-[#23A6F0]">
        <form className="search-form">
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
        <div className="ml-3 flex gap-3">
          <Link to="/cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>
          </Link>
          <Link to="/">
            <FavoriteBorder />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
