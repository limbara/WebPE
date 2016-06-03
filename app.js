var express = require('express');
var middleware = require('./middleware');
var app = express();

//set middleware.js
middleware(app);

module.exports = app;
