const express = require("express");
const data = require("./data.json");

const app = express();

app.set("view engine", "pug");
// CHANGE TO PORT 3000 FOR PROJECT SUBMISSION
const PORT = 5000;
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project", (req, res) => {
  res.render("project");
});
