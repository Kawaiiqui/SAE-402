const express = require("express");
const router = express.Router();
const{Movies} = require("../sgbd/models.js");

// Get a l l t a s k s
router.get( "/", async(req, res) => {
    try{
    const data = await Movies.findAll();
    res.json({
        message: "All movies", 
        data
    });
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch movies. xxx", error
        });
    }
});

module.exports = router;