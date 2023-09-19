var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Gustavo Isaac  Argentino da Silva - 19/09/2023');
}).listen(8018);
