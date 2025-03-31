const express = require("express");
const router = express.Router();
const{movies, Task, AssignedTo} = require("../sgbd/models");
const authenticateUser = require("../auth/auth.js");
const Joi = require("joi");
const taskScheme = Joi.object({
    action: Joi.string().min(3).required(),
    solved: Joi.boolean(),
    });


// Get a l l t a s k s
router.get( "/", authenticateUser, async(req, res) => {
    try{
    const tasks = await Task.findAll();
    res.json({message: "All tasks", data: tasks});
    }catch(error){
    res.status(500).json({message: "Failed to fetch tasks."});
    }
});

router.post("/", authenticateUser, async(req, res) => {
    if(req.body){
        try{
            const task = await Task.create(req.body);
            if(!task){
                res.status(404).json({message: "Task not found."});
                }else{
                res.json({message: "Post if found", data: task});
                }
            }catch(error){
            res.status(500).json({message: "Failed to create task."});
            }
    }else{
        res
            .status(500)
            .json({message: "You forgot the body part in your request !"});
    }
});

router.post("/", authenticateUser, async(req, res) => {
    if(req.body) {
    res.json({message: "body is defined." , data: req.body});
    }else{
    res
    .status(500)
    .json({message: "You forgot the body part in your request!"});
    }
});

router.post("/", authenticateUser, async(req, res) => {
    if(req.body){
        const {error} = taskScheme.validate(req.body);
        if(error)
            return res.status(400).json({
            status: 400,
            message: error.details[0].message,
            });
    }else{
        res
            .status(500)
            .json({message: "You forgot the body part in your request !"});
    }
});

router.delete("/:id", authenticateUser, async(req, res) => {
    if(req.params.id){
        try{
            const deletedRowsCount = await Task.destroy({
            where: {id: req.params.id},
            });
            if(deletedRowsCount === 0){
            res.status(404).json({message : "Task not found."});
            }else{
            res.json({message: "Task deleted successfully."});
            }
            }catch(error){
            res.status(500).json({message: "Failed to delete task."});
            }
    }else{
    res
    .status(500)
    .json({message: "You forgot the id param in your request"});
    }
    });

module.exports = router;