var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxToDoConstants = require('../constants/FluxToDoConstants');

// Define action methods
var FluxToDoActions = {
  // Receive inital to do options data
  receiveOptions: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.RECEIVE_OPTIONS,
      data: data
    })
  },

  // Set currently selected to do option variation
  selectOption: function(index) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.SET_SELECTED,
      data: index
    })
  },

  // Add item to To Do List
  addToList: function(optionID, update) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.TODO_ADD,
      optionID: optionID,
      update: update
    })
  },

  // Remove item from To Do List
  removeFromList: function(optionID) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.TODO_COMPLETE,
      optionID: optionID
    })
  },

  // Update To Do List visibility status
  updateListVisible: function(listVisible) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.TODO_VISIBLE,
      listVisible: listVisible
    })
  },

  // Adds item to Completed List
  addToComplete: function(optionID, update) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.COMPLETE_ADD,
      optionID: optionID,
      update: update
    })
  },

  // Removes item from Completed List
  removeFromCompleted: function(optionID) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.COMPLETE_REMOVE,
      optionID: optionID
    })
  },

  // Update Completed List visibility status
  updateCompletedVisible: function(completedVisible) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.COMPLETE_VISIBLE,
      completedVisible: completedVisible
    })
  }
};

module.exports = FluxToDoActions;
