import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import HeroSection from "../components/HeroSection";
import axios from "axios";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const TA_CLEF_API = "11052cd8a33aff98070663b8ebfb0d80";

    useEffect(() => {
        // Récupérer films de TMDB et MongoDB
        const fetchMovies = async () => {
            try {
                const tmdbResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${TA_CLEF_API}`);
                const localMoviesResponse = await axios.get("http://localhost:5000/api/movies");

                const allMovies = [...localMoviesResponse.data, ...tmdbResponse.data.results];

                setMovies(allMovies);
                setFilteredMovies(allMovies);
            } catch (err) {
                console.error("Erreur lors du chargement des films :", err);
            }
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
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default Home;
