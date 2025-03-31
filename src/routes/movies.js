const express = require("express");
const router = express.Router();
const{User, Task, AssignedTo} = require("../sgbd/models");

router.post("/login", async(req, res) => {
    const secretKey = process.env.PRIVATE_KEY ;
    try{
    const {email, pwd} = req.body ;
    const results = await User.findAll({where: {email}});
    if(results.length === 0 ) {
    return res.status(401).send("Invalide mail or password");
    }
    const user = results[0];
    const asswordMatch = await bcrypt.compare(pwd, user.pwd);
    if(!passwordMatch){
    return res.status(401).send("Invalide mail or password");
    }
    // G e n e r a t e JWT t o k e n
    const token = jwt.sign({username: email}, secretKey, {
    expiresIn: "1h",
    });
    res.json({token});
    }catch(error){
    res.status(500).json({message : "Error logging in"});
    }
    } ) ;