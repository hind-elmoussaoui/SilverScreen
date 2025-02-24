import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFavorites } from "../context/FavoritesContext";

const HeroSlider = ({ movies }) => {
const [isPlaying, setIsPlaying] = useState(false);
const [currentTrailer, setCurrentTrailer] = useState("");
const { handleToggleFavorite } = useFavorites();

useEffect(() => {
    setIsPlaying(false); // 🔥 Arrête la vidéo si le film change
}, [movies]);

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isPlaying, 
    autoplaySpeed: 5000, // Change de film toutes les 5 sec
    arrows: false,
};

    return (
    <Slider {...settings} className="w-full h-[500px]">
        {movies.map((movie) => (
            <div key={movie.id} className="relative w-full h-[500px]">
            {/* Trailer en lecture ou image */}
            {isPlaying && currentTrailer === movie.trailer ? (
            <iframe
            key={movie.trailer}
            className="w-full h-full"
            src={`${movie.trailer}?autoplay=1&controls=0`}
            title="Movie Trailer"
            allowFullScreen
            />
        ) : (
            <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
            />
        )}

          {/* Overlay sombre */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

          {/* Texte */}
        <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            <p className="text-lg w-2/3">{movie.description}</p>

            <div className="mt-4 flex gap-4">
                <button
                onClick={() => {
                    setIsPlaying(true);
                    setCurrentTrailer(movie.trailer);
                }}
                className="bg-red-600 px-6 py-2 rounded font-semibold hover:bg-red-700"
            >
                ▶ Regarder
            </button>
            <button 
            onClick={() => handleToggleFavorite(movie)}
            className="bg-gray-700 px-6 py-2 rounded hover:bg-gray-800">
                + Liste de favoris
            </button>
            </div>
        </div>
        </div>
    ))}
    </Slider>
);
};

export default HeroSlider;
