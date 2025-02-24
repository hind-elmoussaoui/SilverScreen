import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import { FavoritesProvider } from "./context/FavoritesContext"; // Import du provider

function App() {
    return (
        <FavoritesProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-movie" element={<AddMovie />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
                <Footer />
            </Router>
        </FavoritesProvider>
    );
}

export default App;
