// keyMirror allows us to mirror our keys so that our value matches our key definition
var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  TODO_ADD: null,                   // add a To Do item to the list
  TODO_COMPLETE: null,              // mark a To Do item as complete
  TODO_DELETE: null,                // delete a To Do item
  TODO_DELETE_ALL_COMPLETED: null,  // delete all completed To Do items
  TODO_TOGGLE_ALL: null,            // toggle all items as complete or not complete
  TODO_UNDO_COMPLETE: null,         // mark a completed To Do item as not complete
  TODO_UPDATE_TEXT: null            // update the text of a To Do item
});
