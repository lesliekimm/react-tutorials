var React = require('react');
var AltContainer = require('alt/AltContainer');
var ToDoStore = require('../stores/ToDoStore');
var ToDoActions = require('../actions/ToDoActions');

function getToDoState() {
  return {
    allToDos: ToDoStore.getState().toDoList,
    areALlComplete: ToDoStore.areAllComplete()
  }
}

var ToDoApp = React.createClass({
  // Get the state out of your store
  // Every alt store has a method which returns its state
  // Use React's getInitialState to set initial store state
  getInitialState() {
    return ToDoStore.getState();
  },

  // To listen to changes, use componentDidMount component
  // and add an event handlers
  componentDidMount() {
    ToDoStore.listen(this.onChange);
  },

  // Remove event listener
  componentWillUnmount() {
    ToDoStore.unlistem(this.onChange);
  },

  onChange() {
    this.setState(getToDoState());
  },

  render() {
    return (
      <div id="container">
        <ToDo toDos={ this.state.allToDOs } />
      </div>
    );
  }
});

module.exports = ToDoApp;
