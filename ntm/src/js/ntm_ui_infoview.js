/**
 * Module with NTM info view UI logic.
 */
var ntmInfoView = function(module) {

	module.infoViewElem = null;

	module.init = function() {
		module.infoViewElem = document.getElementById("info-div");
		module.infoViewElem.style.visibility="visible";
		module.infoViewElem.innerHTML = "Info View Initialized";
	};

	module.onDataShapeShow = function(dataShape) {
		module.infoViewElem.innerHTML = module.infoViewElem.innerHTML + "  " + dataShape.dstr + "</br>";
		module.infoViewElem.scrollTop = module.infoViewElem.scrollHeight;
	};

	return module;
}(ntmInfoView || {});
