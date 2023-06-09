const createError = require('http-errors');
const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mountRoutes = require("./routes");
const errorHandler = require("./middlewares/errorHandler.middleware");


const makeApp = (modelMode) => {
    const app = express();

    app.use(express.json());
    app.use(logger('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

// serve static files from 'public' folder:
// app.use(express.static(path.join(__dirname, 'public')));

    mountRoutes(app, modelMode);
    app.use(errorHandler);


    app.get("/", (req, res) => {
        res.send(`apartments management system - server`);
    });

    return app;
}

module.exports = {makeApp}