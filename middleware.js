var router = require('./router'),
	nunjucks = require('nunjucks'),
	middleware;
var logger = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

middleware = function(app){
	
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(express.static(path.join(__dirname, 'public')));
	router.userrouter(app);
	
	nunjucks.configure('views',{
		autoescape: true,
		express: app
	});
};

module.exports = middleware;