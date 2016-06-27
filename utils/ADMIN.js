var knex = require('../model');

var findAdmin = function(username){
	return knex('admin').select('id_admin','username','password').where('username',username);
};


module.exports = {
	findADMIN:findAdmin
};