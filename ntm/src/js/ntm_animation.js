var tnmAni = function(module) {

	var step = function(circle, stepNumber, targetSize) {
		var stepNumber = stepNumber + 1;
		var radius = circle.radius;
		var stepsCnt = 40;
		var toStepSize = function(targetSize, stepsCnt) {
			return targetSize / stepsCnt;
		};
		var toZeroOne = function(value) {
			return value / 1000000;
		};
		var fromZeroOne = function(easingValue) {
			return easingValue * 1000000;
		};
		var stepSize = toStepSize(targetSize, stepsCnt);
		var zeroOne = toZeroOne(stepSize * stepNumber);
		var easingValue = EasingFunctions.easeOutQuad(zeroOne);
		var newRadius = fromZeroOne(easingValue, radius);
		console.log("New radius : " + newRadius);

		circle.set("radius", newRadius);
		if (newRadius < targetSize) {
			setTimeout(function() {
				step(circle, stepNumber, targetSize);
			}, 30);
		}
	};

	module.animateExplosion = function(circle, targetSize) {
		step(circle, 0, targetSize);
	};

	return module;
}(tnmAni || {});
