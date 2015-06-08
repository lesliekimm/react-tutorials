var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  TODO_ADD: null,         // Add item to ToDo list
  TODO_COMPLETE: null,    // Remove item from ToDo list and add to Completed list
  TODO_VISIBLE: null,     // Shows ToDo list
  COMPLETE_VISIBLE: null, // SHows Completed list
  SET_SELECTED: null,     // Select an item from ToDo list
  
})
