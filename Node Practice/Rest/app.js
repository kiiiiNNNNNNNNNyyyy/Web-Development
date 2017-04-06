'use strict'
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

//declaring a middleware
//will make to look everything related to assets route in the public folder 
app.use('/assets', express.static(__dirname + '/public'));

//by default the express engine look for the static files in the folder called views
//setting up the template engine
app.set('view engine', 'ejs');

//configuring the routes
app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello World</h1></body></html>');
});

app.get('/person/:id', function(req, res){
    res.send('<html><head></head><body><h1>Hello Person ' + req.params.id + '</h1></body></html>');
});

app.get('/person', function(req, res){
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></link></head><body><h1>Hello World</h1></body></html>');
});

//no need to add extension, becoz set in template engine
app.get('/template', function(req, res){
    res.render('index');
});

//Query data
app.get('/query/:id', function(req, res){
    res.render('/person', {ID: req.params.id, Qstr: req.query.Qstr});
    console.log(Qstr);
});


app.listen(port);
