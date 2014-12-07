/**
 * Module with NTM info view UI logic.
 */
var ntmInfoView = function(module) {

	module.infoViewElem = null;
    var testSites = null;
    var testTypes = null;

	module.init = function() {
		module.infoViewElem = document.getElementById("info-div");
		module.infoViewElem.style.visibility = "visible";
		module.infoViewElem.innerHTML = "";
		testSites = ntmDataApi.loadTestSites();
		testTypes = ntmDataApi.loadTestTypes();
	};

	module.onDataShapeShow = function(dataShape) {
		appendLine(dataShape);
		module.infoViewElem.scrollTop = module.infoViewElem.scrollHeight;
	};

	/**
	 * Appends new line div into info view.
	 */
	var appendLine = function(dataShape) {
		var newLineDiv = document.createElement("div");
		var flag_path = "img/"+dataShape.c+".png";
		console.log(flag_path);
		var cont = "<img src='"+flag_path+"' style='vertical-align:middle;' alt='flag'/> " + dataShape.dstr+", ";
		cont += dataShape.n+" ("+dataShape.y+"kt), "+testSites[dataShape.s]+", "+testTypes[dataShape.tt];
		newLineDiv.innerHTML = cont;
		module.infoViewElem.appendChild(newLineDiv);
	};

	return module;
}(ntmInfoView || {});
