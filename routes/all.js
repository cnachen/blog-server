const express = require("express");
const register = require("../utils/register");
const db = require("../utils/database");

const router = express.Router();

register.post(router, "/api/all/posts", (req, res) => {
    db.all("SELECT * FROM posts ORDER BY id DESC LIMIT ? OFFSET ?", req.body.limit, req.body.offset, (err, rows) => {
        res.send({
            posts: rows,
        });
    });
});

register.post(router, "/api/all/tags", (req, res) => {
    db.all("SELECT * FROM tags", (err, rows) => {
        res.send({
            tags: rows,
        });
    });
});

register.post(router, "/api/all/categories", (req, res) => {
    db.all("SELECT * FROM categories", (err, rows) => {
        res.send({
            categories: rows,
        });
    });
});

module.exports = router;
