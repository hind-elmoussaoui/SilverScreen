import axios from "axios";

const TA_CLEF_API = "11052cd8a33aff98070663b8ebfb0d80";
const BASE_URL_TMDB = "https://api.themoviedb.org/3/movie/popular";

export const getMoviesFromTMDB = async () => {
    try {
        const response = await axios.get(`${BASE_URL_TMDB}?api_key=${TA_CLEF_API}`);
        return response.data.results;
    } catch (error) {
        console.error("Erreur TMDB:", error);
        return [];
    }
};
