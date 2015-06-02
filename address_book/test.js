// var Parrot = require('./parrot')
//
// var message = Parrot.speakSpanish()
//
// console.log(message)


var Contact = require('./contact')

// var name = Contact.parseName("John Smith, 604-123-9999")
// var name = Contact.parseName("Bob,611-123-9999")
// var number = Contact.parseNumber("John Smith, 604-123-9999")
// var contact = Contact.createContact("John SMith, 604-123-9999")

// console.log(name)
// console.log(number)
// console.log(contact)

Contact.loadContacts(function(err, data) {
  console.log(data)
})
