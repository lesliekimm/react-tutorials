var React = require('react');
var FluxToDoActions = require('../actions/FluxToDoActions');

// Flux To Do List view
var FluxToDoList = React.createClass({
  // Add item to ToDo list via actions
  addToDoItem: function(event) {
    var item = this.props.selected.item;
    var update = {
      name: this.props.toDo
    }
  }
})
