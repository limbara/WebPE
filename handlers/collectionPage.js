var collectionPage,
    page,
    Collection = require('../utils/COLLECTION');

page = function(req,res){
    var user = req.decoded;
    console.log(user);
    Collection.fetchCOLLECTION(user.id_user).then(function(Collection){
        console.log(Collection);
        res.render('collection.html',{user : user , collection : JSON.parse(Collection[0].photos) , path: Collection[0].path});
    })
}

collectionPage = {
    page : page,
}

module.exports = collectionPage;