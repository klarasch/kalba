// The Gap / Díra facts (en). Every fact must be TRUE.
// Each fact was checked against at least two sources that were opened and read (URLs above it).
// To add one: same fields, two sources, then run the second check before committing.
window.PB_GAP = window.PB_GAP || [];
PB_GAP.push({ lang: 'en', facts: [
  // robot, checked 2026-10-31
  //   https://www.novinky.cz/historie/clanek/pred-130-lety-se-narodil-literarni-velikan-ktery-dal-svetu-robota-toto-slovo-vsak-nevymyslel-40309280
  //   https://www.merriam-webster.com/dictionary/robot
  //   https://en.wikipedia.org/wiki/R.U.R.
  {"id": "robot", "topic": "language", "q": "The word “robot”, for the play R.U.R., was suggested to Karel Čapek by ___.", "a": "his brother Josef", "lie": "his publisher", "why": "Karel wanted “laboři” but found it bookish; Josef suggested “roboti”, from robota, Czech for forced labour.", "src": "Lidové noviny (K. Čapek, 1933)"},
  // dollar, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/dollar
  //   https://en.wikipedia.org/wiki/Joachimsthaler
  //   https://en.wikipedia.org/wiki/Dollar
  {"id": "dollar", "topic": "language", "q": "The word “dollar” comes from a 16th-century silver coin minted in the Bohemian town of ___.", "a": "Jáchymov", "lie": "Kutná Hora", "why": "The coin was the Joachimsthaler, shortened to thaler, which became dollar.", "src": "Merriam-Webster"},
  // pistol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pistol
  //   https://www.dictionary.com/browse/pistol
  //   https://en.wikipedia.org/wiki/Pistol
  {"id": "pistol", "topic": "language", "q": "The English word “pistol” most likely comes from the Czech word ___.", "a": "píšťala (pipe, whistle)", "lie": "bič (whip)", "why": "The Hussites used it for a light hand firearm. It reached English through German and French.", "src": "Merriam-Webster"},
  // howitzer, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/howitzer
  //   https://www.dictionary.com/browse/howitzer
  //   https://en.wikipedia.org/wiki/Howitzer
  {"id": "howitzer", "topic": "language", "q": "The English word “howitzer” comes from the Czech Hussite word ___.", "a": "houfnice", "lie": "hákovnice", "why": "Hussites fired it at short range into a crowd (houf) of enemies. It reached English via German and Dutch.", "src": "Merriam-Webster"},
  // brambor, checked 2026-10-31
  //   https://macau.uni-kiel.de/servlets/MCRFileNodeServlet/macau_derivate_00006618//kiel-up_2750-9605_p4.pdf
  //   https://en.wiktionary.org/wiki/brambor
  {"id": "brambor", "topic": "language", "q": "The Czech word for potato, “brambora”, is named after the land it is said to have come from: ___.", "a": "Brandenburg", "lie": "Bavaria", "why": "Czech etymologists read it as “the crop from Brandenburg”, said to be brought by Prussian soldiers in the 18th century.", "src": "Kiel-UP: J. Šnejdrlová, Názvy bramboru"},
  // polka, checked 2026-10-31
  //   https://www.bozemandailychronicle.com/go/word-of-the-week-polka-dance-craze-has-disputed-origins/article_13fc2570-2c7b-11e3-84aa-0019bb2963f4.html
  //   https://en.wikipedia.org/wiki/Polka
  //   https://www.newworldencyclopedia.org/entry/polka
  {"id": "polka", "topic": "history", "q": "The polka dance was born in the 1830s in ___.", "a": "Bohemia", "lie": "Poland", "why": "The name is disputed: maybe from Czech “půlka” (half) for its half-steps, maybe from “Polka”, a Polish woman.", "src": "Bozeman Daily Chronicle (Chrysti the Wordsmith)"},
  // semtex, checked 2026-10-31
  //   https://www.csmonitor.com/2002/0226/p07s02-woeu.html
  //   https://en.wikipedia.org/wiki/Semtex
  //   https://explosia.cz/historie/
  {"id": "semtex", "topic": "places", "q": "Semtex, the plastic explosive, is named after ___, a place near Pardubice.", "a": "Semtín", "lie": "Semily", "why": "It was developed by chemists there and has been made there since the 1960s, today by Explosia.", "src": "The Christian Science Monitor"},
  // octopus, checked 2026-10-31
  //   https://www.sciencefocus.com/nature/why-does-an-octopus-have-more-than-one-heart
  //   https://en.wikipedia.org/wiki/Octopus
  {"id": "octopus", "topic": "nature", "q": "An octopus has ___ hearts.", "a": "three", "lie": "two", "why": "Two pump blood through the gills, the third through the body. Their blood is blue, thanks to copper.", "src": "BBC Science Focus"},
  // wombat, checked 2026-10-31
  //   https://www.australiangeographic.com.au/news/2021/02/why-do-wombats-have-cube-shaped-poo-scientists-may-have-solved-the-mystery/
  //   https://www.sci.news/biology/wombat-square-shaped-feces-09314.html
  //   https://en.wikipedia.org/wiki/Common_wombat
  {"id": "wombat", "topic": "nature", "q": "Wombat droppings have an unusual shape: ___.", "a": "cubes", "lie": "stars", "why": "The shape forms in the gut, which has stiffer and softer sections. They leave them on prominent spots to communicate.", "src": "Australian Geographic"},
  // shark, checked 2026-10-31
  //   https://pubmed.ncbi.nlm.nih.gov/27516602/
  //   https://www.sciencenews.org/article/study-ranks-greenland-shark-longest-lived-vertebrate
  //   https://www.pbs.org/wgbh/nova/article/greenland-shark-is-officially-the-longest-living-vertebrate-on-earth/
  {"id": "shark", "topic": "nature", "q": "Scientists estimate the oldest Greenland shark they studied was about ___ years old.", "a": "400", "lie": "150", "why": "Radiocarbon dating of the eye lens gave roughly 272 to 512 years. It is the longest-living known vertebrate.", "src": "Science (2016): Nielsen et al."},
  // koala, checked 2026-10-31
  //   https://www.pbs.org/wgbh/nova/article/koala-fingerprints/
  //   https://indianapublicmedia.org/amomentofscience/humans-arent-unique-when-it-comes-to-fingerprints.php
  {"id": "koala", "topic": "nature", "q": "The only non-primate with fingerprints strikingly similar to a human's: ___.", "a": "koala", "lie": "sloth", "why": "They evolved separately from ours, probably for grasping eucalyptus branches and leaves.", "src": "PBS NOVA"},
  // banana, checked 2026-10-31
  //   https://www.livescience.com/57477-why-are-bananas-considered-berries.html
  //   https://en.wikipedia.org/wiki/Berry_(botany)
  {"id": "banana", "topic": "nature", "q": "Botanically, a ___ is a berry, but a strawberry is not.", "a": "banana", "lie": "raspberry", "why": "A berry grows from a flower with a single ovary. A strawberry is an accessory fruit, a raspberry an aggregate.", "src": "Live Science"},
  // sugar, checked 2026-10-31
  //   https://www.dacice.cz/introduction/world-primacy/
  //   https://dpma.de/english/our_office/publications/milestones/inventionsthatmadehistory/sugarcubes/index.html
  //   https://english.radio.cz/node/8706003
  {"id": "sugar", "topic": "food", "q": "The sugar cube was patented in 1843 by the director of a sugar refinery in the Czech town of ___.", "a": "Dačice", "lie": "Kolín", "why": "The story goes that his wife Juliana cut herself chopping a sugar loaf and demanded something better.", "src": "Město Dačice"},
  // pilsner, checked 2026-10-31
  //   https://live.pilsnerurquell.com/stories/how-pilsner-urquell-changed-beer-forever/
  //   https://english.radio.cz/node/8180026
  //   https://en.wikipedia.org/wiki/Josef_Groll
  {"id": "pilsner", "topic": "food", "q": "The first Pilsner lager was brewed in 1842 by a brewer from ___.", "a": "Bavaria", "lie": "Vienna", "why": "His name was Josef Groll, and he used the Bavarian bottom-fermenting method.", "src": "Pilsner Urquell"},
  // ketchup, checked 2026-10-31
  //   https://www.wnyc.org/story/ketchup-the-all-american-condiment-that-comes-from-asia
  //   https://www.csmonitor.com/The-Culture/In-a-Word/2023/0410/The-origins-of-ketchup-or-catsup-run-through-fish-sauce
  //   https://en.wikipedia.org/wiki/Ketchup
  {"id": "ketchup", "topic": "food", "q": "The original Asian “ketchup” wasn't made from tomatoes but from ___.", "a": "fish", "lie": "plums", "why": "It was a pickled-fish brine from southern China. The first tomato ketchup recipe appeared in America in 1812.", "src": "WNYC / NPR"},
  // beer, checked 2026-10-31
  //   https://www.kirinholdings.com/en/newsroom/release/2025/1222_01.html
  //   https://www.newstream.cz/zpravy-z-firem/alespon-v-necem-prvni-cesi-opet-ovladli-zebricek-spotreby-piva
  //   https://en.wikipedia.org/wiki/List_of_countries_by_beer_consumption_per_capita
  {"id": "beer", "topic": "food", "q": "For over 30 years in a row, the country that drinks the most beer per person has been ___.", "a": "Czechia", "lie": "Germany", "why": "Kirin's ranking has had it first every year since 1993: about 150 litres per person in 2024.", "src": "Kirin Holdings (2025)"},
  // venus, checked 2026-10-31
  //   https://science.nasa.gov/venus/venus-facts/
  //   https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html
  //   https://en.wikipedia.org/wiki/Venus
  {"id": "venus", "topic": "science", "q": "On ___, one spin on its axis takes longer than a whole year.", "a": "Venus", "lie": "Mars", "why": "It turns once every 243 Earth days but orbits the Sun in 225. And it spins backwards.", "src": "NASA"},
  // stapes, checked 2026-10-31
  //   https://www.healthline.com/human-body-maps/stapes-bone
  //   https://en.wikipedia.org/wiki/Stapes
  {"id": "stapes", "topic": "science", "q": "The smallest bone in the human body is in the ___.", "a": "ear", "lie": "nose", "why": "It's the stapes, or stirrup, in the middle ear. Only about 2 to 3 mm long.", "src": "Healthline"},
  // bluetooth, checked 2026-10-31
  //   https://www.bluetooth.com/about-us/bluetooth-origin/
  //   https://en.wikipedia.org/wiki/Harald_Bluetooth
  {"id": "bluetooth", "topic": "science", "q": "Bluetooth is named after a 10th-century king of ___.", "a": "Denmark", "lie": "Sweden", "why": "Harald Bluetooth united Denmark and Norway, just as the tech was meant to unite devices.", "src": "Bluetooth SIG"},
  // cimrman, checked 2026-10-31
  //   https://english.radio.cz/node/8095952
  //   https://www.novinky.cz/kultura/clanek/nejvetsim-cechem-se-stal-karel-iv-40101476
  //   https://cs.wikipedia.org/wiki/Nejv%C4%9Bt%C5%A1%C3%AD_%C4%8Cech
  {"id": "cimrman", "topic": "history", "q": "The unofficial winner of the 2005 Greatest Czech TV poll was disqualified for being fictional: ___.", "a": "Jára Cimrman", "lie": "the Good Soldier Švejk", "why": "So Charles IV officially won, with T. G. Masaryk second and Václav Havel third.", "src": "Radio Prague International"},
  // masaryk, checked 2026-10-31
  //   https://ct24.ceskatelevize.cz/domaci/2240131-pred-80-lety-se-narodil-taticek-i-prezident-osvoboditel-tgm
  //   https://english.radio.cz/node/8601235
  //   https://en.wikipedia.org/wiki/Charlotte_Garrigue_Masaryk
  {"id": "masaryk", "topic": "history", "q": "Tomáš G. Masaryk added the surname Garrigue to his own. It belonged to his ___.", "a": "wife", "lie": "mother", "why": "Charlotte Garrigue was American; he took her name when they married in New York in 1878.", "src": "Česká televize"},
  // wichterle, checked 2026-10-31
  //   https://www.kudyznudy.cz/ceska-nej/vedecke/kontaktni-cocky
  //   https://blog.google/intl/cs-CZ/produkty-sluzby/objevujte-ziskavejte-odpovedi/2021_10_google-dnes-v-rade-zemi-pripomina/
  //   https://en.wikipedia.org/wiki/Otto_Wichterle
  {"id": "wichterle", "topic": "history", "q": "At Christmas 1961 Otto Wichterle made the first soft contact lenses at home, on a machine built from a ___ construction kit.", "a": "Merkur", "lie": "Lego", "why": "A bicycle dynamo powered it. The original is now in the National Technical Museum in Prague.", "src": "CzechTourism (Kudy z nudy)"},
  // purkyne, checked 2026-10-31
  //   https://www.nlm.nih.gov/exhibition/visibleproofs/galleries/exhibition/views_image_6.html
  //   https://en.wikipedia.org/wiki/Jan_Evangelista_Purkyn%C4%9B
  {"id": "purkyne", "topic": "history", "q": "In 1823 Jan Evangelista Purkyně was one of the first to scientifically classify ___.", "a": "fingerprints", "lie": "blood types", "why": "He described nine pattern types. Using them to identify people came decades later.", "src": "U.S. National Library of Medicine"},
  // jansky, checked 2026-10-31
  //   https://english.radio.cz/node/8588826
  //   https://www.visitczechia.com/en-us/news/2023/03/n-jan-jansky-prominent-czech-physician
  //   https://en.wikipedia.org/wiki/Jan_Jansk%C3%BD
  {"id": "jansky", "topic": "history", "q": "In 1907 the Czech doctor Jan Janský sorted human blood into ___ groups.", "a": "four", "lie": "six", "why": "Landsteiner had described three in 1901. Janský was first to classify all four: today's O, A, B and AB.", "src": "Radio Prague International"},
  // pravcicka, checked 2026-10-31
  //   https://www.novinky.cz/cestovani/tipy-na-vylety/clanek/nejvetsi-piskovcovou-branu-v-evrope-strezi-skalni-hrady-bez-posadky-40296094
  //   https://en.wikipedia.org/wiki/Pravčická_brána
  //   https://cs.wikipedia.org/wiki/Pravčická_brána
  {"id": "pravcicka", "topic": "places", "q": "The largest natural sandstone arch in Europe is in Czechia. It's called ___.", "a": "Pravčická brána", "lie": "Tiská brána", "why": "The arch spans over 26 metres. Walking on it has been banned since 1982 because of cracks.", "src": "Novinky.cz"},
  // hranice, checked 2026-10-31
  //   https://www.novinky.cz/clanek/veda-skoly-speleologove-namerili-novy-svetovy-rekord-hranicke-propasti-40404594
  //   https://en.wikipedia.org/wiki/Hranice_Abyss
  {"id": "hranice", "topic": "places", "q": "The world's deepest known flooded cave is near the Czech town of ___.", "a": "Hranice", "lie": "Blansko", "why": "In 2022 a robot reached 450 metres below the water without finding the bottom. It may go down about a kilometre.", "src": "Novinky.cz (ČTK)"},
  // charlesbridge, checked 2026-10-31
  //   https://visitczechia.com/en-us/news/2024/07/n-charles-bridge-660-years
  //   https://www.praha1.cz/karluv-most-667-let/
  //   https://en.wikipedia.org/wiki/Charles_Bridge
  {"id": "charlesbridge", "topic": "places", "q": "Legend says the Charles Bridge foundation stone was laid on 9 July 1357 at 5:31, so 1357 9 7 5 31 forms a ___.", "a": "palindrome", "lie": "Charles's birthday", "why": "135797531 reads the same both ways. Court astrologers supposedly picked the moment.", "src": "VisitCzechia (CzechTourism)"},
]});
