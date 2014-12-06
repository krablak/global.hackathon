/**
 * Module providing conversion functions between real values and our presentation.
 */
var ntmConvert = function(module) {

	/**
	 * Converts explosion yield to value displayable on map.
	 */
	module.yieldToMap = function(dataShape) {
		// TODO To by implemented scale matching
		return 1000000 * Math.cos(dataShape.a / 180. * 3.14159);
	};

	/**
	 * Returns time interval in miliseconds representing the delay between both data items explosions.
	 */
	module.toDelay = function(dateItem1, dataItem2) {
		return 100;
	};

	return module;
}(ntmConvert || {});
