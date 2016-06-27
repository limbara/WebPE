var admin_loginPage,
    page,
    login,
    Admin = require('../utils/ADMIN'),
    Auth_admin = require('../auth_admin');
    
page = function(req,res){
    var info = req.query.info;
    res.render('admin_login.html',{info:info});
}

login = function(req,res){
    var username = req.body.username;
    Admin.findADMIN(username).then(function(Admin){
        var admin = Admin[0];
        if (!admin) {
                 res.redirect("/admin?info=Authentication failed. User not found.");
        } 
        else if (admin) {
            // check if password matches
            if (admin.password != req.body.password) {
                res.redirect("/admin?info=Authentication failed. Wrong password.");
            }
            else {
                // if user is found and password is right
                // create a token
                var token = Auth_admin.generateToken(admin);

                res.cookie('auth_admin',token);
                res.redirect('/admin/Home/'+admin.username);
            } 
        }  
    });
}

admin_loginPage = {
    page : page,
    login : login
}

module.exports = admin_loginPage;