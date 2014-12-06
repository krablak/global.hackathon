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
		sliElem.innerHTML = "";
		for (var i = 0; i < 14; i++) {
			var element = document.createElement('span');
			element.setAttribute("id", "years-" + i);
			var classes = "slider-year";
			if (i % 2 == 0) {
				classes = classes + " even";
			} else {
				classes = classes + " odd";
			}
			element.setAttribute("class", classes);
			element.setAttribute("data-year", toYear(i));
			element.textContent = "" + toYear(i) + " ";
			sliElem.appendChild(element);
		}
	};

	return module;
}(ntmSlider || {});