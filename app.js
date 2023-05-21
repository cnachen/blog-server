const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./utils/database");

const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`Express.js is listening on http://localhost:${port}`);
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

process.on("SIGINT", () => {
    db.close(() => {
        console.log("Database closed");
        process.exit(0);
    });
});
