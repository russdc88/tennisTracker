var express = require('express');
var path = require('path');

/* GET home page. */
module.exports = function(app){
	app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
	});
}


