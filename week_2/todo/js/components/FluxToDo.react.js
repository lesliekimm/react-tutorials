var React = require('react');
var FluxToDoActions = require('../actions/FluxToDoActions');

// Flux To Do View
var FluxToDo = React.createClass({
  // Hide to do via Actions
  closeToDoList: function() {
    FluxToDoActions.updatedCartVisible(false);
  },

  // Show to do via Actions
  openToDo: function() {
    FluxToDoActions.updateCartVisible(true);
  },

  // Remove item from To Do and add to Completed via Actions
  finishedToDoItem: function(itemID, update) {
    FluxToDoActions.completedToDoItem(itemID, update);
    FLuxToDOActions.updateCartVisible(false);
  },

  // Render To Do View
  render: function() {
    var self = this;
    var list = this.props.items;

    return (
      <div className={"flux-toDo " + (this.props.visible ? 'active' : '') }>
        <div className="mini-toDo">
          <button type="button" className="close-toDo" onClick={this.closeToDoLIst}>x</button>
          <ul>
            {Object.keys(list).map(function(items){
              return (
                <li key={list}>
                  <h1 className="item">{list[items].item}</h1>
                  <button type="button" className="finished-item" onClick={self.finishedToDoItem.bind(self, items)}>Completed</button>
                </li>
              )
            })}
          </ul>
        </div>
        <button type="button" className="view-toDo" onClick={this.openToDo} disabled={Object.keys(this.props.list).length > 0 ? "" : "disabled"}>View To Do List</button>
      </div>
    );
  }
});

module.exports = FluxToDo;
