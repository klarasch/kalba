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
  // crown-keys, checked 2026-10-31
  //   https://english.radio.cz/node/8828817
  //   https://en.wikipedia.org/wiki/Bohemian_Crown_Jewels
  {"id": "crown-keys", "topic": "history", "q": "The chamber holding the Bohemian crown jewels in St. Vitus Cathedral can only be opened when several officials (president, prime minister, archbishop...) unlock it together. Number of key holders: ___.", "a": "seven", "lie": "three", "why": "The seven-key tradition dates from 1791, and the holders represent state, city and church.", "src": "Český rozhlas"},
  // zizka-blind, checked 2026-10-31
  //   https://www.worldhistory.org/Jan_Zizka/
  //   https://en.wikipedia.org/wiki/Jan_%C5%BDi%C5%BEka
  {"id": "zizka-blind", "topic": "history", "q": "The Hussite general Jan Žižka stayed undefeated even in his last years, when he was completely ___.", "a": "blind", "lie": "deaf", "why": "He lost one eye in his youth and the other at the siege of Rabí in 1421, yet kept commanding.", "src": "World History Encyclopedia"},
  // tycho-nose, checked 2026-10-31
  //   https://muzeum3000.nm.cz/national-museum-news/research-of-the-tomb-and-remains-of-tycho-brahe
  //   https://en.wikipedia.org/wiki/Tycho_Brahe
  {"id": "tycho-nose", "topic": "history", "q": "Astronomer Tycho Brahe lost part of his nose in a duel and wore a prosthesis. Analysis of his remains, exhumed in 2010, showed it was not gold or silver but this metal: ___.", "a": "brass", "lie": "lead", "why": "The nose bone held copper and zinc in the ratio typical of brass. Tycho died in Prague in 1601.", "src": "Národní muzeum"},
  // remek, checked 2026-10-31
  //   https://english.radio.cz/node/8598510
  //   https://en.wikipedia.org/wiki/Vladim%C3%ADr_Remek
  //   https://spacefacts.de/mission/english/soyuz-28.htm
  {"id": "remek", "topic": "history", "q": "The first person in space who was neither American nor Soviet was a Czechoslovak in 1978: ___.", "a": "Vladimír Remek", "lie": "Jiří Grygar", "why": "He flew on Soyuz 28 in March 1978 under the Interkosmos programme and spent almost eight days in space.", "src": "Český rozhlas"},
  // suttner, checked 2026-10-31
  //   https://www.nobelprize.org/prizes/peace/1905/suttner/facts/
  //   https://en.wikipedia.org/wiki/Bertha_von_Suttner
  {"id": "suttner", "topic": "history", "q": "The first woman to win the Nobel Peace Prize (1905), Bertha von Suttner, was born in this city: ___.", "a": "Prague", "lie": "Vienna", "why": "She was born in 1843 in Prague as Countess Kinsky.", "src": "Nobelprize.org"},
  // mucha-stamps, checked 2026-10-31
  //   https://muchafoundation.org/gallery/browse-works/object/263
  //   https://en.wikipedia.org/wiki/Alfons_Mucha
  {"id": "mucha-stamps", "topic": "history", "q": "After Czechoslovakia was founded in 1918, painter Alfons Mucha designed its banknotes and its first ___.", "a": "postage stamps", "lie": "flag", "why": "The first banknote he designed came out in 1919, and he even designed police uniforms for the new state.", "src": "Mucha Foundation"},
  // arcimboldo, checked 2026-10-31
  //   https://skoklostersslott.se/en/paintings/giuseppe-arcimboldo
  //   https://en.wikipedia.org/wiki/Vertumnus_%28Arcimboldo%29
  {"id": "arcimboldo", "topic": "history", "q": "The Italian painter Arcimboldo portrayed Emperor Rudolf II as the Roman god Vertumnus. His face and body are made of: ___.", "a": "fruit and vegetables", "lie": "books", "why": "Painted around 1590 for the Prague court, it now hangs in Skokloster Castle in Sweden.", "src": "Skokloster Castle"},
  // charles-name, checked 2026-10-31
  //   https://english.radio.cz/node/8226516
  //   https://en.wikipedia.org/wiki/Charles_IV,_Holy_Roman_Emperor
  {"id": "charles-name", "topic": "history", "q": "Emperor Charles IV was born with a different name and took Charles only at his confirmation in France. His birth name: ___.", "a": "Wenceslas", "lie": "John", "why": "He chose Charles in honour of King Charles IV of France, at whose Paris court he grew up.", "src": "Český rozhlas"},
  // divis-drought, checked 2026-10-31
  //   https://english.radio.cz/node/8819683
  //   https://en.wikipedia.org/wiki/Prokop_Divi%C5%A1
  {"id": "divis-drought", "topic": "history", "q": "In 1754 the priest Prokop Diviš built one of the first grounded lightning rods in Přímětice. Villagers destroyed it in 1759 because they blamed it for causing: ___.", "a": "a drought", "lie": "a flood", "why": "Diviš called it a weather machine and never rebuilt it after it was destroyed.", "src": "Český rozhlas"},
  // zatopek, checked 2026-10-31
  //   https://www.olympedia.org/results/58937
  //   https://en.wikipedia.org/wiki/Emil_Z%C3%A1topek
  {"id": "zatopek", "topic": "history", "q": "At the 1952 Helsinki Olympics Emil Zátopek won the 5000 m, the 10,000 m and then an event he had never run before: the ___.", "a": "marathon", "lie": "50 km walk", "why": "He decided to enter at the last minute and won with an Olympic record.", "src": "Olympedia"},
  // smetana-deaf, checked 2026-10-31
  //   https://english.radio.cz/node/8083862
  //   https://en.wikipedia.org/wiki/Bed%C5%99ich_Smetana
  {"id": "smetana-deaf", "topic": "history", "q": "Composer Bedřich Smetana wrote most of Má vlast without hearing it, because from 1874 he was completely ___.", "a": "deaf", "lie": "blind", "why": "He went deaf after a long illness and finished the cycle at the end of the 1870s.", "src": "Český rozhlas"},
  // anthem-fidlovacka, checked 2026-10-31
  //   https://eurozpravy.cz/magazin/ceska-hymna-poprve-zaznela-pred-190-lety-v-tylove-fidlovacce.txkavdj1
  //   https://en.wikipedia.org/wiki/Kde_domov_m%C5%AFj
  {"id": "anthem-fidlovacka", "topic": "history", "q": "The song Kde domov můj, later the Czech anthem, was first heard in 1834 in a Tyl play called ___.", "a": "Fidlovačka", "lie": "Strakonický dudák", "why": "The music is by František Škroup, and it became an anthem only after 1918.", "src": "Eurozprávy"},
  // legion-railway, checked 2026-10-31
  //   https://english.radio.cz/node/8146390
  //   https://en.wikipedia.org/wiki/Czechoslovak_Legion
  //   https://mentalfloss.com/article/545120/wwi-centennial-czech-legion-revolts-sedition-act-passed
  {"id": "legion-railway", "topic": "history", "q": "In 1918 the Czechoslovak Legion in Russia took control of the whole famous railway: the ___.", "a": "Trans-Siberian Railway", "lie": "Baikal-Amur Mainline", "why": "About 70,000 legionaries went home via Vladivostok, living on trains for long stretches.", "src": "Český rozhlas"},
  // wenceslas-duke, checked 2026-10-31
  //   https://www.classicfm.com/discover-music/real-story-good-king-wenceslas-carol/
  //   https://en.wikipedia.org/wiki/Wenceslaus_I,_Duke_of_Bohemia
  {"id": "wenceslas-duke", "topic": "history", "q": "Saint Wenceslas of the English Christmas carol Good King Wenceslas never was a king in his lifetime. He was a: ___.", "a": "duke", "lie": "count", "why": "According to tradition Emperor Otto I granted him the royal title only after his death.", "src": "Classic FM"},
  // molasses, checked 2026-10-31
  //   https://www.history.com/news/the-great-molasses-flood-of-1919
  //   https://en.wikipedia.org/wiki/Great_Molasses_Flood
  {"id": "molasses", "topic": "history", "q": "In January 1919 a huge tank burst in Boston and sent about 2.3 million gallons of ___ into the streets.", "a": "molasses", "lie": "beer", "why": "The wave killed 21 people and injured about 150, and the cleanup took weeks.", "src": "History.com"},
  // pig-war, checked 2026-10-31
  //   https://www.nps.gov/sajh/historyculture/the-pig-war.htm
  //   https://en.wikipedia.org/wiki/Pig_War_%281859%29
  {"id": "pig-war", "topic": "history", "q": "In 1859 the USA and Britain nearly went to war over San Juan Island, and the only casualty was a ___.", "a": "pig", "lie": "horse", "why": "An American shot a Hudson's Bay Company pig rooting in his garden. The German emperor settled the border dispute in 1872.", "src": "National Park Service"},
  // dancing-plague, checked 2026-10-31
  //   https://publicdomainreview.org/essay/the-dancing-plague-of-1518/
  //   https://en.wikipedia.org/wiki/Dancing_plague_of_1518
  {"id": "dancing-plague", "topic": "history", "q": "In summer 1518 a strange epidemic of uncontrollable dancing broke out in the streets of ___, drawing in dozens to hundreds of people.", "a": "Strasbourg", "lie": "Nuremberg", "why": "It started with one woman, Frau Troffea, and its cause is still debated.", "src": "Public Domain Review"},
  // newton-mint, checked 2026-10-31
  //   https://www.numismaticnews.net/world-coins/genius-newton-chased-counterfeiters
  //   https://en.wikipedia.org/wiki/Later_life_of_Isaac_Newton
  {"id": "newton-mint", "topic": "history", "q": "As Warden of the Royal Mint, Isaac Newton also worked as a detective hunting: ___.", "a": "coin counterfeiters", "lie": "tea smugglers", "why": "He questioned witnesses himself, went undercover and successfully prosecuted 28 coiners, a crime punishable by death.", "src": "Numismatic News"},
  // zanzibar-war, checked 2026-10-31
  //   https://www.historyhit.com/the-anglo-zanzibar-war-the-shortest-war-in-history-which-lasted-38-minutes/
  //   https://en.wikipedia.org/wiki/Anglo-Zanzibar_War
  {"id": "zanzibar-war", "topic": "history", "q": "The Anglo-Zanzibar War of 1896 is considered the shortest war in history. It lasted only about ___ minutes.", "a": "40", "lie": "120", "why": "British ships shelled the sultan's palace, and estimates of its length range from 38 to 45 minutes.", "src": "History Hit"},
  // pancavsky-vodopad, checked 2026-10-31
  //   https://www.kudyznudy.cz/aktivity/pancavsky-vodopad-v-krkonosich
  //   https://cs.wikipedia.org/wiki/Pančavský_vodopád
  {"id": "pancavsky-vodopad", "topic": "nature", "q": "The highest waterfall in Czechia, in the Krkonoše mountains, is about ___ metres tall.", "a": "148", "lie": "63", "why": "The Pančava Waterfall drops in several steps from the Pančava meadow into the Elbe Valley.", "src": "Kudy z nudy (CzechTourism)"},
  // hrensko-nejnize, checked 2026-10-31
  //   https://mzv.gov.cz/bratislava/cz/cr_a_eu/zakladni_informace_o_cr/index.html
  //   https://cs.wikipedia.org/wiki/Hřensko
  {"id": "hrensko-nejnize", "topic": "nature", "q": "The lowest point of Czechia, 115 m above sea level, where the Elbe leaves the country, is by the village of ___.", "a": "Hřensko", "lie": "Litoměřice", "why": "The Elbe then flows on through Germany and finally into the North Sea.", "src": "Ministerstvo zahraničních věcí ČR"},
  // zofinsky-prales, checked 2026-10-31
  //   https://ct24.ceskatelevize.cz/veda/2456605-zofinsky-prales-pomuze-nasa-popsat-evropske-lesy-je-dokonale-zmereny
  //   https://www.kudyznudy.cz/aktivity/narodni-prirodni-rezervace-zofinsky-prales
  {"id": "zofinsky-prales", "topic": "nature", "q": "In ___ Count Buquoy declared protection for the Žofín virgin forest in South Bohemia, one of the oldest nature reserves in Europe.", "a": "1838", "lie": "1892", "why": "The owner of the Nové Hrady estate declared the protection on 28 August 1838.", "src": "Česká televize (ČT24)"},
  // rozmberk-rybnik, checked 2026-10-31
  //   https://www.kudyznudy.cz/ceska-nej/zemepisne/rybnik-rozmberk
  //   https://eurozpravy.cz/wiki/rozmberk
  {"id": "rozmberk-rybnik", "topic": "nature", "q": "The largest pond in Czechia, with a water surface of about 490 hectares, is called ___.", "a": "Rožmberk", "lie": "Svět", "why": "Jakub Krčín built it near Třeboň in 1584 to 1590, mainly for fish farming and flood protection.", "src": "Kudy z nudy (CzechTourism)"},
  // douglaska-vlastibor, checked 2026-10-31
  //   https://www.ziva.avcr.cz/files/ziva/pdf/lovci-stromovych-rekordu.pdf
  //   https://deti.vls.cz/wp-content/uploads/2025/07/stromovi-rekordmani-i.pdf
  {"id": "douglaska-vlastibor", "topic": "nature", "q": "The tallest known tree in Czechia, near Vlastiboř, measured almost 67 m in 2024. It is a ___.", "a": "Douglas fir", "lie": "Norway spruce", "why": "Tree climbers measure it with a tape from the top: 64 m in 2014, 66.72 m in 2024.", "src": "Živa (AV ČR)"},
  // litvinovice-mraz, checked 2026-10-31
  //   https://english.radio.cz/node/8807812
  //   https://ct24.ceskatelevize.cz/archiv/1421464-minus-422-stupne-celsia-dosud-neprekonana-nejnizsi-teplota-v-cr
  {"id": "litvinovice-mraz", "topic": "nature", "q": "The lowest temperature ever measured in Czechia (11 February 1929 at Litvínovice near České Budějovice) was minus ___ degrees Celsius.", "a": "42.2", "lie": "37.8", "why": "On the same day Jablunkov in Moravia recorded minus 41.5 degrees.", "src": "Český rozhlas (Radio Prague)"},
  // vltaviny-meteorit, checked 2026-10-31
  //   https://www.ckrumlov.info/cz/pamatky-a-kultura-66-muzeum-vltavinu/
  //   https://cs.wikipedia.org/wiki/Vltav%C3%ADn
  {"id": "vltaviny-meteorit", "topic": "nature", "q": "The green glass called moldavite, found in South Bohemia, was created about 15 million years ago by a meteorite impact in what is now the German state of ___.", "a": "Bavaria", "lie": "Saxony", "why": "The blast threw molten rock up to about 400 km away, and moldavites are Europe's only tektites.", "src": "Muzeum vltavínů Český Krumlov"},
  // sullivan-blesk, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/most-lightning-strikes-survived
  //   https://en.wikipedia.org/wiki/Roy_Sullivan
  {"id": "sullivan-blesk", "topic": "nature", "q": "Park ranger Roy Sullivan survived being struck by lightning ___ times.", "a": "seven", "lie": "three", "why": "Guinness World Records lists him as the only person struck by lightning seven times.", "src": "Guinness World Records"},
  // rorys-200-dni, checked 2026-10-31
  //   https://www.nature.com/articles/ncomms3554
  //   https://www.nationalgeographic.com/animals/article/swift-bird-10-month-migration
  {"id": "rorys-200-dni", "topic": "nature", "q": "According to a 2013 Swiss study, the alpine swift can stay in the air without landing for about ___ days.", "a": "200", "lie": "40", "why": "The birds carried tiny movement loggers, which suggest they did not land during their whole African winter.", "src": "Nature Communications (2013)"},
  // breheus-rekord, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/news/2023/1/the-record-breaking-bird-that-flew-from-alaska-to-australia-731576
  //   https://www.npr.org/2023/01/05/1147052902/migrating-bird-a-bar-tailed-godwit-flies-from-alaska-to-australia-without-stoppi
  {"id": "breheus-rekord", "topic": "nature", "q": "In 2022 a five-month-old bar-tailed godwit flew non-stop from Alaska to Tasmania in a record ___ days.", "a": "11", "lie": "5", "why": "It covered about 13,560 km without food or rest.", "src": "Guinness World Records"},
  // lenochod-tyden, checked 2026-10-31
  //   https://www.scientificamerican.com/article/why-sloths-leave-the-trees-to-defecate
  //   https://en.wikipedia.org/wiki/Sloth
  {"id": "lenochod-tyden", "topic": "nature", "q": "Three-toed sloths climb down to the ground to poop only about once a ___.", "a": "week", "lie": "month", "why": "On the ground they are easy prey and it costs them energy; scientists still argue about why they do it.", "src": "Scientific American"},
  // pando-osika, checked 2026-10-31
  //   https://americanforests.org/climate/the-heaviest-organism-on-the-planet
  //   https://www.sciencealert.com/the-worlds-largest-organism-is-slowly-being-eaten
  {"id": "pando-osika", "topic": "nature", "q": "Pando, a grove of aspens in Utah, is actually a single organism with an estimated ___ trunks.", "a": "47,000", "lie": "800", "why": "All the trunks are genetically identical and grow from one shared root network.", "src": "American Forests"},
  // rybak-70000, checked 2026-10-31
  //   https://www.nationalgeographic.com/animals/article/100111-worlds-longest-migration-arctic-tern-bird
  //   https://en.wikipedia.org/wiki/Arctic_tern
  {"id": "rybak-70000", "topic": "nature", "q": "According to a 2010 study, on its yearly round trip between the Arctic and the Antarctic the Arctic tern flies roughly ___ kilometres.", "a": "70,000", "lie": "20,000", "why": "It is among the longest known animal migrations, and later studies tracked some birds even further.", "src": "National Geographic"},
  // zebra-ovadi, checked 2026-10-31
  //   https://bristol.ac.uk/news/2019/february/zebra-stripes.html
  //   https://www.sciencedaily.com/releases/2019/02/190220145032.htm
  {"id": "zebra-ovadi", "topic": "nature", "q": "A 2019 study found that zebra stripes mainly protect against one blood-sucking insect, which struggles to land on them: the ___.", "a": "horsefly", "lie": "mosquito", "why": "Horseflies fail to slow down near zebras and overshoot or bump into them, though the exact mechanism is still debated.", "src": "University of Bristol"},
  // vostok-mraz, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/66137-lowest-temperature-recorded-on-earth
  //   https://en.wikipedia.org/wiki/Lowest_temperature_recorded_on_Earth
  {"id": "vostok-mraz", "topic": "nature", "q": "The lowest air temperature ever directly measured on Earth (Vostok Station, Antarctica, 1983) was minus ___ degrees Celsius.", "a": "89.2", "lie": "74.6", "why": "It happened on 21 July 1983, in the middle of the Antarctic winter.", "src": "Guinness World Records"},
  // narval-zub, checked 2026-10-31
  //   https://smithsonianscience.org/2012/04/for-dentist-the-narwhals-smile-is-a-mystery-of-evolution/
  //   https://en.wikipedia.org/wiki/Narwhal
  {"id": "narval-zub", "topic": "nature", "q": "The long spiral \"horn\" of a narwhal is not a horn but a giant tooth, namely a ___.", "a": "canine", "lie": "incisor", "why": "Scientists confirmed it in 2012: the tusk grows from the upper jawbone, where mammals' canines originate.", "src": "Smithsonian"},
  // vaclavka-oregon, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/75043-heaviest-fungi
  //   https://en.wikipedia.org/wiki/Armillaria_ostoyae
  {"id": "vaclavka-oregon", "topic": "nature", "q": "The most massive fungus in the world, growing in the forests of Oregon, is a species known as the ___.", "a": "honey fungus", "lie": "puffball", "why": "One single individual is estimated to weigh 6,800 to 31,750 tonnes.", "src": "Guinness World Records"},
  // becherovka-english-bitter, checked 2026-10-31
  //   https://english.radio.cz/node/8120512
  //   https://english.radio.cz/node/8717307
  //   https://cs.wikipedia.org/wiki/Becherovka
  {"id": "becherovka-english-bitter", "topic": "food", "q": "When Becherovka first went on sale in Karlovy Vary in 1807, it had a different name: ___.", "a": "English Bitter", "lie": "Karlsbad Gold", "why": "Josef Becher reportedly got the recipe from an English doctor, Frobrig, and sold it as a stomach remedy.", "src": "Radio Prague International"},
  // tvaruzky-lostice, checked 2026-10-31
  //   https://english.radio.cz/node/8884125
  //   https://en.wikipedia.org/wiki/Olomouck%C3%A9_tvar%C5%AF%C5%BEky
  {"id": "tvaruzky-lostice", "topic": "food", "q": "Olomoucké tvarůžky are named after Olomouc, but since 1876 they have been made in a different town: ___.", "a": "Loštice", "lie": "Litovel", "why": "This pungent cheese, protected by the EU, is still made in Loštice, about 30 km north of Olomouc.", "src": "Český rozhlas (Radio Prague)"},
  // hawaiian-pizza-canada, checked 2026-10-31
  //   https://thecanadianencyclopedia.ca/en/article/sam-panopolous
  //   https://www.nbcnews.com/news/world/alleged-inventor-controversial-hawaiian-pizza-dies-canada-n770716
  {"id": "hawaiian-pizza-canada", "topic": "food", "q": "Hawaiian pizza was invented in 1962 by the Greek immigrant Sam Panopoulos. In which country? ___.", "a": "Canada", "lie": "Australia", "why": "Panopoulos first made it at the Satellite Restaurant in Chatham, Ontario.", "src": "The Canadian Encyclopedia"},
  // fanta-germany, checked 2026-10-31
  //   https://www.thelocal.de/20170523/fanta-how-the-nazi-era-drink-became-the-world-famous-brand
  //   https://en.wikipedia.org/wiki/Fanta
  {"id": "fanta-germany", "topic": "food", "q": "Fanta was created in 1940 as a replacement for Coca-Cola because, due to the war, syrup could no longer reach one country. Which one? ___.", "a": "Germany", "lie": "Sweden", "why": "Coca-Cola's local boss Max Keith made it from what he called \"leftovers of leftovers\".", "src": "The Local (Germany)"},
  // gros-michel-banana, checked 2026-10-31
  //   https://daily.jstor.org/the-beloved-bedeviled-banana
  //   https://blog.hmns.org/2018/08/the-bananapocolypse-its-real-its-scary-its-real-scary/
  {"id": "gros-michel-banana", "topic": "food", "q": "The bananas Americans ate until about 1960 were not today's Cavendish. Panama disease wiped them out. They were called ___.", "a": "Gros Michel", "lie": "Santa Clara", "why": "It was bigger and reportedly tastier, but all plants were clones, so the fungus wiped out whole plantations.", "src": "JSTOR Daily"},
  // vanilla-albius, checked 2026-10-31
  //   https://www.nationalgeographic.com/science/article/the-little-boy-who-shouldve-vanished-but-didnt
  //   https://en.wikipedia.org/wiki/Edmond_Albius
  {"id": "vanilla-albius", "topic": "food", "q": "Vanilla is still pollinated by hand using a method invented in 1841 on Réunion by an enslaved boy. How old was he? ___.", "a": "12", "lie": "17", "why": "Edmond Albius used a thin stick and his thumb. Many doubted a child with no schooling could have done it.", "src": "National Geographic"},
  // haagen-dazs-bronx, checked 2026-10-31
  //   https://culinarylore.com/food-history:what-does-haagen-dazs-mean/
  //   https://www.6sqft.com/haagen-dazs-may-be-a-danish-name-but-the-ice-cream-was-founded-in-the-bronx/
  //   https://en.wikipedia.org/wiki/H%C3%A4agen-Dazs
  {"id": "haagen-dazs-bronx", "topic": "food", "q": "Häagen-Dazs sounds Scandinavian, but the name is made up and the brand started in 1960 in a New York borough: ___.", "a": "the Bronx", "lie": "Brooklyn", "why": "Founder Reuben Mattus wanted it to sound Danish, but the words mean nothing.", "src": "CulinaryLore"},
  // caesar-salad-mexico, checked 2026-10-31
  //   https://www.fox6now.com/news/caesar-salad-origins-100th-birthday
  //   https://en.wikipedia.org/wiki/Caesar_salad
  {"id": "caesar-salad-mexico", "topic": "food", "q": "Caesar salad is not named after the Roman emperor but after chef Caesar Cardini, who is said to have created it in 1924 in: ___.", "a": "Mexico", "lie": "Italy", "why": "Cardini, an Italian immigrant, ran a restaurant in Tijuana, though accounts of the exact origin vary.", "src": "FOX TV Stations"},
  // nutella-ancestor, checked 2026-10-31
  //   https://ebsco.com/research-starters/history/nutella
  //   https://en.wikipedia.org/wiki/Nutella
  {"id": "nutella-ancestor", "topic": "food", "q": "The ancestor of Nutella, which baker Pietro Ferrero began selling in 1946, wasn't spread but sliced. It was sold as a solid ___.", "a": "block", "lie": "cake", "why": "Cocoa was scarce, so Ferrero stretched it with hazelnuts. A spreadable version came in 1951, the Nutella name in 1964.", "src": "EBSCO Research Starters"},
  // pineapple-rental, checked 2026-10-31
  //   https://cabinetmagazine.org/issues/23/beauman.php
  //   https://www.historic-uk.com/CultureUK/King-Pineapple/
  {"id": "pineapple-rental", "topic": "food", "q": "In the 18th century, pineapples were such costly status symbols that some confectioners offered them to party hosts ___.", "a": "for hire", "lie": "on credit", "why": "At a dinner the fruit was often not eaten but displayed on the table as proof of wealth.", "src": "Cabinet Magazine"},
  // quarantine, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/quarantine
  //   https://en.wiktionary.org/wiki/quarantine
  {"id": "quarantine", "topic": "language", "q": "The word quarantine comes from Italian and originally meant isolating ships for ___ days.", "a": "40", "lie": "14", "why": "Ships suspected of carrying disease had to wait offshore before unloading people and cargo.", "src": "Merriam-Webster"},
  // avocado, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/avocado
  //   https://en.wikipedia.org/wiki/Avocado
  {"id": "avocado", "topic": "language", "q": "The word avocado comes from the Aztec (Nahuatl) word āhuacatl, which also meant ___.", "a": "testicle", "lie": "eye", "why": "The fruit came first, though; for the testicle it was apparently a euphemism.", "src": "Merriam-Webster"},
  // kangaroo, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/kangaroo
  //   https://en.wiktionary.org/wiki/kangaroo
  //   https://en.wikipedia.org/wiki/Kangaroo
  {"id": "kangaroo", "topic": "language", "q": "A popular but false myth says the word kangaroo means ___ in an Aboriginal language.", "a": "I don't know", "lie": "jumper", "why": "The myth is debunked: Guugu Yimithirr gangurru is simply the name of one kangaroo species.", "src": "Merriam-Webster"},
  // muscle, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/muscle
  //   https://en.wiktionary.org/wiki/muscle
  {"id": "muscle", "topic": "language", "q": "The word muscle comes from Latin musculus, literally a little ___.", "a": "mouse", "lie": "cat", "why": "To the Romans, a muscle moving under the skin looked like a little animal.", "src": "Merriam-Webster"},
  // pedigree, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pedigree
  //   https://en.wiktionary.org/wiki/pedigree
  {"id": "pedigree", "topic": "language", "q": "The English word pedigree comes from French pé de grue, literally the foot of a ___.", "a": "crane", "lie": "chicken", "why": "The branching lines of a family tree looked like a bird's foot.", "src": "Merriam-Webster"},
  // sarcophagus, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/sarcophagus
  //   https://en.wiktionary.org/wiki/sarcophagus
  {"id": "sarcophagus", "topic": "language", "q": "The word sarcophagus comes from a Greek phrase that literally means ___.", "a": "flesh-eating stone", "lie": "house of the dead", "why": "Pliny the Elder claimed a limestone near Troy dissolved corpses, so it was used for coffins.", "src": "Merriam-Webster"},
  // pandemonium, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pandemonium
  //   https://en.wiktionary.org/wiki/pandemonium
  {"id": "pandemonium", "topic": "language", "q": "The word pandemonium was invented by poet John Milton. In Paradise Lost it is the name of the capital of ___.", "a": "Hell", "lie": "Atlantis", "why": "Milton built it from pan (all) and daemonium (demon): the place of all demons.", "src": "Merriam-Webster"},
  // walnut, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/walnut
  //   https://en.wiktionary.org/wiki/walnut
  {"id": "walnut", "topic": "language", "q": "In Old English, walnut literally meant ___ nut.", "a": "foreign", "lie": "hard", "why": "Walnuts came to England from southern Europe; the native nut was the hazel.", "src": "Merriam-Webster"},
  // algorithm, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/algorithm
  //   https://en.wiktionary.org/wiki/algorithm
  {"id": "algorithm", "topic": "language", "q": "The word algorithm comes from the name of a 9th-century Persian mathematician called al-___.", "a": "Khwarizmi", "lie": "Khayyam", "why": "He lived around 825, and the Latinised form of his name became algorism, later algorithm.", "src": "Merriam-Webster"},
  // nerd, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/nerd
  //   https://en.wiktionary.org/wiki/nerd
  //   https://en.wikipedia.org/wiki/Nerd
  {"id": "nerd", "topic": "language", "q": "The word nerd first appeared in print in 1950 in a children's book by ___.", "a": "Dr. Seuss", "lie": "Roald Dahl", "why": "Seuss used it as the name of an imaginary creature in If I Ran the Zoo, not yet for a studious geek.", "src": "Merriam-Webster"},
  // googol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/googol
  //   https://en.wikipedia.org/wiki/Googol
  {"id": "googol", "topic": "language", "q": "The number googol (a 1 with 100 zeros), which inspired the name Google, was named by the nine-year-old ___ of mathematician Edward Kasner.", "a": "nephew", "lie": "son", "why": "The boy was Milton Sirotta, and Kasner popularised his word for 10 to the power of 100.", "src": "Merriam-Webster"},
  // ikea, checked 2026-10-31
  //   https://www.thelocal.se/20180128/five-things-to-know-about-ingvar-kamprad-and-ikea
  //   https://www.dictionary.com/e/acronyms/ikea/
  {"id": "ikea", "topic": "language", "q": "IKEA is an acronym: I and K are the founder's initials, E is the farm Elmtaryd and A is the village of ___.", "a": "Agunnaryd", "lie": "Almhult", "why": "Ingvar Kamprad grew up on the farm Elmtaryd near the village of Agunnaryd in Smaland.", "src": "The Local (Sweden)"},
  // haribo, checked 2026-10-31
  //   https://www.haribo.com/en-us/preview/71222
  //   https://en.wikipedia.org/wiki/Haribo
  {"id": "haribo", "topic": "language", "q": "The name HARIBO is short for the founder's name and city: Hans Riegel ___.", "a": "Bonn", "lie": "Berlin", "why": "Hans Riegel founded the company in 1920 in a home kitchen in Bonn.", "src": "HARIBO"},
  // vampire, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/vampire
  //   https://en.wiktionary.org/wiki/vampire
  {"id": "vampire", "topic": "language", "q": "The word vampire reached English via French and German from Serbian vampir. Its first known use in English was in ___.", "a": "1732", "lie": "1897", "why": "Stoker's Dracula came out only in 1897, over 160 years after the word appeared.", "src": "Merriam-Webster"},
  // vodka, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/vodka
  //   https://en.wiktionary.org/wiki/vodka
  {"id": "vodka", "topic": "language", "q": "The word vodka is a Russian diminutive of voda, so it literally means ___.", "a": "little water", "lie": "fire water", "why": "The ending -ka forms diminutives, like in Czech ruka and ručka.", "src": "Merriam-Webster"},
  // zero, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/cipher
  //   https://www.merriam-webster.com/dictionary/zero
  //   https://en.wiktionary.org/wiki/cipher
  {"id": "zero", "topic": "language", "q": "The English words zero and cipher both come from Arabic ṣifr, which meant ___.", "a": "empty", "lie": "secret", "why": "Cipher first meant zero and only later came to mean secret writing.", "src": "Merriam-Webster"},
  // bohemian, checked 2026-10-31
  //   https://worldwidewords.org/qa-boh1.html
  //   https://en.wiktionary.org/wiki/Bohemian
  {"id": "bohemian", "topic": "language", "q": "The French word bohémien, the root of bohemian, did not originally mean artists. The French used it for ___, thinking they came from Bohemia.", "a": "Romani people", "lie": "Hussites", "why": "The free-spirited artist sense arose only in the 19th century; Thackeray brought it into English in 1848.", "src": "World Wide Words"},
  // ahoj, checked 2026-10-31
  //   https://expats.cz/czech-news/article/the-origins-of-ahoj-and-nazar
  //   https://cs.wikipedia.org/wiki/Ahoj
  {"id": "ahoj", "topic": "language", "q": "The Czech greeting ahoj comes from an English call originally used by ___.", "a": "sailors", "lie": "soldiers", "why": "It entered Czech in the early 20th century, mainly through tramps (hikers) and canoeists.", "src": "Expats.cz (ÚJČ)"},
  // vltava, checked 2026-10-31
  //   https://www.ziva.avcr.cz/files/ziva/pdf/vltava-staly-proud-inspirace.pdf
  //   https://cs.wikipedia.org/wiki/Vltava
  {"id": "vltava", "topic": "language", "q": "The name of the Vltava river probably comes from Germanic wilth-ahwa, meaning wild ___.", "a": "water", "lie": "beast", "why": "The German name Moldau comes from the same root but developed differently.", "src": "Živa (AV ČR)"},
  // kafka, checked 2026-10-31
  //   https://www.jewishmuseum.cz/e-shop/upominkove-predmety/t-shirt-two-kafkas-size-l/
  //   https://en.wiktionary.org/wiki/Kafka
  {"id": "kafka", "topic": "language", "q": "The surname Kafka comes from the Czech name of this black bird: ___.", "a": "jackdaw", "lie": "blackbird", "why": "Franz Kafka's father Hermann had a jackdaw painted on the sign of his shop in Prague.", "src": "Židovské muzeum v Praze"},
  // prebuz-smallest-town, checked 2026-10-31
  //   https://www.kudyznudy.cz/kam-pojedete/oblasti/krusne-hory/prebuz
  //   https://cs.wikipedia.org/wiki/Přebuz
  {"id": "prebuz-smallest-town", "topic": "places", "q": "The smallest town in Czechia, home to only about 70 people (2025), is called ___.", "a": "Přebuz", "lie": "Zubrnice", "why": "It lies in the Ore Mountains, in Sokolov District, 886 metres above sea level.", "src": "Kudy z nudy"},
  // hamburg-czech-port, checked 2026-10-31
  //   https://english.radio.cz/node/8240796
  //   https://www.e15.cz/byznys/doprava-a-logistika/cesko-obnovuje-pristup-k-mori-chysta-smlouvu-pro-nove-uzemi-v-hamburku-1389654
  {"id": "hamburg-czech-port", "topic": "places", "q": "In 1929 Czechoslovakia took a 99-year lease on a piece of port land in the German city of ___.", "a": "Hamburg", "lie": "Bremen", "why": "The right came from the Treaty of Versailles. One leased basin is called Moldauhafen, the Vltava Harbour.", "src": "Radio Prague International"},
  // brno-clock-marble, checked 2026-10-31
  //   https://english.radio.cz/node/8546429
  //   https://en.wikipedia.org/wiki/Brno_astronomical_clock
  {"id": "brno-clock-marble", "topic": "places", "q": "Every day at exactly 11:00, Brno's astronomical clock releases a ___ that visitors can catch and take home.", "a": "glass marble", "lie": "bronze coin", "why": "It recalls 1645: legend says Brno held off the Swedes because the bell rang noon at 11 instead.", "src": "Radio Prague International"},
  // france-time-zones, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/584626-country-with-the-most-time-zones
  //   https://www.thelocal.fr/20220325/reader-question-how-does-france-have-12-different-time-zones
  {"id": "france-time-zones", "topic": "places", "q": "Thanks to its overseas territories, the country with the most time zones in the world is ___.", "a": "France", "lie": "Russia", "why": "Mainland France has just one zone; in total it has 12 (13 for part of the year, per Guinness).", "src": "Guinness World Records"},
  // maldives-lowest-peak, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/flattest-country/
  //   https://en.wikipedia.org/wiki/Maldives
  {"id": "maldives-lowest-peak", "topic": "places", "q": "The country whose highest natural point is only about 2.4 metres above sea level is ___.", "a": "Maldives", "lie": "Netherlands", "why": "The average ground level is around 1.5 metres; sources differ slightly on the exact highest point.", "src": "Guinness World Records"},
  // prague-castle-guinness, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/69343-largest-ancient-castle
  //   https://en.wikipedia.org/wiki/Prague_Castle
  {"id": "prague-castle-guinness", "topic": "places", "q": "Guinness World Records names this Czech castle the largest ancient castle in the world: ___.", "a": "Prague Castle", "lie": "Český Krumlov Castle", "why": "It is about 570 metres long and covers more than 7 hectares.", "src": "Guinness World Records"},
  // hluboka-windsor, checked 2026-10-31
  //   https://www.zamek-hluboka.cz/en/about/history
  //   https://en.wikipedia.org/wiki/Hluboká_nad_Vltavou_Castle
  {"id": "hluboka-windsor", "topic": "places", "q": "In the 19th century, Hluboká Castle was rebuilt to resemble this famous British residence: ___.", "a": "Windsor Castle", "lie": "Buckingham Palace", "why": "Prince Jan Adolf II of Schwarzenberg ordered the neo-Gothic rebuild after a trip to England.", "src": "Zámek Hluboká (official site)"},
  // brno-ossuary-second, checked 2026-10-31
  //   https://english.radio.cz/node/8561939
  //   https://en.wikipedia.org/wiki/Brno_Ossuary
  {"id": "brno-ossuary-second", "topic": "places", "q": "An ossuary that archaeologists call the second largest in Europe, after the Paris catacombs, lies in this Czech city: ___.", "a": "Brno", "lie": "Olomouc", "why": "Under St James church lie over 50,000 people. Found in 2001, open to the public since 2012.", "src": "Radio Prague International"},
  // jested-hyperboloid, checked 2026-10-31
  //   https://english.radio.cz/node/8148809
  //   https://www.archiweb.cz/en/b/televizni-vysilac-a-horsky-hotel-jested
  {"id": "jested-hyperboloid", "topic": "places", "q": "The Ještěd hotel and transmitter has the shape of a geometric solid called a rotating ___.", "a": "hyperboloid", "lie": "ellipsoid", "why": "Architect Karel Hubáček won the Perret Prize for it in 1969; it was voted Building of the Century.", "src": "Radio Prague International"},
  // point-nemo-astronauts, checked 2026-10-31
  //   https://www.skyatnightmagazine.com/earth-from-space/point-nemo
  //   https://en.wikipedia.org/wiki/Point_Nemo
  {"id": "point-nemo-astronauts", "topic": "places", "q": "The people closest to Point Nemo, the spot farthest from any land, are sometimes these: ___.", "a": "astronauts on the ISS", "lie": "polar researchers", "why": "The nearest land is about 2,700 km away, while the ISS orbits at about 400 km.", "src": "BBC Sky at Night Magazine"},
  // lednice-minaret, checked 2026-10-31
  //   https://www.zamek-lednice.com/en/visitors-information/tours/781-minarett
  //   https://www.kudyznudy.cz/aktivity/minaret-lednice
  {"id": "lednice-minaret", "topic": "places", "q": "In the park at Lednice Castle stands an almost 60-metre lookout tower from around 1800, shaped like a ___.", "a": "minaret", "lie": "lighthouse", "why": "Designed by Josef Hardtmuth, it is among the tallest of its kind outside the Islamic world.", "src": "Zámek Lednice (NPÚ)"},
  // saturn-float, checked 2026-10-31
  //   https://science.nasa.gov/saturn/facts/
  //   https://en.wikipedia.org/wiki/Saturn
  {"id": "saturn-float", "topic": "science", "q": "The only planet in the solar system whose average density is lower than water is ___.", "a": "Saturn", "lie": "Jupiter", "why": "If a big enough bathtub existed, Saturn would float. Its average density is about 0.69 g/cm3.", "src": "NASA"},
  // holy-hiv, checked 2026-10-31
  //   https://english.radio.cz/node/8187005
  //   https://ct24.ceskatelevize.cz/veda/3400466-pred-20-lety-se-cesi-dostali-k-leku-proti-aids-zaklad-polozil-vedec-antonin-holy
  {"id": "holy-hiv", "topic": "science", "q": "One of the most widely used HIV drugs, developed with the help of Czech chemist Antonín Holý, is called ___.", "a": "tenofovir", "lie": "zidovudine", "why": "Holý's team at the Czech Academy of Sciences first synthesised it in 1984.", "src": "Radio Prague International"},
  // jachymov-radium, checked 2026-10-31
  //   https://orau.org/health-physics-museum/articles/jachymov-cradle-of-the-atomic-age.html
  //   https://en.wikipedia.org/wiki/Jáchymov
  {"id": "jachymov-radium", "topic": "science", "q": "Marie Curie isolated radium from uranium ore residues that came from this Czech town: ___.", "a": "Jáchymov", "lie": "Příbram", "why": "The Austrian government sent the Curies waste from the local uranium pigment works.", "src": "ORAU Health Physics Museum"},
  // heyrovsky-nobel, checked 2026-10-31
  //   https://www.nobelprize.org/prizes/chemistry/1959/heyrovsky/facts/
  //   https://en.wikipedia.org/wiki/Jaroslav_Heyrovsk%C3%BD
  {"id": "heyrovsky-nobel", "topic": "science", "q": "Czech chemist Jaroslav Heyrovský won the 1959 Nobel Prize for discovering an analytical method called ___.", "a": "polarography", "lie": "chromatography", "why": "The method uses a dropping mercury electrode and was developed in 1922.", "src": "Nobel Prize"},
  // cori-nobel, checked 2026-10-31
  //   https://www.nobelprize.org/prizes/medicine/1947/cori-gt/facts/
  //   https://en.wikipedia.org/wiki/Gerty_Cori
  {"id": "cori-nobel", "topic": "science", "q": "Prague-born Gerty Cori became in 1947 the first woman to win a Nobel Prize in the field of ___.", "a": "physiology or medicine", "lie": "chemistry", "why": "She won for the course of glycogen conversion in the body. Marie Curie was the first woman Nobel laureate overall.", "src": "Nobel Prize"},
  // pitch-drop, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/longest-running-laboratory-experiment
  //   https://en.wikipedia.org/wiki/Pitch_drop_experiment
  {"id": "pitch-drop", "topic": "science", "q": "Since 1927 a university in Brisbane, Australia, has been watching this substance drip very slowly from a funnel: ___.", "a": "pitch", "lie": "honey", "why": "One drop takes about a decade to fall. Guinness lists it as the longest-running laboratory experiment.", "src": "Guinness World Records"},
  // coffee-webcam, checked 2026-10-31
  //   https://www.cl.cam.ac.uk/coffee/qsf/coffee.html
  //   https://www.cai.cam.ac.uk/news/caian-coffee-pot-and-webcam-awardwinning-combination
  //   https://en.wikipedia.org/wiki/Trojan_Room_coffee_pot
  {"id": "coffee-webcam", "topic": "science", "q": "The world's first webcam, set up at Cambridge University in 1991, watched a ___.", "a": "coffee pot", "lie": "fish tank", "why": "The scientists were tired of climbing stairs to an empty pot. It went onto the web in 1993.", "src": "University of Cambridge"},
  // moth-bug, checked 2026-10-31
  //   https://www.computinghistory.org.uk/det/5927/First-computer-bug-is-found/
  //   https://en.wikipedia.org/wiki/Software_bug
  {"id": "moth-bug", "topic": "science", "q": "In 1947 operators found an insect stuck in the Harvard Mark II computer and taped it into the log as the \"first actual case of bug being found\". It was a ___.", "a": "moth", "lie": "fly", "why": "The word \"bug\" for a defect is older, but this log page made it famous.", "src": "Computing History Museum"},
  // stethoscope-paper, checked 2026-10-31
  //   https://lemelson.mit.edu/resources/rene-laennec
  //   https://en.wikipedia.org/wiki/Stethoscope
  {"id": "stethoscope-paper", "topic": "science", "q": "The very first stethoscope, in 1816, was made by rolling up a sheet of ___.", "a": "paper", "lie": "leather", "why": "René Laennec did not want to press his ear to a patient's chest. He later made the tube from wood.", "src": "MIT Lemelson Center"},
  // rinderpest, checked 2026-10-31
  //   https://www.cidrap.umn.edu/oie-declares-rinderpest-eradicated
  //   https://pirbright.ac.uk/node/697
  {"id": "rinderpest", "topic": "science", "q": "The second disease humans ever eradicated, in 2011, after smallpox, was ___.", "a": "rinderpest", "lie": "polio", "why": "It affected cattle and other animals. No case has been seen since 2001.", "src": "CIDRAP"},
  // tardigrade-space, checked 2026-10-31
  //   https://www.esa.int/Our_Activities/Human_Spaceflight/Research/Tiny_animals_survive_exposure_to_space
  //   https://sciencedaily.com/releases/2008/09/080908135906.htm
  {"id": "tardigrade-space", "topic": "science", "q": "In 2007 these tiny animals became the first to survive exposure to open space: ___.", "a": "tardigrades (water bears)", "lie": "flatworms", "why": "About 3,000 spent 12 days in orbit on an ESA mission. Some survived deadly UV and later reproduced.", "src": "ESA"},
  // velcro-burrs, checked 2026-10-31
  //   https://www.wipo.int/en/web/ip-advantage/w/stories/the-velcro-ip-story
  //   https://www.swissinfo.ch/eng/science/how-a-swiss-invention-hooked-the-world/5653568
  {"id": "velcro-burrs", "topic": "science", "q": "Velcro was invented by Swiss engineer George de Mestral after a walk with his dog left his clothes and the dog's fur covered in burrs of this plant: ___.", "a": "burdock", "lie": "nettle", "why": "Under a microscope he saw tiny hooks catching on fabric loops.", "src": "WIPO"},
  // barcode-gum, checked 2026-10-31
  //   https://www.gs1.org/articles/marsh-holds-place-honor-history-gs1-barcode
  //   https://history.com/this-day-in-history/june-26/barcode-scanner-invention-first-use
  {"id": "barcode-gum", "topic": "science", "q": "The very first product scanned with a barcode in a shop (in Ohio, 1974) was a pack of ___.", "a": "chewing gum", "lie": "cigarettes", "why": "It was a pack of Wrigley's Juicy Fruit for 67 cents, proving barcodes work even on tiny items.", "src": "GS1"},
  // bubble-wrap, checked 2026-10-31
  //   https://www.retailbrew.com/stories/2022/07/22/tools-of-the-trade-how-bubble-wrap-became-a-pop-idol
  //   https://en.wikipedia.org/wiki/Bubble_Wrap
  {"id": "bubble-wrap", "topic": "science", "q": "Bubble Wrap was invented in 1957 by engineers who were trying to make a new kind of ___.", "a": "wallpaper", "lie": "carpet", "why": "It flopped as wallpaper and as greenhouse insulation, then took off as packaging.", "src": "Retail Brew"},
  // neutron-sugar, checked 2026-10-31
  //   https://imagine.gsfc.nasa.gov/science/objects/neutron_stars1.html
  //   https://en.wikipedia.org/wiki/Neutron_star
  {"id": "neutron-sugar", "topic": "science", "q": "A piece of neutron star the size of a ___ would weigh about a billion tonnes on Earth.", "a": "sugar cube", "lie": "football", "why": "NASA compares it to a whole mountain. Other estimates run several times higher.", "src": "NASA"},
  // flame-space, checked 2026-10-31
  //   https://www.nasa.gov/image-article/candle-flame-1g-vs-microgravity/
  //   https://en.wikipedia.org/wiki/Flame
  {"id": "flame-space", "topic": "science", "q": "A candle flame in weightlessness is not teardrop-shaped but has the shape of a ___.", "a": "sphere", "lie": "flat disc", "why": "It is also blue and soot-free, because there is no upward convection.", "src": "NASA"},
  // orloj-1410, checked 2026-10-31
  //   https://www.lindahall.org/about/news/scientist-of-the-day/prague-astronomical-clock/
  //   https://en.wikipedia.org/wiki/Prague_astronomical_clock
  {"id": "orloj-1410", "topic": "science", "q": "The Prague astronomical clock first appears in the town records in the year ___.", "a": "1410", "lie": "1490", "why": "It was built by Mikuláš of Kadaň and Jan Šindel. It was long wrongly dated to around 1490.", "src": "Linda Hall Library"},
]});
