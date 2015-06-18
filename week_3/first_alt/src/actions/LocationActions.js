// Take in an array of locations that we pass in at the
// start of the app & dispatch them to store.

var alt = require('../alt');

// Create an action by creating a class
// Class' prototype methods will become actions
class LocationActions {
	updateLocations(locations) {
		// Dispatch payload through the Dispatcher & onto stores
		this.dispatch(locations);
	}

	// Fetch locations using method in LocationsFetcher.js
	fetchLocations() {
		// We dispatch an event here so we can have "loading" state
		this.dispatch();

		// LocationFetcher.fetch()
		// 	.then((locations) => {
		// 		// We can access other actions within our action
		// 		// through 'this.actions'
		// 		this.actions.updateLocations(locations);
		// 	})
		// 	.catch((errorMessage) => {
		// 		this.actions.locationFailed(errorMessage);
		// 	});
	}

	locationsFailed(errorMessage) {
		this.dispatch(errorMessage);
	}

	favoriteLocation(locationId) {
		this.dispatch(locationId);
	}
}

// Export
module.exports = alt.createActions(LocationActions);
