const express = require("express");
const http = require('http');
const enforce = require('express-sslify');
const app = express();
const indexRoute = require("./routes");
const aboutRoute = require("./routes/about");
const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.set("view engine", "pug");

// Enforce https ssl for Heroku app
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(indexRoute);
app.use("/about", aboutRoute);
app.use("/static", express.static("public"));

/// ERROR HANDLERS ///
app.use((req, res, next) => {
  res.status(404).render("not-found");
});

app.use((err, req, res, next) => {
  if (err) {
    console.log("Global error handler called", err);
  }
  if (err.status === 404) {
    res.status(404).render("not-found", { err });
  } else {
    err.message = err.message || `Something went wrong on the server.`;
    res.status(err.status || 500).render("error", { err });
  }
});
