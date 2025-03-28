import React from "react";

const VideoTitle = ({ title, overview }) => {
  if (!title) return null; // Avoid rendering if no title is provided

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center px-6 sm:px-24 text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-2xl sm:text-4xl pb-2 font-bold">{title}</h1>
      <p className="hidden md:inline-block mt-2 text-sm sm:text-md w-full sm:w-1/3">{overview}</p>
      <div className="mt-4 flex gap-2 sm:gap-4">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-400 transition">
          ▶ Play
        </button>
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-400 transition">
          ① More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
