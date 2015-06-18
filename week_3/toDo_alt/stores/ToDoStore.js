var alt = require('../alt');
var ToDoActions = require('../actions/ToDoActions');

class ToDoStore {
  constructor() {
    this.bindListeners({
      addToDoItem: ToDoActions.TODO_ADD,
      toDoComplete: ToDoActions.TODO_COMPLETE,
      toggleToDoItem: ToDoActions.TODO_TOGGLE,
      removeToDoItem: ToDoActions.TODO_REMOVE,
      removeAllToDoItems: ToDoActions.TODO_REMOVE_ALL,
      toggleCompleteAll: ToDoActions.TODO_TOGGLE_COMPLETE_ALL
      updateText: ToDoActions.TODO_UPDATE_TEXT
    });
  }

  addToDoItem(text) {

  }

  updateToDoItem(id, updates) {
    
  }

  toggleToDoItem(toDo) {

  }

  removeToDoItem(id) {

  }

  removeAllToDoItems() {

  }

  toggleCompleteAll() {

  }

  updateText(id, text) {

  }
}


add(text) {
  this.dispatch(text);
}

toggleComplete(toDo) {
  this.dipatch(toDo);
}

remove(id) {
  this.dispatch(id);
}

removeAll() {
  this.dispatch();
}

toggleCompleteAll() {
  this.dispatch();
}

updateText(id, text) {
  this.dispatch(id, text);
}
