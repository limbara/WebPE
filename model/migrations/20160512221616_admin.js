var table = function(table){
	table.increments('id_admin').primary();
	table.string('nama',30).notNullable();
	table.string('password',40).notNullable();
};


exports.up = function(knex, Promise) {
	return knex.schema.createTable('admin', table)
		.then(function () {
			console.log('Admin table was created!');
			
		});
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('admin', table)
		.then(function () {
			console.log('Admin table was dropped!');
		});  
};
