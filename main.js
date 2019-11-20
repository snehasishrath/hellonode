// load the http module
var http = require('http'),
    fs = require('fs');

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }

// configure our HTTP server
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
//    response.end("Hello world new\n");
    response.write(html);
    response.end();
});

// listen on localhost:8000
server.listen(8000);
console.log("Server listening at http://127.0.0.1:8000/");