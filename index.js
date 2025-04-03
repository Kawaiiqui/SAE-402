const express = require("express");
const app = express();
const movieRoute = require("./src/routes/movies.js");
const actorRoute = require("./src/routes/actors.js");
const genreRoute = require("./src/routes/genre.js");
const moviesactorRoute = require("./src/routes/moviesactors.js");
const moviesgenreRoute = require("./src/routes/moviesgenre.js");
const myDB = require('./src/sgbd/config');
const path = require('path');
require("dotenv").config() ;
const cors = require("cors");
const corsOptions = {
origin: "*",
optionsSuccessStatus: 200
};

app.use(express.json()).use(cors(corsOptions));
app.use( "/movies", movieRoute);
app.use( "/actors", actorRoute);
app.use( "/genre", genreRoute);
app.use( "/moviesactors", moviesactorRoute);
app.use( "/moviesgenre", moviesgenreRoute);
app.use(express.json());

app.get('./src/sgbd/config', async (req, res) => {
  try {
    // RQT SQL
    const data = await myDB.query(`
      SELECT *
      FROM movies
      JOIN moviesgenre ON movies.id = moviesgenre.id_movie
      JOIN genres ON genres.id = moviesgenre.id_genre
      JOIN moviesactors ON moviesactors.id_movie = movies.id
      JOIN actors ON actors.id = moviesactors.id_actor
      ORDER BY movies.year
    `, { type: myDB.QueryTypes.SELECT });
    
    // Transformer les données dans le format attendu par ton graphique
    const formattedData = data.map(item => [
      item.year,                  // Position x (année)
      Math.random() * 100,        // Position y (valeur à déterminer selon ton cas)
      item.genre                  // Catégorie pour la couleur
    ]);
    
    res.json(formattedData);
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.get("/", (req,res)=> {
    const fullPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(fullPath);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(process.env);
    console.log("server run on http://localhost:3000");
});