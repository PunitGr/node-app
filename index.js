var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var cat = require('./cat_routes.js')(app);

var server = app.listen(4000, function() {
	console.log('Server is running at localhost:4000');
});