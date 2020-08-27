var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/year', function(req, res){
   // console.log(req.query);
    res.render('year',{qs : req.query})
})

app.listen(3000);