var alt = require('../alt');

// Create actions by creating a class
// Class' prototype methods will become actions
class ToDoActions {
  // Add To Do item to list
  addToDo(text) {
    // Use this.dispatch to dispatch payload through dispatcher
    // onto the stores
    this.dispatch(text);
  }

  // Toggle a single item as complete or undo complete
  toggleComplete(id) {
    this.dispatch(id);
  }

  // Remove To Do item from list
  removeToDo(id) {
    this.dispatch(id);
  }

  areAllComplete() {
    this.dispatch();
  }

  // // Update text of To Do item
  // updateText(id, update) {
  //   this.dispatch(id, update);
  // }
}

module.exports = alt.createActions(ToDoActions);
