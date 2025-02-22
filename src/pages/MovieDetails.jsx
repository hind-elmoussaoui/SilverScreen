import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFavorites } from "../context/FavoritesContext";

const MovieDetails = () => {
    const { handleToggleFavorite, favorites } = useFavorites();
    const location = useLocation();
    const navigate = useNavigate();
    const movie = location.state?.movie;
    const [trailerKey, setTrailerKey] = useState("");

    useEffect(() => {
        if (movie && movie.id && !movie.trailerURL) {
            axios
                .get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=11052cd8a33aff98070663b8ebfb0d80`)
                .then((response) => {
                    const trailers = response.data.results.filter((video) => video.type === "Trailer");
                    if (trailers.length > 0) {
                        setTrailerKey(trailers[0].key);
                    }
                })
                .catch((error) => console.error("Erreur lors du chargement de la bande-annonce :", error));
        }
    }, [movie]);

    if (!movie) {
        return <p>Film non trouvé.</p>;
    }

    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : movie.posterURL || "https://via.placeholder.com/300x450";

    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <button onClick={() => navigate("/")} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                ⬅ Retour à l'accueil
            </button>

            <div className="flex flex-col md:flex-row">
                <img src={imageUrl} alt={movie.title} className="w-80 h-auto rounded" />

                <div className="ml-4">
                    <h1 className="text-3xl font-bold">{movie.title}</h1>
                    <p className="mt-2 text-gray-700">{movie.description || "Aucune description disponible."}</p>

                    <button 
                        onClick={() =>  handleToggleFavorite(movie)}
                        className={`mt-4 px-4 py-2 rounded text-white ${
                            isFavorite ? "bg-red-500" : "bg-gray-500"
                        }`}
                    >
                        {isFavorite ? "Retirer des Favoris ❤️" : "Ajouter aux Favoris 🤍"}
                    </button>

                    {trailerKey && (
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">🎬 Bande-annonce</h2>
                            <iframe
                                width="100%"
                                height="315"
                                src={`https://www.youtube.com/embed/${trailerKey}`}
                                title="Bande-annonce du film"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
