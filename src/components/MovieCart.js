import { IMG_CDN } from "../utils/constants";

const MovieCart = ({ posterPath }) => {
  return (
    <div className="min-w-[110px] md:min-w-[150px] cursor-pointer transition-transform transform hover:scale-110">
      <img
        className="w-full h-auto rounded-lg shadow-lg"
        alt="Movie Poster"
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};

export default MovieCart;