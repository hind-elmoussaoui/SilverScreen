import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onFilter }) => {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");

    return (
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold text-yellow-500">
                Silver Screen
            </Link>

            {/* Recherche et Filtre */}
            <div className="flex gap-4 items-center">
                {/* Barre de recherche */}
                <input
                    type="text"
                    placeholder="Rechercher un film..."
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        onFilter(e.target.value, rating);
                    }}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
                />

                {/* Filtre par note */}
                <select
                    value={rating}
                    onChange={(e) => {
                        setRating(e.target.value);
                        onFilter(title, e.target.value);
                    }}
                    className="bg-gray-800 text-white px-2 py-2 rounded-md"
                >
                    <option value="">Tous</option>
                    <option value="8">8+ ⭐</option>
                    <option value="7">7+ ⭐</option>
                    <option value="6">6+ ⭐</option>
                    <option value="5">5+ ⭐</option>
                </select>
            </div>

            {/* Liens de navigation */}
            <div>
                <Link to="/" className="mx-3">Accueil</Link>
                <Link to="/favorites" className="mx-3">Favoris</Link>
                <Link to="/add-movie" className="mx-3">Ajouter</Link>
            </div>
        </nav>
    );
};

export default Navbar;
