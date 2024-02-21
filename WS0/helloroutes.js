var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    if (request.url === "/helloworld") {
        response.write("<h1>Hello world in HTML</h1>");
    }
    else if (request.url === "/homepage") {
    response.write("<h1>HOMEPAGE</h1>");
    }
    else if (request.url === "/thirdpage") {
        response.write("<h1>This is the third page</h1>");
    }
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');