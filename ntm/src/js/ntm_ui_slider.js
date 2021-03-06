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

	/**
	 * Slider div with year spans.
	 */
	module.sliElem = null;

	var toYear = function(num) {
		return slider_years[num].substring(2, 4);
	};

	module.init = function() {
		module.sliElem = document.getElementById("slider-content");
		module.sliElem.style.visibility = "visible";
		document.getElementById("slider-control-btn").style.visibility = "visible";
		module.sliElem.innerHTML = "";
		var testNumbers = ntmDataApi.loadTestNumbers();

		var year0 = 1945;

		for (var i = 0; i < 69; i++) {
			var element = document.createElement('span');
			element.setAttribute("id", "years-" + slider_ints[i]);
			var classes = "slider-year";
			if (i === 0) {
				classes = classes + " active";
			} else if (test_years.indexOf(i) > -1) {
				classes = classes + " passive";
			} else {
				classes = classes + " notest";
			}
			element.setAttribute("class", classes);
			element.setAttribute("data-year", (i).toString());
			element.setAttribute("data-switch-to-year", slider_ints[i]);

			tooltipCountries = {
				"US" : "USA",
				"FR" : "France",
				"PC" : "China",
				"PK" : "Pakistan",
				"NK" : "DPRK",
				"CP" : "CPPP",
				"IS" : "Israel (alleged)",
				"IN" : "India",
				"GB" : "UK"
			};

			var tooltip = "";
			for (var country in testNumbers[1945 + i]) {
				tooltip += tooltipCountries[country] + ": " + testNumbers[1945+i][country] + ", ";
				//slider_years[i].US;
				//tooltip += "<img src='../img/"+country+".png' alt=''/> "+testNumbers[1945+i][country]+", "; //slider_years[i].US;
			}

			if (tooltip === "") {
				tooltip = "No nuclear tests were cunducted this year..";
			}

			var ttl = tooltip.length - 2;
			element.setAttribute("tooltip", tooltip.substring(0, ttl));
			element.textContent = toYear(i);

			module.sliElem.appendChild(element);
		}

		// Add onclick handler for switching to slider year.
		module.sliElem.addEventListener("click", function(e) {
			var switchYear = e.toElement.getAttribute("data-switch-to-year");
			ntmUI.player.switchTo(switchYear);
		});

	};

	module.onDataShapeShow = function(dataShape) {
		var classes = "slider-year";

		for (var i = 0; i < 52; i++) {
			var curElement = document.getElementById("years-" + (test_years[i]));
			curElement.setAttribute("class", classes + " passive");
		}

		var element = document.getElementById("years-" + dataShape.dstr.substring(0, 4));
		element.setAttribute("class", classes + " active");
	};

	return module;
}(ntmSlider || {});
