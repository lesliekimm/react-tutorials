var FluxToDoActions = require('../actions/FluxToDoActions');

module.exports = {
  // Load mock product data from localStorage into ProductStore via Action
  getOptionsData: function() {
    var data = JSON.parse(localStorage.getItem('options'));
    FluxToDoActions.receiveOptions(data);
  }
};
