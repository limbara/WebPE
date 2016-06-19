var knex = require('../model');

var saveCOLLECTION = function(Collection){
	return knex('collection').insert({
			photos : Collection.photos,
			path :  Collection.path,
			id_user : Collection.id_user,
		});
};

var fetchCOLLECTION = function(id_user){
	return knex('collection').select('photos', 'path').where('id_user', id_user);
}


module.exports = {
	saveCOLLECTION: saveCOLLECTION,
	fetchCOLLECTION : fetchCOLLECTION
};