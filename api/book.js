const app = require("../index");
const route = require("../routes/book");

app.use("/api/", route);

module.exports = app;
