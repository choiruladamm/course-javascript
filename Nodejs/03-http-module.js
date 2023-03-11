var http = require("http");

// create a server object
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // Add an HTTP Header
    res.write(req.url); // Read the Query String
    res.end(); // end the response
  })
  .listen(8080); // the server object listens on port 8080
