const express = require("express");
const router = express.Router();
// Get a l l t a s k s
router.get( "/", async(req, res) => {
res.send ("No task defined.");
});
module.exports = router;