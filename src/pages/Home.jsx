"use client";

import { Carousel } from "flowbite-react";
import PostCard from "../components/PostCard";
import EditorPickCard from "../components/EditorPickCard";

export default function Home() {
  return (
    <div>
      {/* Carousel Part */}
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel className="carousel">
          <img src="https://picsum.photos/id/265/900/300" alt="..." />
          <img src="https://picsum.photos/id/238/900/300" alt="..." />
          <img src="https://picsum.photos/id/239/900/300" alt="..." />
          <img src="https://picsum.photos/id/240/900/300" alt="..." />
          <img src="https://picsum.photos/id/243/900/300" alt="..." />
        </Carousel>
      </div>
      {/*  Posts Part */}
      <div className="w-3/4 mx-auto">
        <h1 className="text-black font-bold font-paytone tracking-widest my-8 text-3xl">
          Popular topics
        </h1>
        <ul className="flex gap-5">
          <li>All</li>
          <li>Adventure</li>
          <li>Travel</li>
          <li>Technology</li>
        </ul>
        <div className="grid grid-cols-4 gap-6 my-8 py-6 justify-evenly">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
      {/* Picked Post */}
      <div>
        <div className="w-full h-62 relative px-10">
          <div className="text-white absolute flex flex-col justify-center items-center inset-0">
            <div className="px-4 py-2 rounded-2xl text-white bg-gray-400 bg-opacity-25 text-base font-semibold tracking-wider uppercase mb-6">
              category
            </div>
            <div className="text-2xl font-bold mb-4">
              Richird Norton photorealistic rendering as real photos
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae tempora sit, repellat vero ipsa at?
            </div>
            <div className="border-t-2 w-11 border-white my-6"></div>
            <div>26.08.2024</div>
          </div>
          <div>
            <img
              src="https://picsum.photos/900/300"
              alt=""
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
      {/* Editör Pick Posts */}
      <div>
        <h1 className="text-black font-bold font-paytone tracking-widest my-8 text-3xl ml-4">
          Editor's Pick
        </h1>
        <div className="grid grid-cols-3 mt-4 place-items-center gap-4 mb-12">
          <EditorPickCard />
          <EditorPickCard />
          <EditorPickCard />
        </div>
      </div>
    </div>
  );
}
