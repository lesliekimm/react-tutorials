// This will read a large file ("data.txt") using fs module from node.js.
// Example of synchronous functions
var fs = require("fs")

var data = fs.readFileSync("data.txt", "utf-8")

// Until app reads the data file, 2 (the result of 1 + 1) may not print
// immediately, depending on size of file. If file is really large, the
// entire file must be read before this next command executes.
console.log(1 + 1)

// To avoid blocking entire app, JS has support for asynchronous
// functions.
