var React = require('react');
var ReactPropTypes = React.PropTypes;
var ToDoItem = require('../components/ToDoItem.react');
var ToDoTextInput = require('../components/ToDoTextInput.react')
var ToDoActions = require('../actions/ToDoActions');

var ToDo = React.createClass({
  propTypes: {
    allToDos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },

  render () {
    var allToDos = this.props.allToDos;
    var toDos = [];

    for (var key in allToDos) {
      toDos.push(<ToDoItem key={key} toDo={allToDos[key]} />);
    }

    return (
      <div id="elements">
        <h1>todos</h1>
        <ToDoTextInput
          id="new-todo"
          placeholder="to do item"
          onSave={this.onSave}
          />
          <ul id="toDos"> { toDos } </ul>
        </div>
    );
  }
});

module.exports = ToDo;
