import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const AuthorInfo = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s"
            alt=""
            className="w-14 h-14 rounded-full"
          />
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

export const AuthorInfoComment = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-center items-center">
        <div className="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s"
            alt=""
            className="w-14 h-14 rounded-full  flex-shrink-0"
          />
          <div className="flex flex-col">
            <div className="ml-3">
              <h2 className="font-bold -mt-4">By Jennifer Lawrence</h2>
              <h2 className="">
                Coding is used in almost all aspects of life and work now, be it
                directly or indirectly. It’s not just for companies in the tech
                sector. “An increasing number of businesses rely on computer
                code,
              </h2>
            </div>
            <div className="font-semibold">14:13 pm , 6 sep 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfo;
