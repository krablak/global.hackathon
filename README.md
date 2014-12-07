# Nuclear Explosions of Earth

## Koding's global virtual hackaton

### Authors

Michal Ráček and Radek Hofman

#### In which category do we take part in?

We decided to participate in the following theme:

	Problems facing our planet, explained using interactive data visualization. (e.g. climate change, earthquakes, food/water waste, accessibility related issues, etc.)
	
#### What do we do and why?

[Screen]

Many people are not aware of the fact that there have already been more than 2000 nuclear
explosions on planet Earth (please see this [list](http://www.sipri.org/yearbook/2007/files/SIPRIYB0712B.pdf) provided by [SIPRI](http://www.sipri.org/). Mostly, these explosions were conducted as nuclear tests by different countries in the race for more and more advanced nuclear weapons. The best way how to realize it is to see it.
       
That is why we decided to create a web application for interactive visualisation of all nuclear explosions on Earth since---the first in 1945 until the most recent test conducted by DPRK in February 2013---squeezed into 4 minute time lapse animation. 
                            
The purpose is to increase awareness of general public of nuclear testing, [its consequences](http://www.ctbto.org/nuclear-testing/the-effects-of-nuclear-testing/general-overview-of-theeffects-of-nuclear-testing/) and the international activities focused on [global nuclear-test ban](http://en.wikipedia.org/wiki/Comprehensive_Nuclear-Test-Ban_Treaty)
represented by [CTBTO](http://ctbto.org/).

We believe that this is very interesting topic because nuclear weapons are very closely related to global security and geopolitical situation. What is more, unclear testing is nowadays also very topical because of [North Korea's nuclear ambitions](http://en.wikipedia.org/wiki/List_of_nuclear_weapons_tests_of_North_Korea). 

#### Where did we take the data?

Our project uses data from [Catalogue of nuclear tests](http://nuclearweaponarchive.org/Library/Catalog) compiled by James E. Lawson because they vere suitable for machine processing.
Data regarding tests after 1996 (Pakistani 1998 and DPRK 2006, 2009 and 2013 tests) were gathered from other public sources ([Wikipedia](http://wikipedia.org)). A small yield of 10kt was assigned to data entries where the actual yield was not known. 

#### How are the data visualised?
Each nuclear explosion is visualised as a growing red circle on a styled [GoogleMap](https://www.google.cz/maps?source=tldsi&hl=en). Sizes of circles are proportional to yields of respective blasts. Since the map is in [Mercator projection](http://en.wikipedia.org/wiki/Mercator_projection) and we have to perform a correction of sizes of circles on latitude since the circles are related to blast magnitude not to geographical area. Otherwise, circles in higher latitudes will be bigger due to latitude convergence.

Colors - red and dark colors

#### How is it implemented (technological stack)
G!

### Quick-start guide
