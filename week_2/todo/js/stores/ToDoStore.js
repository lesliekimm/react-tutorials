var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');

// Define initial data points
var _toDo = {}, _toDoVisible = false;

// Add To Do item to list
function addToDoItem(itemID) {
  _toDo[itemID] = _.extend({}, _toDo[itemID])
}

// Remove item from To Do list
function removeToDoItem(itemID) {
  delete _toDo[itemID];
}

// Set ToDo visibility
function setToDoVisible(toDoVisible) {
  _toDoVisible = toDoVisible;
}

// Extend ToDo Store with EventEmitter to add eventing capabilities
var ToDoStore = _.extend({}, EventEmitter.prototype, {
  // Return To Do items
  getToDoItems: function() {
    return _toDo;
  },

  // Return To Do visibility
  getToDoVisible: function() {
    return _toDoVisible;
  },

  // Emit Change eventing
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    // Respond to LIST_ADD action
    case FluxToDoConstants.LIST_ADD:
      addToDoItem(action.itemID);
      break;

    // Respond to LIST_REMOVE
    case FluxToDoConstants.LIST_REMOVE:
      removeToDoItem(action.itemID);
      break;

    // Respond to LIST_VISIBLE action
    case FluxToDoConstants.LIST_VISIBLE:
      setToDoVisible(action.toDoVisible);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change vent
  ToDoStore.emitChange();

  return true;
});

module.exports = ToDoStore;
