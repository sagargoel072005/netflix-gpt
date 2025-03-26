import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import NetflixFooter from "./NetflixFooter";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingmovies,
  addPopularmovies,
  addUpcomingmovies,
  addTopRatedmovies,
} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import GptSearch from "./GptSearch";

const Browse = () => {
  const dispatch = useDispatch();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);


  // Reusable function to fetch movies
  const fetchMovies = async (url, action) => {
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      console.log(`API Response for ${url}:`, data);
      dispatch(action(data.results)); // Dispatch to Redux
    } catch (error) {
      console.error(`Error fetching movies from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchMovies("https://api.themoviedb.org/3/movie/now_playing?page=1", addNowPlayingmovies);
    fetchMovies("https://api.themoviedb.org/3/movie/popular?page=1", addPopularmovies);
    fetchMovies("https://api.themoviedb.org/3/movie/top_rated?page=1", addTopRatedmovies);
    fetchMovies("https://api.themoviedb.org/3/movie/upcoming?page=1", addUpcomingmovies);
  }, [dispatch]);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <NetflixFooter />
        </>
      )}
    </div>
  );
};

export default Browse;
