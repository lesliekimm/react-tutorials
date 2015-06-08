// Declare Contact variable & initialize with empty object.
var Contact = {}

// Contact module will have method called parseName

// parseName will take a string argument that takes a
// name and phone number separated by a comma and will
// separate the name from the phone number and return
// only the name
// Takes argument named str which will be the string
Contact.parseName = function(str) {
  // split() - returns array with two strings of the
  // string before and after the comma
  var parts = str.split(',')
  return parts[0]               // return only the first element of the array
}

Contact.parseNumber = function(str) {
  var parts = str.split(',')
  return parts[1].trim()
}

// Takes string argument representing name and phone
// number which returns a JS object with two properties,
// the name and number.
Contact.createContact = function(str) {
  var contact = {
    name: this.parseName(str),
    number: this.parseNumber(str)
  }
  return contact
}

// loadContacts will have to read a file so we need to use
// an asynchronous method because loading a file is usually
// a slow function. We will communicate results via a
// callback function passed as an argument (named done).
Contact.loadContacts = function(done) {
  // To read a data file and convert it into an array, we use
  // package jsonfile.
  // This pacakge will add jsonfile as a dependency in the
  // package.json file. (inside node_mdules folder)
  var jsonfile = require('jsonfile')  // reference to object exported by jsonfile module

  // Because readFile() is asynchronous, we are going to use
  // an anonymous callback function, which it calls when
  // results are ready.
  jsonfile.readFile('data.json', function(err, data) {
    // readFile will call this function with err set to null
    // if no error was encountered. The data argument will
    // contain the array of strings that was loaded.
    done(err, data)
  })
}

// contacts is a JS array containing contact objects.
// This will write contacts array to data.json using
// jsonfile.writeFile and call done(err) when the write
// operation is complete.
Contact.saveContacts = function(contacts, done) {
  var jsonfile = require('jsonfile')

  jsonfile.writeFile('data.json', contacts, function(err) {
    done(err)
  })
}

// This function appends a contact object to data.json file.
// Because saveContact reads and writes on the data.json file,
// we must implement asynchronously
Contact.saveContact = function(contact, done) {
  // Because saveContacts uses this, it should be a reference
  // to a Contact object but because we are inside an
  // anonymous function (not a method of the Contact object),
  // we must save a reference to this fromt he saveContact
  // method & then use it inside our anonymous callback
  // function.
  var _this = this

  // In order to append a contact object to the file, we must
  // first load the data.json file. We use the loadContacts
  // method which takes an anonymous function as an argument
  // with err that will indicate if the contacts were loaded
  // properly and contacts which is the array that holds the
  // contact objects.
  this.loadContacts(function(err, contacts) {
    // If there is an error when loading the objects, it means
    // saveContact also fails so we immediately call it's
    // callback and pass the error to it. We are also returning
    // fromt he loadContacts callback b/c there's no point in
    // continuing.
    if (err) { return done(err) }

    // If no error, we append the contact using the push
    // method.
    contacts.push(contact)

    // First argument is contacts array. Second argument is the
    // callback which will be called when the saveContacts is
    // complete.
    _this.saveContacts(contacts, done)
  })
}

// This method will search for a name (string). First you must
// load the contacts array from 'data.json' & then search the
// ones matching the given name & return them as an array of
// contacts via the done callback.
Contact.findContacts = function(name, done) {
// you need to load the contacts array from `data.json`
// search the ones matching the given name
// and return them as an array of contacts via the done callback
// e.g. done(err, foundContacts)
// where foundContacts is the array of contacts that matched the search
// err is the value for the error (null if no error was encountered)

  var _this = this
  var foundContacts = new Array();

  this.loadContacts(function(err, contacts) {
    if (err) { return done(err) }

    var filterByName = function(contact) {
      if ('name' in contact && contact.name === name) {
        return done(err, foundContacts)
      }
      else {
        return false
      }
    }
  })

  return contacts.filter(_this.filterByName)
}

module.exports = Contact
