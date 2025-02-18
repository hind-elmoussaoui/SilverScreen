import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import HeroSection from "../components/HeroSection";

const Home = () => {
const [movies, setMovies] = useState([]);
const [filteredMovies, setFilteredMovies] = useState([]);
const TA_CLEF_API = "11052cd8a33aff98070663b8ebfb0d80";

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TA_CLEF_API}`)
        .then((res) => res.json())
        .then((data) => {
        setMovies(data.results);
        setFilteredMovies(data.results);
    })
    .catch((err) => console.error(err));
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
