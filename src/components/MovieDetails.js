import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const API_KEY = process.env.REACT_APP_TMDB_KEY || "API_KEY_NOT_FOUND";
console.log("API Key:", API_KEY);

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      if (!movie) return;

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}`
        );
        const data = await response.json();

        console.log("TMDB API Response:", data);
        
        const trailer = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        setTrailerKey(trailer ? trailer.key : null);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movie]);

  if (!movie) return <p className="text-white">Movie not found</p>;

  return (
    <div className="w-screen h-screen overflow-hidden relative text-white">
   
      {/* Movie Details */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black z-10 flex flex-col justify-center px-24">
        <h1 className="hidden md:inline-block text-4xl pb-4 font-bold">{movie.original_title || movie.title}</h1>
        <p className="hidden md:inline-block mt-2 text-md w-1/3">{movie.overview}</p>
      </div>

      {/* Trailer or Fallback Message */}
      {trailerKey ? (
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <iframe
            className="w-full h-full scale-[1.3]"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
            title="Movie Trailer"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p className="absolute bottom-4 left-4 text-red-400">Trailer not available</p>
      )}
    </div>
  );
};

export default MovieDetails;
