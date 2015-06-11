// CV is our top level component that listens for changes on our stores & then
// updates our app's state by calling our Store's public methods
// This state is then passed down to child components via props
// CV is responsible for:
   // Setting our app's state by calling Store's public methods
   // Composing child components & passing state properties via props
   // Listening for Store's change events

var React = require('react');
var ItemsListStore = require('../stores/ItemsListStore');
var ToDoStore = require('../stores/ToDoStore');
var CompletedStore = require('../stores/CompletedStore');
var FluxToDo = require('./FluxToDo.react');
var FluxToDoList = require('./FluxToDoList.react');
var FluxCompleted = require('./FluxCompleted.react');

// Method to retrieve state from stores
// Create a public method to call public methods on Stores to retrieve their
// current state and set our applications state with the results.
// Called first during getInitialState and when a Store's change event is received.
function getToDoState() {
  return {
    toDoList: ItemsListStore.getToDoList(),
    selectedToDoItem: ItemsListStore.getSelected(),
    toDoItems: ToDoStore.getToDoItems(),
    toDoCount: ToDoStore.getToDoCount(),
    toDoVisible: ToDoStore.getToDoVisible(),
    completedItems: CompletedStore.getCompletedItems(),
    completedCount: CompletedStore.getCompletedCount(),
    completedVisible: CompletedStore.getCompletedVisible()
  };
}

// Define main Controller View
var FluxToDoApp = React.createClass({
  // Get initial state from stores
  getInitialState: function() {
    return getToDoState();
  },

  // Add change listeners to stores: allows us to receive change events
  // componentDidMount: invoked once on client after rendering occurs
  componentDidMount: function() {
    ToDoListStore.addChangeListener(this._onChange);
    ToDoStore.addChangeListener(this._onChange);
    CompletedStore.addChangeListener(this._onChange);
  },

  // Remove change listeners from stores: remove change events wehn/if component is unmounted.
  // componentWillUnmount: invoked prior to unmounting component
  componentWillUnmount: function() {
    ToDoListStore.removeChangeListener(this._onChange);
    ToDoStore.removeChangeListener(this._onChange);
    CompletedStore.removeChangeListener(this._onChange);
  },


  // Render child components, passing state via props
  // We compose our component using FluxToDoList, FluxToDo, FluxCompleted and pass our
  // state props down to them using component properties
  render: function() {
    return (
      <div className="flux-toDo-app">
        <FluxToDoList items={this.state.toDoList} selected={this.state.selectedToDoItem} />
        <FluxToDo list={this.state.toDoItems} count={this.state.toDoCount} toDoVisible={this.state.toDoVisible} />
        <FluxCompleted completedList={this.state.completedItems} completedCount={this.state.completedCount} completedVisible={this.state.completedVisible} />
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getToDoState());
  }
});

module.exports = FluxToDoApp;
