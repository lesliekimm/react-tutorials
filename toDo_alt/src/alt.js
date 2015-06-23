var Alt = require('alt');

// Create an instance of alt to insantiate a Flux dispatcher
// Gives you methods to create actions and stores
var alt = new Alt();
var chromeDebug = require('alt/utils/chromeDebug')

chromeDebug(alt);

module.exports = alt;
