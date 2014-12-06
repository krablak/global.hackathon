/**
 * Module with NTM welcome dialog.
 */
var ntmWelcomeView = function(module) {

	module.viewElem = null;
	module.nextBtn = null;

	module.init = function() {
		module.viewElem = document.getElementById("welcome-view-div");
		module.nextBtn = document.getElementById("next-btn");
		module.nextBtn.addEventListener("click", function() {
			module.next();
		});
	};

	module.onDataReady = function() {
		module.nextBtn.style.visibility = "visible";
	};

	module.next = function() {
		// Hide welcome view
		module.nextBtn.style.visibility = "hidden";
		module.viewElem.style.visibility="hidden";
		// Init time slider
		ntmSlider.init();
		// Init info view
		ntmInfoView.init();
		// Init year view
		ntmYearView.init();
		
		//Start animations
		ntmUI.player.start(ntmUI.dataShapes);
	};

	return module;
}(ntmWelcomeView || {});
