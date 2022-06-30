#!/usr/bin/env node
const path = require("node:path");
const PORT = 3000;

// Initiate server
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// Serve website using EJS
app.get("/", function (req, res) {
  res.render("main/index");
});

app.get("/test", function (req, res) {
  res.send("TEST");
});

// Run server
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
