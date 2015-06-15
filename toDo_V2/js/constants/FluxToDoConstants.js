var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  TODO_ADD: null,         // Adds option to list
  TODO_REMOVE: null,      // Removes option from list
  TODO_VISIBLE: null,     // Shows or hides the list
  SET_SELECTED: null,     // Selects a to do option
  RECEIVE_OPTIONS: null   // Loads our mock data
});
