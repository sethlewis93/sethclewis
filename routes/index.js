const express = require('express');
const router = express.Router();
const { projects } = require("../data.json");

router.get("/", (req, res) => {
    res.render("index", { projects });
});

router.get("/about", (req, res) => {
    res.render("about");
});
  
router.get("/project/:id", (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(({ id }) => id === +projectId);
    // replace w error message later or research sendStatus MDN
    project ? res.render("project", { project }) : res.sendStatus(404);
});

module.exports = router;