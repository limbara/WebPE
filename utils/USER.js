var knex = require('../model');

var saveUSER = function(User){
	return knex('user').insert({
		username:User.username,
		email:User.email,
		password:User.password
	});
};

var findUSER = function(username){
	return knex('user').select('id_user','username','password','email').where('username',username);
};


module.exports = {
	saveUSER: saveUSER,
    findUSER:findUSER
};