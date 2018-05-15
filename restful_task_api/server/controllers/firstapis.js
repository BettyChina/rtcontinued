var mongoose = require('mongoose');
var FirstApi = mongoose.model('FirstApi');

module.exports = {
	showAll: function(req, res){
		FirstApi.find({}, function(err, firstapis){
			if(err){
				console.log(err);
			}
			else{
				res.json(firstapis);		
			}
		})
	},
	new: function(req, res){
		var firstapi = new FirstApi(req.body);
		console.log(req.body)
		firstapi.save(function(err, data){

			if(err){
				res.json(err)
				console.log(err);
			}
			else{
				res.json(data);
			}
		})

	},
	

	showOne: function(req, res, ID){
        FirstApi.findOne({_id: ID}, function(err, firstapis){
			console.log(req.body);
		try {
			
			if(err){
				console.log(err);
			}
			else{
				res.json(firstapis);	
				console.log(firstapis);	
			}
		} catch (error) {
			
		}
		
		})
	},

	
	delete: function(req, res){
		console.log("delete controller");
		FirstApi.findOne({_id: req.params.id}, function(err, firstapi){
			console.log(firstapi);
			try {
			if(err){
				console.log(err);
			}
			else{
				console.log(firstapi);
				FirstApi.remove({_id: firstapi.id}, function(err, data){
					if(err){
						console.log(err);
					}
					else{
						res.json(data);	
						console.log(data);
					}
				})
			}
		} catch (error) {
			
		}
		})
	}
}