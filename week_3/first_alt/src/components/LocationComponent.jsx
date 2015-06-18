// Every alt store has method which returns its state. The state is copied over
// as a value when returned.

var React = require('react');
var AltContainer = require('alt/AltContainer');
var LocationStore = require('../stores/LocationStore');
var FavoritesStore = require('../stores/FavoritesStore');
var LocationActions = require('../actions/LocationActions');

var Favorites = React.createClass({
	render() {
		return (
			<ul>
				{this.props.locations.map((location, i) => {
					return (
						<li key={i}>{location.name}</li>
					);
				})}
			</ul>
		);
	}
});

var Locations = React.createClass({
	// Set initial state using store's state
	getInitialState() {
		return LocationStore.getState();
	},

	// Listen to changes when state in store is updated
	componentDidMount() {
		LocationStore.listen(this.onChange);
    LocationActions.fetchLocations();
	},

	// Remove event listener
	componentWillUnmount() {
		LocationStore.unlisten(this.onChange);
	},

	onChange(state) {
		this.setState(state);
	},

	render() {
    if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.state.locationslength) {
      return (
        <div>
          <img src="/my-cool-spinner.gif" />
        </div>
      )
    }

		return (
			<ul>
				{this.state.locations.map((location) => {
					return (
						<li>{location.name}</li>
					);
				})}
			</ul>
		};
	}
});

module.exports = Locations;
