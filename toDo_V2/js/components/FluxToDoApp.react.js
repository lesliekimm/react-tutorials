var React = require('react');
var ToDoStore = require('../stores/ToDoStore');
var FluxToDo = require('./FluxToDo.react');

// Method to retrieve state from Stores
function getToDoState() {
  return {
    allToDos: ToDoStore.getList(),
    areAllComplete: ToDoStore.areAllComplete()
  };
}

// Define main Controller View
var FluxToDoApp = React.createClass({
  // Get initial state from stores
  getInitialState: function() {
    return getToDoState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    ToDoStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    ToDoStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div>
        <FluxToDo allToDos={this.state.allToDos} areAllComplete={this.state.areAllComplete} />
      </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    console.log('hi', this.state.areAllComplete);
    this.setState(getToDoState());
  }
});

module.exports = FluxToDoApp;
