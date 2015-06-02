var fs = require("fs")

// var data = fs.readFileSync("data.txt", "utf-8")
//
// console.log(1 + 1)

function notifyReadComplete(err, data) {
  console.log("Read complete!")
}

fs.readFile('data.txt', 'utf-8', notifyReadComplete)

console.log(1 + 1)
