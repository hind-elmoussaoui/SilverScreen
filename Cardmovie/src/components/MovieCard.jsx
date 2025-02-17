import PropTypes from 'prop-types';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  const posterURL = movie.poster_path
    ? `${BASE_IMAGE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="movie-card bg-white border border-gray-300 rounded-lg shadow-lg p-4 mb-6 w-80 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      {/* Image */}
      <img
        src={posterURL}
        alt={movie.title}
        className="w-full h-60 object-cover rounded-lg mb-3"
      />

      {/* Titre */}
      <h2 className="text-xl font-bold text-gray-800 truncate">{movie.title}</h2>

      {/* Description (limitée à 100 caractères) */}
      <p className="text-gray-600 text-sm mt-2">
        {movie.overview.length > 100 ? `${movie.overview.slice(0, 100)}...` : movie.overview}
      </p>

      {/* Note */}
      <div className="mt-3 flex items-center justify-between">
        <p className="text-yellow-500 font-semibold">⭐ {movie.vote_average.toFixed(1)}</p>
        <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-700 transition duration-300">
          Voir plus
        </button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
