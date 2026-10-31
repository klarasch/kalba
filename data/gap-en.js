// The Gap / Díra facts (en). Every fact must be TRUE.
// DRAFT: written from memory on 2026-10-31. The sources below are planned, NOT yet opened and checked
// (the build environment had no web access). ok:false shows a 'not verified yet' note in the game.
// To verify: open both sources, confirm the fact, then set ok:true and update the date.
window.PB_GAP = window.PB_GAP || [];
PB_GAP.push({ lang: 'en', facts: [
  // source: https://en.wikipedia.org/wiki/R.U.R.
  // source: https://www.britannica.com/technology/robot-technology
  {"id": "robot", "topic": "language", "q": "The word “robot”, for the play R.U.R., was suggested to Karel Čapek by ___.", "a": "his brother Josef", "lie": "his publisher", "why": "Karel wanted “labori”; Josef suggested “roboti”, from robota, Czech for forced labour.", "src": "Karel Čapek: Lidové noviny, 24. 12. 1933", "ok": false},
  // source: https://www.britannica.com/topic/dollar
  // source: https://en.wikipedia.org/wiki/Joachimsthaler
  {"id": "dollar", "topic": "language", "q": "The word “dollar” comes from a 16th-century silver coin minted in the Bohemian town of ___.", "a": "Jáchymov", "lie": "Kutná Hora", "why": "The coin was the Joachimsthaler, shortened to thaler, which became dollar.", "src": "Britannica: dollar", "ok": false},
  // source: https://www.etymonline.com/word/pistol
  // source: https://en.wikipedia.org/wiki/Pistol
  {"id": "pistol", "topic": "language", "q": "The English word “pistol” most likely comes from the Czech word ___.", "a": "píšťala (pipe, whistle)", "lie": "pištec (squeaker)", "why": "Hussite soldiers called their hand firearm a píšťala because it looked like a pipe.", "src": "Online Etymology Dictionary: pistol", "ok": false},
  // source: https://www.etymonline.com/word/howitzer
  // source: https://en.wikipedia.org/wiki/Howitzer
  {"id": "howitzer", "topic": "language", "q": "The English word “howitzer” comes from the Czech Hussite word ___.", "a": "houfnice", "lie": "hákovnice", "why": "A houfnice fired stones into a crowd (houf) of enemies. It reached English through German.", "src": "Online Etymology Dictionary: howitzer", "ok": false},
  // source: https://cs.wikipedia.org/wiki/Brambor_obecn%C3%BD
  // source: https://prirucka.ujc.cas.cz/
  {"id": "brambor", "topic": "language", "q": "The Czech word for potato, “brambora”, is named after the region it came from: ___.", "a": "Brandenburg", "lie": "Bavaria", "why": "Brandenburg is Braniborsko in Czech, and potatoes reached Bohemia from there in the 18th century.", "src": "Internetová jazyková příručka ÚJČ AV ČR", "ok": false},
  // source: https://www.britannica.com/art/polka-dance
  // source: https://en.wikipedia.org/wiki/Polka
  {"id": "polka", "topic": "history", "q": "The polka dance was born in the 1830s in ___.", "a": "Bohemia", "lie": "Poland", "why": "The name is often linked to the Czech “půlka”, half, for its short half-steps.", "src": "Britannica: polka", "ok": false},
  // source: https://en.wikipedia.org/wiki/Semtex
  // source: https://www.explosia.cz/
  {"id": "semtex", "topic": "places", "q": "Semtex, the plastic explosive, is named after ___, a village near Pardubice.", "a": "Semtín", "lie": "Semily", "why": "It has been made there by the Explosia company since the 1960s.", "src": "Explosia a.s. (výrobce)", "ok": false},
  // source: https://ocean.si.edu/ocean-life/invertebrates/octopuses
  // source: https://en.wikipedia.org/wiki/Octopus
  {"id": "octopus", "topic": "nature", "q": "An octopus has ___ hearts.", "a": "three", "lie": "two", "why": "Two pump blood through the gills, the third through the body. Their blood is blue.", "src": "Smithsonian Ocean: octopus", "ok": false},
  // source: https://pubs.rsc.org/en/content/articlelanding/2021/sm/d0sm01230k
  // source: https://en.wikipedia.org/wiki/Wombat
  {"id": "wombat", "topic": "nature", "q": "Wombat droppings have an unusual shape: ___.", "a": "cubes", "lie": "stars", "why": "The shape forms in the gut, which has stiffer and softer sections. They use it to mark territory.", "src": "Soft Matter (2021): How do wombats make cubed poo?", "ok": false},
  // source: https://www.science.org/doi/10.1126/science.aaf1703
  // source: https://en.wikipedia.org/wiki/Greenland_shark
  {"id": "shark", "topic": "nature", "q": "Scientists estimate the Greenland shark can live for about ___ years.", "a": "400", "lie": "150", "why": "They dated the lens of the eye with radiocarbon. It is the longest-living known vertebrate.", "src": "Science (2016): Nielsen et al., Greenland shark longevity", "ok": false},
  // source: https://www.nature.com/articles/382577a0
  // source: https://en.wikipedia.org/wiki/Koala
  {"id": "koala", "topic": "nature", "q": "The animal whose fingerprints are almost impossible to tell from a human's: ___.", "a": "koala", "lie": "sloth", "why": "They evolved separately from ours, probably for gripping branches.", "src": "Nature (1996): Henneberg et al., koala fingerprints", "ok": false},
  // source: https://www.britannica.com/science/berry-plant-reproductive-body
  // source: https://en.wikipedia.org/wiki/Berry_(botany)
  {"id": "banana", "topic": "nature", "q": "Botanically, a ___ is a berry, but a strawberry is not.", "a": "banana", "lie": "raspberry", "why": "A berry grows from a single ovary. A strawberry is an accessory fruit, a raspberry an aggregate.", "src": "Britannica: berry", "ok": false},
  // source: https://www.dacice.cz/
  // source: https://en.wikipedia.org/wiki/Sugar_cube
  {"id": "sugar", "topic": "food", "q": "The sugar cube was invented in 1843 at a sugar factory in the Czech town of ___.", "a": "Dačice", "lie": "Kolín", "why": "Director Jakub Kryštof Rad made it after his wife cut herself chopping a sugar loaf.", "src": "Město Dačice: kostka cukru", "ok": false},
  // source: https://www.prazdroj.cz/
  // source: https://en.wikipedia.org/wiki/Pilsner_Urquell
  {"id": "pilsner", "topic": "food", "q": "The first Pilsner lager was brewed in 1842 by a brewer from ___.", "a": "Bavaria", "lie": "Vienna", "why": "His name was Josef Groll, and he brought the Bavarian bottom-fermenting method.", "src": "Plzeňský Prazdroj: historie", "ok": false},
  // source: https://www.smithsonianmag.com/arts-culture/the-surprising-origin-of-ketchup
  // source: https://en.wikipedia.org/wiki/Ketchup
  {"id": "ketchup", "topic": "food", "q": "The original Asian “ketchup” wasn't made from tomatoes but from ___.", "a": "fish", "lie": "plums", "why": "It was a fermented fish sauce. Tomatoes came later, in early 19th-century America.", "src": "Smithsonian Magazine: ketchup history", "ok": false},
  // source: https://www.kirinholdings.com/en/newsroom/
  // source: https://en.wikipedia.org/wiki/List_of_countries_by_beer_consumption_per_capita
  {"id": "beer", "topic": "food", "q": "For over 25 years in a row, the country that drinks the most beer per person has been ___.", "a": "Czechia", "lie": "Germany", "why": "Roughly 130 to 140 litres per person a year, according to Kirin's ranking.", "src": "Kirin Holdings: Global Beer Consumption by Country", "ok": false},
  // source: https://science.nasa.gov/venus/venus-facts/
  // source: https://en.wikipedia.org/wiki/Venus
  {"id": "venus", "topic": "science", "q": "On ___, one spin on its axis takes longer than a whole year.", "a": "Venus", "lie": "Mars", "why": "It turns once every 243 Earth days but orbits the Sun in 225. And it spins backwards.", "src": "NASA: Venus facts", "ok": false},
  // source: https://www.britannica.com/science/stapes
  // source: https://en.wikipedia.org/wiki/Stapes
  {"id": "stapes", "topic": "science", "q": "The smallest bone in the human body is in the ___.", "a": "ear", "lie": "nose", "why": "It's the stapes, or stirrup, in the middle ear. About 3 mm long.", "src": "Britannica: stapes", "ok": false},
  // source: https://www.bluetooth.com/about-us/bluetooth-origin/
  // source: https://en.wikipedia.org/wiki/Harald_Bluetooth
  {"id": "bluetooth", "topic": "science", "q": "Bluetooth is named after a 10th-century king of ___.", "a": "Denmark", "lie": "Sweden", "why": "Harald Bluetooth united Danish tribes, just as the tech unites devices.", "src": "Bluetooth SIG: Origin of the Bluetooth name", "ok": false},
  // source: https://cs.wikipedia.org/wiki/Nejv%C4%9Bt%C5%A1%C3%AD_%C4%8Cech
  // source: https://www.ceskatelevize.cz/
  {"id": "cimrman", "topic": "history", "q": "A 2005 TV poll for the Greatest Czech would have been won by someone disqualified for being fictional: ___.", "a": "Jára Cimrman", "lie": "the Good Soldier Švejk", "why": "So Charles IV won, with T. G. Masaryk second.", "src": "Česká televize: Největší Čech (2005)", "ok": false},
  // source: https://www.mua.cas.cz/
  // source: https://en.wikipedia.org/wiki/Charlotte_Garrigue_Masaryk
  {"id": "masaryk", "topic": "history", "q": "Tomáš G. Masaryk added the surname Garrigue to his own. It belonged to his ___.", "a": "wife", "lie": "mother", "why": "Charlotte Garrigue was American; he took her name when they married in 1878.", "src": "Masarykův ústav a Archiv AV ČR", "ok": false},
  // source: https://www.imc.cas.cz/
  // source: https://en.wikipedia.org/wiki/Otto_Wichterle
  {"id": "wichterle", "topic": "history", "q": "In 1961 Otto Wichterle made the first soft contact lenses at home, on a machine built from a ___ construction kit.", "a": "Merkur", "lie": "Lego", "why": "He worked in his kitchen, with a bicycle dynamo as the motor.", "src": "Ústav makromolekulární chemie AV ČR: Otto Wichterle", "ok": false},
  // source: https://www.britannica.com/biography/Jan-Evangelista-Purkinje
  // source: https://en.wikipedia.org/wiki/Jan_Evangelista_Purkyn%C4%9B
  {"id": "purkyne", "topic": "history", "q": "In 1823 Jan Evangelista Purkyně was one of the first to scientifically classify ___.", "a": "fingerprints", "lie": "blood types", "why": "He described nine pattern types. Police only started using them decades later.", "src": "Britannica: Jan Evangelista Purkyně", "ok": false},
  // source: https://www.britannica.com/biography/Jan-Jansky
  // source: https://en.wikipedia.org/wiki/Jan_Jansk%C3%BD
  {"id": "jansky", "topic": "history", "q": "In 1907 the Czech doctor Jan Janský sorted human blood into ___ groups.", "a": "four", "lie": "six", "why": "Landsteiner had described three. Janský was first to describe all four: O, A, B and AB.", "src": "Britannica: Jan Janský", "ok": false},
  // source: https://www.npcs.cz/
  // source: https://en.wikipedia.org/wiki/Pravčická_brána
  {"id": "pravcicka", "topic": "places", "q": "The largest natural sandstone arch in Europe is in Czechia. It's called ___.", "a": "Pravčická brána", "lie": "Tiská brána", "why": "The arch spans over 26 metres. Walking on it has been banned since 1982.", "src": "Národní park České Švýcarsko", "ok": false},
  // source: https://www.caves.cz/
  // source: https://en.wikipedia.org/wiki/Hranice_Abyss
  {"id": "hranice", "topic": "places", "q": "The world's deepest known flooded cave is near the Czech town of ___.", "a": "Hranice", "lie": "Blansko", "why": "Nobody has reached the bottom yet; measurements suggest over 400 metres below the surface.", "src": "Správa jeskyní ČR: Hranická propast", "ok": false},
  // source: https://www.prague.eu/
  // source: https://en.wikipedia.org/wiki/Charles_Bridge
  {"id": "charlesbridge", "topic": "places", "q": "Legend says the Charles Bridge foundation stone was laid on 9 July 1357 at 5:31, so 1357 9 7 5 31 forms a ___.", "a": "palindrome", "lie": "Charles's birthday", "why": "135797531 reads the same both ways. Charles IV was keen on astrology.", "src": "Prague City Tourism: Charles Bridge", "ok": false},
]});
