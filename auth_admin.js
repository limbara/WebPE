var jwt    = require('jsonwebtoken');
var CONSTANT = require('./constant');

function generateToken(admin){
	var token = jwt.sign(admin, CONSTANT.JWT_ADMIN_STRING, {
          expiresIn: '10m' // expires in 10 minutes
        });
	return token;
};

function validate(req, res, next){
  	var token = req.cookies.auth_admin;
	// decode token
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, CONSTANT.JWT_ADMIN_STRING, function(err, decoded) {      
		  	if (err) {
		    	return res.render("error.html",{ success: false, message: 'Failed to authenticate token.' });    
		  	} 
			else {
		    // if everything is good, save to request for use in other 
				var admin ={
					id_user : decoded.id_admin,
					username : decoded.username
				}
		    	req.admin_decoded = admin;   
				next();
			}
		});
	} 
	else {
		// if there is no token
		// return an error
		return res.render("error.html",{ 
		    success: false, 
		    message: 'No token provided.' ,
			status : 403
		});
	}
};


var auth = {
	validate: validate,
	generateToken: generateToken,
}

module.exports = auth;