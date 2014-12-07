/**
 * Module with UI logic.
 * Requires Google Maps V3 API to be loaded before.
 */
var ntmUI = function(module) {

	// Reference to Google map object
	module.map = null;
	// List of all displayed explosion shapes
	module.dataShapes = [];

	/**
	 * Performs UI initiliaztion on page load.
	 */
	module.init = function() {

		// Create google map object
		module.map = ntmMap.create();

		// Display welcome message
		ntmWelcomeView.init();

		// Prepare data
		setTimeout(function() {
			module.dataShapes = ntmDataApi.loadAll();
			// Notify welcome screen that data are loaded
			ntmWelcomeView.onDataReady();
		}, 2000);
	};

	return module;
}(ntmUI || {});

// Start UI module initialization
google.maps.event.addDomListener(window, 'load', ntmUI.init);
