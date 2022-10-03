const http = require('http');
const port = 8000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(getRandomInt(1000000).toString());
});

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});

var S = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
  for(var i = 0; i <= 20; i++){
    S = S + getRandomInt;
  }
}
  
