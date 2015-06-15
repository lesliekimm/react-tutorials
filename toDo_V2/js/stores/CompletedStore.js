var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');

// Define initial data points
var _completedList = {}, _completedVisible = false;

// Add option to Completed List
function addCompleted(optionID, update) {
  _completedList[optionID] = _.extend({}, _completedList[optionID], update);
}

// Set completed list visibility
function setCompletedVisible(completedVisible) {
  _completedVisible = completedVisible
}

// Remove option from Completed List
function removeOptionFromCompleted(optionID) {
  delete _completedList[optionID];
}

// Extend Completed Store with EventEmitter to add eventing capabilities
var CompletedStore = _.extend({}, EventEmitter.prototype, {
  // Return Completed List
  getCompletedList: function() {
    return _completedList;
  },

  // Return # of options in Completed List
  getCompletedCount: function() {
    return Object.keys(_completedList).length;
  },

  // Return Completed List visibility state
  getCompletedVisible: function() {
    return _completedVisible;
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
    // Respond to COMPLETE_ADD action
    case FluxToDoConstants.COMPLETE_ADD:
      add(action.optionID, action.update);
      break;

    // Respond to COMPLETE_VISIBLE action
    case FluxToDoConstants.COMPLETE_VISIBLE:
      setListVisible(action.listVisible);
      break;

    // Respond to COMPLETE_REMOVE action
    case FluxToDoConstants.COMPLETE_REMOVE:
      removeOption(action.optionID);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ToDoStore.emitChange();

  return true;
});

module.exports = CompletedStore;
