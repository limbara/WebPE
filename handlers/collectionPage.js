var collectionPage,
    page,
    Collection = require('../utils/COLLECTION');
    
var fs = require('fs');
var path = require('path');
var uid = require('uid2');
var formidable = require('formidable');

page = function(req,res){
    var user = req.decoded;
    var info = req.query.info;
    Collection.fetchCOLLECTION(user.id_user).then(function(Collection){
        res.render('collection.html',{user : user , collection : JSON.parse(Collection[0].photos) , path: Collection[0].path , info : info});
    })
}

var deletephoto = function(req,res){
    var user = req.decoded;
    var photo = req.params.filename;
    Collection.fetchCOLLECTION(user.id_user).then(function(collection){
        var col= JSON.parse(collection[0].photos);
        for(var i=0;i< col.length ; i++){
            if(col[i].filename === photo){
                col.splice(i,1);
                fs.unlink(path.join(__dirname, '../public/images/'+user.username+'/'+photo))
                break;
            }
        }
        Collection.updateCOLLECTION(JSON.stringify(col),collection[0].path,user.id_user,'id_user = ?',user.id_user).then(function(){
            res.redirect('/info?i='+photo+' telah terhapus&b=/Collection/'+user.username);''
        })
    })
    
}

var uploadphoto = function(req,res){
    var form = new formidable.IncomingForm();
    var user = req.decoded;
    form.parse(req,function(err,fields,files){
        
            var old_path = files.file.path,
      
            file_size = files.file.size,
            
            file_ext = files.file.name.split(/[. ]+/).pop(),
            
            file_name = uid(22);
          
            var targetPath = path.join(__dirname, '../public/images/'+user.username+'/'+file_name+'.'+file_ext);
            
            fs.readFile(old_path, function(err, data) {
                fs.writeFile(targetPath, data, function(err) {
                    fs.unlink(old_path, function(err) {
                        if (err) {
                            res.redirect('/error?message=something went wrong&status='+500+'&error='+err);
                        } else {
                            
                            Collection.fetchCOLLECTION(user.id_user).then(function(collection){
                                var col= JSON.parse(collection[0].photos);
                                var uploaded_photo = {
                                    filename : file_name+"."+file_ext
                                }
                                col.push(uploaded_photo);
                                Collection.updateCOLLECTION(JSON.stringify(col),collection[0].path,user.id_user,'id_user = ?',user.id_user).then(function(){
                                    res.redirect('/info?i=Upload berhasil&b=/Collection/'+user.username);
                                })
                            })
                            
        
                        }
                    });
                });
            }); 
    });
}

var downloadphoto = function(req,res){
    var username = req.params.username;
	var filename = req.params.filename;
	var file = path.join(__dirname,'..','public','images',username,filename);
	res.download(file);
}

collectionPage = {
    page : page,
    deletephoto : deletephoto,
    uploadphoto : uploadphoto,
    downloadphoto : downloadphoto
}

module.exports = collectionPage;

var match_type = function(array,file_ext){
    for(var i =0 ;i < array.length ; i++){
        if(array[i] == file_ext){
            return true;
        }
    }
    return false;
} 