window.React = require('react');
var ToDoData = require('./ToDoData');
var ToDoAPI = require('./utils/ToDoAPI');
var FluxToDoApp = require('./components/FluxToDoApp.react');

// Initialize the mock data, run the API call and mount controller view
// Load mock ToDo data into localStorage
ToDoData.init();

// Load mock API
callToDoAPI.getToDoData();

// Render FluxToDoApp Controller view
React.render(
  <FluxToDoApp />,
  document.getElementById('flux-todo')
);
