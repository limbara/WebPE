var editPage,
    page,
    Collection = require('../utils/COLLECTION');
    
var fs = require('fs');
var path = require('path');
var uid = require('uid2');
    
page = function(req,res){
    var user = req.decoded;
    var username = req.params.username;
    var filename = req.params.filename;
    res.render('edit.html',{user : user,username : username ,filename : filename});
}	


var saveEdit = function(req,res){
    var user = req.decoded;
    var base64 = req.body.base;
    var username = req.params.username;
    var filename = req.params.filename;
    var file_ext = filename.split(/[. ]+/).pop();
    var file_name = uid(22);
    var target_path  = path.join(__dirname, '../public/images/Upload/'+username+'/'+file_name+'.'+file_ext);
    var data = base64.replace(/^data:image\/\w+;base64,/, "");
    var buf = new Buffer(data, 'base64');
    fs.writeFile(target_path, buf,function(err){
        console.log(err);
    });
    Collection.fetchCOLLECTION(user.id_user).then(function(collection){
                            var col= JSON.parse(collection[0].photos);
                            var edited_photo = {
                                filename : file_name+"."+file_ext
                            }
                            col.unshift(edited_photo);
                            Collection.updateCOLLECTION(JSON.stringify(col),collection[0].path,user.id_user,'id_user = ?',user.id_user).then(function(){
                                res.redirect('/info?i=Foto berhasil disimpan&b=/Collection/'+user.username);
                            })
                        })
}


editPage = {
    page : page,
    saveEdit : saveEdit
}

module.exports = editPage;