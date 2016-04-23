var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

var app = express();

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

app.use('/hello',(req,res,next) =>{
	res.send('Hello Word');
	next();
});

mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open',() =>{
	
	app.models = require('./models/index');	
	var routes = require('./routes');
	
	_.each(routes,(controller,route) => {
		app.use(route,controller(app,route));
	});
	
	console.log("Listening on port 3000.....");
	app.listen(3002);
});

