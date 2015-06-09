var FluxToDoActions = require('../actions/FluxToDoActions');

module.exports = {
  // Load mock to do data from localStorage into ToDoStore via Action
  getToDoData: function() {
    var data = JSON.parse(localStorage.getItem('toDo'));
    FluxToDoActions.receiveToDo(data);    // defined in FluxToDoActions
  }
}
