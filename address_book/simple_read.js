var fs = require('fs')

function notifyReadComplete(err, data) {
  console.log('Read complete!')
  console.log(data)
}

fs.readFile('data.json', 'utf-8', notifyReadComplete)
console.log(1 + 1)


// var fs = require('fs')
//
// var options = { encoding: 'utf-8' }
//
// fs.readFile('data.json', options, function(err, data) {
//   console.log(data)
// })
