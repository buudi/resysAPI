const createError = require('http-errors');
const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mountRoutes = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serve static files from 'public' folder:
// app.use(express.static(path.join(__dirname, 'public')));

mountRoutes(app);


app.get("/", (req, res) => {
    res.send(`system beta - server`);
});

app.listen(port, () => {
    console.log(`server-beta listening on port ${port}`);
});