var React = require('react');
var OptionsData = require('./OptionsData');
var OptionsAPI = require('./utils/OptionsAPI')
var FluxToDoApp = require('./components/FluxToDoApp.react');

// Load Mock Product Data into localStorage
OptionsData.init();

// Load Mock API Call
OptionsAPI.getOptionsData();

// Render FluxCartApp Controller View
React.render(<FluxToDoApp /> , document.getElementById('flux-to-do'));
