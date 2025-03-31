const express = require("express");
const router = express.Router();
// Get a l l t a s k s
router.get( "/", async(req, res) => {
res.send ("No task defined.");
});

router.post("/", async(req, res) => {
    if(req.body){
    res.json({message: "body is defined.", data: req.body});
    }else{
        res
            .status(500)
            .json({message: "You forgot the body part in your request !"});
    }
});

router.post("/", async(req, res) => {
    if(req.body) {
    res.json({message: "body is defined." , data: req.body});
    }else{
    res
    .status(500)
    .json({message: "You forgot the body part in your request!"});
    }
});

router.delete("/:id", async(req, res) => {
    if(req.params.id){
    res.json({message: 'Task ${req.params.id} has been removed.'});
    }else{
    res
    .status(500)
    .json({message: "You forgot the id param in your request"});
    }
    });

module.exports = router;