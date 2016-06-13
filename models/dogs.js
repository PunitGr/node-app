var mongoose = require('mongoose');

var dogSchema = mongoose.Schema({
	
	first_name: String,
	age: Number

});

module.exports = mongoose.model('Dog', dogSchema);
