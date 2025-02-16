import { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <div className="filter bg-white p-4 rounded-lg shadow-md mb-4">
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border rounded p-2 mb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleFilter} className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600">Filtrer</button>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
