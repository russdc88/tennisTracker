require('dotenv').config();
var express = require('express');
var path = require('path');

var logger = require('morgan');
const bodyParser = require('body-parser')

var session = require('express-session')


var app = express();
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(express.static('public'));

app.use(session({
	secret: "asshole",
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: (1000*60*60*24*14) }
}))

require('./routes/htmlRoutes')(app);
require('./routes/users')(app);

console.log
module.exports = app;



