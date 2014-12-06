/**
 * Module providing conversion functions between real values and our presentation.
 */
var ntmConvert = function(module) {

	/**
	 * Converts explosion yield to value displayable on map.
	 */
	module.yieldToMap = function(yld) {
		// TODO To by implemented scale matching
		return 100000;
	};

	/**
	 * Returns time interval in miliseconds representing the delay between both data items explosions.
	 */
	module.toDelay = function(dateItem1, dataItem2) {
		return 5000;
	};

	return module;
}(ntmConvert || {});
