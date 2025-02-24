import MovieCard from "./MovieCard";

const MovieList = ({ movies, favorites, onToggleFavorite }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie} 
                        onToggleFavorite={onToggleFavorite}
                        isFavorite={favorites.some((fav) => fav.id === movie.id)}
                    />
                ))
            ) : (
                <svg viewBox="25 25 50 50" class="container">
                    <circle cx="50" cy="50" r="20" class="loader"></circle>
                </svg>

            )}
        </div>
    );
};

export default MovieList;
