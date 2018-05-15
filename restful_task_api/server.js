var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/myFirstAngularApp/dist/myFirstAngularApp' ));

mongoose.Promise = global.Promise;

require('./server/config/mongoose.js');

var router = require('./server/config/routes.js');
router(app);


PORT = 8000;
app.listen(8000, function(){
console.log("Listening on port " + PORT);
})