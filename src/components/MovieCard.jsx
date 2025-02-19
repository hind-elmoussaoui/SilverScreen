const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` // Image depuis TMDB
    : movie.posterURL || "https://via.placeholder.com/300x450"; // Image ajoutée ou placeholder

  return (
    <div className="border rounded p-4">
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-80 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
      <p>⭐ {movie.vote_average || movie.note}</p>
    </div>
  );
};

export default MovieCard;

