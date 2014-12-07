# Nuclear Explosions of Earth

## Koding's global virtual hackaton

### Authors

Michal Ráček and Radek Hofman

#### In which category do we take part in?

We decided to participate in the following theme:

	Problems facing our planet, explained using interactive data visualization. (e.g. climate change, earthquakes, food/water waste, accessibility related issues, etc.)
	
#### What do we do and why?

![screenshot](https://raw.githubusercontent.com/krablak/global.hackathon/master/screen1.jpg "A motivation screenshot from the final application:)")

Many people are not aware of the fact that there have already been more than 2000 nuclear
explosions on planet Earth (please see this [list](http://www.sipri.org/yearbook/2007/files/SIPRIYB0712B.pdf) provided by [SIPRI](http://www.sipri.org/)). Mostly, these explosions were conducted as nuclear tests by different countries in the race for more and more advanced nuclear weapons. The best way how to realize it is to see it.
       
That is why we decided to create a web application for interactive visualisation of all nuclear explosions on Earth ---since the first in 1945 until the most recent test conducted by DPRK in February 2013---squeezed into 4 minute time lapse animation. 
                            
The purpose is to increase awareness of general public of nuclear testing, [its consequences](http://www.ctbto.org/nuclear-testing/the-effects-of-nuclear-testing/general-overview-of-theeffects-of-nuclear-testing/) and the international activities focused on [global nuclear-test ban](http://en.wikipedia.org/wiki/Comprehensive_Nuclear-Test-Ban_Treaty)
represented by [CTBTO](http://ctbto.org/).

We believe that this is a very interesting topic because nuclear weapons are very closely related to global security and geopolitical situation. What is more, nuclear testing is nowadays also very topical because of [North Korea's nuclear ambitions](http://en.wikipedia.org/wiki/List_of_nuclear_weapons_tests_of_North_Korea). 

#### Where did we take the data?

Our project uses data from [Catalogue of nuclear tests](http://nuclearweaponarchive.org/Library/Catalog) compiled by James E. Lawson because they vere suitable for machine processing.
Data regarding tests after 1996 (Pakistani 1998 and DPRK 2006, 2009 and 2013 tests) were gathered from other public sources ([Wikipedia](http://wikipedia.org)). A small yield of 10kt was assigned to data entries where the actual yield was not known. 

#### How are the data visualised?
Each nuclear explosion is visualised as a growing red circle on a styled [GoogleMap](https://www.google.cz/maps?source=tldsi&hl=en). Sizes of circles are proportional to yields of respective blasts. Since the map is in [Mercator projection](http://en.wikipedia.org/wiki/Mercator_projection) we have to perform a correction of sizes of circles on latitude in order to make blast at different latitudes magnitudes mutually comparable.  Otherwise, circles in higher latitudes (closer to poles) will be bigger due to latitude convergence.

We decided for a simple minimalisic design: red blasts on a dark map. Spectator can then focus on what is important here.

#### Quickstart guide

Controls are also minimalistic. Animation of 2000+ blast in the chronological order starts immediately after clicking `Next` on a splashscreen providing basic information on the application. Animation can be then stopped and resumed using play/pause button in the bottom-left corner. There is a time progress bar showing current year between 1945 and 2013. User can click a year to start animation from this point in time. Info window in the lower right corner shows basic information about recently displayed explosions: country (identified by flag), date, yield in kilotons (kt), test site and nuclear explosion type (air, underground etc.). Current date is displayed in upper right corner.

####  Technology
Our technology stack is showcase of rich client application built without tons of thirdparty libraries and we are using only [Vanilla JS](http://vanilla-js.com/) and [Google Maps V3](https://developers.google.com/maps/documentation/javascript/reference).

- [Vanilla JS](http://vanilla-js.com/) - UI
- [Google Maps V3](https://developers.google.com/maps/documentation/javascript/reference) - UI
- [Gulp.js](http://gulpjs.com/) - Build process
- [JSHint](http://jshint.com/) - Code quality
- [Python](https://www.python.org/) - Data processing
- [Aptana Studio](http://www.aptana.com/index.html) - Frontend IDE
- [PyCharm](https://www.jetbrains.com/pycharm/) - Dataprocessing IDE

The result is 246 KB of JS including whole logic and also all source data. JS itself is built on few separate [modules which are implemented using anonymous closures](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html). Simply, no magic included.

####  Future
Whole project was written in two days and according to that there are many ways how it could be improved:

- Performance improvements
- Extended browsers support
- Improved and extended UI controls
- Support for mobile devices
- Modules structure refactoring
- Generated documentation
- Unit tests

### We had fun during this hackaton, so thank you and enjoy!

