// Similar to import statements in Java
var React = require('react');
var FluxToDoApp = require('./components/FluxToDoApp.react');

// Similar to instantiate an object in Java in the toDoApp div from index file
React.render(<FluxToDoApp /> , document.getElementById('todoapp'));
