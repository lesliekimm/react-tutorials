var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');

// Define initial data points
var _toDoList = {}, _listVisible = false;

// Add option to To Do List
function add(optionID, update) {
  _toDoList[optionID] = _.extend({}, _toDoList[optionID], update);
}

// Set list visibility
function setListVisible(listVisible) {
  _listVisible = listVisible;
}

// Remove option from To Do List
function removeOption(optionID) {
  delete _toDoList[optionID];
}

// Extend To Do Store with EventEmitter to add eventing capabilities
var ToDoStore = _.extend({}, EventEmitter.prototype, {
  // Return To Do List
  getList: function() {
    return _toDoList;
  },

  // Return # of options in To Do List
  getListCount: function() {
    return Object.keys(_toDoList).length;
  },

  // Return To Do List visibility state
  getListVisible: function() {
    return _listVisible;
  },

  // Emit change event
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
      add(action.optionID, action.update);
      break;

    // Respond to TODO_VISIBLE action
    case FluxToDoConstants.TODO_VISIBLE:
      setListVisible(action.listVisible);
      break;

    // Respond to TODO_COMPLETE action
    case FluxToDoConstants.TODO_COMPLETE:
      removeOption(action.optionID);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ToDoStore.emitChange();

  return true;
});

module.exports = ToDoStore;
