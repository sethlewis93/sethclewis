const express = require("express");
const app = express();
const indexRoute = require("./routes");
const aboutRoute = require("./routes/about");
const PORT = 3000;

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
app.set("view engine", "pug");

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
