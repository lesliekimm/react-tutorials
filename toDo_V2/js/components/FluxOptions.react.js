var React = require('react');
var FluxToDoActions = require('../actions/FluxToDoActions');

// Flux Options view
var FluxOptions = React.createClass({
  // Add option to To Do List via Actions
  addToList: function(event){
    var optionID = this.props.selected.optionID;
    var update = {
      name: this.props.options.name,
      toDoOption: this.props.selected.toDoOption,
    }
    FluxToDoActions.addToList(optionID, update);
    FluxToDoActions.updateListVisible(true);

    console.log("NAME: ", update.toDoOption);
  },

  // Select option variation via Actions
  selectVariant: function(event){
    FluxToDoActions.selectOption(event.target.value);
  },

  // Render option View
  render: function() {
    var ats = (this.props.selected.optionID in this.props.toDoList) ? 0 : 1;
    return (
      <div className="flux-options">
        <div className="flux-options-detail">
          <h1 className="name">{this.props.options.name}</h1>
          <select onChange={this.selectVariant}>
          {this.selectVariant};
            {this.props.options.variants.map(function(variant, index){
              return (
                <option key={index} value={index}>{variant.toDoOption}</option>
              )
            })}
          </select>
          <button type="button" onClick={this.addToList} disabled={ats > 0 ? '' : 'disabled'}>
            {ats > 0 ? 'Add to To Do List' : 'Already On List'}</button>
        </div>
      </div>
    );
  },
});

module.exports = FluxOptions;
