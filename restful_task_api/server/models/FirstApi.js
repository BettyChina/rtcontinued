var mongoose = require('mongoose');

var FirstApiSchema = new mongoose.Schema({

	title: {type: String},
	description: {type: String},
	completed: {type: String},
}, {timestamps: true})

mongoose.model('FirstApi', FirstApiSchema);