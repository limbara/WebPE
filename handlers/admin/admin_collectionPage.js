var admin_homePage,
    User = require('../../utils/USER'),
    Collection = require('../../utils/COLLECTION');
    
    
var page = function(req,res){
    var admin = req.admin_decoded;
	var id_user = req.params.id_user;
    User.findUSER_byID(id_user).then(function(user){
        var User = user[0];
        Collection.fetchCOLLECTION(id_user).then(function(Collection){
            res.render('admin_collectionPage.html',{admin : admin , user:User ,  collection : JSON.parse(Collection[0].photos) , path: Collection[0].path});
        })    
    })
    
}


admin_homePage = {
    page : page,
}

module.exports = admin_homePage;