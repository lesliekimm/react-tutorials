var React = require('react');
var ReactPropTypes = React.PropTypes;
var FluxToDoActions = require('../actions/FluxToDoActions');
var FluxToDoTextInput = require('./FluxToDoTextInput.react');

var cx = require('react/lib/cx');

var FluxToDoItem = React.createClass({
  // Declare props are specific JS primitive
  propTypes: {
   toDo: ReactPropTypes.object.isRequired
  },

  // Return initial state (currently no editing)
  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  render: function() {
    var toDo = this.props.toDo;
    var input;

    console.log('toDo in ToDoItem ', toDo);

    if (this.state.isEditing) {
      input =
        <FluxToDoTextInput
          className="edit"
          onSave={this._onSave}
          value={toDo.text}
        />;
    }

    return (
      <li
        className={cx({
          'completed': toDo.complete,
          'editing': this.state.isEditing
        })}
        key={toDo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={toDo.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {toDo.text}
          </label>
          <button className="remove" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    );
  },

  _onToggleComplete: function() {
    FluxToDoActions.toggleComplete(this.props.toDo);
  },

  _onDoubleClick: function() {
    this.setState({isEditing: true});
  },

  _onSave: function(text) {
    FluxToDoActions.updateText(this.props.toDo.id, text);
    console.log('id: ', this.props.toDo.id);
    this.setState({isEditing: false});
  },

  _onDestroyClick: function() {
    FluxToDoActions.remove(this.props.toDo.id);
  }
});

module.exports = FluxToDoItem;
