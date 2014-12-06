/**
 * Provides simple animation function to visualise explosions on google map.
 */
var ntmAni = function(module, easing) {

	/**
	 * Default steps count in animation function
	 */
	var stepsCnt = 13;

	/**
	 * Private function containing the core logic of animation function.
	 */
	var step = function(circle, stepNumber, targetSize) {
		// Prepare variables for current animation step
		stepNumber = stepNumber + 1;
		var radius = circle.radius;

		var easingValue = easing.easeOutQuad(stepNumber / stepsCnt);
		var newRadius = targetSize * easingValue

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
			}, 500);
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
