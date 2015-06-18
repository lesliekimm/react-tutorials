var React = require('react');
var ReactPropTypes = React.PropTypes;
var FluxToDoActions = require('../actions/FluxToDoActions');
var FluxToDoItem = require('./FluxToDoItem.react');
var FluxToDoTextInput = require('./FluxToDoTextInput.react');

// Flux To Do List view
var FluxToDo = React.createClass({
  // Declare props are specific JS primitive
  propTypes: {
    allToDos: ReactPropTypes.object.isRequired,       // make sure alToDos exist
    areAllComplete: ReactPropTypes.bool.isRequired    // make sure areAllComplete exists and is bool
  },

  // Render cart view
  render: function() {
    // if (Object.keys(this.props.allToDos).length < 1) {
    //   console.log("nothing here");
    //   return null;
    // }

    var allToDos = this.props.allToDos;       // declare local allToDos object
    var toDos = [];                           // declare local toDos array

    console.log('allToDos locally declared ', allToDos);
    console.log('toDos locally declared ', toDos);

    // Add To Do item to toDos array for each key
    for (var key in allToDos) {
      toDos.push(<FluxToDoItem key={key} toDo={allToDos[key]} />);
      console.log('length', toDos.length);
    }

    return (
      <div id="header">
        <h1>todos</h1>
        <div id="elements">
          <FluxToDoTextInput
            id="new-todo"
            placeholder="to do item"
            onSave={this._onSave}
            />
        </div>
        <ul id="todo-list">{toDos}</ul>
      </div>
    );
  },


  _onSave: function(text) {
    if (text.trim()){
      text = text;
      FluxToDoActions.add(text);
    }
  },

  // _onToggleCompleteAll: function() {
  //   FluxToDoActions.toggleCompleteAll();
  // }

  // <label htmlFor="toggle-all">Mark all as complete</label>
  // <input
  //   id="toggle-all"
  //   type="checkbox"
  //   className="main"
  //   onChange={this._onToggleCompleteAll}
  //   checked={this.props.areAllCompleted ? 'checked' : ''}
  // />


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
