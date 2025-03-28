import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : json.results?.[0];
    setTrailerId(trailer?.key);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Ensure iframe stays in the background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="w-full h-full sm:scale-[1.3] scale-[1.1]"
          src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&playlist=${trailerId}&loop=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
