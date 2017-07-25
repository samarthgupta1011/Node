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

var patch = function(request,response){
	Emp.findById(request.params.id,function(err,employ){
		if(err){
			response.send("Error getting ID");
		}
		else {

			if(request.body._id){
				delete request.body[_id];
			}

			for(var attr in request.body){
				employ[attr] = request.body[attr];
			}
				var newEmp = new Emp(employ);
				newEmp.save(function(err, emp){
				if(err) response.send('Error');
				else response.send(emp);
			});

		}
	});
};

module.exports = { 
getAll : getAll,
add : add,
deleteById : deleteById,
patch : patch
};

