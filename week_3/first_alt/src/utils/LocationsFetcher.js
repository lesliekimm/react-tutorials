// Simulate an XHR with setTimeout and Promise to copy fetch's API
// XHR: XMLHttpRequest is an API available to web browser scripting languages
// like JS to send HTTP or HTTPS requests to web server & load server response
// data back into the script.

var LocationsFetcher = {
	fetch: function() {
		// Returning a Promise because that is what fetch does
		return new Promise(function (resolve, reject) {
			// Simulate asynchronous action where data is fetched on
			// a remote server somewhere.
			setTimeout(function() {
				// Resolve with some mock data
				resolve(mockData);
			}, 250);
		});
	}
};
