var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var members = require('./routes/members');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/members', members);
app.use(function (req, res) {
    res.sendFile(__dirname + '/public/' + 'index.html');
});
module.exports = app;
