var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxToDoConstants = require('../constants/FluxToDoConstants');

// Define action object
var FluxToDoActions = {

  // Add item to ToDo list
  addToList: function(toDoID, update) {

  },

  // Add to Complete List and remove from ToDo List
  completeItem: function(toDoID) {

  },

  // Set currently selected to do item
  selectToDoItem: function(index) {

  },

  // Update ToDo visibility status
  updateToDoVisible: function(toDoVisible) {

  },

  // Update complete visibility status
  updateCompleteVisible: function(completeVisible) {

  }
};

module.exports = FluxToDoActions;
