import { Card } from "flowbite-react";
import React from "react";

const PostCard = () => {
  return (
    <div>
      <div className="flex flex-col rounded-xl">
        <div className="relative">
          <span className="absolute right-2 top-2 px-3 py-1 rounded-xl text-white bg-gray-400 bg-opacity-25 text-base font-semibold tracking-wider uppercase">category</span>
          <img
            src="https://picsum.photos/400/300"
            alt="view"
            className="h-[250px] w-[310px] object-cover rounded-xl"
          />
        </div>
        <div className="mt-2 ml-1">
          <div className="text-[#6C757D] mb-2">26.08.2024</div>
          <div className="mb-2 font-bold text-xl">New Post</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quas!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
