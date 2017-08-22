var http = require('http');
var getFact = require('./facts');
var getEmail = require('./emails');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  var fact = getFact();
  var email = getEmail(fact);
  email.send(function(err){
    if (err) {
      res.end(err.concat("\n"));
    }
    else {
      res.end("Email sent!!".concat("\n"));
    }
  });
}).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080/');
