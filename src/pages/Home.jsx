"use client";

import { Carousel } from "flowbite-react";
import PostCard from "../components/PostCard";
import EditorPickCard from "../components/EditorPickCard";
import PickedPost from "./PickedPost";

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
      <div className="px-10">
        <PickedPost />
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
