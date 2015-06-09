// Create a Store for To Do items list

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');
// Underscore provides over 100 functions that support both your favorite workaday
// functional helpers: map, filter, invoke — as well as more specialized goodies:
// function binding, javascript templating, creating quick indexes, deep equality
// testing, and so on.

// Define initial data points
var _toDoList = {}, _selected = null;

// Define private methods loadToDoDta and setSelected

// Method to load to do data from mock API
function loadToDoData(data){
  _toDoList = data[0];
  _selected = data[0].variants[0];
}

// Method to set the currently selected To Do items
function setSelected(index) {
  _selected = _toDoList.variants[index];
}

// Extend ToDoStore with EventEmitter to add eventing capabilities
// These methods can be called after require'ing our Store w/in a View
var ToDoListStore = _.extend({}, EventEmitter.prototype, {
  // Return To Do data
  getToDoList: function() {
    return _toDoList;
  },

  // Return selected To Do items
  getSelected: function() {
    return _selected;
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
// Switch statement determines if supplied payload matches an action we want to
// respond to: if it does, we call our private methods with our supplied action
// data & fire a change event, forcing our view to retrieve the new state & update
// its display
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {
    // Respond to RECEIVE_DATA action
    case FluxToDoConstants.RECEIVE_DATA:
      loadToDoData(action.data);
      break;

    // Respond to SET_SELECTED action
    case FluxToDoConstants.SET_SELECTED:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change events
  ToDoListStore.emitChange();

  return true;
});

module.exports = ToDoListStore;
