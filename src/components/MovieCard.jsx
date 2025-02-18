const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-80 object-cover rounded"
      />
      <h3 className="text-lg font-bold">{movie.title}</h3>
      <p>⭐ {movie.vote_average}</p>
    </div>
  );
};

export default MovieCard;
