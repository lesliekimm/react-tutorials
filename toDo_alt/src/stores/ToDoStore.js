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
      handleUpdateText: ToDoActions.UPDATE_TEXT
    });

    this.exportPublicMethods({
      areAllComplete: this.areAllComplete,
      getList: this.getList,
      getListVisible: this.listVisible
    });
  }

  // Action handlers: Define methods in store's prototype
  // that will deal with actions
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

  update(id, update) {
    this.toDoList[id]=assign({}, toDoList[id], update);
  }

  handleToggleComplete(id) {
    var complete = !this.toDoList[id].omplete;
    this.update(id, {complete});
  }

  handleRemoveToDo(id) {
    delete this.toDoList[id];
  }

  handleUpdateText(id, text) {
    toDoList[id] = assign({}, toDoList[id], text);
  }

  areAllComplete() {
    for (var id in toDoItems) {
      if (!toDoItems[id].complete) {
        return false;
      }
    }
    return true;
  }

  getList() {
    return toDoList;
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');
