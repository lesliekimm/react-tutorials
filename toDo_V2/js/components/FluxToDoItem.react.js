var React = require('react');
var ReactPropTypes = React.PropTypes;
var FluxToDoActions = require('../actions/FluxToDoActions');
var FluxToDoTextInput = require('./FluxToDoTextInput.react');

var cx = require('react/lib/cx');

var FluxToDoItem = React.createClass({

  propTypes: {
   toDo: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isEditing: false
    };
  },

  render: function() {
    var toDo = this.props.toDo;

    var input;
    if (this.state.isEditing) {
      input =
        <ToDoTextInput
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
          <button className="destroy" onClick={this._onDestroyClick} />
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

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave: function(text) {
    FluxToDoActions.updateText(this.props.toDo.id, text);
    this.setState({isEditing: false});
  },

  _onDestroyClick: function() {
    FluxToDoActions.destroy(this.props.toDo.id);
  }
});

module.exports = FluxToDoItem;
