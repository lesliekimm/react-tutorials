var keyMirror = require('react/lib/keyMirror');

// Define action constants to define which actions app will perform
module.exports = keyMirror({
  TODO_ADD: null,           // Add item to ToDo list
  TODO_COMPLETE: null,      // Remove item from ToDo list and add to Completed list
  TODO_VISIBLE: null,       // Shows ToDo list
  COMPLETED_VISIBLE: null,  // Shows Completed list
  SET_SELECTED: null,       // Select an item from ToDo list
  RECEIVE_DATA: null        // Load our mock data
});

// Need to create their corresponding action creator methods
// We can call these from our views/components that tell our Dispatcher to BC actions
// to our Stores.
