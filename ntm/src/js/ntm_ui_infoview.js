/**
 * Module with NTM info view UI logic.
 */
var ntmInfoView = function(module) {

	module.infoViewElem = null;

	module.init = function() {
		module.infoViewElem = document.getElementById("info-div");
		module.infoViewElem.innerHTML = "Info View Initialized";
	};

	module.onDataShapeShow = function(dataShape) {
		console.log(dataShape);
		module.infoViewElem.innerHTML = module.infoViewElem.innerHTML + "  " + dataShape.date + "</br>";
		module.infoViewElem.scrollTop = module.infoViewElem.scrollHeight;
	};

	return module;
}(ntmInfoView || {});
