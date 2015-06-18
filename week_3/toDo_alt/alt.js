var Alt = require('alt');
var alt = new Alt();
alt.dispatcher.register(console.log);

var chromeDebug = require('alt/utils/chromeDebug')

chromeDebug(alt);

module.exports = alt;
