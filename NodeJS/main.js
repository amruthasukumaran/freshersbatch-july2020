// var fs = require('fs');

//  fs.readFile('read.txt','utf8', function(err, data){
//    fs.writeFile('write.txt', 'asdfghjk');
//  });



// var fs = require('fs');
// var http = require('http');

// var server = http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type': 'application/json'});

//   var myObj = {
//     name : 'amrutha',
//     age : 21

//   }
//   res.end(JSON.stringify(myObj));


  
// var myReadstream = fs.createReadStream(__dirname + '/index.html');
// myReadstream.pipe(res);

// })

// server.listen(3000, '127.0.0.1');

// console.log("This is port 3000");



var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
  if(req.url === '/home' || req.url === '/'){
      res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
})
server.listen(3000, '127.0.0.1');

console.log("This is port 3000");
