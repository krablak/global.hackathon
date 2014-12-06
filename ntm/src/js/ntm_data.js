/**
 * NTM data API module.
 */
var ntmDataApi = function(module) {

	module.loadAll = function() {
		return [{
			date : "2014-12-06T13:00:00.691Z",
			lat : 49.25,
			lon : -123.1,
			yield : 100000
		}, {
			date : "2014-12-06T13:00:00.691Z",
			lat : 44.75,
			lon : -123.1,
			yield : 100000
		}, {
			"lat" : 37.116667,
			"device_type" : "unknown",
			"lon" : -116.05,
			"date" : "1962-05-07T00:00:00.000Z",
			"country" : "United States of Americe",
			"test_type" : "stemmed vertical shaft",
			"test_name" : "PACA",
			"date_str" : "1962-05-07 00:00:00",
			"site" : "Nevada Test Site, Nevada, USA (US atmospheric and underground and UK underground tests)",
			"yield" : 1
		}];
	};

	return module;
}(ntmDataApi || {});
