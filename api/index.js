// from https://github.com/qnxdev/express-vercel-serverless
// for Antappan's tutorial https://medium.com/geekculture/deploy-express-project-with-multiple-routes-to-vercel-as-multiple-serverless-functions-567c6ea9eb36

const connectExpress = require("../connectExpress");
const routes = require("../routes/routes");

connectExpress.use("/", routes);  // for API backend
// connectExpress.use("/api/", routes);  // for API backend
