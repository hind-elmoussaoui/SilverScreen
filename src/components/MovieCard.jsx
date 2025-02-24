import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {
    const navigate = useNavigate();
    
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : movie.posterURL || "https://via.placeholder.com/300x450";

    const truncateText = (text, maxLength) => {
        if (!text) return "Aucune description disponible.";
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
    
    return (
        <div 
            className="relative bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            onDoubleClick={() => onToggleFavorite(movie)} // Double clic pour ajouter aux favoris
            onClick={() => navigate(`/movie/${movie.id}`, { state: { movie } })} // Redirection vers la page de détail
        >
            <img
                src={imageUrl}
                alt={movie.title}
                className="w-full h-72 object-cover" 
            />
            <div className="p-4">
                <h3 className="text-lg font-bold">{movie.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">{truncateText(movie.overview, 100) || "Aucune description disponible."}</p>
                <p className="text-yellow-400 font-bold">⭐ {movie.vote_average || movie.note}</p>
            </div>

            {/* Icône de cœur pour ajouter aux favoris */}
            <button 
            className={`absolute top-4 right-4 p-2 rounded-full ${isFavorite ? 'bg-red-500' : 'bg-gray-600'}`}
                onClick={(e) => {
                    e.stopPropagation(); // Empêche la navigation au clic sur le cœur
                    onToggleFavorite(movie);
                }}
                >
            {isFavorite ? "❤️" : "🤍"}
                </button>
        </div>
    );
};

export default MovieCard;
