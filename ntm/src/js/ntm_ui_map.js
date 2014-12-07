/**
 * Module with NTM google map helper methods.
 */
var ntmMap = function(module) {

	/**
	 * Returs prepared google map object.
	 */
	module.create = function() {
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
		return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	};

	return module;
}(ntmMap || {});
