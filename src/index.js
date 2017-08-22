var http = require('http');
var getFact = require('./facts');
var getEmail = require('./emails');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var fact = getFact();
  console.log("Email would be sent now.");
}).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080/');
