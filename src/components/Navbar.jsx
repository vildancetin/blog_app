import React from "react";
import logo from "../assets/bg-lifelog.png";
import { NavLink } from "react-router-dom";
import Switch from "./Switch";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl flex h-16 flex-wrap items-center justify-between mx-auto bg-transparent">
      {/* left-start side */}
      <div>
        <a href="/">
          <img src={logo} alt="logo" className="h-16" />
        </a>
      </div>
      {/* Middle side */}
      <div className="flex justify-center items-center gap-4">
        <HiOutlinePencilSquare className="text-3xl" />

        <span className="text-xl border-r-2 border-gray  block h-8"></span>
        <NavLink to="/blogs/posts" className="text-lg">
          Articles
        </NavLink>
        <span className="text-xl border-r-2 border-gray  block h-8"></span>
        <Search />
      </div>
      {/* Right side */}
      <div>
        <ul className="flex items-center justify-center gap-2 text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <span className="text-xl border-r-2 border-gray m-2 h-8"></span>
          </li>
          <li>
            <Switch />
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
