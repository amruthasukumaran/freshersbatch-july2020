var express = require('express');

var bodyparser = require('body-parser');

var app = express()
app.set('view engine', 'ejs');


var urlencodedParser = bodyparser.urlencoded({ extended: false })

app.get('/form', function(req, res){
    res.render('form');
});

app.post('/form', urlencodedParser, function(req, res) {
    var data = req.body.str.split('').reverse().join('');
   // res.send(req.body.str.split('').reverse().join(''));
   console.log(data);
})

app.listen( 3000)     

//str.split("").reverse().join("")