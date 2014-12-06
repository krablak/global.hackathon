/**
 * NTM data API module.
 */
var ntmDataApi = function(module) {

	module.loadAll = function() {
		return [{
			date : "2014-12-06T13:00:00.691Z",
			lat : 49.25,
			lng : -123.1,
			yield : 100000
		}];
	};

	return module;
}(ntmDataApi || {});
