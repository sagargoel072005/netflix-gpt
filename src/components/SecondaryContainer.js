import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("Movies in Redux:", movies);

  return (
    <div className="bg-black text-white px-6">
    <div className="-mt-52 pl-10 relative z-20">
      <MovieList title="Now Playing" movies={movies.NowPlayingmovies} />
      <MovieList title="Popular" movies={movies.Popularmovies} />
      <MovieList title="Upcoming Movies" movies={movies.Upcomingmovies} />
      <MovieList title="Top Rated Movies" movies={movies.TopRatedmovies} />
    </div>
    </div>
  );
};

export default SecondaryContainer;
