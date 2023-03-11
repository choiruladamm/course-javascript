var http = require("http");
var dt = require("./02-module");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Tanggal dan Wahtu sekarang: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);
