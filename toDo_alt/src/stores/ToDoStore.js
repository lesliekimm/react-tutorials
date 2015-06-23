var alt = require('../alt');
var ToDoActions = require('../actions/ToDoActions');

// Create a class for the store
class ToDoStore {
  constructor() {
    // Instance variables defined anywhere in the store will
    // become the state
    // Can update in prototype methods
    this.state = {
      toDoList: []
    };

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
    var id = (+new Date());
    toDoList[id] = {
      id: id,
      complete: false,
      text: text
    };
  }

  handleToggleComplete(toDo) {
    var complete: toDo.complete;
    return {
      
    }
  }

  handleRemoveToDo(id) {
    delete toDoItems[id];
  }

  handleUpdateText(id, text) {
    toDoItems[id] = assign({}, toDoItems[id], text);
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
    return toDoItems;
  }

  getListVisible() {
    return listVisible;
  }
}

module.exports = alt.createStore(ToDoStore, 'ToDoStore');
