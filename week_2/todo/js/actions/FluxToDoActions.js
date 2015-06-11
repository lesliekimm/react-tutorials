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
    addItem: function(itemID) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.LIST_ADD,
        itemID: itemID,
      })
    },

    // Remove item from To Do list
    removeItem: function(itemID) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.LIST_REMOVE,
        itemID: itemID
      })
    },

    // Add item to Completed List
    addCompletedItem: function(itemID) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.COMPLETE_ADD,
        itemID: itemID,
      })
    },

    // Remove item from Completed list
    removeCompletedItem: function(itemID) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.COMPLETE_REMOVE,
        itemID: itemID
      })
    },

    // Update ToDo visiblity status
    updateListVisible: function(listVisible) {
      AppDispatcher.handleAction({
        actionType: FluxToDoConstants.LIST_VISIBLE,
        listVisible: listVisible
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
    selectItem: function(index) {
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
