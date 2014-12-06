/**
 * Module providing conversion functions between real values and our presentation.
 */
var ntmConvert = function(module) {

	/**
	 * Converts explosion yield to value displayable on map.
	 */
	module.yieldToMap = function(dataShape) {
		// scale matching - all explosions have the same base radius plus something
		// as a function of yield

		var yield_base = 500000 + Math.log10(dataShape.y+1) * 200000.

		// finally we do correction on latitude convergence
		return yield_base * Math.cos(dataShape.a / 180. * 3.14159);
	};

	/**
	 * Returns time interval in miliseconds representing the delay between both data items explosions.
	 */
	module.toDelay = function(dateItem1, dataItem2) {
		return 100;
	};

	return module;
}(ntmConvert || {});
