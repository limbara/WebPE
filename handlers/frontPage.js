var frontPage,
    page,
    login,
    USER = require('../utils/USER'),
    Auth = require("../auth");
    
    
page = function(req,res){
    res.render('home.html');
}

login = function(req,res){
    var username = req.body.username;
    USER.findUSER(username).then(function(User){
        var user = User[0];
        if (!user) {
            res.render("error.html",{ success: false, message: 'Authentication failed. User not found.' });
        } 
        else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.render("error.html",{ success: false, message: 'Authentication failed. Wrong password.' });
            }
            else {
                // if user is found and password is right
                // create a token
                var token = Auth.generateToken(user)
                res.cookie('auth',token);
                res.redirect('/Collection/'+user.username);
            } 
        }  
    });
}

frontPage = {
    page : page,
    login : login
}


module.exports = frontPage;