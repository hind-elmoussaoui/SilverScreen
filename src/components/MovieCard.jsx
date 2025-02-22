import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
    const navigate = useNavigate();
    
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : movie.posterURL || "https://via.placeholder.com/300x450";

    
    return (
        <div 
            className="border rounded p-4 relative cursor-pointer"
            onDoubleClick={() => onToggleFavorite(movie)} // Double clic pour ajouter aux favoris
            onClick={() => navigate(`/movie/${movie.id}`, { state: { movie } })} // Redirection vers la page de détail
        >
            <img
                src={imageUrl}
                alt={movie.title}
                className="w-full h-80 object-cover rounded"
            />
            <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
            <p>⭐ {movie.vote_average || movie.note}</p>

            {/* Icône de cœur pour ajouter aux favoris */}
            <button 
                onClick={(e) => {
                    e.stopPropagation(); // Empêche la navigation au clic sur le cœur
                    onToggleFavorite(movie);
                }}
                className={`absolute bottom-2 right-2 text-2xl ${
                    isFavorite ? "text-red-500" : "text-gray-400"
                }`}
            >
                {isFavorite ? "❤️" : "🤍"}
            </button>
        </div>
    );
};

export default MovieCard;
