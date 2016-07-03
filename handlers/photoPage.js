var page = function(req,res){
    var filename = req.params.filename;
    var username = req.params.username;
    var HOST_NAME = require('../constant').HOST_NAME;
    res.render('photoPage.html',{filename:filename,username:username,HOST_NAME : HOST_NAME});
}

module.exports = {
    page:page
}