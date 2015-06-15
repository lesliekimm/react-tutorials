var React = require('react');
var OptionsStore = require('../stores/OptionsStore');
var ToDoStore = require('../stores/ToDoStore');
var CompletedStore = require('../stores/CompletedStore.js');
var FluxOptions = require('./FluxOptions.react');
var FluxToDo = require('./FluxToDo.react');
var FluxCompleted = require('./FluxCompleted.react');

// Method to retrieve state from Stores
function getToDoState() {
  return {
    options: OptionsStore.getOptions(),
    selectedOption: OptionsStore.getSelected(),
    toDoList: ToDoStore.getList(),
    toDoCount: ToDoStore.getListCount(),
    listVisible: ToDoStore.getListVisible()
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
    OptionsStore.addChangeListener(this._onChange);
    ToDoStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    OptionsStore.removeChangeListener(this._onChange);
    ToDoStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div className="flux-to-do-app">
      <FluxToDo list={this.state.toDoList} count={this.state.toDoCount} visible={this.state.listVisible} />
      <FluxOptions options={this.state.options} toDoList={this.state.toDoList} selected={this.state.selectedOption} />
      </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getToDoState());
  }
});

module.exports = FluxToDoApp;
