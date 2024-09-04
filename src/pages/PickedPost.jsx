import React from 'react'

const PickedPost = () => {
  return (
    <div className="w-full relative">
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
  )
}

export default PickedPost