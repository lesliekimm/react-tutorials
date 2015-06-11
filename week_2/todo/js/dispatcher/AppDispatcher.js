// Create our own instance of FB's Dispatcher library
// Add a handleAction helper method to our Dispatcher instance so we can ID where
// the action came from

var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
// Source code: https://github.com/facebook/flux/blob/master/src/Dispatcher.js
var AppDispatcher = new Dispatcher();

// Convenience method to handle dispatch requests:
// We receive an action from an action creator & have our Dispatcher dispatch
// action with source property & the action that was supplied as an argument
AppDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
