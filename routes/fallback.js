const express = require("express");
const path = require('path');
const register = require("../utils/register");
const db = require("../utils/database");

const router = express.Router();

register.get(router, "*", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


module.exports = router;
