#!/usr/bin/env node
const path = require("node:path");
const PORT = 80;
const fs = require("fs");

// Initiate server
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"));

// Serve website using EJS
app.get("/", function (req, res) {
  res.render("main/index");
});

app.get("/:pageName", function (req, res) {
  console.log(req.params.pageName);
  // Test if page exists

  fs.access(
    `${path.join(__dirname, "/views/main")}/${req.params.pageName}.ejs`,
    fs.F_OK,
    (err) => {
      if (err) {
        console.error(err);
        res.send("Unknown page");
        return;
      }

      //file exists
      res.render(`main/${req.params.pageName}`);
    }
  );
});

// Run server
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
