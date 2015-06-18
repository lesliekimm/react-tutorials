var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxToDoConstants = require('../constants/FluxToDoConstants');
var _ = require('underscore');
var assign = require('object-assign');

// Define initial data points
var _toDoList = {};

// Create a To Do Item
function addToDoItem(text) {
  // Use current timestamp and random # to create id
  // var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  var id = (+new Date());
  console.log('created id ', id);
  _toDoList[id] = {
    id: id,
    complete: false,
    text: text
  };
}

// Update a To Do Item
function updateToDoItem(id, update) {
  _toDoList[id] = assign({}, _toDoList[id], update);
}

// Updated all the To Do items
function updateAllToDoItems(updates) {
  for (var id in _toDoList) {
    update(id, updates);
  }
}

// Delete a To Do Item
function deleteToDoItem(id) {
  console.log('deleting?? ', id);
  delete _toDoList[id];
}

// Delete all To Do items
function deleteAllCompletedItems() {
  for (var id in _toDoList) {
    if (_toDoList[id].complete) {
      deleteToDoItem(id);
    }
  }
}

// Extend To Do Store with EventEmitter to add eventing capabilities
var ToDoStore = _.extend({}, EventEmitter.prototype, {
  // Find out if all To Do Items are marked as completed
  areAllComplete: function() {
    for (var id in _toDoList) {
      console.log('id ', id);
      console.log('length', _toDoList.length);
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
    // Add To Do item
    case FluxToDoConstants.TODO_ADD:
      text = action.text.trim();
      if (text !== '') {
        addToDoItem(text);
        ToDoStore.emitChange();
      }
      break;

    // Mark To Do item as complete
    case FluxToDoConstants.TODO_COMPLETE:
    updateToDoItem(action.id, {complete: true});
        ToDoStore.emitChange();
      break;

    // Delete a To Do item
    case FluxToDoConstants.TODO_DELETE:
      deleteToDoItem(action.id);
      ToDoStore.emitChange();
      break;

    // Delete all To Do completed items
    case FluxToDoConstants.TODO_DELETE_ALL_COMPLETED:
      deleteAllCompletedItems();
      ToDoStore.emitChange();
      break;

    // Toggle all To Do items
    case FluxToDoConstants.TODO_TOGGLE_ALL:
      if (ToDoStore.areAllComplete()) {
        updateAllToDoItems({complete: false});
      } else {
        updateAllToDoItems({complete: true});
      }
      ToDoStore.emitChange();
      break;

    // Mark a completed To Do item as not complete
    case FluxToDoConstants.TODO_UNDO_COMPLETE:
      updateToDoItem(action.id, {complete: false});
      ToDoStore.emitChange();
      break;

    // Update text of To Do item
    case FluxToDoConstants.TODO_UPDATE_TEXT:
      text = action.text.trim();
      if (text !== '') {
        updateToDoItem(action.id, {text: text});
        ToDoStore.emitChange();
      }
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ToDoStore.emitChange();

  return true;
});

module.exports = ToDoStore;
