// from https://github.com/qnxdev/express-vercel-serverless
// for tutorial https://medium.com/geekculture/deploy-express-project-with-multiple-routes-to-vercel-as-multiple-serverless-functions-567c6ea9eb36

"use strict";
require("dotenv").config();  // loads environment variables from a .env file into process.env

const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());

module.exports = app;
