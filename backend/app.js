var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var mongo = require('../backend/daos/mongoUtil').connect();

var members = require('./routes/members');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/members', members);

module.exports = app;
