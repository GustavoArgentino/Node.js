# Node.js
Passo a Passo

1) Entrar na pasta onde está o node-env, exemplo "cd node.js/"
2) Ativar o nodejs-env, exemplo "source ./nodejs-env/bin/activate"
3) Abrir o nano do arquivo e colar o codigo fornecido, com as alterações pedidas. Exemplo: "var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Gustavo Isaac  Argentino da Silva - 19/09/2023');
}).listen(8018);

4) Mudar o proprietário do arquivo do arquivo "sudo chown gustavo:gustavo index.js"
5) Ativar o arquivo do index, exemplo "node index.js"
6) Abrir o navegador e pesquisar "localhost:Portausada"
7) Se aparecer os dados fornecidos está correto
