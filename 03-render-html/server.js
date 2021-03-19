const http = require('http');
const fs = require('fs');

function onRequest(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('./index.html', 'utf8', (error, data) => {
    if(error) {
      response.writeHead(404);
      response.write('File not found!');
    } else {
      response.write(data);
    }
    response.end();
  });
}

http.createServer(onRequest).listen(8000, () => {
  console.log('8000번 포트에서 대기중');
});