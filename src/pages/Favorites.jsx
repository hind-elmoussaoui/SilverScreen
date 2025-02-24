import { useFavorites } from "../context/FavoritesContext";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";

const Favorites = () => {
    const { favorites, handleToggleFavorite } = useFavorites(); // Récupérer les favoris

    return (
        <div>
            <Navbar />
            <h2 className="text-2xl font-bold mb-4">Mes Films Favoris</h2>
            {favorites.length === 0 ? (
                <p>Aucun film ajouté aux favoris.</p>
            ) : (
                <MovieList movies={favorites} onToggleFavorite={handleToggleFavorite} favorites={favorites} />
            )}
        
        </div>
    );
};

export default Favorites;
