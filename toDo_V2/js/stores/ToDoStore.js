var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');

// Define initial data points
var _toDoList = {};

// Create a To Do Item
function create(text) {
  // Use current timestamp and random # to create id
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _toDoList[id] = {
    id: id,
    complete: false,
    text: text
  };
}

// Update a To Do Item
function update(id, update) {
  _toDoList[id] = assign({}, _toDoList[id], updates);
}

// Updated all the To Do items
function updateAll(updates) {
  for (var id in _toDoList) {
    update(id, updates);
  }
}

// Delete a To Do Item
function destroy(id) {
  delete _toDoList[id];
}

// Delete all To Do items
function destroyCompleted() {
  for (var id in _toDoList) {
    if (_toDoList[id].complete) {
      destroy(id);
    }
  }
}

// Extend To Do Store with EventEmitter to add eventing capabilities
var ToDoStore = _.extend({}, EventEmitter.prototype, {
  // Find out if all To Do Items are marked as completed
  areAllComplete: function() {
    for (var id in _toDoList) {
      if(!_toDoList[id].complete) {
        return false;
      }
    }
    return true;
  },

  // Return To Do List
  getList: function() {
    return _toDoList;
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
AppDispatcher.register(function(action) {
  // var action = payload.action;
  var text;

  switch(action.actionType) {
    case FluxToDoConstants.TODO_CREATE:
      text = action.text.trim();
      if (text !== '') {
        create(text);
        ToDoStore.emitChange();
      }
      break;

    case FluxToDoConstants.TODO_TOGGLE_COMPLETE_ALL:
      if (ToDoStore.areAllComplete()) {
        updateAll({complete: false});
      } else {
        updateAll({complete: true});
      }
      ToDoStore.emitChange();
      break;

    case FluxToDoConstants.TODO_UNDO_COMPLETE:
      update(action.id, {complete: false});
      ToDoStore.emitChange();
      break;

    case FluxToDoConstants.TODO_COMPLETE:
      update(action.id, {complete: true});
      ToDoStore.emitChange();
      break;

    case FluxToDoConstants.TODO_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        update(action.id, {text: text});
        ToDoStore.emitChange();
      }
      break;

    case FluxToDoConstants.TODO_DESTROY:
      destroy(action.id);
      ToDoStore.emitChange();
      break;

    case FluxToDoConstants.TODO_DESTROY_COMPLETED:
      destroyCompleted();
      ToDoStore.emitChange();
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ToDoStore.emitChange();

  return true;
});

module.exports = ToDoStore;
