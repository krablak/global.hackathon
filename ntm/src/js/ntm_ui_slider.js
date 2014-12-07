/**
 * Module with NTM slider support functions.
 */
var ntmSlider = function(module) {

	var YEARS = ["1945", "1950", "1955", "1960", "1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015"];

	var toYear = function(num) {
		return YEARS[num];
	};

	module.init = function() {
		var sliElem = document.getElementById("time-slider-div");
		sliElem.style.visibility = "visible";
		sliElem.innerHTML = "";

		var year0 = 1945;

		for (var i = 0; i < 68; i++) {
			var element = document.createElement('span');
			element.setAttribute("id", "years-" + (i+45));
			var classes = "slider-year";
			if (i == 0) {
				classes = classes + " active";
			} else {
				classes = classes + " passive";
			}
			element.setAttribute("class", classes);
			element.setAttribute("data-year", (year0 + i).toString());
			element.textContent = i+45;
			// + toYear(i) + " ";
			sliElem.appendChild(element);
		}
	};

	module.onDataShapeShow = function(dataShape) {
	    var classes = "slider-year";

	    for (var i = 0; i < 68; i++) {
	        var element = document.getElementById("years-"+(i+45));
	        element.setAttribute("class", classes + " passive");
	    }

	    var element = document.getElementById("years-"+dataShape.dstr.substring(2,4));
	    element.setAttribute("class", classes + " active");
	};

	return module;
}(ntmSlider || {});
