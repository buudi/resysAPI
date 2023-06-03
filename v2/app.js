const createError = require('http-errors');
const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mountRoutes = require("./src/routes");

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// serve static files from 'public' folder:
// app.use(express.static(path.join(__dirname, 'public')));

mountRoutes(app);


app.get("/", (req, res) => {
    res.send(`apartments management system - server`);
});


module.exports = app;