var express = require('express');
var path = require('path');

/* GET home page. */
module.exports = function(app){
	app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get("/signup", function(req, res){
		res.sendFile(path.join(__dirname,"../public/signup.html"))
	})

	app.get("/main", function(req, res){
		res.sendFile(path.join(__dirname,"../public/main.html"))
	})

	app.get("/groundstrokes", function(req, res){
		res.sendFile(path.join(__dirname,"../public/groundstrokes.html"))
	})

}


