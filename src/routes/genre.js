const express = require("express");
const router = express.Router();
const{Genre} = require("../sgbd/models.js");

// Get a l l t a s k s
router.get( "/", async(req, res) => {
    try{
    const data = await Genre.findAll();
    res.json({
        message: "All genres", 
        data
    });
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch genres."
        });
    }
});

module.exports = router;