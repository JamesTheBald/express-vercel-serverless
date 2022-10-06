const app = require("../index");
const route = require("../routes/books");

app.use("/api/", route);

module.exports = app;
