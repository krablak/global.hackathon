/**
 * NTM UI player logic module.
 */
var ntmUI = function(module) {

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
		 * Reference to player control button.
		 */
		player.controlBtn = null;

		/**
		 * Performs player UI components initialization.
		 */
		player.init = function() {
			player.controlBtn = document.getElementById("slider-control-btn");
			player.controlBtn.addEventListener("click", function() {
				if (player.play === true) {
					player.controlBtn.setAttribute("class", "icon-play");
					player.stop();
				} else {
					player.controlBtn.setAttribute("class", "icon-pause");
					player.start();
				}
			});
		};

		/**
		 * Starts animation with given explosions data.
		 * @param {Object} data
		 */
		player.start = function(data) {
			// Mark player as playing
			player.play = true;
			// Set new data shapes
			if (data != undefined) {
				player.allShapes = data;
			}

			var animateNext = function() {
				var curShape = nextShape();
				if (curShape != null && player.play) {
					// Notify other views about new shape animation
					setTimeout(function() {
						ntmInfoView.onDataShapeShow(curShape);
						ntmYearView.onDataShapeShow(curShape);
						ntmSlider.onDataShapeShow(curShape);
					}, 1);
					// Add explosion shape to data
					curShape = dataToShape(curShape);
					// Run explosion animation
					ntmAni.animateExplosion(curShape.shape, ntmConvert.yieldToMap(curShape));
					// Remove shape from data item - after animation is no longer needed.
					removeShape(curShape);
					// In case that next shape is available schedule next explosion animation execution
					if (hasNextShape()) {
						// Compute time of next animation explosion delay
						var nextShapeAnimationDelay = ntmConvert.toDelay(curShape, player.allShapes[player.currentShapeIndex + 1]);
						// Plan next run of animate function execution
						setTimeout(animateNext, nextShapeAnimationDelay);
					}
				}
			};

			// Start animation
			animateNext();
		};

		/**
		 * Stops player and continues fro first data item for passed year.
		 */
		player.switchTo = function(year) {
			console.log(year);
			// Find first dataShape with given year
			var yearIdx = 0;
			var wasFound = false;
			for (; yearIdx < player.allShapes.length; yearIdx++) {
				var curShape = player.allShapes[yearIdx];
				if (curShape.d !== undefined && curShape.d.indexOf(year) == 0) {
					wasFound = true;
					break;
				}
			}
			if (wasFound === true) {
				// Stop player
				player.stop();
				// Update player current shape index
				player.currentShapeIndex = yearIdx;
				// Start player again
				player.start();
				// Update button icon
				player.controlBtn.setAttribute("class", "icon-pause");
			}
		};

		/**
		 * Stops player when performing animations.
		 */
		player.stop = function() {
			player.play = false;
		};

		/**
		 * Adds shape do data item.
		 */
		var dataToShape = function(dataItem) {
			if (dataItem["shape"] === undefined) {
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
			}
			return dataItem;
		};

		/**
		 * Removes shape from data item.
		 */
		var removeShape = function(dataItem) {
			dataItem["shape"] = undefined;
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

		return player;
	}(module.player || {});

	return module;
}(ntmUI || {});
