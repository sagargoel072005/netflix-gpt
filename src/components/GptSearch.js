import { NETFLIX_BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { useState } from "react";

// Loader Component
const Loader = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const GptSearch = () => {
  const [loading, setLoading] = useState(false); // Control loading state in GptSearchBar

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

      {/* Search Bar (Pass setLoading to control Loader) */}
      <GptSearchBar setLoading={setLoading} />

      {/* Loader or Movie Suggestions */}
      {loading ? <Loader /> : <GptMovieSuggestions />}
    </div>
  );
};

export default GptSearch;
