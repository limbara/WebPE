var jwt    = require('jsonwebtoken');
var CONSTANT = require('./constant');

function generateToken(user){
	var token = jwt.sign(user, CONSTANT.JWT_USER_STRING, {
          expiresIn: '1440m' // expires in 24 hours
        });
	return token;
};

function validate(req, res, next){
  	var token = req.cookies.auth;
	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token,CONSTANT.JWT_USER_STRING , function(err, decoded) {      
		  	if (err) {
				return res.redirect('/error?message=Failed to authenticate token&status=500&error='+err); 
		  	} 
			else {
			//check if the token is the one who logged in
			if(decoded.username != req.params.username){
				return res.redirect('/error?message=Not Found&status=404'); 
			}
		    // if everything is good, save to request for use in other routes
				var user ={
					id_user : decoded.id_user,
					username : decoded.username,
					email : decoded.email
				}
		    	req.decoded = user;   
				next();
			}
		});
	} 
	else {
		// if there is no token
		// return an error
		return res.redirect('/error?message=No token provided.&status=403'); 
	}
};


function validatehome(req,res,next){
	var token = req.cookies.auth;
	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token,CONSTANT.JWT_USER_STRING , function(err, decoded) {      
		  	if (err) {
				next();
		  	} 
			else {
			 	res.redirect('/Collection/'+decoded.username);
			}
		});
	}
	else {
		next();
	}
}

var auth = {
	validate: validate,
	generateToken: generateToken,
	validatehome : validatehome
}

module.exports = auth;