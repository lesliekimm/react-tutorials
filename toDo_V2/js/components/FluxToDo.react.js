var React = require('react');
var ReactPropTypes = React.PropTypes;
var FluxToDoActions = require('../actions/FluxToDoActions');
var FluxToDoItem = require('./FluxToDoItem.react');
var FluxToDoTextInput = require('./FluxToDoTextInput.react');

// Flux To Do List view
var FluxToDo = React.createClass({
  propTypes: {
    allToDos: ReactPropTypes.object.isRequired,
    areAllComplete: ReactPropTypes.bool.isRequired
  },

  // Render cart view
  render: function() {
    console.log("in FluxToDo render ");

    // if (Object.keys(this.props.allToDos).length < 1) {
    //   console.log("nothing here");
    //   return null;
    // }

    console.log("have items");
    var allToDos = this.props.allToDos;
    var toDos = [];

    for (var key in allToDos) {
      toDos.push(<FluxToDoItem key={key} toDo={allToDos[key]} />);
    }

    return (
      <div id="header">
      <h1>todos</h1>
        <FluxToDoTextInput
          id="new-todo"
          placeholder="to do item"
          onSave={this._onSave}
        />
      </div>
      // <div id="main">
      //   <input
      //     id="toggle-all"
      //     type="checkbox"
      //     onChange={this._onToggleCompleteAll}
      //     checked={this.props.areAllCompleted ? 'checked' : ''}
      //   />
      //   <label htmlFor="toggle-all">Mark all as complete</label>
      //   <ul id="todo-list">{toDos}</ul>
      // </div>
    );
  },

  _onSave: function(text) {
    if (text.trim()){
      FluxToDoActions.create(text);
    }
  },

  _onToggleCompleteAll: function() {
    FluxToDoActions.toggleCompleteAll();
  }

    // var self = this, toDoList = this.props.list;
    // return (
    //   <div className={"flux-to-do " + (this.props.visible ? 'active' : '')}>
    //     <div className="mini-to-do">
    //       <button type="button" className="close-to-do" onClick={this.closeList}>&times;</button>
    //       <ul>
    //         {Object.keys(toDoList).map(function(options){
    //           return (
    //             <li key={options}>
    //               <h1 className="name">{toDoList[options].toDoOption}</h1>
    //               <button type="button" className="remove-to-do" onClick={self.removeFromList.bind(self, options)}>Completed</button>
    //             </li>
    //         )
    //         })}
    //       </ul>
    //     </div>
    //     <button type="button" className="view-to-do" onClick={this.openList} disabled={Object.keys(toDoList).length > 0 ? "" : "disabled"}>View To Do List ({this.props.count})</button>
    //   </div>
    // );
});

module.exports = FluxToDo;
