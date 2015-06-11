var FluxToDoActions = require('../actions/FluxToDoActions');

module.exports = {
  // Load mock to do data from localStorage into ToDoListStore via Action
  getToDoListData: function() {
    var data = JSON.parse(localStorage.getItem('toDoList'));
    FluxToDoActions.receiveToDoList(data);    // defined in FluxToDoActions
  }
};

// First crated mock data: ../ToDoData.js
// We now have a sample API call
// Next initialize our data by running our API call & mouting our CV: ../app.js
