/**
 * Module with NTM curent year info.
 */
var ntmYearView = function(module) {

	module.yearViewElem = null;

	module.init = function() {
		module.yearViewElem = document.getElementById("year-view-div");
		module.yearViewElem.innerHTML = "1945";
	};

	module.onDataShapeShow = function(dataShape) {
		var date = dataShape.date;
		if(date !== undefined && date.length !== undefined && date.length >= 10){
			module.yearViewElem.innerHTML = date.substring(0,10);			
		}
	};

	return module;
}(ntmYearView || {});
