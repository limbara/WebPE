var knex = require('../model');

var saveUSER = function(User){
	return knex('user').insert({
		username:User.username,
		email:User.email,
		password:User.password
	});
};

module.exports = {
	saveUSER: saveUSER
};