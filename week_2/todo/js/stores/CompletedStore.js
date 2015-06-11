var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');

// Define initial data points
var _completed = {}, _completedVisible = false;

// Add item to completed
function addCompletedItem(itemID) {
  _completed[itemID] = _.extend({}, _completed[itemID]);
}

// Remove item from completed
function removeCompletedItem(itemID) {
  delete _completed[itemID];
}

// Set completed list visiblity
function setCompletedVisible(completedVisible) {
  _completedVisible = completedVisible;
}

// Extend Completed Store with EventEmitter to add eventing capabilities
var CompletedStore = _.extend({}, EventEmitter.prototype, {
    // Return completed items
    getCompletedItems: function() {
      return _completed;
    },

    // Return completed visiblity state
    getCompletedVisible: function() {
      return _completedVisible;
    },

    // Emit Change event
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
    // Responde to COMPLETE_ADD action
    case FluxToDoConstants.COMPLETE_ADD:
      addCopmletedItem(action.itemID);
      break;

    // Respond to COMPLETE_REMOVE action
    case FluxToDoConstants.COMPLETE_REMOVE:
      removeCompletedItem(action.itemID);
      break;

    // Respond to COMPLETED_VISIBLE
    case FluxToDoConstants.COMPLETED_VISIBLE:
      setCompletedVisible(action.completedVisible);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  CompletedStore.emitChange();

  return true;
});

module.exports = CompletedStore;
