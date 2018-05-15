var mongoose = require('mongoose');
var FirstApi = mongoose.model('FirstApi');
var firstapis = require('../controllers/firstapis.js')

module.exports = function(app)
   {
	
	app.get("/tasks", function(req, res)
	{ 
		console.log("made it to the / route")
		firstapis.showAll(req, res);
	})
	app.post("/tasks", function(req, res)
	{
		console.log("made it to the post/tasks route")
		firstapis.new(req, res);
	})

	app.get("/tasks/:id", function(req, res)
	{
		console.log("made it to the get tasks/:id route")
		firstapis.showOne(req, res, req.params.id);
	})
	
	app.put("/tasks/:id", function(req, res)
	{
		console.log("made it to the put tasks/:idroute")
		firstapis.new(req, res);
	})


	app.get("/tasks/new/:id", function(req, res)
	{
		console.log("made it to tasks/new/:id route")
		firstapis.new(req, res);
	})

	app.delete("/tasks/:id", function(req, res)
	{
		console.log("made it to the delete route")
		firstapis.delete(req, res);
	})
}