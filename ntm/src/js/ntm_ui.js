/**
 * Module with UI logic.
 * Requires Google Maps V3 API to be loaded before.
 */
var ntmUI = function(module, ntmDataApi, ntmAni, ntmConvert, ntmSlider, ntmInfoView, ntmYearView) {

	// Reference to Google map object
	module.map = null;
	// List of all displayed explosion shapes
	module.dataShapes = [];

	/**
	 * Performs UI initiliaztion on page load.
	 */
	module.init = function() {
		// Map options
		var mapOptions = {
			scrollwheel : false,
			navigationControl : false,
			mapTypeControl : false,
			scaleControl : false,
			draggable : true,
			zoom : 2.5,
			center : new google.maps.LatLng(37.09024, -95.712891),
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		// Create map object from map-canvas div
		module.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		// Display welcome message
		module.showWelcomeMessage();

		// Init time slider
		ntmSlider.init();
		// Init info view
		ntmInfoView.init();
		// Init year view
		ntmYearView.init();

		// Load data
		var data = ntmDataApi.loadAll();

		// Preload data with shapes
		module.dataShapes = preloadShapes(data);

		// Start default animation - TODO should be in welcome message action
		module.player.start(module.dataShapes);
	};

	/**
	 * Shows welcome message with basic information.
	 */
	module.showWelcomeMessage = function() {

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
}(ntmUI || {}, ntmDataApi, ntmAni, ntmConvert, ntmSlider, ntmInfoView, ntmYearView);

// Start UI module initialization
google.maps.event.addDomListener(window, 'load', ntmUI.init);
