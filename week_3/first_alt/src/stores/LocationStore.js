// Store is data warehouse.

var alt = require('../alt');
var LocationActions = require('../actions/LocationActions');
var LocationData = require('../utils/LocationData');
var FavoritesStore = require('./FavoritesStore');

// Create a class for the store.
class LocationStore {
	constructor() {
    // Instance variables defined anywhere in store will become the state.
    // Can initialize these in constructor & then update them directly in
    // prototype methods.
		this.locations = [];	        // initialize empty array of locations
    this.errorMessage = null;     // initialize errorMessage to null

		// Bind our action handlers to our actions
		this.bindListeners({
			handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      setFavorites: LocationActions.FAVORITE_LOCATION
		});

		this.exportPublicMethods({
			getLocation: this.getLocation
		});

		this.exportAsync(LocationData);
	}



	// Define methods in store's prototype that deals with actions
	// Aka action handlers
	// Stores automatically emit a change event when action is dispatched
	// through the store & action handler ends. To suppress change event,
	// return false from action handler.
	handleUpdateLocations(locations) {
		this.locations = locations;
    this.errorMessage = null;
		// Optionally return false to suppress store change event
	}

  handleFetchLocations() {
    // Reset the array while we're fetching new locations so React can be
    // smart and render a spinner for us since the data is empty
    this.locations = [];
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  resetAllFavorites() {
    this.locations = this.locations.map((location) => {
      return {
        id: location.id,
        name: location.name,
        has_favorite: false
      };
    });
  }

  setFavorites(location) {
    this.waitFor(FavoritesStore);

    var favoritedLocations = FavoritesStore.getState().locations;

    this.resetAllFavorites();

    favoritedLocations.forEach((location) => {
      // Find each location in the array
      for (var i = 0; i < this.locations.length; i += 1) {
        // Set has_favorite to true
        if (this.locations[i].id === location.id) {
          this.locations[i].has_favorite = true;
          break;
        }
      }
    });
  }

	getLocation(id) {
		var { locations } = this.getState();
		for (var i = 0; i < locations.lengh; i += 1) {
			if (locations[i].id === id) {
				return locations[i];
			}
		}

		return null;
	}
}

module.exports = alt.createStore(LocationStore, 'LocationStore');
