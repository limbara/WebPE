var page = function(req,res){
	var info = req.query.i;
	var back = req.query.b;
	res.render('info.html',{info:info,back:back});
}

var infoPage = {
	page : page
}

module.exports = infoPage;