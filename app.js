const express = require("express");
const bodyParser = require("body-parser");
const { projects } = require("./data.json");
const app = express();

// Utilize Pug template rendering
app.set("view engine", "pug");

const PORT = 3000;
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

app.get("/", (req, res) => {
  res.render("index", { projects });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project", (req, res) => {
  res.render("project");
});
