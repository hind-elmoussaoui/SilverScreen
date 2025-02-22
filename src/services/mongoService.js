import axios from "axios";

const BASE_URL_MONGODB = "http://localhost:5000/api/movies";

export const getMoviesFromMongoDB = async () => {
    try {
        const response = await axios.get(BASE_URL_MONGODB);
        return response.data;
    } catch (error) {
        console.error("Erreur MongoDB:", error);
        return [];
    }
};
