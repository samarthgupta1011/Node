var mongoose = require('mongoose');

var empModel = new mongoose.Schema({
	name : {type: String, required: true},
	age : Number,
	department : {type:String, default : 'Not alloted'}
});

module.exports = mongoose.model("Emp",empModel);