var http = require ('http');
var express = require ('express');
var path = require ('path');

var app = express();

app.use(express.static(path.normalize(__dirname) + '/public'));

app.use(function(req,res,next){
    console.log('Request from ' + req.ip);
    next();
});

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.get('/about', function(req,res){
    console.log('about');
});