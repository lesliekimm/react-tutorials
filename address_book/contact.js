var Contact = {}

Contact.parseName = function(str) {
  // var parts = str.split(',')
  // return parts[0]

  return str.split(',')[0].trim()
}

Contact.parseNumber = function(str) {
  return str.split(',')[1].trim()
}

Contact.createContact = function(str) {
  var contact = {
    name: this.parseName(str),
    number: this.parseNumber(str)
  }

  return contact
}

Contact.loadContacts = function(done) {
  var jsonfile = require('jsonfile')
  jsonfile.readFile('data.json', function(err, data) {
    done(err, data)
  })
}

module.exports = Contact
