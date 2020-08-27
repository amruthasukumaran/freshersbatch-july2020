var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Success, I'm listening from port : 3000")
});

server.listen(3000, '127.0.0.1')
