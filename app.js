// app.js loads in some of the code that's common between index.js and devServer.js (i.e. Express and some setup)

"use strict";
require("dotenv").config();  // loads environment variables from a .env file into process.env

const express = require("express");
const helmet = require("helmet");
const app = express();

app.use(helmet());

module.exports = app;
