// events
// var fs = require("fs");
// var rs = fs.createReadStream("./summer.html");
// rs.on("open", function () {
//   console.log("successfully opened");
// });

// The EventEmitter Object
var events = require("events");
const { EventEmitter } = require("stream");
var eventEmitter = new events.EventEmitter();

// create a events handler
var myEventhandler = function () {
  console.log("I hear a schream");
};

// assign the event handler to a event
eventEmitter.on("scream", myEventhandler);

// fire the 'scream' event
eventEmitter.emit("scream");
