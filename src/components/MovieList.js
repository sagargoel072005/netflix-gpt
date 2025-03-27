import MovieCart from "./MovieCart";
import "../index.css";

const MovieList = ({ title, movies = [] }) => {
  // Filter out movies without a poster
  const filteredMovies = movies.filter((movie) => movie.poster_path);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
      <div className="overflow-x-auto scrollbar-hide whitespace-nowrap">
        <div className="inline-flex space-x-4">
          {filteredMovies.map((movie) => (
            <MovieCart key={movie.id} posterPath={movie.poster_path} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
