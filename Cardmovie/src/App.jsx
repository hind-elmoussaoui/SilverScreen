import { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import { getMovies } from './services/MovieService';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleFilter = ({ title, rating }) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleSearchMovies = async (query) => {
    const movieResults = await getMovies(query);
    setMovies(movieResults);
    setFilteredMovies(movieResults);
  };

  return (
    <div className="app bg-gray-100 min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Liste des Films</h1>
      <div className="max-w-4xl mx-auto">
        <AddMovieForm onAdd={handleAddMovie} />
        <Filter onFilter={handleFilter} />
        <input
          type="text"
          placeholder="Recherche de films..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchMovies(e.target.value);
            }
          }}
          className="border rounded p-3 mb-4 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
};

export default App;
