import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import { getGeminiResponse } from "../utils/geminiApi";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Fetch movie details from TMDB
  const searchMovieTmdb = async (movie) => {
    try {
      console.log(`🔍 Searching TMDB for: "${movie}"`);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      return data.results || [];
    } catch (err) {
      console.error("❌ TMDB Fetch Error:", err);
      return [];
    }
  };
  const handleGptSearchClick = async () => {
    const userQuery = searchText.current.value.trim();
    if (!userQuery) return;
  
    const gptQuery = `Recommend 5 movies based on: "${userQuery}". Return ONLY movie names, separated by commas. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;
  
    try {
      const aiResponse = await getGeminiResponse(gptQuery); // ✅ Await response
      console.log("🤖 Full AI Response:", aiResponse);
  
      // ✅ Extract text directly (assuming AI returns a plain string)
      const responseText = aiResponse.trim(); 
  
      if (!responseText || typeof responseText !== "string") {
        throw new Error("AI response is empty or invalid.");
      }
  
      const gptMovies = responseText
        .split(",")
        .map((movie) => movie.trim())
        .filter(Boolean); // Remove empty values

  
      if (gptMovies.length === 0) {
        throw new Error("AI did not return valid movie names.");
      }
  
      // Fetch TMDB details for each movie
      const tmdbResults = await Promise.all(gptMovies.map(searchMovieTmdb));
  
      dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  
    } catch (error) {
      console.error("❌ Error fetching GPT movies:", error.message);
    }
  };
  

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 rounded-lg col-span-9"
          placeholder={lang[langKey]?.GptSearchPlaceholder || "Search for movies..."}
        />
        <button
          className="py-2 px-6 m-4 rounded-lg bg-red-700 text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
