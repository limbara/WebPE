var page = function(req,res){
	var message = req.query.message;
	var status = req.query.status;
	var error = req.query.error;
	res.render("error.html",{message : message,status : status, error:error});
}

var errorPage = {
	page : page
}

module.exports = errorPage;