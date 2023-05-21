const express = require("express");
const register = require("../utils/register");
const db = require("../utils/database");

const router = express.Router();

register.post(router, "/api/categories/get", (req, res) => {
    db.get("SELECT * FROM categories WHERE id=?", req.body.id, (err, row) => {
        const name = row?.name ?? null;
        res.send({
            name: name,
        });
    });
});

register.post(router, "/api/categories/add", (req, res) => {
    db.get("SELECT COUNT(*) AS count FROM categories WHERE name=?", req.body.name, (_, row) => {
        if (row.count == 0) {
            db.run("INSERT INTO categories (name) VALUES (?)", req.body.name, (_) => {
                res.send({});
            });
        } else {
            res.status(400).send({});
        }
    });
    
});

register.post(router, "/api/categories/delete", (req, res) => {
    db.run("DELETE FROM categories WHERE id=?", req.body.id, (err, row) => {
        res.send({});
    });
});

module.exports = router;
