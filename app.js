var express = require("express");
var app 	= express();

app.use(express.static(__dirname));
app.get("/", function(req, res){

	res.render("index");
});

app.listen((process.env.PORT || 3000), function(){

	console.log("To Do server running");
});