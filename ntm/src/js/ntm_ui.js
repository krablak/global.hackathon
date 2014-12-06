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
		// Map options
		var mapOptions = {
			scrollwheel : false,
			navigationControl : false,
			mapTypeControl : false,
			scaleControl : false,
			panControl : false,
			zoomControl : false,
			draggable : true,
			streetViewControl : false,
			zoom : 2.5,
			center : new google.maps.LatLng(37.09024, -95.712891),
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			styles : [{
				"featureType" : "water",
				"elementType" : "geometry",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 0
				}]
			}, {
				"featureType" : "landscape",
				"elementType" : "geometry",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 30
				}]
			}, {
				"featureType" : "road.highway",
				"elementType" : "geometry.fill",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 17
				}]
			}, {
				"featureType" : "road.highway",
				"elementType" : "geometry.stroke",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 29
				}, {
					"weight" : 0.2
				}]
			}, {
				"featureType" : "road.arterial",
				"elementType" : "geometry",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 18
				}]
			}, {
				"featureType" : "road.local",
				"elementType" : "geometry",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 16
				}]
			}, {
				"featureType" : "poi",
				"elementType" : "geometry",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 21
				}]
			}, {
				"elementType" : "labels.text.stroke",
				"stylers" : [{
					"visibility" : "on"
				}, {
					"color" : "#000000"
				}, {
					"lightness" : 16
				}]
			}, {
				"elementType" : "labels.text.fill",
				"stylers" : [{
					"saturation" : 36
				}, {
					"color" : "#000000"
				}, {
					"lightness" : 40
				}]
			}, {
				"elementType" : "labels.icon",
				"stylers" : [{
					"visibility" : "off"
				}]
			}, {
				"featureType" : "transit",
				"elementType" : "geometry",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 19
				}]
			}, {
				"featureType" : "administrative",
				"elementType" : "geometry.fill",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 20
				}]
			}, {
				"featureType" : "administrative",
				"elementType" : "geometry.stroke",
				"stylers" : [{
					"color" : "#000000"
				}, {
					"lightness" : 17
				}, {
					"weight" : 1.2
				}]
			}]
		};
		// Create map object from map-canvas div
		module.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		// Display welcome message
		ntmWelcomeView.init();

		setTimeout(function() {
			var data = ntmDataApi.loadAll();
			// Preload data with shapes
			module.dataShapes = preloadShapes(data);
			// Notify welcome screen that data are loaded
			ntmWelcomeView.onDataReady();
		}, 2000);


		// Start default animation - TODO should be in welcome message action
		// module.player.start(module.dataShapes);
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
google.maps.event.addDomListener(window, 'load', ntmUI.init);
