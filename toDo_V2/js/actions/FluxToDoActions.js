var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxToDoConstants = require('../constants/FluxToDoConstants');

// Define action methods
var FluxToDoActions = {
  // // Receive inital to do options data
  // receiveOptions: function(data) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxToDoConstants.RECEIVE_OPTIONS,
  //     data: data
  //   })
  // },
  //
  // // Set currently selected to do option variation
  // selectOption: function(index) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxToDoConstants.SET_SELECTED,
  //     data: index
  //   })
  // },

  // Add item to To Do List
  create: function(text) {
    AppDispatcher.handleAction({
      actionType: FluxToDoConstants.TODO_CREATE,
      text: text
    })
  },

  // Mark whether To Do Item is complete
  toggleComplete: function(todo) {
    var id = todo.id;
    var actionType = todo.complete ?
      FluxToDoConstants.TODO_UNDO_COMPLETE :
      FluxToDoConstants.TODO_COMPLETE;

    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  },

  // Mark all items as complete
  toggleCompleteAll: function() {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_TOGGLE_COMPLETE_ALL
    });
  },

  // Delete a To Do Item
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_DESTROY,
      id: id
    });
  },

  destroyCompleted: function() {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_DESTROY_COMPLETED
    });
  },

  // Update To Do Item
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  }
  //
  // // Remove item from To Do List
  // removeFromList: function(optionID) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxToDoConstants.TODO_COMPLETE,
  //     optionID: optionID
  //   })
  // },
  //
  // // Update To Do List visibility status
  // updateListVisible: function(listVisible) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxToDoConstants.TODO_VISIBLE,
  //     listVisible: listVisible
  //   })
  // },
  //
  // // Adds item to Completed List
  // addToComplete: function(optionID, update) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxToDoConstants.COMPLETE_ADD,
  //     optionID: optionID,
  //     update: update
  //   })
  // },
  //
  // // Removes item from Completed List
  // removeFromCompleted: function(optionID) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxToDoConstants.COMPLETE_REMOVE,
  //     optionID: optionID
  //   })
  // },
  //
  // // Update Completed List visibility status
  // updateCompletedVisible: function(completedVisible) {
  //   AppDispatcher.handleAction({
  //     actionType: FluxToDoConstants.COMPLETE_VISIBLE,
  //     completedVisible: completedVisible
  //   })
  // }
};

module.exports = FluxToDoActions;
