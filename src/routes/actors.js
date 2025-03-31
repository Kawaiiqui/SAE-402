const express = require("express");
const router = express.Router();
const{Actors} = require("../sgbd/models.js");

// Get a l l t a s k s
router.get( "/", async(req, res) => {
    try{
    const data = await Actors.findAll();
    res.json({
        message: "All actors", 
        data
    });
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch actors."
        });
    }
});

module.exports = router;