const express = require("express");
const app = express();
const routesBooks = require("./src/routes/task");
require("dotenv").config() ;
const cors = require("cors");
const corsOptions = {
origin: "*",
optionsSuccessStatus: 200
};

app.use(express.json()).use(cors(corsOptions));
app.use( "/task", taskRoutes);
app.use(express.json());
app.get("/", (req,res)=> {
    res.send("Welcome on the movie archive API");
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(process.env);
    console.log("server run on http://localhost:${PORT}");
});