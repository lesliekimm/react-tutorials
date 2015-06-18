var alt = require('../alt');

class ToDoActions {
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
}

module.exports = alt.createActions(ToDoActions);
