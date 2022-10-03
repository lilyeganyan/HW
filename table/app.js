const http = require("http");
const port = 8080;
const fs = require("fs");
const htmlcontent = fs.readFileSync("table/index1.html");

const server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.end(htmlcontent);
});
server.listen(port, ()=>{
    console.log('Server listening on: http://localhost:%s', port)
})

