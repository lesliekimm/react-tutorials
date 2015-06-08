// Declare Parrot variable & initialize it with a new empty object.
// Curly brackets represent empty object creation.
var Parrot = {}

// Each method defined as a property of the Parrot object that
// refers to a function (use dot notation).

// Use dot notation and assign to a function w/ no paramters that
// returns the 'Hello!' string.
Parrot.speakEnglish = function() { return 'Hello!' }
Parrot.speakSpanish = function() { return 'Ola!' }

// In node.js, each module contains an empty object called
// module.exports - only object that can be accessed from other
// modules so we must assign our Parrot object to module.exports.
module.exports = Parrot

// Create another module called test.js which will import the
// Parrot object from parrot.js  print the values returned by the
// methods of the Parrot variable.
