import React from 'react';

const VideoTitle = ({ title, overview }) => {
    if (!title) return null; // Avoid rendering if no title is provided

    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-5xl pb-4 font-bold">{title}</h1>
            <p className="mt-2 text-lg w-1/4 ">{overview}</p>
            <div className="mt-4 flex gap-4">
                <button className="px-6 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-400 transition">
                   ▶ Play
                </button>
                <button className="px-6 py-2 bg-gray-700 text-white rounded-md font-semibold hover:bg-gray-400 transition">
                    ① More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
