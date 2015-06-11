var React = require('react');
var FluxToDoActions = require('../actions/FluxToDoActions');

// Flux To Do View
var FluxCompleted = React.createClass({
  // Hide to do via Actions
  closeCompletedList: function() {
    FluxToDoActions.updateCompletedVisible(false);
  },

  // Show to do via Actions
  openCompletedList: function() {
    FluxToDoActions.updateCompletedVisible(true);
  },

  // Remove item from To Do and add to Completed via Actions
  finishedToDoItem: function(itemID, update) {
    FluxToDoActions.completedToDoItem(itemID, update);
    FLuxToDoActions.updateCompletedVisible(false);
  },

  // Render To Do View
  render: function() {
    var self = this;
    var list = this.props.items;

    return (
      <div className={"flux-completed " + (this.props.visible ? 'active' : '') }>
        <div className="mini-completed">
          <button type="button" className="close-completed" onClick={this.closeCompletedList}>x</button>
          <ul>
            {Object.keys(list).map(function(items){
              return (
                <li key={list}>
                  <h1 className="item">{list[items].item}</h1>
                  <button type="button" className="finished-item" onClick={self.finishedCompletedItem.bind(self, items)}></button>
                </li>
              )
            })}
          </ul>
        </div>
        <button type="button" className="view-completed" onClick={this.openToDo} disabled={Object.keys(this.props.list).length > 0 ? "" : "disabled"}>View To Do List</button>
      </div>
    );
  }
});

module.exports = FluxCompleted;
