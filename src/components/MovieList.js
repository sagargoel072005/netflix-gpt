import MovieCart from "./MovieCart";
import "../index.css";

const MovieList = ({ title, movies = [] }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-3">{title}</h1>
      <div className="overflow-x-scroll scrollbar-hide whitespace-nowrap">
        <div className="flex space-x-3">
          {movies.map((movie) => (
            <MovieCart key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;