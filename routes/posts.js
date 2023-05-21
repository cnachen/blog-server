const express = require("express");
const register = require("../utils/register");
const db = require("../utils/database");

const router = express.Router();

register.post(router, "/api/posts/count", (req, res) => {
    db.get("SELECT COUNT(*) AS count FROM posts", (err, row) => {
        if (row) {
            res.send({
                count: row.count,
            });
        } else {
            res.send({});
        }
    });
});

register.post(router, "/api/posts/get", (req, res) => {
    db.get("SELECT * FROM posts WHERE id=?", req.body.id, (err, row) => {
        if (row) {
            res.send({
                id: row.id,
                title: row.title,
                content: row.content,
                date: row.date,
            });
        } else {
            res.send({});
        }
    });
});

register.post(router, "/api/posts/add", (req, res) => {
    db.run("INSERT INTO posts(title, content, date) VALUES(?,?,?)",
        req.body.title,
        req.body.content,
        req.body.date
    );
    res.send({});
});

register.post(router, "/api/posts/add_tag", (req, res) => {
    db.run("INSERT INTO posts_tags(post_id, tag_id) VALUES(?,?)",
        req.body.id,
        req.body.tag_id,
        (_) => {
            res.send({});
        }
    );
});

register.post(router, "/api/posts/add_category", (req, res) => {
    db.run("INSERT INTO posts_categories(post_id, category_id) VALUES(?,?)",
        req.body.id,
        req.body.category_id,
        (_) => {
            res.send({});
        }
    );
});

register.post(router, "/api/posts/delete", (req, res) => {
    db.run("DELETE FROM posts WHERE id=?", req.body.id, (_) => {
        res.send({});
    });
});

module.exports = router;
