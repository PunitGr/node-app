var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var dog = require('./routes/dogs.js')(app);

var server = app.listen(4200, function() {
	console.log('Server is running at localhost:4200');
});