var admin_homePage,
    User = require('../../utils/USER'),
    Collection = require('../../utils/COLLECTION');

    
var page = function(req,res){
    console.log("masuk0");
    var admin = req.admin_decoded;
     console.log(admin);
    User.fetchAllUser().then(function(userList){
         console.log(userList);
        res.render('admin_homePage.html',{ admin : admin , userList : userList});
    })
}

admin_homePage = {
    page : page,
}

module.exports = admin_homePage;