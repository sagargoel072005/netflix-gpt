import MovieCart from "./MovieCart";
import "../index.css";
import { useNavigate } from "react-router-dom";

const MovieList = ({ title, movies = [] }) => {
  const navigate = useNavigate();

  // Filter out movies without a poster
  const filteredMovies = movies.filter((movie) => movie.poster_path);

  const handleClickPoster = (movie) => {
    navigate(`/title/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {filteredMovies.map((movie) => (
            <div 
              key={movie.id} 
              onClick={() => handleClickPoster(movie)} 
              className="cursor-pointer flex flex-col items-center min-w-[160px]"
            >
              <MovieCart posterPath={movie.poster_path} movie={movie} />
              <p className="text-white mt-2 text-center w-full">{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
