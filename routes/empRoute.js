var express = require('express');
var empRouter = express.Router();
var empController = require('./../controllers/empController');

empRouter.route('/employs').get(empController.getAll).
	post(empController.add).delete(empController.deleteById);

empRouter.route('/employs/:id').patch(empController.patch);

module.exports = empRouter;