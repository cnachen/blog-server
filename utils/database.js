const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./private/blog.db");

module.exports = db;
