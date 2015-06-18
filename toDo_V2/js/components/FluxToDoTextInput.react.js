var React = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;        // key code for enter button

var FluxToDoTextInput = React.createClass({
  // Declare props are specific JS primitive
  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  getInitialState: function() {
    console.log("getting textinput initial state");
    return {
      value: this.props.value || ''
    };
  },

  render: function() {
    console.log("rendering textinput");
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  },

  _save: function() {
    this.props.onSave(this.state.value);
    console.log('on save', this.props.value);
    this.setState({
      value: ''
    });
  },

  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  // When enter button is pressed, call _save function
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }
});

module.exports = FluxToDoTextInput;
