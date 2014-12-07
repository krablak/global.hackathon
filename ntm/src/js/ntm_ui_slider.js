/**
 * Module with NTM slider support functions.
 */
var ntmSlider = function(module) {

	// var YEARS = ["1945", "1950", "1955", "1960", "1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015"];
	// all years
	var slider_years = ['1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013'];
	var slider_ints = [1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013];
	// years with a nuclear test
	var test_years = [1945, 1946, 1948, 1949, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1994, 1995, 1996, 1998, 2006, 2009, 2013];

	var toYear = function(num) {
		return slider_years[num].substring(2, 4);
	};

	module.init = function() {
		var sliElem = document.getElementById("slider-content");
		sliElem.style.visibility = "visible";
		sliElem.innerHTML = "";

		var year0 = 1945;

		for (var i = 0; i < 69; i++) {
			var element = document.createElement('span');
			element.setAttribute("id", "years-" + slider_ints[i]);
			var classes = "slider-year";
			if (i == 0) {
				classes = classes + " active";
			} else if (test_years.indexOf(i) > -1) {
				classes = classes + " passive";
			} else {
				classes = classes + " notest";
			}
			element.setAttribute("class", classes);
			element.setAttribute("data-year", (i).toString());
			element.textContent = toYear(i);

			sliElem.appendChild(element);
		}
	};

	module.onDataShapeShow = function(dataShape) {
		var classes = "slider-year";

		for (var i = 0; i < 52; i++) {
			var element = document.getElementById("years-" + (test_years[i]));
			element.setAttribute("class", classes + " passive");
		}

		var element = document.getElementById("years-" + dataShape.dstr.substring(0, 4));
		element.setAttribute("class", classes + " active");
	};

	return module;
}(ntmSlider || {});
