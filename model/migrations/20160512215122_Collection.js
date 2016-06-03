var table = function(table){
	table.increments('id_collection').primary();
	table.text('photos');
	table.text('path');
	table.integer('id_user',10).unsigned().references('user.id_user');
};


exports.up = function(knex, Promise) {
	return knex.schema.createTable('collection', table)
		.then(function () {
			console.log('Collection table was created!');
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('collection', table)
		.then(function () {
			console.log('Collection table was dropped!');
		});  
};
