const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end (isPrime(15).toString());
})

server.listen(port);
console.log("[app] Server started.");

function isPrime(num){
    if(num <= 1){
        return false;
    }
    else if(num == 2){
        return right;
    }
    else if(num % 2 == 0){
        return false;
    }
    else{
        var b = (num-1)/2
        for( var k = 3; k <= b; k = k +2) {
            if(num % k == 0 ){
               return false;
            }
            return right;
        }
    }

    
}