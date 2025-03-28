import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black text-white px-6">
    <div className="md:-mt-52 -mt-80 pl-10 -ml-9 relative z-20">
      <MovieList title="Now Playing" movies={movies.NowPlayingmovies} />
      <MovieList title="Popular" movies={movies.Popularmovies} />
      <MovieList title="Upcoming Movies" movies={movies.Upcomingmovies} />
      <MovieList title="Top Rated Movies" movies={movies.TopRatedmovies} />
      <MovieList title="Epic Worlds" movies={movies.NowPlayingmovies} />
      <MovieList title="Teen TV Shows" movies={movies.Popularmovies} />
      <MovieList title="Because you watched Annabelle" movies={movies.Upcomingmovies} />
      <MovieList title="Beingworthy Shows" movies={movies.TopRatedmovies} />
    </div>
    </div>
  );
};

export default SecondaryContainer;
