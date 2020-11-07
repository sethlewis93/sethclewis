const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

router.get("/", (req, res) => {
  res.render("index", { projects });
});

router.get("/error", (req, res, next) => {
  const err = new Error();
  err.message = `Sorry! Something went wrong on the server.`;
  err.status = 500;
  throw err;
});

router.get("/project/:id", (req, res, next) => {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);
  if (project) {
    res.render("project", { project });
  } else {
    const err = new Error();
    err.status = 404;
    next(err);
  }
});

module.exports = router;
