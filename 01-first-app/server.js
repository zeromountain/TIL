const http = require('http');

function onRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World');
  response.end();
}

http.createServer(onRequest).listen(8000, () => {
  console.log('8000번 포트에서 대기중');
});