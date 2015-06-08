// Task 2 of 19

// Declare the Parrot variable and assign the value retured to it.
// Will return the value of the module.exports from parrot.js which
// is the Parrot object.
var MyParrot = require('./parrot')   // reference to Parrot object
var message = MyParrot.speakEnglish()

console.log(message)                // print to command line

// In command line, type node test.js which should print the 'Hello'
// message.


// Task 3 of 19
var Contact = require('./contact')
var name = Contact.parseName("John Smith, 604-123-9090")
console.log(name)

// Task 4 of 19
var number = Contact.parseNumber("John Smith, 604-123-9090")
console.log(number)

// Task 5 of 19
var contact = Contact.createContact("John Smith, 604-123-9090")
console.log(contact)

// Task 8 of 19
// This will take a callback function as an argument which is
// the value for the done argument from the implementation of
// the loadContacts argument. This has access to the same two
// arguments from the anonymous function in loadContacts.
Contact.loadContacts(function(err, data) {
  console.log(data)
})

// // Task 9 of 19
// var contacts = [ { name: "John Smith", number: "604-123-9090"} ]
// Contact.saveContacts(contacts, function(err) {
//   console.log('success')
// })

// Task 10 of 19
Contact.saveContact(contact, function(err) {
  console.log('success')
})
