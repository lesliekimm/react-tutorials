var LoationActions = require('../actions/LocationActions');

var mockData = [
	{ id: 0, name: 'Abu Dhabi' },
	{ id: 1, name: 'Berlin' },
	{ id: 2, name: 'Bogota' },
	{ id: 3, name: 'Buenos Aires' },
	{ id: 4, name: 'Cairo' },
	{ id: 5, name: 'Chicago' },
	{ id: 6, name: 'Lima' },
	{ id: 7, name: 'London' },
	{ id: 8, name: 'Miami' },
	{ id: 9, name: 'Moscow' },
	{ id: 10, name: 'Mumbai' },
	{ id: 11, name: 'Paris' },
	{ id: 12, name: 'San Francisco' }
];

// Simulate an XHR with setTimeout and Promise to copy fetch's API
// XHR: XMLHttpRequest is an API available to web browser scripting languages
// like JS to send HTTP or HTTPS requests to web server & load server response
// data back into the script.

var LocationData = {
	fetchLocations() {
		return {
			remote() {
				// Returning a Promise because that is what fetch does
				return new Promise(function (resolve, reject) {
					// Simulate asynchronous action where data is fetched on
					// a remote server somewhere.
					setTimeout(function() {
						// Change this to false to see the error action being handled
						if (true) {
							// Resolve with some mock data
							resolve(mockData);
						}
						else {
							reject('Things have broken');
						}
					}, 250);
				});
			},

			local() {
				// Never check locally, always fetch remotely
				return null;
			},

			success: LocationActions.updateLocations,
			error: LocationActions.locationsFailed,
			loading: LocationActions.fecthLocations
		}
	}
};

module.exports = LocationData;
