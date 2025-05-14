import React, { useEffect, useState } from "react";
import strangerPoster from "./stranger.jpg"; // adjust path as needed
import { API_OPTIONS } from "../utils/constants";

const Card = () => (
  // only on xs
<div className="absolute inset-0 flex items-center justify-center bg-black z-10 sm:hidden">
  <div className="relative w-[90%] max-w-md  mt-36 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-gray-800">
    <img
      src={strangerPoster} // Replace with your actual path or import
      alt="Stranger Things Poster"
      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1c1c1c] to-transparent px-6 py-5">
      <div className="text-white font-bold tracking-wide text-[2.2rem] leading-tight sm:text-4xl">
        <div>STRANGER</div>
        <div>THINGS</div>
      </div>
      <p className="text-sm text-red-500 font-semibold mt-1">TOP 10 · #3 in Series Today</p>
      <div className="mt-4 flex gap-3">
        <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition duration-200">
          ▶ Play
        </button>
        <button className="flex items-center gap-2 bg-[#2c2c2c] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#444] transition duration-200">
          ＋ My List
        </button>
      </div>
    </div>
  </div>
</div>

);

const VideoContainer = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    (async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const json = await res.json();
        const trailers = json.results?.filter(v => v.type === "Trailer");
        setTrailerId(trailers?.[0]?.key ?? json.results?.[0]?.key);
      } catch (e) { console.error(e); }
    })();
  }, [movieId]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {trailerId ? (
        <>
          {/* video on md+ */}
          <div className="absolute inset-0 hidden sm:block z-0">
            <iframe
              className="w-full h-full sm:scale-[1.3] scale-[1.1]"
              src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&playlist=${trailerId}&loop=1`}
              title="YouTube trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
          {/* card on xs */}
          <Card />
        </>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-white">
          Loading trailer...
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
