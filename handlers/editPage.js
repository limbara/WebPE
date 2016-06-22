var editPage,
    page;
	
page = function(req,res){
    var user = req.decoded;
    var username = req.params.username;
    var filename = req.params.filename;
    res.render('edit.html',{user : user,username : username ,filename : filename});
}	


editPage = {
    page : page
}

module.exports = editPage;