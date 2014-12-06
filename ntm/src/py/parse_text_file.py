__author__ = 'Radek Hofman'

import os
import string
import datetime
import math

def parse_text_file(filename):
    """
    parses text file containing all nuclear test data

    #Creates a JSON with all the test data
    #key is an integer ID of the test
    #value is a test-related data structure
    """

    tests = {}
    name_flag = False
    test_index = 0
    with open(filename, "r") as f:
        s = f.readlines()
        print "Found %d tests entries" % len(s)

        s_strip = map(string.strip, s)

        for i, line in enumerate(s_strip):
            if len(line) < 68: #not an enrtry
                test_name = line[16:35]
                name_flag = True
                #print "stored", test_name
            else:
                #parsing date
                year = 1900+int(line[:2])
                month = int(line[2:4])
                day = int(line[4:6])

                try:  # trying to parse also time if possible...
                    hour = int(line[7:9])
                    min = int(line[9:11])
                    sec = int(float(line[11:15]))
                except:
                    hour, min, sec = 0, 0, 0

                test_date = datetime.datetime(year, month, day, hour, min, sec)

                #parse country
                countries = {
                    "US" : "United States of Americe",
                    "GB" : "United Kingdom",
                    "CP" : "Union of Soviet Socialist Republics",
                    "FR" : "France",
                    "IN" : "India",
                    "PC" : "People's Republic of China",
                    "IS" : "Israel",
                    "PK" : "Pakistan"
                }

                country = countries[line[16:18]]

                #parse test site
                sites = {
                      "ANM" : "Alamogordo, New Mexico, USA (US atmospheric test)",
                      "HRJ" : "Hiroshima, Japan (US/warfare)",
                      "NGJ" : "Nagasaki, Japan (US/warfare)",
                      "BKN" : "Bikini atoll (US atmospheric tests)",
                      "ENW" : "Enwetak atoll (US atmospheric tests)",
                      "CNV" : "Centra Nevada (US underground test)",
                      "NTS" : "Nevada Test Site, Nevada, USA (US atmospheric and underground and UK underground tests)",
                      "FMT" : "Farmington, Colorado (US underground natural gas stimulation test)",
                      "MBI" : "Monte Bello Islands, Australia (UK atmospheric test)",
                      "EMU" : "Emu Field, 480 kilometers SW of Woomera, Australia (UK atmospheric tests)",
                      "PAC" : "Various Pacific Ocean sites",
                      "MAR" : "Maralinga, Australia (UK atmospheric tests)",
                      "CHR" : "Christmas Island (UK and US atmospheric tests)",
                      "NZ"  : "Novaya Zemlya, USSR (USSR atmospheric and underground tests)",
                      "KTS" : "Eastern Kazakh or Semipalitinsk test site, USSR (USSR atmospheric and underground tests)",
                      "REG" : "Reggane Proving Grounds, Algeria (French Atmospheric Tests)",
                      "ECK" : "Ecker, Algeria (French Underground tests)",
                      "CLS" : "Carlsbad, New Mexico, USA (US underground test)",
                      "JON" : "Johnston Island (US atmospheric tests)",
                      "FAL" : "Fallon, Nevada, USA (US underground test)",
                      "LNR" : "Lop Nor, PRC (PRC atmospheric and underground tests)",
                      "AMC" : "Amchitka Island, Aleutians, Alaska, USA (US underground tests)",
                      "MUR" : "Muruora Is. (French atmospheric and underground tests)",
                      "FAN" : "Fangataufa Is. (French atmospheric and underground tests)",
                      "HTB" : "Hattiesburg, Mississippi, USA (US underground tests)",
                      "GRV" : "Grand Valley, Colorado, USA (US natural gas stimulation)",
                      "RAJ" : "Rajasthan Desert, India (Indian underground test)",
                      "?IN" : "Indian Ocean (putative Israeli Test)",
                      "RFL" : "Rifle, Colorado, USA (3x33kt simultaneous gas stimulation shots)",
                      "SAT" : "South Atlantic Ocean (three US tests, rocket to 482 kilometers altitude)",
                      "MAL" : "Malden Island (UK atmospheric tests)",
                      "KPY" : "Kapustin Yar (USSR)",
                      "SYS" : "Sary Shagan (USSR)",
                      "" : "None"
                }

                #print line
                site_code = line[18:21].strip()
                if sites.has_key(site_code):
                    site = sites[site_code]
                else:
                    site = "None"


                #parse subsite
                #subsite = line[21:22]

                #parse test type
                types = {
                      "AIRD" : "airdrop",
                      "AIRB" : "air-blast",
                      "ART" : "artillery shell",
                      "ATMO" : "in or above the atmosphere",
                      "BALN" : "balloon",
                      "BARG" : "barge",
                      "CRAT" : "crater",
                      "RC"  : "roman candle (open vertical shaft)",
                      "ROCK" : "rocket",
                      "SHFT" : "stemmed vertical shaft",
                      "SS1" : "simultaneous shot in shaft 1",
                      "SS2" : "simultaneous shot in shaft 2",
                      "SS3" : "simultaneous shot in shaft 3",
                      "SS4" : "simultaneous shot in shaft 4",
                      "SS5" : "simultaneous shot in shaft 5",
                      "SS6" : "simultaneous shot in shaft 6",
                      "SURF" : "surface (unknown but probably not airdropped, near surface, includes tower and barge)",
                      "TOWR" : "tower",
                      "SHIP" : "ship",
                      "TUNN" : "tunnel",
                      "UNDW" : "underwater",
                      "UNDG" : "underground",
                      "SH?" : "shaft",
                      "MINE" : "mine",
                      "SUR?" : "surface",
                      "TUN1" : "tunnel 1",
                      "" : "",
                }


                #default coordinates of sites
                def_coords = {
                      #"ANM" : "Alamogordo, New Mexico, USA (US atmospheric test)",
                      #"HRJ" : "Hiroshima, Japan (US/warfare)",
                      #"NGJ" : "Nagasaki, Japan (US/warfare)",
                      "BKN" :  (11.583333, 165.383333),
                      "ENW" :  (11.5, 162.333333),
                      #"CNV" : "Centra Nevada (US underground test)",
                      "NTS" :  (37.116667, -116.05),
                      #"FMT" : "Farmington, Colorado (US underground natural gas stimulation test)",
                      "MBI"  :  (-20.40,  115.57), # "Monte Bello Islands, Australia (UK atmospheric test)",
                      "EMU"  :  (-28.698333, 132.371389),
                      "PAC"  :  ('null', 'null'), #"Various Pacific Ocean sites",
                      "MAR"  :  (-30.166667, 131.616667), #"Maralinga, Australia (UK atmospheric tests)",
                      "CHR"  :  (1.866667, -157.4), #"Christmas Island (UK and US atmospheric tests)",
                      "NZ"   : (74, 56), #"Novaya Zemlya, USSR (USSR atmospheric and underground tests)",
                      "KTS"  : (50.116667, 78.716667),
                      "REG"  : (26.258465,-0.090305), #"Reggane Proving Grounds, Algeria (French Atmospheric Tests)",
                      #"ECK" : "Ecker, Algeria (French Underground tests)",
                      "CLS" :  (32.2625, -103.865306), #"Carlsbad, New Mexico, USA (US underground test)",
                      "JON"  : (16.75, -169.516667), #"Johnston Island (US atmospheric tests)",
                      "FAL"  : (39.108056, -118.35), #"Fallon, Nevada, USA (US underground test)",
                      "LNR" :  (40.8125, 89.79), #"Lop Nor, PRC (PRC atmospheric and underground tests)",
                      "AMC" :  (51.426622, 179.187258), #"Amchitka Island, Aleutians, Alaska, USA (US underground tests)",
                      "MUR" : (-21.833333, -138.833333), #"Muruora Is. (French atmospheric and underground tests)",
                      "FAN" :  (-22.25, -138.75), #"Fangataufa Is. (French atmospheric and underground tests)",
                      "HTB" :  (31.140560, -89.573334), #"Hattiesburg, Mississippi, USA (US underground tests)",
                      "GRV" :  (39.405278, -107.948528), #"Grand Valley, Colorado, USA (US natural gas stimulation)",
                      #"RAJ" : "Rajasthan Desert, India (Indian underground test)",
                      #"?IN" : "Indian Ocean (putative Israeli Test)",
                      #"RFL" : "Rifle, Colorado, USA (3x33kt simultaneous gas stimulation shots)",
                      #"SAT" : "South Atlantic Ocean (three US tests, rocket to 482 kilometers altitude)",
                      #"MAL" : "Malden Island (UK atmospheric tests)",
                      "KPY"  : (48.59, 46.2933), #"Kapustin Yar (USSR)",
                      "SYS"  : (46.383333, 72.866667), #"Sary Shagan (USSR)",
                      "" : "None"
                }
                lat = line[42:50]


                lon = line[50:59].upper().strip()
                try:
                    if lon[-1] == "W":
                        lon = -float(lon[:-1])
                    elif lon[-1] == "E":
                        lon = float(lon[:-1])
                    else:
                        lon = float(lon)
                except:
                    try:
                        ll = def_coords[site_code]
                        lat = ll[0]
                        lon = ll[1]
                    except:
                        print site_code
                        print line
                        raw_input()



                #print lat, lon

                test_type = types[line[22:26].strip()]


                lstr = line[35:41].strip()

                print line
                print "yield strip:", lstr
                if "-" in lstr:
                    yield_kt = float(lstr.split("-")[-1])
                elif "<" in lstr:
                    yield_kt = float(lstr.split("<")[-1])
                elif ">" in lstr:
                    yield_kt = float(lstr.split(">")[-1])
                elif "~" in lstr:
                    yield_kt = float(lstr.split("~")[-1])
                elif "+" in lstr:
                    yield_kt = float(lstr.split("+")[0])
                elif "LOW" in lstr.upper():
                    yield_kt = 1
                elif "?" in lstr:
                    yield_kt = float(lstr.split("?")[0])
                elif "FIZ" in lstr.upper():
                    yield_kt = 1
                elif "LIGHT" in lstr:
                    yield_kt = 10
                elif "HIGH" in lstr:
                    yield_kt = 100
                elif "F" in lstr:
                    yield_kt = float(lstr.split("F")[-1])
                elif lstr != "":
                    yield_kt = float(lstr)
                else:
                    yield_kt = 10  # a default value





                device_types = {
                    "U" : """fission only with primarialy U235, or boosted or two
                          stage with primarialy U235 primary (trigger, pit)""",
                    "P" : """fission only with primarialy Pu239, or boosted or two
                  stage with primarialy Pu239 primary (trigger, pit)""",

                    "I" : """fission only, fission material mix unknown""",
                    "B" : """boosted", some fusion yield, perhaps from tritium
                           although the boost is probably mainly to increase
                           the fission yield""",
                    "PB" : """plutonium boosted", some fusion yield, perhaps from tritium
                           although the boost is probably mainly to increase
                           the fission yield""",
                    "UB" : """uranium boosted", some fusion yield, perhaps from tritium
                           although the boost is probably mainly to increase
                           the fission yield""",
                    "2" : """two stage, fusion second stage, possibly many or most of
                         these will have a U238 fission "third" stage""",
                    "U2" : """uranium two stage, fusion second stage, possibly many or most of
                         these will have a U238 fission "third" stage""",
                    "" : "unknown",
                    "E" : ""
                }

                dt_code = line[61:63].strip()
                print line
                print dt_code
                device_type = device_types[dt_code]

                #parse test name:
                test_name_0 = line[68:76].strip()
                if name_flag and test_name[:3] == test_name_0[:3]:
                    test_name_0 = test_name
                    name_flag = False
                #print test_name_0


                test_entry = {
                    "date" : test_date.strftime("%Y-%m-%dT00:00:00.000Z"),
                    "date_str" : test_date.strftime("%Y-%m-%d %H:%M:%S"),
                    "country" : country,
                    "site" : site,
                    "test_type" : test_type,
                    "lat" : lat,
                    "lon" : lon,
                    "yield" : yield_kt,
                    "device_type" : device_type,
                    "test_name" : test_name_0

                }

                tests["%d" % test_index] = test_entry

                test_index += 1
    return tests, test_index-1

def main():
    """
    the main method
    """

    file_path = ".."+os.sep+"data"+os.sep+"test_data_raw.txt"
    tests, last_index = parse_text_file(file_path)


    output = "["
    for i in range(last_index):
        output += tests["%d" % i].__repr__()+",\n"
    output += "]"

    print output

    with open("test_json.txt", "w+") as f:
        f.write(output)


if __name__ == "__main__":
    main()
