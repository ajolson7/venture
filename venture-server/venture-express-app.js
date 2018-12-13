// necessary for using a .env file
require('dotenv').config();

// express
const express = require('express');
const ventureExpressApp = express();

// body parser
const bodyParser = require('body-parser');

ventureExpressApp.use(bodyParser.urlencoded({ extended: false }));
ventureExpressApp.use(bodyParser.json());

// routes
const homeRoute = require('./routes/home-route');
const userRoutes = require('./routes/user-routes');
const rentalRoutes = require('./routes/rental-routes');

homeRoute(ventureExpressApp);
userRoutes(ventureExpressApp);
rentalRoutes(ventureExpressApp);

module.exports = ventureExpressApp;
