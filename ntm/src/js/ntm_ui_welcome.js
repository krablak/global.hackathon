/**
 * Module with NTM welcome dialog.
 */
var ntmWelcomeView = function(module) {

	module.viewElem = null;
	module.nextBtn = null;
	module.loadingImgElem = null;

	module.init = function() {
		module.viewElem = document.getElementById("welcome-view-div");
		module.nextBtn = document.getElementById("next-btn");
		module.loadingImgElem = document.getElementById("loading-img");
		module.nextBtn.addEventListener("click", function() {
			module.next();
		});
	};

	module.onDataReady = function() {
		module.loadingImgElem.style.display = "none";
		module.nextBtn.style.display = "inline";
	};

	module.next = function() {
		// Hide welcome view
		module.loadingImgElem.style.display = "none";
		module.nextBtn.style.display = "none";
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
