import React from "react";

const EditorPickCard = () => {
  return (
    <div className="w-[420px]">
      <div className="flex flex-col rounded-xl text-white ">
        <div className="relative">
          <span className="absolute right-2 top-2 px-3 py-1 rounded-xl text-white bg-gray-400 bg-opacity-25 text-base font-semibold tracking-wider uppercase">
            category
          </span>
          <img
            src="https://picsum.photos/400/300"
            alt="view"
            className="h-[350px]  object-cover rounded-xl"
          />
          <div className="absolute flex flex-col justify-end items-center inset-16">
            <div className="mt-2 ml-1">
              <div className="text-white mb-2">26.08.2024</div>
            </div>
            <div className="mb-2 font-bold text-xl">
              Richird Norton photorealistic rendering as real photos
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, quas!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPickCard;
