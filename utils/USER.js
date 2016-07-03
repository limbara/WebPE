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

var findUSER_byID = function(id_user){
	return knex('user').select('id_user','username','password','email').where('id_user',id_user);
};

var findUSER_byEmail = function(email){
	return knex('user').select('id_user','username','password','email').where('email',email);
};

var fetchAllUSER = function(){
	return knex.select().table('user');
}

var deleteUSER = function(id_user){
	return knex('user')
	.where('id_user',id_user)
	.del();
};

var updateUSER = function(username,email,password,query,binding){
	return knex('user').update({'username': username,'email':email,'password':password}).whereRaw(query, binding);
}


module.exports = {
	saveUSER: saveUSER,
	findUSER:findUSER,
	findUSER_byID:findUSER_byID,
	findUSER_byEmail:findUSER_byEmail,
	fetchAllUser : fetchAllUSER,
	deleteUser : deleteUSER,
	updateUSER : updateUSER
};