var knex = require('../model');

var saveADMIN = function(Admin){
	return knex('admin').insert({
		username:Admin.username,
		password:Admin.password
	});
};

var findAdmin = function(username){
	return knex('admin').select('id_admin','username','password').where('username',username);
};

module.exports = {
	saveADMIN : saveADMIN,
	findADMIN:findAdmin
};