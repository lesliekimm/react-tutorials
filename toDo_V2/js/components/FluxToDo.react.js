var React = require('react');
var FluxToDoActions = require('../actions/FluxToDoActions');

// Flux To Do List view
var FluxToDoList = React.createClass({
  // Hide To Do List via Actions
  closeList: function(){
    console.log("can't see me now");
    FluxToDoActions.updateListVisible(false);
  },

  // Show To Do List via Actions
  openList: function(){
    console.log("here in wonderland");
    FluxToDoActions.updateListVisible(true);

  },

  // Remove option from To Do List via Actions
  removeFromList: function(optionID){
    FluxToDoActions.removeFromList(optionID);
    FluxToDoActions.updateListVisible(false);
  },

  // Render cart view
  render: function() {
    var self = this, toDoList = this.props.list;
    return (
      <div className={"flux-to-do " + (this.props.visible ? 'active' : '')}>
        <div className="mini-to-do">
          <button type="button" className="close-to-do" onClick={this.closeList}>&times;</button>
          <ul>
            {Object.keys(toDoList).map(function(options){
              return (
                <li key={options}>
                  <h1 className="name">{toDoList[options].toDoOption}</h1>
                  <button type="button" className="remove-to-do" onClick={self.removeFromList.bind(self, options)}>Remove</button>
                </li>
            )
            })}
          </ul>
        </div>
        <button type="button" className="view-to-do" onClick={this.openList} disabled={Object.keys(toDoList).length > 0 ? "" : "disabled"}>View To Do List ({this.props.count})</button>
      </div>
    );
  }
});

module.exports = FluxToDoList;
