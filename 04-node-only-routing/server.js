const http = require('http');
const router = require('./app');

http.createServer(router.handleRequest).listen(8000, () => {
  console.log('8000번 포트에서 대기 중');
});