import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const API_KEY = "45c9130f946197f9492c59bb46c57189"; // Replace with your actual TMDB API Key

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      if (!movie) return;

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
        );
        const data = await response.json();

        console.log("TMDB API Response:", data); // Debugging

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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black z-10 flex flex-col justify-center px-24">
        <h1 className="text-4xl pb-4 font-bold">{movie.original_title || movie.title}</h1>
        <p className="mt-2 text-md w-1/3">{movie.overview}</p>
      </div>

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
        <p className="text-red-400 mt-4">Trailer not available</p>
      )}
    </div>
  );
};

export default MovieDetails;
