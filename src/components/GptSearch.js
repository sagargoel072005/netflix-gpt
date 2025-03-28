import { NETFLIX_BACKGROUND } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 w-full h-screen">
        <img
          src={NETFLIX_BACKGROUND}
          alt="Netflix Background"
          className="w-full h-full object-cover brightness-110 contrast-125"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
<div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
    </div>
  )
}

export default GptSearch;


