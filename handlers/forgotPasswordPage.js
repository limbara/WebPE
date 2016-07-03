var registerPage,
    USER = require('../utils/USER'),
    COLLECTION = require('../utils/COLLECTION');
var passwordHash = require('password-hash');
var path = require('path');
var fs = require('fs');
var CONSTANT = require('../constant');

var page = function(req,res){
    var info = req.query.info;
    var pwd = req.query.pwd;
    var sm = req.query.sm;
    res.render('forgotpassword.html',{info:info, pwd:pwd, sm:sm});
}

var changePassword = function(req,res,next){
    // Check if User Exist
    USER.findUSER_byEmail(req.body.email).then(function(user){
        var User = user[0];
        if(User){
            var Hashed_password= passwordHash.generate(req.body.repassword,{saltLength:CONSTANT.SALT_WORK_FACTOR});
            USER.updateUSER(undefined,undefined,Hashed_password,'email = ?',req.body.email).then(function(){
                res.redirect('/info?i=Password '+User.username+' telah diganti&b=/')
            })    
        }
        else{
            res.redirect('/forgotPassword?info=Email belum pernah terdaftar !');
        }
        
    })

}

var checkFormat = function(req,res,next){
    var pwd=1,sm=1;
    if(CONSTANT.REGEX_PASSWORD.test(req.body.repassword)==false){
        pwd =0;
    }
    if(req.body.password != req.body.repassword){
        sm =0;
    }
    if(pwd==0||sm==0){
        res.redirect('/forgotPassword?pwd='+pwd+'&sm='+sm);
    }
    else{
        next();
    }
}

registerPage = {
    page : page,
    changePassword : changePassword,
    checkFormat : checkFormat
}

module.exports = registerPage;
