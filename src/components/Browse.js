import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useDispatch } from 'react-redux';
import { addNowPlayingmovies } from '../utils/movieSlice';

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        console.log("API Response:", json); // ✅ Debugging: Check API response
        return json;
    } catch (error) {
        console.error("Error fetching movies:", error); // ✅ Debugging: Check for errors
        return { results: [] }; // Return an empty array if the request fails
    }
};



useEffect(() => {
  // Fetch data and dispatch the action
  getNowPlayingMovies()
      .then((data) => {
          console.log("Fetched Data:", data); // ✅ Debugging: Check fetched data
          dispatch(addNowPlayingmovies(data.results)); // ✅ Dispatch with correct payload
      })
      .catch((error) => {
          console.error("Error fetching movies:", error);
      });
}, [dispatch]);

  return (
    <div>
    <Header />
    <MainContainer />
    <SecondaryContainer />
    </div>
  )
}

export default Browse;