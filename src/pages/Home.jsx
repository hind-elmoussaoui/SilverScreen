import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import HeroSection from "../components/HeroSection";
import { getMoviesFromTMDB } from "../services/tmdbService";
import { getMoviesFromMongoDB } from "../services/mongoService";
import { useFavorites } from "../context/FavoritesContext"; // Import du contexte

const Home = () => {
    const { favorites, handleToggleFavorite } = useFavorites(); // Récupérer favoris du contexte
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const tmdbMovies = await getMoviesFromTMDB();
            const localMovies = await getMoviesFromMongoDB();
            const allMovies = [...localMovies, ...tmdbMovies];

            setMovies(allMovies);
            setFilteredMovies(allMovies);
        };

        fetchMovies();
    }, []);

    const handleFilter = (title, rating) => {
        let filtered = movies.filter((movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase())
        );

        if (rating) {
            filtered = filtered.filter((movie) => movie.vote_average >= rating);
        }

        setFilteredMovies(filtered);
    };

    return (
        <div>
            <HeroSection />
            <Filter onFilter={handleFilter} />
            <MovieList movies={filteredMovies} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
        </div>
    );
};

export default Home;
