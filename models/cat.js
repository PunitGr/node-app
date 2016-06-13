var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
	
	first_name: String,
	age: Number

});

module.exports = mongoose.model('Cat', catSchema);
