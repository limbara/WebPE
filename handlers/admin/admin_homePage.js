var admin_homePage,
    User = require('../../utils/USER'),
    Collection = require('../../utils/COLLECTION');
    
var fs = require('fs');
var path = require('path'); 
    
var page = function(req,res){
    var admin = req.admin_decoded;
    User.fetchAllUser().then(function(userList){
        res.render('admin_homePage.html',{ admin : admin , userList : userList});
    })
}

var deleteUser = function(req,res){
    var admin = req.admin_decoded;
    var id_user = req.params.id_user;
    var username = req.params.user_name;
    var userpath = path.join(__dirname, '../../public/images/'+username);
    Collection.fetchCOLLECTION(id_user).then(function(collection){
        var col= JSON.parse(collection[0].photos);
        
        for(var i =0 ;i<col.length;i++){
            fs.unlinkSync(userpath+'/'+col[i].filename);
            console.log("deleted "+col[i].filename);
        }
       
        
        Collection.deleteCOLLECTION(id_user).then(function(){
            //delete the directory named 'username'
            fs.rmdir(userpath,function(err){
                if(err){
                    console.log(err);
                    res.redirect('/error?message=something went wrong&status=500&error='+err);
                }
                else{
                    User.deleteUser(id_user).then(function(){
                        res.redirect("/admin/info?i="+username+ " dengan id "+id_user+" telah terhapus!&b=/admin/Home/"+admin.username);
                    })  
                }
            })
        })
    })
    
}


admin_homePage = {
    page : page,
    deleteUser : deleteUser
}

module.exports = admin_homePage;