// These action creator methods correspond to the defined constants in FluxToDoConstants.
// The actions themselves consist of an object containing the desired action constant & a data
// payload.
// Our Stores update & fire change events which our Controller View listens to in order to know
// when to begin a state update.

// We use Dispatcher's handleAction method to pass an actionType constant & associated data to
// our Dispatcher.

var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxToDoConstants = require('../constants/FluxToDoConstants');

// Define action object
var FluxToDoActions = {
    // Add item to To Do list
    // item is prop from toDo item in ToDoData
    addToDoItem: function(itemID, update) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.TODO_ADD,
        itemID: itemID,
        update: update
      })
    },

    // Remove item from To Do list and add to Completed list
    completedToDoItem: function(itemID, update) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.TODO_COMPLETE,
        itemID: itemID,
        update: update
      })
    },

    // Update ToDo visiblity status
    updateToDoVisible: function(toDoVisible) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.TODO_VISIBLE,
        toDoVisible: toDoVisible
      })
    },

    // Update Completed visiblity status
    updateCompletedVisible: function(completedVisible) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.COMPLETED_VISIBLE,
        completedVisible: completedVisible
      })
    },

    // Set currently selected To Do items
    selectToDoItem: function(index) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.SET_SELECTED,
        data: index
      })
    },

    // Receive initial To Do items data
    receiveToDoList: function(data) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.RECEIVE_DATA,
        data: data
      })
    }
};

module.exports = FluxToDoActions;
