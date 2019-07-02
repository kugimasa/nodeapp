const http = require('http');

var server = http.createServer(
    (request, response)=>{
        response.end('<html><body><h1><p>Welcome to Node.js</p></h1></body></html>');
    }
);
server.listen(3000);
