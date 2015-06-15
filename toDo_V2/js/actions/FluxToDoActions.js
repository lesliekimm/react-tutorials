var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxToDoConstants = require('../constants/FluxToDoConstants');

// Define action methods
var FluxToDoActions = {
  // Receive inital product data
  receiveOptions: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.RECEIVE_OPTIONS,
      data: data
    })
  },

  // Set currently selected product variation
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
      actionType: FluxToDoConstants.TODO_REMOVE,
      optionID: optionID
    })
  },

  // Update To Do List visibility status
  updateListVisible: function(listVisible) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.TODO_VISIBLE,
      listVisible: listVisible
    })
    console.log("blah", listVisible);
  }

};

module.exports = FluxToDoActions;
