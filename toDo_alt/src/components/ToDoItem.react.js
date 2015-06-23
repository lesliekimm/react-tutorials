var React = require('react');
var ReactPropTypes = React.PropTypes;
var classNames = require('classnames');
var ToDoActions = require('../actions/ToDoActions');

var ToDoItem = React.createClass({
  propTypes: {
    toDo: ReactPropTypes.object.isRequired
  },

  render () {
    var toDo = this.props.toDo;

    return (
      <li className={classNames({ 'complete' : toDo.complete}) }>
        <input
          type="checkbox"
          checked={toDo.complete}
          onChange={this.onToggleComplete}
        />
        {toDo.text}
      </li>
    );
  }

  onToggleComplete() {
    ToDoActions.toggleComplete(this.props.toDo.id);
  }

  onSave(text) {
    ToDoActions.updateText(this.props.toDo.id, text);
  }
});

module.exports = ToDoItem;
