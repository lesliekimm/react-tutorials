window.React = require('react');
var ToDoData = require('./ToDoData');
var ToDoAPI = require('./utils/ToDoAPI');
var FluxToDoApp = require('./components/FluxToDoApp.react');

// Initialize the mock data, running the API call and mount CV
// Load mock ToDo data into localStorage by calling init function from /ToDoData.js
ToDoData.init();

// Load mock API by calling /utils/getToDoListData() from ToDoAPI.js
ToDoAPI.getToDoListData();

// Render FluxToDoApp Controller View
React.render(
  <FluxToDoApp />,
  document.getElementById('flux-todo')
);

// Next we are going to create our own FB Dispatcher & add a handleAction helper
// method to our Dispatcher instance so we can ID where the action came from.
// /dispatcher/AppDispatcher.js
