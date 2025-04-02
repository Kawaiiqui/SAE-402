const express = require("express");
const app = express();
const movieRoute = require("./src/routes/movies.js");
const actorRoute = require("./src/routes/actors.js");
const genreRoute = require("./src/routes/genre.js");
const moviesactorRoute = require("./src/routes/moviesactors.js");
const moviesgenreRoute = require("./src/routes/moviesgenre.js");
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
app.get("/", (req,res)=> {
    const fullPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(fullPath);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(process.env);
    console.log("server run on http://localhost:3000");
});