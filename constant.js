module.exports = {
	SERVER_PORT : 3000,
	JWT_USER_STRING : "UserSecret",
	JWT_ADMIN_STRING : "AdminSecret",
	// Username must start with Uppercase & Lowercase letter , Cannot contains symbols, Min 6 characters & Max 25 characters
	REGEX_USERNAME : /^([A-Z]|[a-z])(\w){5,24}$/, 
	// Password should contains at least 1 digit, Min 8 characters & Max 40 characters
	REGEX_PASSWORD : /^(?=.*\d)[0-9a-zA-Z]{8,40}$/

}