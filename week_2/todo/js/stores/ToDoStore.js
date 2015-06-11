var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');

// Define initial data points
var _toDo = {}, _toDoVisible = false;

// Add To Do item to list
function add(itemID, update) {
  update.addedToList = itemID in _toDo ? _toDo[itemID].addedToList = true : false;
  _toDo[itemID] = _.extend({}, _toDo[itemID], update)
}

// Set ToDo visibility
function setToDoVisible(toDoVisible) {
  _toDoVisible = toDoVisible;
}

// Remove item from To Do list
function removeToDoItem(itemID) {
  delete _toDo[itemID];
}

// Extend ToDo Store with EventEmitter to add eventing capabilities
var ToDoStore = _.extend({}, EventEmitter.prototype, {
  // Return To Do items
  getToDoItems: function() {
    return _toDo;
  },

  // Return number of items in To Do list
  getToDoCount: function() {
    return Object.keys(_toDo).length;
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
    // Respond to TODO_ADD action
    case FluxToDoConstants.TODO_ADD:
      add(action.itemID, action.update);
      break;

    // Respond to TODO_VISIBLE action
    case FluxToDoConstants.TODO_VISIBLE:
      setToDoVisible(action.toDoVisible);
      break;

    // Respond to TODO_COMPLETE
    case FluxToDoConstants.TODO_COMPLETE:
      removeToDoItem(action.itemID);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change vent
  ToDoStore.emitChange();

  return true;
});

module.exports = ToDoStore;
