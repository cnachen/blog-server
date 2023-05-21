const express = require("express");
const register = require("../utils/register");
const db = require("../utils/database");

const router = express.Router();

register.get(router, "/api", (req, res) => {
    res.send("Hello, world!\n");
});


module.exports = router;
