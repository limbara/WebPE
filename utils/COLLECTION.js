var knex = require('../model');

var saveCOLLECTION = function(Collection){
	return knex('collection').insert({
			photos : Collection.photos,
			path :  Collection.path,
			id_user : Collection.id_user,
		});
};

var updateCOLLECTION = function(photos,path,id_user,query,binding){
	return knex('collection').update({'photos': photos,'path':path,'id_user':id_user}).whereRaw(query, binding)
;
}

var fetchCOLLECTION = function(id_user){
	return knex('collection').select('photos', 'path').where('id_user', id_user);
}


var deleteCOLLECTION = function(id_user){
	return knex('collection')
	.where('id_user',id_user)
	.del();
};

module.exports = {
	saveCOLLECTION: saveCOLLECTION,
	updateCOLLECTION : updateCOLLECTION,
	fetchCOLLECTION : fetchCOLLECTION,
	deleteCOLLECTION : deleteCOLLECTION
};