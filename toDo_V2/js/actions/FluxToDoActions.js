var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxToDoConstants = require('../constants/FluxToDoConstants');

var FluxToDoActions = {
  // Add an item to the To Do List
  add: function(text) {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_ADD,
      text: text
    });
  },

  // Toggle a single item as complete or undo complete
  toggleComplete: function(toDo) {
    var id = toDo.id;
    var actionType = toDo.complete ? FluxToDoConstants.TODO_UNDO_COMPLETE : FluxToDoConstants.TODO_COMPLETE;
    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    });
  },

  // Remove a To Do item
  remove: function(id) {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_DELETE,
      id: id
    });
  },

  // Remove all completed To Do items
  removeAll: function() {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_DELETE_ALL_COMPLETED
    });
  },

  // Mark all To Do items as complete
  toggleCompleteAll: function() {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_TOGGLE_ALL
    });
  },

  // Update To Do item text
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: FluxToDoConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  }
};

module.exports = FluxToDoActions;
