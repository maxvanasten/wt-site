#!/usr/bin/env node
const path = require("node:path");

// Initiate server
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Serve website using EJS
app.get("/", function (req, res) {
  res.render("main/index");
});

// Run server
app.listen(80);
console.log("Server is listening on port 80");
