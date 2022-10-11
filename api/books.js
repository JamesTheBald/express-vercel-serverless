const connectExpress = require("../connectExpress");
const route = require("../routes/books");

connectExpress.use("/api/", route);

module.exports = connectExpress;
