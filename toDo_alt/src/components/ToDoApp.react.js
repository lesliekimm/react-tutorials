var React = require('react');
var AltContainer = require('alt/AltContainer');
var ToDoStore = require('../stores/ToDoStore');
var ToDoActions = require('../actions/ToDoActions');

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

  onChange(state) {
    this.setState(state);
  },

  render() {
    return (
      <div id="header">
        <h1>todos</h1>
        <div id="elements">
          <ul>
            {this.state.toDoItems.map((toDo) => {
              return (
                <li>{toDo.text}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
