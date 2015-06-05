// // Example of aysnchronous functions.
// var fs = require("fs")
//
// // This function is known as a callback function and is used to signal
// // that the readFile is complete.
// // First argument is err object which will have the value null if there
// // are no errors.
// // Second argument is data which is a string where the content of the file
// // will be stored.
// function notifyReadComplete(err, data) {
//   console.log('Read complete!')
//   console.log(data)
// }
// // This can be done as an anonymous inline function instead of defining
// // the function and calling it as an argument below.
//
// // This time we use readFile() function which is an aysnchronous function
// // which will return control to after this function as the app is reading
// // the file.
// var data = fs.readFile('small.txt', 'utf-8', notifyReadComplete)
//
// console.log(1 + 1)

// Using anonymous inline functions - it is called anonymous because it
// doesn't have a name. Inside the anonymous function is the ONLY place
// you have access to the data read by fs.readFile().
var fs = require("fs")

fs.readFile('small.txt', 'utf-8', function(err, data) {
  console.log('Read complete!')
  console.log(data)
})

console.log(1 + 1)
