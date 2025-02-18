import React from 'react';
import AddMovieForm from '../components/AddMovieForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMovie() {
const navigate = useNavigate();

const handleAddMovie = (newMovie) => {
    axios.post('http://localhost:5000/api/movies', newMovie)
        .then((response) => {
        console.log('Film ajouté:', response.data);
        navigate('/movies');  
        })
        .catch((error) => {
        console.error('Erreur lors de l\'ajout du film:', error);
        });
    };

    return (
    <div className="max-w-2xl mx-auto mt-8">
        <AddMovieForm onAdd={handleAddMovie} />
    </div>
    );
}

export default AddMovie;
