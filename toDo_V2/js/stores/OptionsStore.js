var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');

// Define initial data points
var _options = {}, _selected = null;

// Method to load options data from mock API
function loadOptionsData(data) {
  _options = data[0];
  _selected = data[0].variants[0];
}

// Method to set the currently selected options variation
function setSelected(index) {
  _selected = _options.variants[index];
}

// Extend Options Store with EventEmitter to add eventing capabilities
var OptionsStore = _.extend({}, EventEmitter.prototype, {
  // Return Product data
  getOptions: function() {
    return _options;
  },

  // Return selected Product
  getSelected: function(){
    return _selected;
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
    // Respond to RECEIVE_OPTIONS action
    case FluxToDoConstants.RECEIVE_OPTIONS:
      loadOptionsData(action.data);
      break;

    // Respond to SET_SELECTED action
    case FluxToDoConstants.SET_SELECTED:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  OptionsStore.emitChange();

  return true;
});

module.exports = OptionsStore;
