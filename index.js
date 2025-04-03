require("dotenv").config() ;
const express = require("express");
const app = express();
const {QueryTypes} = require("sequelize");
const movieRoute = require("./src/routes/movies.js");
const actorRoute = require("./src/routes/actors.js");
const genreRoute = require("./src/routes/genre.js");
const moviesactorRoute = require("./src/routes/moviesactors.js");
const moviesgenreRoute = require("./src/routes/moviesgenre.js");
const myDB = require('./src/sgbd/config');
const path = require('path');
const cors = require("cors");
const corsOptions = {
origin: "*",
optionsSuccessStatus: 200
};

app.use(express.json()).use(cors(corsOptions));
app.use("/movies", movieRoute);
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

myDB.sync({force: false})
.then(() => {
    console.log("Database synchronized successfully.");
    app.listen(PORT, () => {
        console.log("server run on http://localhost:3000");
    });
}).catch((error) => {
    console.error("Error synchronizing the database:", error);
});