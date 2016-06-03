var express = require('express'),
	user = express.Router(),
	userrouter,
	frontPage = require("./handlers/frontPage");
    
userrouter = function(app){
    user.get('/',frontPage.page);
    app.use(user);
}


var router = {
	userrouter : userrouter,
}

module.exports = router;