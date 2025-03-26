import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
    <div className="absolute inset-0 -z-10 w-full h-screen">
  <img
    src="https://i.pinimg.com/736x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"
    alt="Netflix Background"
    className="w-full h-full object-cover brightness-110 contrast-125"
  />
  <div className="absolute inset-0 bg-black opacity-40"></div>
</div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch