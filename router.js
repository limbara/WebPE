var express = require('express'),
	user = express.Router(),
	userrouter,
	frontPage = require("./handlers/frontPage"),
	registerPage = require("./handlers/registerPage");
	
    
userrouter = function(app){
	// GET
    user.get('/',frontPage.page);
	user.get('/register',registerPage.page);
	
	//POST
	user.post('/createUser',registerPage.checkUSER,registerPage.saveUser);
    app.use(user);
}


var router = {
	userrouter : userrouter,
}

module.exports = router;