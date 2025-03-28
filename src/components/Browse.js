import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingmovies,
  addPopularmovies,
  addUpcomingmovies,
  addTopRatedmovies,
} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import NetflixFooter from "./NetflixFooter";
import GptSearch from "./GptSearch";

const Browse = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const urls = [
          { url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", action: addNowPlayingmovies },
          { url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", action: addPopularmovies },
          { url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", action: addTopRatedmovies },
          { url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", action: addUpcomingmovies },
        ];

        // Fetch all movies in parallel
        const responses = await Promise.all(urls.map(({ url }) => fetch(url, API_OPTIONS)));
        const data = await Promise.all(responses.map((res) => res.json()));

        // Dispatch all at once
        data.forEach((movieData, index) => {
          dispatch(urls[index].action(movieData.results));
        });
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [dispatch]); // Only run once

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
