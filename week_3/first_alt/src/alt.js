// Create instance of alt.
var Alt = require('alt');

// Instantiates a Flux dispatcher & gives you methods to create
// your actions & stores.
var alt = new Alt();
var chromeDebug = require('alt/utils/chromeDebug')

chromeDebug(alt);

module.exports = alt;
