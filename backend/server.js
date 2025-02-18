const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

// Connexion à MongoDB Atlas
const uri = "mongodb+srv://hindelmoussaoui:hindelmoussaoui@cluster0.omwqk.mongodb.net/shopDB?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("🟢 Connecté à MongoDB"))
  .catch(err => console.error("🔴 Erreur de connexion MongoDB:", err));

// Modèle Movie
const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    posterURL: String,
    note: Number,
});
const Movie = mongoose.model("Movie", movieSchema);

// Clé API TMDB
const API_KEY = "11052cd8a33aff98070663b8ebfb0d80";

// Récupérer les films populaires de TMDB
app.get("/api/tmdb/movies", async (req, res) => {
    try {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=fr-FR`
    );
    res.json(response.data.results);
  } catch (error) {
    console.error("Erreur lors de la récupération des films:", error);
    res.status(500).json({ error: "Erreur lors de la récupération des films." });
  }
});

// Ajouter un film à MongoDB
app.post("/api/movies", async (req, res) => {
  try {
    const { title, description, posterURL, note } = req.body;
    const movie = new Movie({ title, description, posterURL, note });
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    console.error("Erreur lors de l'ajout du film:", error);
    res.status(500).json({ error: "Erreur lors de l'ajout du film." });
  }
});

// Récupérer les films stockés dans MongoDB
app.get("/api/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.error("Erreur lors de la récupération des films stockés:", error);
    res.status(500).json({ error: "Erreur lors de la récupération des films stockés." });
  }
});

// Lancement du serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
