const express = require("express");
const app = express();
const indexRoute = require('./routes');
const aboutRoute = require('./routes/about');


app.set("view engine", "pug");

app.use(indexRoute);
app.use('/about', aboutRoute);


const PORT = 3000;
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
