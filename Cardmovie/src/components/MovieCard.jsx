import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card bg-white border border-gray-200 rounded-lg shadow-lg p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} className="w-full h-auto rounded-lg mb-4" />
      <p className="text-gray-600 mb-4">{movie.description}</p>
      <p className="text-yellow-500 font-semibold">Note: {movie.rating}</p>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterURL: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
