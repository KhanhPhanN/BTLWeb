var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	PhoneNumber:{
		type: String
	},
	username: {
		type: String
	},
	status: {
		type: String
	},
	avatar: {
		type: String
	},
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	address: {
		type: String
	},
	city: {
		type: String
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	follow:{
     type: Array
	},
	block:{
		type: Array
	},
    be_follow:{
		type : Array
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {PhoneNumber: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}