var http = require("http");
var url = require("url");
// create a server object
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); // Add an HTTP Header
    // res.write(req.url); // Read the Query String
    // res.end(); // end the response
    var q = url.parse(req.url, true).query; // parse the query string
    var txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080); // the server object listens on port 8080
