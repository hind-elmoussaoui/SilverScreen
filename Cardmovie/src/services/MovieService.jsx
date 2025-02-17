import axios from 'axios';

const API_KEY = '11052cd8a33aff98070663b8ebfb0d80'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = async (query) => {
    try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
    api_key: API_KEY,
        query: query,
    },
    });
    return response.data.results;
    } catch (error) {
    console.error('Erreur lors de la récupération des films:', error);
    return [];
    }
};