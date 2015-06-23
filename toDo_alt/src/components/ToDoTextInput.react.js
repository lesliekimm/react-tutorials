var React = require('react');
var ReactPropTypes = React.PropTypes;
var ENTER_KEY_CODE = 13;        // key code for enter button

var ToDoTextInput = React.createClass({
  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  render() {
    return (
      <input
        className="form-control"
        onBlur={ this._save }
        onKeyDown={ this._onKeyDown }
      />
    );
  }

  _save(event) {
    this.props.onSave(event.target.value);
  }

  if (event.keyCode === ENTER_KEY_CODE) {
      this._save(event);
  }
}

module.exports = ToDoTextInput;
