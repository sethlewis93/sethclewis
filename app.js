const express = require("express");
const data = require("./data.json");
const bodyParser = require("body-parser");

const app = express();

// Utilize Pug template rendering
app.set("view engine", "pug");

const projects = data.projects;

const PORT = 3000;
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

app.get("/", (req, res) => {
  let liveLinks = [];
  for (let i = 0; i < projects.length; i++) {
    liveLinks += projects[i].live_link;
    console.log(typeof liveLinks);
  }
  res.render("index"), liveLinks;
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/project", (req, res) => {
  res.render("project");
});
