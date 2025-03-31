const express = require("express");
const router = express.Router();
const{Moviesgenre} = require("../sgbd/models.js");

// Get a l l t a s k s
router.get( "/", async(req, res) => {
    try{
    const data = await Moviesgenre.findAll();
    res.json({
        message: "All movies' genre", 
        data
    });
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch the movies' genres."
        });
    }
});

module.exports = router;