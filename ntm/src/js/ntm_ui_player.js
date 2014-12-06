/**
 * NTM UI player logic module.
 */
var ntmUI = function(module, ntmDataApi, ntmAni, ntmConvert, ntmInfoView, ntmYearView) {

	/**
	 * Represents controller module of explosions animations.
	 */
	module.player = function(player) {

		/**
		 * Simple flag marking player as playing.
		 */
		player.play = false;

		/**
		 * Reference to currently animated shape.
		 */
		player.currentShapeIndex = -1;
		player.allShapes = [];

		/**
		 * Starts animation with given explosions data.
		 * @param {Object} data
		 */
		player.start = function(data) {
			// Mark player as playing
			player.play = true;
			// Set new data shapes
			player.allShapes = data;

			var animateNext = function() {
				var curShape = nextShape();
				if (curShape != null && player.play) {
					// Notify info view about new shape animation
					setTimeout(function() {
						ntmInfoView.onDataShapeShow(curShape);
					}, 1);
					setTimeout(function() {
						ntmYearView.onDataShapeShow(curShape);
					}, 1);
					// Run explosion animation
					ntmAni.animateExplosion(curShape.shape, ntmConvert.yieldToMap(curShape.yield));
					// In case that next shape is available schedule next explosion animation execution
					if (hasNextShape()) {
						// Compute time of next animation explosion delay
						var nextShapeAnimationDelay = ntmConvert.toDelay(curShape, player.allShapes[player.currentShapeIndex + 1]);
						// Plan next run of animate function execution
						setTimeout(animateNext, nextShapeAnimationDelay);
					}
				}
			};

			animateNext();
		};

		/**
		 * Returns next shape to be displayes or null;
		 */
		var nextShape = function() {
			var nShape = null;
			player.currentShapeIndex = player.currentShapeIndex + 1;
			if (player.allShapes[player.currentShapeIndex] != undefined) {
				nShape = player.allShapes[player.currentShapeIndex];
			}
			return nShape;
		};

		/**
		 * Returns true in case that next shape can be shown.
		 */
		var hasNextShape = function() {
			return player.allShapes[player.currentShapeIndex + 1] != undefined;
		};

		/**
		 * Stops player when performing animations.
		 */
		player.stop = function() {
			player.play = false;
		};

		return player;
	}(module.player || {});

	return module;
}(ntmUI || {}, ntmDataApi, ntmAni, ntmConvert, ntmInfoView, ntmYearView);
