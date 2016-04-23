var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open',() =>{
	console.log("Listening on port 3000.....");
	app.listen(3000);
});

