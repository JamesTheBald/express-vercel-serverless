// from https://github.com/qnxdev/express-vercel-serverless
// for Antappan's tutorial https://medium.com/geekculture/deploy-express-project-with-multiple-routes-to-vercel-as-multiple-serverless-functions-567c6ea9eb36

const connectExpress = require("./connectExpress");
const routes = require("./routes/routes");

connectExpress.use("/", routes); // for devServer
// connectExpress.use("/api/", routes);  // for API backend

//start server locally
connectExpress.listen(3000,function () {
    console.log("Server started. Go to http://localhost:3000/");
});
