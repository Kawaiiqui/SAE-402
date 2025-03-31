const express = require("express");
const app = express();
const routesBooks = require("./src/routes/tasks");
const cors = require("cors");
const corsOptions = {
origin: "*",
optionsSuccessStatus: 200
};

app.use(express.json()).use(cors(corsOptions));
app.use( "/tasks", taskRoutes);
app.use(express.json());
app.get("/", (req,res)=> {
    res.send("Welcome on the movie archive API");
});
const PORT = 3000;
app.listen(PORT, () => {
console.log("server run on http://localhost:${PORT}");
});