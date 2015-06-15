var React = require('react');
var FluxToDoActions = require('../actions/FluxToDoActions');

// Flux Completed List view
var FluxCompletedList = React.createClass({
  // Hide Completed List via Actions
  closeCompletedList: function(){
    console.log("can't see me now");
    FluxToDoActions.updateCompleteVisible(false);
  },

  // Show Completed List via Actions
  openCompletedList: function(){
    console.log("here in wonderland");
    FluxToDoActions.updateCompletedVisible(true);
  },

  // Remove option from Completed List via Actions
  removeFromCompleted: function(optionID){
    FluxToDoActions.removeFromCompleted(optionID);
    FluxToDoActions.updateCompletedVisible(false);
  },

  // Render cart view
  render: function() {
    var self = this, completedList = this.props.completedList;
    return (
      <div className={"flux-copmleted " + (this.props.completedVisible ? 'active' : '')}>
        <div className="mini-completed">
          <button type="button" className="close-completed" onClick={this.closeCompletedList}>&times;</button>
          <ul>
            {Object.keys(completedList).map(function(options){
              return (
                <li key={options}>
                  <h1 className="name">{completedList[options].toDoOption}</h1>
                  <button type="button" className="remove-completed" onClick={self.removeFromCompleted.bind(self, options)}>Remove</button>
                </li>
            )
            })}
          </ul>
        </div>
        <button type="button" className="view-completed" onClick={this.openCompletedList} disabled={Object.keys(completedList).length > 0 ? "" : "disabled"}>View Completed List ({this.props.completedCount})</button>
      </div>
    );
  }
});

module.exports = FluxCompletedList;
