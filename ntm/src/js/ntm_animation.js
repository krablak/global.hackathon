/**
 * Provides simple animation function to visualise explosions on google map.
 */
var ntmAni = function(module, easing) {

	/**
	 * Default steps count in animation function
	 */
	var stepsCnt = 13;

	/**
	 *  Computes animation step size.
	 */
	var toStepSize = function(targetSize, stepsCnt) {
		return targetSize / stepsCnt;
	};

	/**
	 * Computes conversion of value to value in interval [0,1]
	 */
	var toZeroOne = function(value) {
		return value / 1000000;
	};

	/**
	 * Computes conversion of value from value in interval [0,1]
	 */
	var fromZeroOne = function(easingValue) {
		return easingValue * 1000000;
	};

	/**
	 * Private function containing the core logic of animation function.
	 */
	var step = function(circle, stepNumber, targetSize) {
		// Prepare variables for current animation step
		stepNumber = stepNumber + 1;
		var radius = circle.radius;

		// Compute size of animated step
		var stepSize = toStepSize(targetSize, stepsCnt);
		// Convert the animated step size into [0,1] interval value
		var zeroOne = toZeroOne(stepSize * stepNumber);
		// Execute the easing function on step size
		var easingValue = easing.easeOutQuad(zeroOne);
		// Convert eased value back into radius
		var newRadius = fromZeroOne(easingValue, radius);

		// Set the new radius to circle
		circle.set("radius", newRadius);

		// In case that animation target size was not reached, plan the next animation step
		if (newRadius < targetSize) {
			setTimeout(function() {
				step(circle, stepNumber, targetSize);
			}, 20);
		} else {
			setTimeout(function() {
				circle.setMap(null);
			}, 1000);
		}
	};

	/**
	 * Animates the explosion using passed circle shape.
	 * @param {Object} circle reference to map circle object which will represents the explosion.
	 * @param {Object} targetSize target size of explosion.
	 */
	module.animateExplosion = function(circle, targetSize) {
		step(circle, 0, targetSize);
	};

	return module;
}(ntmAni || {}, EasingFunctions);
