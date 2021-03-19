const http = require('http');
const module1 = require('./module1');
const module2 = require('./module2');

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(module2.myVariable);
  module2.myFunction();
  response.end();
}).listen(8000, () => {
  console.log('8000번 포트에서 대기중');
});