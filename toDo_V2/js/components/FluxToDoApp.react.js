var React = require('react');
// var OptionsStore = require('../stores/OptionsStore');
var ToDoStore = require('../stores/ToDoStore');
// var CompletedStore = require('../stores/CompletedStore.js');
// var FluxOptions = require('./FluxOptions.react');
var FluxToDo = require('./FluxToDo.react');
// var FluxCompleted = require('./FluxCompleted.react');

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
    console.log("initializing");
    return getToDoState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    console.log("mounting");
    console.log("allToDos: ", this.state.allToDos);
    console.log("areAllComplete: ", this.state.areAllComplete);
    ToDoStore.addChangeListener(this._onChange);

    console.log("addedChangeListener");
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    ToDoStore.removeChangeListener(this._onChange);
    console.log("removedChangeListener");
  },

  // Render our child components, passing state via props
  render: function() {
    console.log("in render");
  	return (
      <div>
        <FluxToDo allToDos={this.state.allToDos} areAllComplete={this.state.areAllComplete} />
      </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getToDoState());
  }
});

module.exports = FluxToDoApp;
