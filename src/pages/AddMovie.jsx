import AddMovieForm from "../components/AddMovieForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"

const AddMovie = () => {
    const navigate = useNavigate();

    const handleAddMovie = (newMovie) => {
        axios.post("http://localhost:5000/api/movies", newMovie)
            .then(() => {
                console.log("Film ajouté !");
                navigate("/"); // Retour à l'accueil
            })
            .catch((err) => console.error("Erreur lors de l'ajout du film :", err));
    };

    return (
        <div>
            <Navbar/>
        <div className="max-w-2xl mx-auto mt-8">
            <AddMovieForm onAdd={handleAddMovie} />
        </div>
        </div>
    );
};

export default AddMovie;
