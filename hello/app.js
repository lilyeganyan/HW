const http = require('http');
const port = 8000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
