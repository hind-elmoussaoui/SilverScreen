import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        // Charger les favoris depuis le localStorage au démarrage
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        // Sauvegarder les favoris dans localStorage à chaque mise à jour
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const handleToggleFavorite = (movie) => {
        console.log("Film ajouté/supprimé des favoris :", movie);
        setFavorites((prev) =>
            prev.some((fav) => fav.id === movie.id)
                ? prev.filter((fav) => fav.id !== movie.id) // Supprimer si déjà en favoris
                : [...prev, { ...movie }] // Ajouter sinon
        );
    };

    return (
        <FavoritesContext.Provider value={{ favorites, handleToggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
