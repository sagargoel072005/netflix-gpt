import { NETFLIX_BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { useState, useEffect } from "react";

const GptSearch = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <img
          src={NETFLIX_BACKGROUND}
          alt="Netflix Background"
          className="w-full h-full object-cover brightness-110 contrast-125"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Search Bar */}
      <GptSearchBar />

      {/* Loader (Now with z-index fix) */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Movie Suggestions */}
      {!loading && <GptMovieSuggestions />}
    </div>
  );
};

export default GptSearch;
