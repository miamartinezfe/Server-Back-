const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index.js");
const cors = require("cors");
const DIR = "/rickandmorty";

const server = express();


server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use(DIR,router);

module.exports = server;
