var React = require('react');
var FluxToDoActions = require('../actions/FluxToDoActions');

// Flux To Do List view
var FluxToDoList = React.createClass({
  // Add item to ToDo list via actions
  addToDoItem: function(event) {
    var itemID = this.props.selected.itemID;
    var update = {
      item: this.props.selected.item
    }
    FluxToDoActions.addToDoItem(itemID, update);
    FLuxToDoActions.updateToDoVisible(true);
  },

  // Select item index via actions
  selectIndexItem: function(event) {
    FluxToDoActions.selectToDoItem(event.target.value);
  },

  // Render To Do List View
  render: function() {
    return (
      <div className="flux-toDo">
        <div className="flux-toDo-detail">
          <h1 className="name">{this.props.items.name}</h1>
          <p className="description">{this.props.items.description}</p>
          <select onChange={this.selectIndexItem}>
            {this.props.items.variants.map(function(variant, index) {
              return (
                <option key={index} value={index}>{variant.type}</option>
              )
            })}
          </select>
          <button type="button" onClick={this.addToDoItem}></button>
        </div>
      </div>
    );
  }
})

module.exports = FluxToDoList;
