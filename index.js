// from https://github.com/qnxdev/express-vercel-serverless
// for Antappan's tutorial https://medium.com/geekculture/deploy-express-project-with-multiple-routes-to-vercel-as-multiple-serverless-functions-567c6ea9eb36

const app = require("./app");
const routes = require("./routes/routes");

// app.use("/", routes);  // for devServer
app.use("/api/", routes);  // for API backend
