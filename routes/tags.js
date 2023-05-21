const express = require("express");
const register = require("../utils/register");
const db = require("../utils/database");

const router = express.Router();

register.post(router, "/api/tags/get", (req, res) => {
    db.get("SELECT * FROM tags WHERE id=?", req.body.id, (err, row) => {
        const name = row?.name ?? null;
        res.send({
            name: name,
        });
    });
});

register.post(router, "/api/tags/add", (req, res) => {
    db.get("SELECT COUNT(*) AS count FROM tags WHERE name=?", req.body.name, (_, row) => {
        if (row.count == 0) {
            db.run("INSERT INTO tags (name) VALUES (?)", req.body.name, (_) => {
                res.send({});
            });
        } else {
            res.status(400).send({});
        }
    });
    
});

register.post(router, "/api/tags/delete", (req, res) => {
    db.run("DELETE FROM tags WHERE id=?", req.body.id, (err, row) => {
        res.send({});
    });
});

module.exports = router;
