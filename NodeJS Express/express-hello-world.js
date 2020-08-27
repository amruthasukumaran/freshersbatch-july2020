var express = require('express');

var app = express();

//app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.end('Hello World!!!');
});

app.get('/time', function(req, res){
    res.render('time');
});

var port = process.env.PORT || 1112;

app.listen(port)