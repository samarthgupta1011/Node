var mongoose = require('mongoose');
var Emp = require('./../models/empModel');

var getAll = function(request, response){ 
	Emp.find(function(err,allEmp){
		if(err) response.send("Error");
		else response.send(allEmp);
	});
};

var add = function(request,response){
	var newEmp = new Emp(request.body);
	newEmp.save(function(err, emp){
		if(err) response.send('Error');
		else response.send(emp);
	});
};

var deleteById = function(request,response){
	Emp.findByIdAndRemove(request.query._id,function(err,emp){
		var resp = {
			message : "Removed employ",
			id : emp._id
		};
		response.send(resp);
	});
};

module.exports = { 
getAll : getAll,
add : add,
deleteById : deleteById
};

