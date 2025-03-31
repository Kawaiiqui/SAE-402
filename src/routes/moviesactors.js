const express = require("express");
const router = express.Router();
const{Moviesactors} = require("../sgbd/models.js");

// Get a l l t a s k s
router.get( "/", async(req, res) => {
    try{
    const data = await Moviesactors.findAll();
    res.json({
        message: "All moviesactors", 
        data
    });
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch moviesactors."
        });
    }
});

module.exports = router;