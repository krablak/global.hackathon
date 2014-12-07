/**
 * Module with NTM info view UI logic.
 */
var ntmInfoView = function(module) {

	module.infoViewElem = null;

	module.init = function() {
		module.infoViewElem = document.getElementById("info-div");
		module.infoViewElem.style.visibility = "visible";
		module.infoViewElem.innerHTML = "";
	};

	module.onDataShapeShow = function(dataShape) {
		appendLine(dataShape.dstr);
		module.infoViewElem.scrollTop = module.infoViewElem.scrollHeight;
	};

	/**
	 * Appends new line div into info view.
	 */
	var appendLine = function(lineText) {
		var newLineDiv = document.createElement("div");
		newLineDiv.textContent = lineText;
		module.infoViewElem.appendChild(newLineDiv);
	};

	return module;
}(ntmInfoView || {});
