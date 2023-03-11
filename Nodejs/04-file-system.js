// TODO: READ FILE
// var http = require("http");
// var fs = require("fs");
// http.createServer(function (req, res) {
//   fs.readFile("example.html", function (err, data) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data);
//     return res.end;
//   });
// }).listen(8080);

// TODO: CREATE FILE
// cara 1
// var fs = require("fs");
// fs.appendFile("summer.txt", "", function (err) {
//   if (err) throw err;
//   console.log("created file");
// });

// cara 2
// var fs = require("fs");

// fs.open('example4.txt', 'w' , function (err, file) {
//   if (err) throw err;
//   console.log("saved file");
// })

// cara 3
// var fs = require("fs");

// fs.writeFile("example5.txt", "Hello Axell James", function (err) {
//   if (err) throw err;
//   console.log("saved file");
// });

// TODO: UPDATE FILE
// var fs = require("fs");

// fs.appendFile("example1.txt", " Hello James", function (err) {
//   if (err) throw err;
//   console.log("update file");
// });

// replace
// var fs = require("fs");

// fs.writeFile("example1.txt", "Hello Nodejs", function (err) {
//   if (err) throw err;
//   console.log("replaced file");
// });

// TODO: DELETE FILE
// var fs = require("fs");

// fs.unlink("example1.txt", function (err) {
//   if (err) throw err;
//   console.log("deleted file");
// });

// TODO: RENAME FILE
var fs = require("fs");

fs.rename("summer.txt", "summer.html", function (err) {
  if (err) throw err;
  console.log("rename successfully");
});
