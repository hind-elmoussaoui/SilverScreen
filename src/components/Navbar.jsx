import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <h1 className="text-xl font-bold">SilverScreen</h1>
            <div>
                <Link to="/add-movie" className="mx-2">➕ </Link>
                <Link to="/" className="mx-2"> Accueil</Link>
                <Link to="/favorites" className="mx-2"> Favoris</Link>
            </div>
        </nav>
    );
}

export default Navbar;
