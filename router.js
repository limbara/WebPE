var express = require('express'),
	user = express.Router(),
	userrouter,
	frontPage = require("./handlers/frontPage"),
	collectionPage = require("./handlers/collectionPage"),
	registerPage = require("./handlers/registerPage");
	
var Auth = require("./auth");
	
    
userrouter = function(app){
	// GET
    user.get('/',frontPage.page);
	user.get('/register',registerPage.page);
	user.get('/Collection/:username',Auth.validate,collectionPage.page);
	
	//POST
	user.post('/login',frontPage.login);
	user.post('/createUser',registerPage.checkUSER,registerPage.saveUser);
	user.post('/Collection/upload',Auth.validate,collectionPage.uploadphoto);
	
	app.use(user);
}


var router = {
	userrouter : userrouter,
}

module.exports = router;