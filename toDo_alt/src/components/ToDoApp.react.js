var React = require('react');
var AltContainer = require('alt/AltContainer');
var ToDoStore = require('../stores/ToDoStore');
var ToDoActions = require('../actions/ToDoActions');
var ToDo = require('../components/ToDo.react');

function getToDoState() {
  return {
    allToDos: ToDoStore.getState().toDoList,
    areAllComplete: ToDoStore.handleAreAllComplete()
  }
}

var ToDoApp = React.createClass({
  // Get the state out of your store
  // Every alt store has a method which returns its state
  // Use React's getInitialState to set initial store state
  getInitialState() {
    return getToDoState();
  },

  // To listen to changes, use componentDidMount component
  // and add an event handlers
  componentDidMount() {
    ToDoStore.listen(this._onChange);
  },

  // Remove event listener
  componentWillUnmount() {
    ToDoStore.unlistem(this._onChange);
  },

  _onChange() {
    this.setState(getToDoState());
  },

  render() {
    return (
      <div className="container">
        <ToDo allToDos={this.state.allToDos} areAllComplete={this.state.areAllComplete} />
      </div>
    );
  }
});

module.exports = ToDoApp;
