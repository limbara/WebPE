var frontPage,
    page;
    
page = function(req,res){
    res.render('home.html');
}

frontPage = {
    page : page
}

module.exports = frontPage;