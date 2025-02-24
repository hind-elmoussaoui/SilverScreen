import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import { getMoviesFromTMDB } from "../services/tmdbService";
import { getMoviesFromMongoDB } from "../services/mongoService";
import { useFavorites } from "../context/FavoritesContext"; // Import du contexte
import HeroSlider from "../components/HeroSlider";

const Home = () => {
    const { favorites, handleToggleFavorite } = useFavorites(); // Récupérer favoris du contexte
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const tmdbMovies = await getMoviesFromTMDB();
            const localMovies = await getMoviesFromMongoDB();
            const allMovies = [...localMovies, ...tmdbMovies];
            console.log("Films récupérés :", allMovies); // Vérifie si la liste des films est bien remplie
            setMovies(allMovies);

            setMovies(allMovies);
            setFilteredMovies(allMovies);
        };

        fetchMovies();
    }, []);

    const handleFilter = (title, rating) => {
        let filtered = movies;

        if (title) {
            filtered = filtered.filter(movie =>
                movie.title.toLowerCase().includes(title.toLowerCase())
            );
        }

        if (rating) {
            filtered = filtered.filter(movie =>
                movie.vote_average >= parseFloat(rating)
            );
        }

        setFilteredMovies(filtered);
    };

    const popularMovies = [
        {
        id: 1,
        title: "The Gorge",
        description:
            "Two highly trained operatives grow close from a distance after being sent to guard opposite sides of a mysterious gorge...",
        poster: "https://i.postimg.cc/MThFCPbR/MV5-BMjlk-ODJi-OGEt-Yz-Nj-MS00-ODNl-LWE0-NGYt-NTkz-Yj-M4-Zj-Y0-ODEy-Xk-Ey-Xk-Fqc-Gde-QXZ3-ZXNs-ZXk-V1-SY720-QL75.jpg",
        trailer: "https://www.youtube.com/embed/rUSdnuOLebE?si=hi6jMUYNIIrLHpYo",
        },
        {
        id: 2,
        title: "Dune: Part Two",
        description: "Paul Atreides unites with Chani and the Fremen...",
        poster: "https://i.postimg.cc/Bb0C5dBh/MV5-BYTg4-Mjc1-MTkt-Zm-Mw-Ny00-YWY0-LTk4-MGEt-NTM0-NDU3-YWZm-MDQ2-Xk-Ey-Xk-Fqc-Gde-QXZ3-ZXNs-ZXk-V1-QL75-UX1000-CR0-0-1.jpg",
        trailer: "https://www.youtube.com/embed/Way9Dexny3w?si=PFS9_XaKuISPKHfh",
        },
        {
        id: 3,
        title: "Deadpool 3",
        description: "Wade Wilson returns with more chaos and humor...",
        poster: "https://i.postimg.cc/DZdGhm1g/MV5-BMzg1-MTZi-NTIt-Y2-E0-MS00-N2-Uz-LWE2-Y2-Et-Nm-Uz-NTI4-ODgz-Ym-M1-Xk-Ey-Xk-Fqc-Gde-QVRoa-XJk-UGFyd-Hl-Jbmdlc3-Rpb25-Xb3-Jr-Zmxv.jpg",
        trailer: "https://www.youtube.com/embed/73_1biulkYk?si=7f0aAdHWUK-kcv0z",
        },
    ];

    return (
        <div>
            <Navbar onFilter={handleFilter} />
            {movies.length > 0 && <HeroSlider movies={popularMovies} />}
            <MovieList movies={filteredMovies} favorites={favorites} onToggleFavorite={handleToggleFavorite} />
        </div>
    );
};

export default Home;
