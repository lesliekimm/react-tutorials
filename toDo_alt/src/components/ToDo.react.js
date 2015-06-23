var React = require('react');
var ReactPropTypes = React.PropTypes;
var ToDoItem = require('../stores/ToDoItem');
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
        <TodoTextInput
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
