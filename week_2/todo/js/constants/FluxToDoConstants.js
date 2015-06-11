var keyMirror = require('react/lib/keyMirror');

// Define action constants to define which actions app will perform
module.exports = keyMirror({
  LIST_ADD: null,           // Add to do item to List
  LIST_REMOVE: null,        // Remove to do item from List
  COMPLETE_ADD: null,       // Add to do item to Completed List
  COMPLETE_REMOVE: null,    // Remove to do item from Completed List
  LIST_VISIBLE: null,       // Show or hide List
  COMPLETE_VISIBLE: null,   // Show or hide Completed List
  SET_SELECTED: null,       // Select an item from ToDo list
  RECEIVE_DATA: null        // Load our mock data
});

// Need to create their corresponding action creator methods
// We can call these from our views/components that tell our Dispatcher to BC actions
// to our Stores.
