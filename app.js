var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var empRouter = require('./routes/empRoute');
var app = express();

mongoose.connect('mongodb://localhost/EmpData');
app.use(bodyParser.json());


app.listen(9000,function(){
	console.log('Hi sam');
});

app.use('/',empRouter);
