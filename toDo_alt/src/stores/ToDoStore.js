var alt = require('../alt');
var ToDoActions = require('../actions/ToDoActions');

// Create a class for the store
class ToDoStore {
  constructor() {
    // Instance variables defined anywhere in the store will
    // become the state
    // Can update in prototype methods
    this.toDoList = {};

    // Bind action handlers to our actions
    this.bindListeners({
      handleAddToDo: ToDoActions.ADD_TODO,
      handleToggleComplete: ToDoActions.TOGGLE_COMPLETE,
      handleRemoveToDo: ToDoActions.REMOVE_TODO,
      handleAreAllComplete: ToDoActions.ARE_ALL_COMPLETE
    });
  }

  // Action handlers: Define methods in store's prototype
  // that will deal with actions
  update(id, update) {
    this.toDoList[id]=assign({}, toDoList[id], update);
  }

  handleAddToDo(text) {
    text = text.trim()
    if (text === '') {
      return false
    }

    var id = (+new Date());
    this.toDoList[id] = {
      id: id,
      complete: false,
      text: text
    };
  }

  handleToggleComplete(id) {
    var complete = !this.toDoList[id].omplete;
    this.update(id, {complete});
  }

  handleRemoveToDo(id) {
    delete this.toDoList[id];
  }

  handleAreAllComplete() {
    for (var id in toDoList) {
      if (!toDoList[id].complete) {
        return false;
      }
    }
    return true;
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');
