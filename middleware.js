var router = require('./router'),
	nunjucks = require('nunjucks'),
	middleware;
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var express = require('express');
var path = require('path');

middleware = function(app){
	app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
	app.use(logger('dev'));
	app.use(cookieParser())
	app.use(bodyParser.json({limit : 1024 * 1024 * 10}));
	app.use(bodyParser.urlencoded({ extended: false,limit : 1024 * 1024 * 10}));
	app.use(express.static(path.join(__dirname, 'public')));
	router.userrouter(app);
	
	nunjucks.configure('views',{
		autoescape: true,
		express: app
	});
};

module.exports = middleware;