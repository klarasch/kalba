// The Gap / Díra facts (en). Every fact must be TRUE.
// Each fact was checked against at least two sources that were opened and read (URLs above it).
// To add one: same fields, two sources, then run the second check before committing.
// A good fact is little known (not school history, not pub trivia), the gap invites funny fakes
// (a thing, not a number or a date) and nobody's illness, death or misfortune is the punchline.
// "adult": true puts a fact in the 18+ set, which only plays when the table switches it on.
window.PB_GAP = window.PB_GAP || [];
PB_GAP.push({ lang: 'en', facts: [
  // pistol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pistol
  //   https://www.dictionary.com/browse/pistol
  //   https://en.wikipedia.org/wiki/Pistol
  {"id": "pistol", "topic": "language", "q": "The English word “pistol” most likely comes from the Czech word ___.", "a": "píšťala (pipe, whistle)", "lie": "bič (whip)", "why": "The Hussites used it for a light hand firearm. It reached English through German and French.", "src": "Merriam-Webster"},
  // brambor, checked 2026-10-31
  //   https://macau.uni-kiel.de/servlets/MCRFileNodeServlet/macau_derivate_00006618//kiel-up_2750-9605_p4.pdf
  //   https://en.wiktionary.org/wiki/brambor
  {"id": "brambor", "topic": "language", "q": "The Czech word for potato, “brambora”, is named after the land it is said to have come from: ___.", "a": "Brandenburg", "lie": "Bavaria", "why": "Czech etymologists read it as “the crop from Brandenburg”, said to be brought by Prussian soldiers in the 18th century.", "src": "Kiel-UP: J. Šnejdrlová, Názvy bramboru"},
  // semtex, checked 2026-10-31
  //   https://www.csmonitor.com/2002/0226/p07s02-woeu.html
  //   https://en.wikipedia.org/wiki/Semtex
  //   https://explosia.cz/historie/
  {"id": "semtex", "topic": "places", "q": "Semtex, the plastic explosive, is named after ___, a place near Pardubice.", "a": "Semtín", "lie": "Semily", "why": "It was developed by chemists there and has been made there since the 1960s, today by Explosia.", "src": "The Christian Science Monitor"},
  // wombat, checked 2026-10-31
  //   https://www.australiangeographic.com.au/news/2021/02/why-do-wombats-have-cube-shaped-poo-scientists-may-have-solved-the-mystery/
  //   https://www.sci.news/biology/wombat-square-shaped-feces-09314.html
  //   https://en.wikipedia.org/wiki/Common_wombat
  {"id": "wombat", "topic": "nature", "q": "Wombat droppings have an unusual shape: ___.", "a": "cubes", "lie": "stars", "why": "The shape forms in the gut, which has stiffer and softer sections. They leave them on prominent spots to communicate.", "src": "Australian Geographic"},
  // koala, checked 2026-10-31
  //   https://www.pbs.org/wgbh/nova/article/koala-fingerprints/
  //   https://indianapublicmedia.org/amomentofscience/humans-arent-unique-when-it-comes-to-fingerprints.php
  {"id": "koala", "topic": "nature", "q": "The only non-primate with fingerprints strikingly similar to a human's: ___.", "a": "koala", "lie": "sloth", "why": "They evolved separately from ours, probably for grasping eucalyptus branches and leaves.", "src": "PBS NOVA"},
  // ketchup, checked 2026-10-31
  //   https://www.wnyc.org/story/ketchup-the-all-american-condiment-that-comes-from-asia
  //   https://www.csmonitor.com/The-Culture/In-a-Word/2023/0410/The-origins-of-ketchup-or-catsup-run-through-fish-sauce
  //   https://en.wikipedia.org/wiki/Ketchup
  {"id": "ketchup", "topic": "food", "q": "The original Asian “ketchup” wasn't made from tomatoes but from ___.", "a": "fish", "lie": "plums", "why": "It was a pickled-fish brine from southern China. The first tomato ketchup recipe appeared in America in 1812.", "src": "WNYC / NPR"},
  // tycho-nose, checked 2026-10-31
  //   https://muzeum3000.nm.cz/national-museum-news/research-of-the-tomb-and-remains-of-tycho-brahe
  //   https://en.wikipedia.org/wiki/Tycho_Brahe
  {"id": "tycho-nose", "topic": "history", "q": "Astronomer Tycho Brahe lost part of his nose in a duel and wore a prosthesis. Analysis of his remains, exhumed in 2010, showed it was not gold or silver but this metal: ___.", "a": "brass", "lie": "lead", "why": "The nose bone held copper and zinc in the ratio typical of brass. Tycho died in Prague in 1601.", "src": "Národní muzeum"},
  // divis-drought, checked 2026-10-31
  //   https://english.radio.cz/node/8819683
  //   https://en.wikipedia.org/wiki/Prokop_Divi%C5%A1
  {"id": "divis-drought", "topic": "history", "q": "In 1754 the priest Prokop Diviš built one of the first grounded lightning rods in Přímětice. Villagers destroyed it in 1759 because they blamed it for causing: ___.", "a": "a drought", "lie": "a flood", "why": "Diviš called it a weather machine and never rebuilt it after it was destroyed.", "src": "Český rozhlas"},
  // pig-war, checked 2026-10-31
  //   https://www.nps.gov/sajh/historyculture/the-pig-war.htm
  //   https://en.wikipedia.org/wiki/Pig_War_%281859%29
  {"id": "pig-war", "topic": "history", "q": "In 1859 the USA and Britain nearly went to war over San Juan Island, and the only casualty was a ___.", "a": "pig", "lie": "horse", "why": "An American shot a Hudson's Bay Company pig rooting in his garden. The German emperor settled the border dispute in 1872.", "src": "National Park Service"},
  // newton-mint, checked 2026-10-31
  //   https://www.numismaticnews.net/world-coins/genius-newton-chased-counterfeiters
  //   https://en.wikipedia.org/wiki/Later_life_of_Isaac_Newton
  {"id": "newton-mint", "topic": "history", "q": "As Warden of the Royal Mint, Isaac Newton also worked as a detective hunting: ___.", "a": "coin counterfeiters", "lie": "tea smugglers", "why": "He questioned witnesses himself, went undercover and successfully prosecuted 28 coiners, a crime punishable by death.", "src": "Numismatic News"},
  // lenochod-tyden, checked 2026-10-31
  //   https://www.scientificamerican.com/article/why-sloths-leave-the-trees-to-defecate
  //   https://en.wikipedia.org/wiki/Sloth
  {"id": "lenochod-tyden", "topic": "nature", "q": "Three-toed sloths climb down to the ground to poop only about once a ___.", "a": "week", "lie": "month", "why": "On the ground they are easy prey and it costs them energy; scientists still argue about why they do it.", "src": "Scientific American"},
  // zebra-ovadi, checked 2026-10-31
  //   https://bristol.ac.uk/news/2019/february/zebra-stripes.html
  //   https://www.sciencedaily.com/releases/2019/02/190220145032.htm
  {"id": "zebra-ovadi", "topic": "nature", "q": "A 2019 study found that zebra stripes mainly protect against one blood-sucking insect, which struggles to land on them: the ___.", "a": "horsefly", "lie": "mosquito", "why": "Horseflies fail to slow down near zebras and overshoot or bump into them, though the exact mechanism is still debated.", "src": "University of Bristol"},
  // narval-zub, checked 2026-10-31
  //   https://smithsonianscience.org/2012/04/for-dentist-the-narwhals-smile-is-a-mystery-of-evolution/
  //   https://en.wikipedia.org/wiki/Narwhal
  {"id": "narval-zub", "topic": "nature", "q": "The long spiral \"horn\" of a narwhal is not a horn but a giant tooth, namely a ___.", "a": "canine", "lie": "incisor", "why": "Scientists confirmed it in 2012: the tusk grows from the upper jawbone, where mammals' canines originate.", "src": "Smithsonian"},
  // becherovka-english-bitter, checked 2026-10-31
  //   https://english.radio.cz/node/8120512
  //   https://english.radio.cz/node/8717307
  //   https://cs.wikipedia.org/wiki/Becherovka
  {"id": "becherovka-english-bitter", "topic": "food", "q": "When Becherovka first went on sale in Karlovy Vary in 1807, it had a different name: ___.", "a": "English Bitter", "lie": "Karlsbad Gold", "why": "Josef Becher reportedly got the recipe from an English doctor, Frobrig, and sold it as a stomach remedy.", "src": "Radio Prague International"},
  // hawaiian-pizza-canada, checked 2026-10-31
  //   https://thecanadianencyclopedia.ca/en/article/sam-panopolous
  //   https://www.nbcnews.com/news/world/alleged-inventor-controversial-hawaiian-pizza-dies-canada-n770716
  {"id": "hawaiian-pizza-canada", "topic": "food", "q": "Hawaiian pizza was invented in 1962 by the Greek immigrant Sam Panopoulos. In which country? ___.", "a": "Canada", "lie": "Australia", "why": "Panopoulos first made it at the Satellite Restaurant in Chatham, Ontario.", "src": "The Canadian Encyclopedia"},
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
  // nerd, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/nerd
  //   https://en.wiktionary.org/wiki/nerd
  //   https://en.wikipedia.org/wiki/Nerd
  {"id": "nerd", "topic": "language", "q": "The word nerd first appeared in print in 1950 in a children's book by ___.", "a": "Dr. Seuss", "lie": "Roald Dahl", "why": "Seuss used it as the name of an imaginary creature in If I Ran the Zoo, not yet for a studious geek.", "src": "Merriam-Webster"},
  // googol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/googol
  //   https://en.wikipedia.org/wiki/Googol
  {"id": "googol", "topic": "language", "q": "The number googol (a 1 with 100 zeros), which inspired the name Google, was named by the nine-year-old ___ of mathematician Edward Kasner.", "a": "nephew", "lie": "son", "why": "The boy was Milton Sirotta, and Kasner popularised his word for 10 to the power of 100.", "src": "Merriam-Webster"},
  // hamburg-czech-port, checked 2026-10-31
  //   https://english.radio.cz/node/8240796
  //   https://www.e15.cz/byznys/doprava-a-logistika/cesko-obnovuje-pristup-k-mori-chysta-smlouvu-pro-nove-uzemi-v-hamburku-1389654
  {"id": "hamburg-czech-port", "topic": "places", "q": "In 1929 Czechoslovakia took a 99-year lease on a piece of port land in the German city of ___.", "a": "Hamburg", "lie": "Bremen", "why": "The right came from the Treaty of Versailles. One leased basin is called Moldauhafen, the Vltava Harbour.", "src": "Radio Prague International"},
  // brno-clock-marble, checked 2026-10-31
  //   https://english.radio.cz/node/8546429
  //   https://en.wikipedia.org/wiki/Brno_astronomical_clock
  {"id": "brno-clock-marble", "topic": "places", "q": "Every day at exactly 11:00, Brno's astronomical clock releases a ___ that visitors can catch and take home.", "a": "glass marble", "lie": "bronze coin", "why": "It recalls 1645: legend says Brno held off the Swedes because the bell rang noon at 11 instead.", "src": "Radio Prague International"},
  // point-nemo-astronauts, checked 2026-10-31
  //   https://www.skyatnightmagazine.com/earth-from-space/point-nemo
  //   https://en.wikipedia.org/wiki/Point_Nemo
  {"id": "point-nemo-astronauts", "topic": "places", "q": "The people closest to Point Nemo, the spot farthest from any land, are sometimes these: ___.", "a": "astronauts on the ISS", "lie": "polar researchers", "why": "The nearest land is about 2,700 km away, while the ISS orbits at about 400 km.", "src": "BBC Sky at Night Magazine"},
  // pitch-drop, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/longest-running-laboratory-experiment
  //   https://en.wikipedia.org/wiki/Pitch_drop_experiment
  {"id": "pitch-drop", "topic": "science", "q": "Since 1927 a university in Brisbane, Australia, has been watching this substance drip very slowly from a funnel: ___.", "a": "pitch", "lie": "honey", "why": "One drop takes about a decade to fall. Guinness lists it as the longest-running laboratory experiment.", "src": "Guinness World Records"},
  // coffee-webcam, checked 2026-10-31
  //   https://www.cl.cam.ac.uk/coffee/qsf/coffee.html
  //   https://www.cai.cam.ac.uk/news/caian-coffee-pot-and-webcam-awardwinning-combination
  //   https://en.wikipedia.org/wiki/Trojan_Room_coffee_pot
  {"id": "coffee-webcam", "topic": "science", "q": "The world's first webcam, set up at Cambridge University in 1991, watched a ___.", "a": "coffee pot", "lie": "fish tank", "why": "The scientists were tired of climbing stairs to an empty pot. It went onto the web in 1993.", "src": "University of Cambridge"},
  // stethoscope-paper, checked 2026-10-31
  //   https://lemelson.mit.edu/resources/rene-laennec
  //   https://en.wikipedia.org/wiki/Stethoscope
  {"id": "stethoscope-paper", "topic": "science", "q": "The very first stethoscope, in 1816, was made by rolling up a sheet of ___.", "a": "paper", "lie": "leather", "why": "René Laennec did not want to press his ear to a patient's chest. He later made the tube from wood.", "src": "MIT Lemelson Center"},
  // tardigrade-space, checked 2026-10-31
  //   https://www.esa.int/Our_Activities/Human_Spaceflight/Research/Tiny_animals_survive_exposure_to_space
  //   https://sciencedaily.com/releases/2008/09/080908135906.htm
  {"id": "tardigrade-space", "topic": "science", "q": "In 2007 these tiny animals became the first to survive exposure to open space: ___.", "a": "tardigrades (water bears)", "lie": "flatworms", "why": "About 3,000 spent 12 days in orbit on an ESA mission. Some survived deadly UV and later reproduced.", "src": "ESA"},
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
]});
