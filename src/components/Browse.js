import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingmovies,
  addPopularmovies,
  addUpcomingmovies,
  addTopRatedmovies,
} from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import NetflixFooter from "./NetflixFooter";
import GptSearch from "./GptSearch";
import Shimmer from "./Shimmer";

const Browse = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Store API errors

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const urls = [
          { url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", action: addNowPlayingmovies },
          { url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", action: addPopularmovies },
          { url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", action: addTopRatedmovies },
          { url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", action: addUpcomingmovies },
        ];

        const responses = await Promise.all(urls.map(({ url }) => fetch(url, API_OPTIONS)));

        if (responses.some((res) => !res.ok)) {
          throw new Error("Failed to fetch movies. Please try again later.");
        }

        const data = await Promise.all(responses.map((res) => res.json()));

        data.forEach((movieData, index) => {
          dispatch(urls[index].action(movieData.results));
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [dispatch]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
        <img
          src="https://thumbs.dreamstime.com/b/offline-red-sign-icon-92723039.jpg"
          alt="Offline"
          className="w-40 h-40 mb-4 md:w-48 md:h-48 animate-bounce"
        />
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Oops! You're Offline 😢
        </h1>
        <p className="text-gray-600 mb-4">
          Please check your internet connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          Retry
        </button>
      </div>
    );

  if (loading) return <Shimmer />;

  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
        <h1 className="text-2xl font-bold text-red-600">⚠️ Error</h1>
        <p className="text-gray-700 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Try Again
        </button>
      </div>
    );

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
