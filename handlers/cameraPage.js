var cameraPage,
    page,
    Collection = require('../utils/COLLECTION');
    
var fs = require('fs');
var path = require('path');
var uid = require('uid2');

page = function(req,res){
    var user = req.decoded;
    res.render('camera.html',{user : user});
}

var savePhoto = function(req,res){
    var user = req.decoded;
    var base64 = req.body.base;
    var file_ext = 'jpg';
    var file_name = uid(22);
    var target_path  = path.join(__dirname, '../public/images/'+user.username+'/'+file_name+'.'+file_ext);
    var data = base64.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    fs.writeFile(target_path, buf,function(err){
        console.log(err);
    });
    Collection.fetchCOLLECTION(user.id_user).then(function(collection){
                            var col= JSON.parse(collection[0].photos);
                            var camera_photo = {
                                filename : file_name+"."+file_ext
                            }
                            col.push(camera_photo);
                            Collection.updateCOLLECTION(JSON.stringify(col),collection[0].path,user.id_user,'id_user = ?',user.id_user).then(function(){
                                res.redirect('/info?i=Foto berhasil disimpan&b=/Collection/'+user.username);
                            })
                        })
}

cameraPage = {
    page : page,
    savePhoto : savePhoto
}

module.exports = cameraPage;