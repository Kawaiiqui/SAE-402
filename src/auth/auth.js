const jwt = require("jsonwebtoken");
const authenticateUser=(req, res, next)=> {
const authorizationHeader = req.headers.authorization;
if(!authorizationHeader){
const message = "Access denied";
return res.status(400).json({message});
}
const authorization_key = authorizationHeader.split("")[0];
if(authorization_key == process.env.AUTHORIZATION_KEY) {
const token = authorizationHeader.split(" ")[1];
jwt.verify(token, process.env.PRIVATE_KY,(error, decodedToken) => {
if(error){
const message = "Invalid token";
return res.status(400).json({message, error});
}
next();
});
}else{
return res.status(400).json({message: "Access denied"});
}
};
module . exports = authenticateUser;