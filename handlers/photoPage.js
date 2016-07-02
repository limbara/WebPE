var page = function(req,res){
    var filename = req.params.filename;
    var username = req.params.username;
    res.render('photoPage.html',{filename:filename,username:username});
}

module.exports = {
    page:page
}