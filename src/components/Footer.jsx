import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" w-full h-56 bg-black text-white mt-6">
      <div className=" w-3/4 text-center mx-auto mt-3">
        <ul className="grid grid-cols-3 gap-3 justify-center tracking-widest text-lg headers">
          <li>
            <span className="font-paytone">Application & Contact</span>
            <div className="text-sm mt-2">

            <span className="block">vcetin1356@gmail.com</span>
            <span>+12 3456 7879</span>
            </div>
          </li>
          <li>
            <span className="font-paytone">Explorate</span>
            <ul className="text-base mt-2">
              <li>
                <NavLink to="/blogs/posts">posts</NavLink>
              </li>
              <li>
                <NavLink>writers</NavLink>
              </li>
              <li>
                <NavLink>categories</NavLink>
              </li>
            </ul>
          </li>

          <li>
            <span className="font-paytone">Connections</span>
            <ul className="connections">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitterSquare />
              </li>
              <li>
                <FaSpotify />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaPinterest />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
