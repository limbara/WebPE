var registerPage,
    USER = require('../utils/USER'),
    COLLECTION = require('../utils/COLLECTION');
var passwordHash = require('password-hash');
var path = require('path');
var fs = require('fs');
var CONSTANT = require('../constant');

var page = function(req,res){
    var info = req.query.info;
    var usn = req.query.usn;
    var pwd = req.query.pwd;
    var sm = req.query.sm;
    res.render('register.html',{info:info, usn:usn, pwd:pwd, sm:sm});
}

var saveUSER = function(req,res,next){
    // Get the User data from the Form
    var Hashed_password= passwordHash.generate(req.body.repassword,{saltLength:CONSTANT.SALT_WORK_FACTOR});
        var User={
            username: req.body.nama,
            email: req.body.email,
            password: Hashed_password
        };
    // Insert the New User to database
    USER.saveUSER(User).then(function(){
       USER.findUSER(User.username).then(function(row){
           // Create First Collection Data
            var Collection ={
                photos : JSON.stringify([]),
                path : path.join(__dirname, '..','public/images/Upload/',(row[0].username).toString()),
                id_user : row[0].id_user
            }
            // Insert the New Collection to database
            COLLECTION.saveCOLLECTION(Collection).then(function(){
                var dir = Collection.path;
                // Create User folder named 'username' into public/images/username
                if (!fs.existsSync(dir)){
                     fs.mkdirSync(dir);
                }
               res.redirect('/info?i='+User.username+' telah terdaftar&b=/')
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
            res.redirect('/register?info=Username telah terpakai !');
        }
        
    })
}

var checkFormat = function(req,res,next){
    var usn=1,pwd=1,sm=1;
    if(CONSTANT.REGEX_USERNAME.test(req.body.nama)==false){
        usn =0;
    }
    if(CONSTANT.REGEX_PASSWORD.test(req.body.repassword)==false){
        pwd =0;
    }
    if(req.body.password != req.body.repassword){
        sm =0;
    }
    if(usn==0||pwd==0||sm==0){
        res.redirect('/register?usn='+usn+'&pwd='+pwd+'&sm='+sm);
    }
    else{
        next();
    }
}

registerPage = {
    page : page,
    saveUser : saveUSER,
    checkUSER : checkUSER,
    checkFormat : checkFormat
}

module.exports = registerPage;
