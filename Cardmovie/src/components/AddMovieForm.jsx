import { useState } from 'react';
import PropTypes from 'prop-types';

const AddMovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, description, posterURL, rating: parseFloat(rating) });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form bg-white p-4 rounded-lg shadow-md mb-4">
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="text"
        placeholder="URL du poster"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        className="border rounded p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <input
        type="number"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border rounded p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
      <button type="submit" className="bg-green-500 text-white rounded p-2 w-full hover:bg-green-600">Ajouter</button>
    </form>
  );
};

AddMovieForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddMovieForm;
