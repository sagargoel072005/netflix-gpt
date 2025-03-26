import React from "react";

const VideoTitle = ({ title, overview }) => {
  if (!title) return null; // Avoid rendering if no title is provided

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center px-24 text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-4xl pb-4 font-bold">{title}</h1>
      <p className="mt-2 text-md w-1/3">{overview}</p>
      <div className="mt-4 flex gap-4">
        <button className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-400 transition">
          ▶ Play
        </button>
        <button className="px-6 py-3 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-400 transition">
          ① More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
