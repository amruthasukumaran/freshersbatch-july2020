var express = require('express');
 
var app = express();
app.get('/', function(req, res){
    res.end('Hello World!!!');
});


app.get('/home', function(req, res){
    
    //console.log('The value of PORT is:', process.env.PORT);
console.log(process.argv[2]);

    res.send(process.argv[2])
});

app.listen(process.argv[2]);
//app.listen(3000);