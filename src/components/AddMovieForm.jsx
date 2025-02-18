import React, { useState } from 'react';

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
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md mb-8 text-white"
    >
      <h2 className="text-2xl font-bold mb-4">Ajouter un nouveau film</h2>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded mb-4 p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded mb-4 p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="URL du poster"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded mb-4 p-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="bg-gray-700 border border-gray-600 rounded mb-4 p-2 w-full"
        required
        min="0"
        max="10"
        step="0.1"
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 py-2 rounded"
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddMovieForm;
