const hello = require("./hello");
const all = require("./all");
const posts = require("./posts");
const tags = require("./tags");
const categories = require("./categories");
const fallback = require("./fallback");

module.exports = (app) => {
    app.use("/", all);
    app.use("/", posts);
    app.use("/", tags);
    app.use("/", categories);
    app.use("/", hello);
    app.use("/", fallback);
}
