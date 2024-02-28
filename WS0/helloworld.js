var http = require("http");
http.createServer(function (request, response) {
    response.setHeader
    response.writeHead(200, ('Content-Type', 'text/plain; charset=utf-8'));
    response.write("<h1>Moi miten menee</h1>");
    response.write("<strong>Taulukko</strong>");

    var data =
     "<table border='2'><tr><th style='color: blue;'>Name</th><th style='color: red;'><a href='https://www.laurea.fi/'>Address</a></th><th style='color: green;'>City</th></tr><tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr><tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr></table>";
  response.write(data);
  response.end("<strong>This is the end</strong>"); //end the response
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');