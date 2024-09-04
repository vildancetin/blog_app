import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const AuthorInfo = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s" alt="" className="w-14 h-14 rounded-full"/>
          <div className="ml-3">
            <h2 className="font-semibold">By Jennifer Lawrence</h2>
            <h2>Thinkler & Designer</h2>
          </div>
        </div>
        <div className="flex justify-end">
        <ul className="flex gap-2 text-xl text-gray-900">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitterSquare />
              </li>
              <li>
                <FaPinterest />
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
