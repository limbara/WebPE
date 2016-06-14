var registerPage,
    USER = require('../utils/USER'),
    COLLECTION = require('../utils/COLLECTION');
var path = require('path');

var page = function(req,res){
    res.render('register.html');
}

var saveUSER = function(req,res,next){
    // Get the User data from the Form
    var User={
        username: req.body.nama,
        email: req.body.email,
        password: req.body.password
    };
    // Insert the New User to database
    USER.saveUSER(User).then(function(){
       USER.findUSER(User.username).then(function(row){
           // Create First Collection Data
            var Collection ={
                photos : JSON.stringify([]),
                path : path.join(__dirname, '..','public/images/',(row[0].username).toString()),
                id_user : row[0].id_user
            }
            // Insert the New Collection to database
            COLLECTION.saveCOLLECTION(Collection).then(function(){
                var dir = Collection.path;
                // Create User folder named 'username' into public/images/username
                if (!fs.existsSync(dir)){
                     fs.mkdirSync(dir);
                }
                res.render('info.html',{info: User.username + ' telah terdaftar',back:'/'}); 
            })
        })
        
    });
    
}


var checkUSER = function(req,res,next){
    USER.findUSER(req.body.nama).then(function(usernama){
        if(!usernama[0]){
            next();    
        }
        else{
            res.render('register.html',{message: 'Username telah terpakai !'});
        }
        
    })
}

registerPage = {
    page : page,
    saveUser : saveUSER,
    checkUSER : checkUSER
}

module.exports = registerPage;
