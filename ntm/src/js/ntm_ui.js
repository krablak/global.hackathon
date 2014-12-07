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
			var data = ntmDataApi.loadAll();
			// Preload data with shapes
			module.dataShapes = preloadShapes(data);
			// Notify welcome screen that data are loaded
			ntmWelcomeView.onDataReady();
		}, 2000);
	};

	/**
	 * Adds
	 */
	var dataToShape = function(dataItem) {
		var shapeOpts = {
			strokeColor : '#FF00EE',
			strokeOpacity : 0.6,
			strokeWeight : 0,
			fillColor : '#FF3333',
			fillOpacity : 0.35,
			map : module.map,
			center : new google.maps.LatLng(dataItem.a, dataItem.b), /* a and b are latitude and longitude*/
			radius : 1 // Default radius is set to 0 to be hidden before animation
		};
		dataItem["shape"] = new google.maps.Circle(shapeOpts);
		return dataItem;
	};

	/**
	 * Prepares shapes for whole data.
	 */
	var preloadShapes = function(data) {
		var res = [];
		for (var key in data) {
			res.push(dataToShape(data[key]));
		};
		return res;
	};

	return module;
}(ntmUI || {});

// Start UI module initialization
//google.maps.event.addDomListener(window, 'load', ntmUI.init);

window.addEventListener("load", ntmUI.init);
