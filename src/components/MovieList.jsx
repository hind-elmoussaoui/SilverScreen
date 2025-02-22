import MovieCard from "./MovieCard";

const MovieList = ({ movies, favorites, onToggleFavorite }) => {
    return (
        <div className="grid grid-cols-4 gap-4 p-4">
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
                <p>Aucun film trouvé.</p>
            )}
        </div>
    );
};

export default MovieList;
