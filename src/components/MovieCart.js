import { useNavigate } from "react-router-dom";

const MovieCart = ({ posterPath, movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/title/${movie.id}`, { state: { movie } });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer transform transition hover:scale-105">
      <img 
        src={`https://image.tmdb.org/t/p/w500${posterPath}`} 
        alt={movie.title} 
        className="rounded-lg shadow-lg w-40 h-60 object-cover"
      />
    </div>
  );
};

export default MovieCart;
