var express = require('express'),
	user = express.Router(),
	userrouter,
	frontPage = require("./handlers/frontPage"),
	collectionPage = require("./handlers/collectionPage"),
	editPage = require("./handlers/editPage"),
	errorPage = require("./handlers/errorPage"),
	infoPage = require("./handlers/infoPage"),
	registerPage = require("./handlers/registerPage");
	
var Auth = require("./auth");
	
    
userrouter = function(app){
	// GET
    user.get('/',frontPage.page);
	user.get('/error',errorPage.page);
	user.get('/info',infoPage.page);
	user.get('/register',registerPage.page);
	user.get('/Collection/:username',Auth.validate,collectionPage.page);
	user.get("/Collection/:username/:filename/download",collectionPage.downloadphoto);
	user.get('/Collection/:username/delete/:filename',Auth.validate,collectionPage.deletephoto);
	user.get('/Collection/:username/edit/:filename',Auth.validate,editPage.page);
	
	
	//POST
	user.post('/login',frontPage.login);
	user.post('/createUser',registerPage.checkUSER,registerPage.saveUser);
	user.post('/Collection/:username/upload',Auth.validate,collectionPage.uploadphoto);
	
	app.use(user);
}


var router = {
	userrouter : userrouter,
}

module.exports = router;