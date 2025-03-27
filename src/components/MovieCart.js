import { IMG_CDN } from "../utils/constants";

const MovieCart = ({ posterPath, movie }) => {
  return (
    <div className="w-[180px] h-[300px] inline-block cursor-pointer transition-transform transform hover:scale-105">
      <img
        className="w-[180px] h-[270px] object-cover rounded-lg shadow-md"
        alt={movie.title}
        src={IMG_CDN + posterPath}
      />
      <p className="text-sm text-center mt-2 text-white truncate w-[180px]">{movie.title}</p>
    </div>
  );
};

export default MovieCart;
