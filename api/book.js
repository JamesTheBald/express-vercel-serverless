const connectExpress = require("../connectExpress");
const route = require("../routes/book");

connectExpress.use("/api/", route);

module.exports = connectExpress;
