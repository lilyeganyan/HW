const http = require('http');
const port = 8000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(getRandomInt());
});

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);
});

function getRandomInt(_num){
    var S = '0';
    for(var i = 0; i <= 20; i++){
        S = S + i;
    }
}