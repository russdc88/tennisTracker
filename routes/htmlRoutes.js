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
		if (req.session.authenticated = true){
			res.sendFile(path.join(__dirname,"../public/main.html"))
		}
		else {
			res.sendFile(path.join(__dirname,"../public/error.html"))
		}

	})

	app.get("/groundstrokes", function(req, res){
		if (req.session.authenticated){

			res.sendFile(path.join(__dirname,"../public/groundstrokes.html"))
		}
		else {
			res.sendFile(path.join(__dirname,"../public/error.html"))
		}

	})


	app.get("/newplayer", function(req, res){
		res.sendFile(path.join(__dirname,"../public/playerSignup.html"))
	})
}


