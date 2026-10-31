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
  // chicken-tax-trucks, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Chicken_tax
  //   https://www.tastingtable.com/1956155/1960s-chicken-tariff-history/
  {"id": "chicken-tax-trucks", "topic": "history", "q": "The 25% US tariff on imported pickup trucks, still in force, began in 1964 as revenge in a trade dispute over ___.", "a": "chicken", "lie": "cheese", "why": "Europe blocked American poultry, so Washington taxed several European goods. Only the light-truck tariff survived.", "src": "Wikipedia"},
  // tally-sticks-parliament, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Burning_of_Parliament
  //   https://museumofscottishfireheritage.org/the-palace-of-westminster-fire-16-october-1834/
  {"id": "tally-sticks-parliament", "topic": "history", "q": "In 1834 the Houses of Parliament in London burned down after workers disposed of old ___ in the furnaces beneath the House of Lords.", "a": "tally sticks", "lie": "ballot papers", "why": "They were notched wooden accounting records the Exchequer used until 1826. The blaze destroyed most of the old palace.", "src": "Wikipedia"},
  // knocker-up-peashooter, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Knocker-up
  //   https://www.npr.org/2007/08/25/13879507/mary-smith-wakes-up-village-sleepyheads
  {"id": "knocker-up-peashooter", "topic": "history", "q": "Before alarm clocks, British \"knocker-ups\" were paid to wake workers, some by firing dried ___ at the bedroom window through a tube.", "a": "peas", "lie": "rice", "why": "A 1931 photo of Mary Smith in East London made her the most famous knocker-up of all.", "src": "Wikipedia"},
  // pez-anti-smoking, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Pez
  //   https://www.mentalfloss.com/food/candy/10-indispensable-facts-about-pez
  {"id": "pez-anti-smoking", "topic": "food", "q": "Pez launched in Vienna in 1927 as a peppermint sweet for adults, marketed as an alternative to ___.", "a": "smoking", "lie": "coffee", "why": "The name is short for the German Pfefferminz (peppermint). The first dispensers looked like cigarette lighters.", "src": "Mental Floss"},
  // salmon-suspicious-circumstances, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Salmon_Act_1986
  //   https://www.legislation.gov.uk/ukpga/1986/62/section/32
  {"id": "salmon-suspicious-circumstances", "topic": "history", "q": "A 1986 British law makes it a crime to handle ___ \"in suspicious circumstances\".", "a": "salmon", "lie": "caviar", "why": "It targets poached fish, but the vague wording became a favourite joke. Since 2009 it covers other fish too.", "src": "legislation.gov.uk"},
  // vw-currywurst, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Volkswagen_currywurst
  //   https://www.kitchenstories.com/en/stories/vw-brings-their-classic-currywurst-to-supermarkets
  {"id": "vw-currywurst", "topic": "food", "q": "Volkswagen makes its own brand of ___ in Wolfsburg, and in many years it produces more of them than cars.", "a": "currywurst", "lie": "pretzels", "why": "Made since 1973 with part number 199 398 500 A. The factory also sells matching ketchup.", "src": "Wikipedia"},
  // samsung-dried-fish, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Samsung
  //   https://m.gsmarena.com/from_seafood_trader_to_global_technology_powerhouse__a_glimpse_at_samsungs_history-news-13375.php
  {"id": "samsung-dried-fish", "topic": "history", "q": "Samsung began in 1938 as a small Korean trading company that exported local vegetables, fruit and ___.", "a": "dried fish", "lie": "ginseng", "why": "Founder Lee Byung-chul started out in Daegu, shipping goods to Manchuria and Beijing.", "src": "Wikipedia"},
  // nike-waffle-iron, checked 2026-10-31
  //   https://about.nike.com/stories/nike-moon-shoe-waffle-iron-true-history
  //   https://www.history.com/this-day-in-history/february-26/nike-patent-waffle-sole-trainers-invented-in-waffle-iron
  {"id": "nike-waffle-iron", "topic": "history", "q": "Nike's grippy waffle sole began in 1971 when coach Bill Bowerman poured liquid urethane into his wife's ___.", "a": "waffle iron", "lie": "toaster", "why": "The iron glued shut forever, so he kept experimenting with more waffle irons until the Moon Shoe was born.", "src": "Nike"},
  // cotton-candy-dentist, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Cotton_candy
  //   https://pubmed.ncbi.nlm.nih.gov/16092607/
  {"id": "cotton-candy-dentist", "topic": "food", "q": "The cotton candy machine was co-invented in 1897 by William Morrison, who worked as a ___.", "a": "dentist", "lie": "baker", "why": "It debuted at the 1904 World's Fair in St. Louis under the name \"fairy floss\".", "src": "Wikipedia"},
  // twinkie-banana-cream, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Twinkie
  //   https://www.militarytimes.com/off-duty/military-culture/2022/06/01/how-a-wwii-banana-shortage-changed-the-course-of-twinkie-history/
  {"id": "twinkie-banana-cream", "topic": "food", "q": "The original 1930 Twinkies were filled with ___ cream, until wartime shortages pushed the bakery to vanilla.", "a": "banana", "lie": "coconut", "why": "Banana Twinkies only came back in 2007, with a filling made of 2% banana puree.", "src": "Wikipedia"},
  // hungry-jacks-australia, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Hungry_Jack%27s
  //   https://en.wikipedia.org/wiki/Burger_King
  {"id": "hungry-jacks-australia", "topic": "history", "q": "In Australia, Burger King is called ___ because an Adelaide takeaway already owned the Burger King name.", "a": "Hungry Jack's", "lie": "Aussie King", "why": "The franchisee picked the name from a Pillsbury pancake mix trademark and added an apostrophe and an s.", "src": "Wikipedia"},
  // skinner-pigeon-bomb, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Project_Pigeon
  //   https://www.smithsonianmag.com/smithsonian-institution/bf-skinners-pigeon-guided-rocket-53443995/
  {"id": "skinner-pigeon-bomb", "topic": "science", "q": "In WWII psychologist B. F. Skinner trained ___ to steer a guided bomb by pecking at an image of the target.", "a": "pigeons", "lie": "crows", "why": "The military gave him $25,000 but never used the idea. The nose cone now sits in a Smithsonian collection.", "src": "Smithsonian Magazine"},
  // jaffa-cake-stale, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Jaffa_Cakes
  //   https://www.yorkshirepost.co.uk/read-this/is-a-jaffa-cake-a-cake-or-a-biscuit-heres-the-definitive-answer-as-decided-by-a-court-1379222
  {"id": "jaffa-cake-stale", "topic": "food", "q": "A 1991 UK tax tribunal ruled Jaffa Cakes are cakes, not biscuits, partly because like cakes they go ___ when stale.", "a": "hard", "lie": "soft", "why": "Cakes are zero-rated for VAT, chocolate-covered biscuits are not. The tribunal weighed texture, size and where they are sold.", "src": "Wikipedia"},
  // wojtek-bear-corporal, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Wojtek_(bear)
  //   https://www.smithsonianmag.com/smart-news/meet-bear-who-earned-rank-corporal-polish-army-180956579/
  {"id": "wojtek-bear-corporal", "topic": "history", "q": "Polish soldiers in WWII officially enlisted a ___ named Wojtek as a private, and later promoted him to corporal.", "a": "bear", "lie": "donkey", "why": "Giving him a rank was a workaround for a British rule against mascots on transport ships. He retired to Edinburgh Zoo.", "src": "Wikipedia"},
  // shopping-cart-models, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Shopping_cart
  //   https://www.smithsonianmag.com/history/industrious-grocer-1930s-wanted-make-easier-customers-buy-more-just-needed-push-180987633/
  {"id": "shopping-cart-models", "topic": "history", "q": "When Sylvan Goldman introduced shopping carts in 1937, shoppers shunned them, so he hired ___ to push them around his store.", "a": "models", "lie": "clowns", "why": "Men found carts unmanly and women thought they looked like prams. Once shoppers saw others using them, carts took off.", "src": "Smithsonian Magazine"},
  // armour-in-parliament, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Statute_forbidding_Bearing_of_Armour
  //   https://www.legislation.gov.uk/aep/Edw2/7/0/section/wrapper1/data.htm?view=plain
  {"id": "armour-in-parliament", "topic": "history", "q": "A statute from 1313, still formally in force, forbids coming to Parliament wearing ___.", "a": "armour", "lie": "hats", "why": "The Crown Prosecution Service once said anyone caught in it would be a matter for the police first.", "src": "Wikipedia"},
  // snickers-horse, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Snickers
  //   https://www.tastingtable.com/1042389/the-racehorse-snickers-candy-bars-are-named-after
  {"id": "snickers-horse", "topic": "food", "q": "The Snickers bar, launched in 1930, was named after the Mars family's favorite ___.", "a": "horse", "lie": "dog", "why": "The Mars family bred Thoroughbred horses on their farm.", "src": "Wikipedia"},
  // royal-fish-sturgeon, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Royal_fish
  //   https://www.gov.uk/guidance/protection-of-common-sturgeon-advice-for-fishermen
  {"id": "royal-fish-sturgeon", "topic": "nature", "q": "Under UK law, the monarch can claim whales and one caviar-producing fish caught in British waters: the ___.", "a": "sturgeon", "lie": "lobsters", "why": "Anglers who land one must contact the Receiver of Wreck, who acts for the Crown.", "src": "Wikipedia"},
  // scotland-unicorn, checked 2026-10-31
  //   https://www.mentalfloss.com/culture/folklore-mythology/scotland-national-animal-unicorn
  //   https://en.wikipedia.org/wiki/Unicorn
  {"id": "scotland-unicorn", "topic": "nature", "q": "Scotland's official national animal is the ___.", "a": "unicorn", "lie": "Highland cow", "why": "Scottish kings used unicorns as supporters of the royal arms, and the animal stuck.", "src": "Mental Floss"},
  // nils-olav-knight, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Nils_Olav_III
  //   https://www.edinburghzoo.org.uk/news/major-general-sir-nils-olav-baron-bouvet-islands
  {"id": "nils-olav-knight", "topic": "nature", "q": "In 2008 a king penguin at Edinburgh Zoo was officially made a ___ by the Norwegian King's Guard.", "a": "knight", "lie": "bishop", "why": "The honour had to be approved by the King of Norway, and the penguin has since risen to the rank of major general.", "src": "Edinburgh Zoo"},
  // dung-beetle-milky-way, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Dung_beetle
  //   https://earthsky.org/earth/dung-beetles-use-the-milky-way-to-navigate-at-night/
  {"id": "dung-beetle-milky-way", "topic": "nature", "q": "At night, ball-rolling dung beetles keep a straight course by steering by the ___.", "a": "Milky Way", "lie": "North Star", "why": "In a planetarium the beetles rolled straight under the Milky Way, but wandered under just the brightest stars.", "src": "Current Biology"},
  // otto-octopus-lamp, checked 2026-10-31
  //   https://www.practicalfishkeeping.co.uk/fishkeeping-news/aquarium-octopus-causes-havoc/
  //   https://www.peta.org/news/youve-punked-octopus/
  {"id": "otto-octopus-lamp", "topic": "nature", "q": "Otto the octopus kept blacking out a German aquarium by squirting water at its ___.", "a": "spotlight", "lie": "security camera", "why": "He also threw rocks at the glass and rearranged his tank. The director said he was craving attention.", "src": "Practical Fishkeeping"},
  // stubbs-cat-mayor, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Stubbs_(cat)
  //   https://www.cbsnews.com/news/stubbs-dead-alaska-talkeetna-honorary-cat-mayor/
  {"id": "stubbs-cat-mayor", "topic": "nature", "q": "For two decades, the honorary mayor of the Alaskan town of Talkeetna was a ___.", "a": "cat", "lie": "sled dog", "why": "Residents jokingly wrote his name in on ballots, and the post was honorary because Talkeetna is only a historic district.", "src": "Wikipedia"},
  // dogs-poop-compass, checked 2026-10-31
  //   https://www.pbs.org/newshour/science/dogs-poop-in-alignment-with-earths-magnetic-field-study-finds
  //   https://www.foxnews.com/science/scientists-discover-dogs-preferred-bathroom-position
  {"id": "dogs-poop-compass", "topic": "science", "q": "In calm conditions, dogs prefer to poop facing north or south, aligned with Earth's ___.", "a": "magnetic field", "lie": "rotation", "why": "Researchers watched 70 dogs of 37 breeds for two years. The effect vanished when the magnetic field was unstable.", "src": "Frontiers in Zoology"},
  // ig-nobel-cats-liquid, checked 2026-10-31
  //   https://www.smithsonianmag.com/smart-news/ig-nobel-prizes-recognize-humorous-real-research-180964916/
  //   https://www.sciencealert.com/are-cats-a-liquid-ig-nobel-prize-physics-winner
  {"id": "ig-nobel-cats-liquid", "topic": "science", "q": "The 2017 Ig Nobel Prize in Physics went to a paper asking whether a cat can be both a solid and a ___.", "a": "liquid", "lie": "gas", "why": "The author concluded that cats are liquid if you give them enough time to take the shape of their container.", "src": "Smithsonian Magazine"},
  // pigeons-monet-picasso, checked 2026-10-31
  //   https://pmc.ncbi.nlm.nih.gov/articles/PMC1334394/
  //   https://en.wikipedia.org/wiki/Pigeon_intelligence
  {"id": "pigeons-monet-picasso", "topic": "science", "q": "In a 1995 Japanese experiment, pigeons learned to tell paintings by Monet from paintings by ___.", "a": "Picasso", "lie": "Rembrandt", "why": "They even sorted paintings they had never seen. Turn Monet upside down and they got confused, but Picasso upside down was no problem.", "src": "J. of the Experimental Analysis of Behavior"},
  // bumblebees-roll-balls, checked 2026-10-31
  //   https://www.qmul.ac.uk/news/latest-news/2022/se/first-ever-study-shows-bumble-bees-play.html
  //   https://www.sci.news/biology/bumblebee-play-11342.html
  {"id": "bumblebees-roll-balls", "topic": "nature", "q": "Bumblebees will repeatedly roll tiny wooden ___ just for fun, with no reward.", "a": "balls", "lie": "dice", "why": "One bee rolled balls 117 times. Males rolled for longer than females.", "src": "Queen Mary University of London"},
  // gerrymander-salamander, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/gerrymander
  //   https://en.wikipedia.org/wiki/Gerrymandering
  {"id": "gerrymander-salamander", "topic": "language", "q": "The word gerrymander blends a governor's surname with the animal an oddly shaped voting district resembled: the ___.", "a": "salamander", "lie": "scorpion", "why": "The governor, Elbridge Gerry, reportedly disliked the practice that now carries his name.", "src": "Merriam-Webster"},
  // tabby-baghdad-silk, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/tabby
  //   https://en.wikipedia.org/wiki/Tabby_cat
  {"id": "tabby-baghdad-silk", "topic": "language", "q": "The word tabby for a striped cat comes from a striped ___ made in a quarter of Baghdad.", "a": "silk", "lie": "carpet", "why": "The district was called Attabiya. The cat was named after the cloth, not the other way round.", "src": "Merriam-Webster"},
  // alcohol-kohl, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/alcohol
  //   https://en.wikipedia.org/wiki/Alcohol_(chemistry)
  {"id": "alcohol-kohl", "topic": "language", "q": "The word alcohol comes from Arabic al-kuhl, originally a fine mineral powder that people painted around their ___.", "a": "eyes", "lie": "lips", "why": "Kohl, a powder from the mineral stibnite, only later gave its name to distilled spirits.", "src": "Merriam-Webster"},
  // pineapple-pinecone, checked 2026-10-31
  //   https://en.wiktionary.org/wiki/pineapple
  //   https://www.merriam-webster.com/dictionary/pineapple
  {"id": "pineapple-pinecone", "topic": "language", "q": "Before it named the tropical fruit, the English word pineapple meant a ___.", "a": "pine cone", "lie": "wild apple", "why": "The fruit looked like a pine cone, so the old word was passed on to it.", "src": "Merriam-Webster"},
  // nickel-goblin, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Nickel
  //   https://www.merriam-webster.com/dictionary/nickel
  {"id": "nickel-goblin", "topic": "language", "q": "German miners named a copper-looking ore that yielded no copper 'Kupfernickel', blaming a mischievous ___.", "a": "goblin", "lie": "witch", "why": "The metal nickel was later named after that same sprite.", "src": "Merriam-Webster"},
  // turtle-tears-butterflies, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Lachryphagy
  //   https://www.smithsonianmag.com/smart-news/watch-moth-gently-slurp-tears-slumbering-bird-180970430/
  {"id": "turtle-tears-butterflies", "topic": "nature", "q": "In the Amazon, butterflies have been photographed drinking the ___ of river turtles.", "a": "tears", "lie": "sweat", "why": "Tear drinking is called lachryphagy. Tears are a handy source of salt and protein.", "src": "Smithsonian Magazine"},
  // snail-love-dart, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Love_dart
  //   https://nhm.org/stories/snail-love
  {"id": "snail-love-dart", "topic": "nature", "q": "Before mating, many land snails try to stab each other with a sharp ___.", "a": "love dart", "lie": "stinger", "why": "The dart carries mucus that changes how the partner handles sperm, helping the shooter father more young.", "src": "Natural History Museum of Los Angeles"},
  // sitovka-hairnets, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/String_bag
  //   https://www.archiweb.cz/en/n/home/ve-zdaru-n-s-ma-pomnik-taska-sitovka-ktera-ve-meste-vznikla
  {"id": "sitovka-hairnets", "topic": "history", "q": "The Czech string shopping bag (síťovka) began in the 1920s in Žďár nad Sázavou, in a business that used to make ___.", "a": "hairnets", "lie": "fishing nets", "why": "When hairnets went out of fashion, Vavřín Krčil kept his home workers busy by turning the mesh into shopping bags.", "src": "Wikipedia, Archiweb"},
  // hron-elephant-balloon, checked 2026-10-31
  //   https://ekonomickydenik.cz/jakub-hron-metanovsky-skutecny-jara-cimrman
  //   https://cs.wikipedia.org/wiki/Jakub_Hron_Metánovský
  {"id": "hron-elephant-balloon", "topic": "science", "q": "Czech tinkerer Jakub Hron built a hot-air balloon shaped like this animal, with the crew riding on its back: ___.", "a": "elephant", "lie": "giraffe", "why": "In 1901 it tore apart before the planned launch in Hradec Králové. His tip-proof inkwell worked much better.", "src": "Ekonomický deník, Czech Wikipedia"},
  // hasek-imaginary-animals, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Jaroslav_Ha%C5%A1ek
  //   https://cs.wikipedia.org/wiki/Jaroslav_Hašek
  //   https://stephenjones.blog/2017/01/02/a-czech-mate/
  {"id": "hasek-imaginary-animals", "topic": "history", "q": "Jaroslav Hašek lost his job as editor of the magazine Animal World when it came out that he had been writing about ___.", "a": "made-up animals", "lie": "stolen photographs", "why": "Later he opened a dog-trading 'Cynological Institute', which failed within months but inspired his book My Dog Shop.", "src": "Wikipedia"},
  // colorado-beetle-propaganda, checked 2026-10-31
  //   https://english.radio.cz/node/8596512
  //   https://en.wikipedia.org/wiki/War_against_the_potato_beetle
  {"id": "colorado-beetle-propaganda", "topic": "history", "q": "In the early 1950s, Czechoslovak propaganda claimed American planes were dropping ___ on its potato fields, and children were sent out to hunt them.", "a": "Colorado beetles", "lie": "locusts", "why": "The insect was officially renamed the 'American beetle' until the thaw of the 1960s.", "src": "Radio Prague International"},
  // velorex-oskar, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Velorex
  //   https://english.radio.cz/node/8716063
  {"id": "velorex-oskar", "topic": "history", "q": "Before it was called Velorex, the cloth-bodied Czechoslovak three-wheeler built from bicycle parts was named ___.", "a": "Oskar", "lie": "Pepík", "why": "The Stránský brothers, who ran a bicycle repair shop, built the first one in 1943. Top speed of the early models: about 30 km/h.", "src": "Wikipedia, Radio Prague International"},
  // krenovy-scales-museum, checked 2026-10-31
  //   https://www.kudyznudy.cz/aktuality/20-muzei-o-jejichz-existenci-jste-nemeli-tuseni
  //   https://www.visitczechia.com/en-us/news/2025/02/n-unique-objects-in-czech-museums
  {"id": "krenovy-scales-museum", "topic": "places", "q": "The smallest museum in Czechia sits in a tiny weigh-house in the village of Křenovy. In about four square metres it shows ___.", "a": "weighing scales", "lie": "mousetraps", "why": "The little building still holds a working agricultural scale mechanism.", "src": "Kudy z nudy, VisitCzechia"},
  // petrin-funicular-water, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Pet%C5%99%C3%ADn_funicular
  //   https://english.radio.cz/node/8723831
  {"id": "petrin-funicular-water", "topic": "places", "q": "When Prague's Petřín funicular opened in 1891 it had no engine. It was driven by the weight of ___.", "a": "water", "lie": "sandbags", "why": "The descending car was filled with water. In winter it froze, and neighbours in Újezd sometimes had trouble getting any from their taps.", "src": "Radio Prague International, Wikipedia"},
  // kinoautomat-fire, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Kinoautomat
  //   https://www.filfre.net/?p=3084
  {"id": "kinoautomat-fire", "topic": "history", "q": "At Kinoautomat (Expo 67) the audience voted nine times, but whatever they chose, Mr Novák's ___ burned down at the end.", "a": "house", "lie": "garden shed", "why": "Director Radúz Činčera meant the fixed ending as a satire of democracy: everyone votes, nothing changes.", "src": "Wikipedia"},
  // cesky-terrier-secret-police, checked 2026-10-31
  //   https://www.akc.org/expert-advice/dog-breeds/cesky-terrier-history-from-a-bohemian-hunting-dog-to-the-terrier-group/
  //   https://en.wikipedia.org/wiki/Cesky_Terrier
  {"id": "cesky-terrier-secret-police", "topic": "nature", "q": "Breeder František Horák, creator of the Cesky terrier, got so much mail from abroad that the communist ___ came knocking.", "a": "secret police", "lie": "tax office", "why": "He reportedly retorted that they knew why people wrote to him, since they had already opened and read the letters.", "src": "American Kennel Club, Wikipedia"},
  // mahen-theatre-edison, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Mahen_Theatre
  //   https://archiweb.cz/en/n/home/pred-140-lety-byl-zahajen-provoz-nynejsiho-mahenova-divadla-v-brne
  {"id": "mahen-theatre-edison", "topic": "science", "q": "Brno's Mahen Theatre (1882) skipped gas lighting because theatres kept burning down. Its electric lighting plans were drawn by ___ himself.", "a": "Thomas Edison", "lie": "Nikola Tesla", "why": "Edison's assistant Francis Jehl supervised the installation. It was one of the first public buildings in the world lit entirely by electricity.", "src": "Wikipedia, Archiweb"},
  // fugging-signs, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Fugging
  //   https://www.travelweekly.com.au/article/no-fking-austrian-destination-changes-hilariously-unfortunate-name/
  {"id": "fugging-signs", "topic": "places", "adult": true, "q": "In 2021 the Austrian village of Fucking renamed itself Fugging, partly because tourists kept stealing its ___.", "a": "road signs", "lie": "house numbers", "why": "The village has about 100 residents and had grown tired of the jokes and the constant sign thefts.", "src": "Travel Weekly, Wikipedia"},
  // shitterton-stone, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Shitterton
  //   https://stonespecialist.com/news/stones-quarries/purbeck-sign-shitterton
  {"id": "shitterton-stone", "topic": "places", "adult": true, "q": "The English hamlet of Shitterton got so tired of its name sign being stolen that it installed one carved from a 1.5-tonne block of ___.", "a": "Purbeck stone", "lie": "Cornish granite", "why": "Half the hamlet's households chipped in 20 pounds each, and a truck and crane were needed to set the 1.5-tonne block in place.", "src": "Wikipedia, Stone Specialist"},
  // hell-gods-expedition, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Hell,_Norway
  //   https://www.lifeinnorway.net/hell-norway
  {"id": "hell-gods-expedition", "topic": "language", "q": "The old sign on the railway station in Hell, Norway, reads 'Gods-Expedition', which in Norwegian means ___.", "a": "freight handling", "lie": "lost property office", "why": "'Gods' is simply 'goods'. In Norwegian 'hell' even means luck, and the village name comes from an Old Norse word for a rock overhang.", "src": "Life in Norway, Wikipedia"},
  // fartlek-speed-play, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Fartlek
  //   https://athleticsweekly.com/performance/training-cat/coaching/fartlek-running-playing-speed-15128/
  {"id": "fartlek-speed-play", "topic": "language", "q": "The running method called fartlek takes its name from Swedish words meaning speed ___.", "a": "play", "lie": "chase", "why": "It was devised by Swedish coach Gösta Holmér in the late 1930s to mix fast and slow running.", "src": "Wikipedia, Athletics Weekly"},
  // petomane-candle, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Joseph_Pujol
  //   https://www.messynessychic.com/2016/05/13/the-french-fartist-who-headlined-the-moulin-rouge/
  {"id": "petomane-candle", "topic": "body", "adult": true, "q": "In the 1890s the Moulin Rouge star Joseph Pujol could blow out a candle from several yards away using only his ___.", "a": "bottom", "lie": "lungs", "why": "Billed as Le Pétomane, he also imitated cannon fire and thunderstorms, and the club sued him when he moonlighted elsewhere.", "src": "Wikipedia, Messy Nessy Chic"},
  // herring-submarines, checked 2026-10-31
  //   https://iflscience.com/plants-and-animals/for-15-years-sweden-thought-enemy-submarines-were-invading-its-territory-it-turned-out-to-be-herring-farts
  //   https://www.herripedia.com/farting/
  {"id": "herring-submarines", "topic": "nature", "adult": true, "q": "Some of the 'Soviet submarine' sounds that kept Sweden's navy on alert in the 1980s and 90s turned out to be herring ___.", "a": "farts", "lie": "mating songs", "why": "Herring release air from the swim bladder through their rear end. The research on herring sounds won the 2004 Ig Nobel Prize in Biology.", "src": "IFLScience, Herripedia"},
  // giraffe-urine-test, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Flehmen_response
  //   https://gizmodo.com/how-giraffes-flirt-mating-habits-urine-1850090535
  {"id": "giraffe-urine-test", "topic": "nature", "adult": true, "q": "Male giraffes check whether a female is ready to mate by tasting her ___.", "a": "urine", "lie": "breath", "why": "The lip-curling flehmen response lets him sense ovulation, because giraffes show few visible signs.", "src": "Wikipedia, Gizmodo"},
  // fruit-flies-booze, checked 2026-10-31
  //   https://www.sciencedaily.com/releases/2012/03/120315145415.htm
  //   https://csmonitor.com/Science/2012/0315/Rejected-fruit-flies-use-alcohol-to-cope
  {"id": "fruit-flies-booze", "topic": "party", "adult": true, "q": "In a 2012 study published in Science, male fruit flies rejected by females afterwards preferred food spiked with ___.", "a": "alcohol", "lie": "caffeine", "why": "Males that had mated showed no such preference, so the researchers linked it to a reward chemical in the brain.", "src": "ScienceDaily, Christian Science Monitor"},
  // pliny-canary, checked 2026-10-31
  //   https://www.nationalgeographic.com/culture/article/from-fried-canary-to-pickled-plums-historys-questionable-hangover-cures
  //   https://www.mentalfloss.com/history/15-historical-hangover-cures
  {"id": "pliny-canary", "topic": "history", "adult": true, "q": "As a hangover cure, the Roman writer Pliny the Elder recommended a breakfast of fried ___.", "a": "canary", "lie": "sparrow", "why": "National Geographic says the bird came dusted with salt and pepper. Raw owl eggs in wine were another Roman hangover idea.", "src": "National Geographic, Mental Floss"},
  // navel-lint-ig-nobel, checked 2026-10-31
  //   https://pmc.ncbi.nlm.nih.gov/articles/PMC137346
  //   https://improbable.com/airchives/press/2002/chronicle-high-10-07-2002.html
  {"id": "navel-lint-ig-nobel", "topic": "body", "adult": true, "q": "Australian science communicator Karl Kruszelnicki won a 2002 Ig Nobel Prize for his survey of ___.", "a": "belly-button lint", "lie": "ear wax", "why": "With more than 4,500 people surveyed, he found it is likelier if you are male, older, hairy and have an innie.", "src": "Improbable Research, CMAJ"},
  // mountain-dew-moonshine, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Mountain_Dew
  //   https://www.smithsonianmag.com/smart-news/mountain-dew-had-ties-moonshine-once-upon-time-180957978
  {"id": "mountain-dew-moonshine", "topic": "food", "adult": true, "q": "The soft drink Mountain Dew is named after old slang for ___.", "a": "moonshine", "lie": "spring water", "why": "The Hartman brothers of Tennessee first made it as a lemon-lime mixer for whiskey.", "src": "Smithsonian Magazine, Wikipedia"},
  // kalsarikannit-underwear, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Kalsarik%C3%A4nnit
  //   https://www.mentalfloss.com/article/560095/kalsarikanni-or-getting-drunk-in-your-underwear-finland-version-hygge
  {"id": "kalsarikannit-underwear", "topic": "language", "adult": true, "q": "The Finnish word kalsarikännit describes getting drunk at home, with no plans to go out, in your ___.", "a": "underwear", "lie": "bathrobe", "why": "It translates roughly as 'pantsdrunk' and Finland even made an emoji for it.", "src": "Mental Floss, Wikipedia"},
  // vin-mariani-pope, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Vin_Mariani
  //   https://www.mentalfloss.com/food/alcohol/vin-mariani-cocaine-wine-history
  {"id": "vin-mariani-pope", "topic": "history", "adult": true, "q": "Pope Leo XIII was a famous fan of Vin Mariani, a Bordeaux wine laced with ___.", "a": "cocaine", "lie": "opium", "why": "It held about 6 mg per ounce, and ads claimed the pope sent its maker a gold medal.", "src": "Mental Floss, Wikipedia"},
  // groom-of-the-stool, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Groom_of_the_Stool
  //   https://tudorsociety.com/groom-stool-sarah-bryson/
  {"id": "groom-of-the-stool", "topic": "history", "adult": true, "q": "At Henry VIII's court, one of the most coveted jobs was Groom of the Stool, whose holder looked after the king's ___.", "a": "toilet needs", "lie": "hunting hounds", "why": "The job brought such closeness to the king that it grew into a post of real power, with control of the privy purse.", "src": "Wikipedia, Tudor Society"},
  // hippo-sunscreen, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Hipposudoric_acid
  //   https://animals.sandiegozoo.org/animals/hippo
  {"id": "hippo-sunscreen", "topic": "nature", "q": "A hippo's reddish skin secretion, nicknamed 'blood sweat', works as a natural ___.", "a": "sunscreen", "lie": "perfume", "why": "It is neither blood nor sweat: colourless at first, it turns red-orange and then brown within minutes.", "src": "Wikipedia, San Diego Zoo"},
  // barnacle-longest, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Barnacle
  //   https://pmc.ncbi.nlm.nih.gov/articles/PMC2600913/
  {"id": "barnacle-longest", "topic": "nature", "adult": true, "q": "Relative to body size, the animal with the longest penis is the ___.", "a": "barnacle", "lie": "elephant seal", "why": "It can reach up to eight times the animal's own length, handy because barnacles are glued in place.", "src": "PubMed Central, Wikipedia"},
  // bowerbird-blue, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Satin_bowerbird
  //   https://www.australiangeographic.com.au/news/2017/12/satin-bowerbird-saved-from-plastic-chokehold/
  {"id": "bowerbird-blue", "topic": "nature", "q": "To impress females, male satin bowerbirds decorate their bowers with blue objects such as ___.", "a": "bottle caps", "lie": "marbles", "why": "Near towns they also grab clothes pegs, drinking straws and ballpoint pens, anything blue will do.", "src": "Australian Geographic, Wikipedia"},
  // duck-corkscrew, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Argentine_lake_duck
  //   https://www.sciencefocus.com/nature/duck-penis-corkscrew
  {"id": "duck-corkscrew", "topic": "nature", "adult": true, "q": "A drake's penis is coiled like a ___, and one Argentine lake duck's was measured at 42.5 cm.", "a": "corkscrew", "lie": "boomerang", "why": "That is a Guinness record, about the length of the bird's body. Females evolved spiral vaginas that twist the opposite way, so they get a say in who succeeds.", "src": "Science Focus"},
  // echidna-four-heads, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Echidna
  //   https://www.australiangeographic.com.au/topics/wildlife/2021/05/echidna-penises-why-theyre-so-weird
  {"id": "echidna-four-heads", "topic": "nature", "adult": true, "q": "An echidna's penis has four ___, but only two are used at a time.", "a": "heads", "lie": "spines", "why": "The pair in use alternates between matings, and the other two shut down.", "src": "Australian Geographic"},
  // winchester-geese, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Winchester_Geese
  //   https://wellcomecollection.org/stories/the-bishop-s-profitable-sex-workers
  {"id": "winchester-geese", "topic": "history", "adult": true, "q": "Medieval Southwark's brothels, whose workers were nicknamed 'Winchester Geese', were licensed by the ___ of Winchester.", "a": "Bishop", "lie": "Mayor", "why": "The bishop collected rent and fines from them, so the church was profiting from London's red-light district.", "src": "Wellcome Collection"},
  // kabuto-gata-condom, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Condom
  //   https://wellcomecollection.org/works/drhdmnh6
  {"id": "kabuto-gata-condom", "topic": "history", "adult": true, "q": "Early Japanese condoms, called kabuto-gata, were made of animal horn or ___.", "a": "tortoiseshell", "lie": "bamboo", "why": "They only covered the tip. Museums still hold 19th century tortoiseshell examples.", "src": "Wellcome Collection"},
  // flatworm-penis-fencing, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Penis_fencing
  //   https://www.sciencenews.org/?p=29801
  {"id": "flatworm-penis-fencing", "topic": "nature", "adult": true, "q": "Some hermaphrodite flatworms duel over who has to be the costly 'mother' by fencing with their ___.", "a": "penises", "lie": "tails", "why": "Each worm tries to stab sperm into the other while avoiding being stabbed. As one researcher put it, everybody wants to be male.", "src": "Science News"},
  // prohibition-wine-brick, checked 2026-10-31
  //   https://www.smithsonianmag.com/smart-news/ingenious-brick-helped-wine-industry-survive-prohibition-180956412/
  //   https://www.tastingtable.com/1943655/prohibition-era-grape-juice-warnings
  {"id": "prohibition-wine-brick", "topic": "history", "adult": true, "q": "Prohibition grape bricks came with a 'warning': don't leave the dissolved juice in a cupboard for 21 days, or it will turn into ___.", "a": "wine", "lie": "brandy", "why": "Home winemaking was a legal loophole, so vintners sold the bricks and spelled out exactly what NOT to do.", "src": "Smithsonian Magazine"},
  // edward-love-chair, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Love_chair
  //   https://www.foxbusiness.com/markets/royal-love-chair-could-be-yours-for-68k
  {"id": "edward-love-chair", "topic": "history", "adult": true, "q": "The future Edward VII had a custom-made ___ delivered to the Paris brothel Le Chabanais.", "a": "love chair", "lie": "four-poster bed", "why": "Made by the firm Soubrier and designed with company in mind, it was shown at the Musée d'Orsay in 2015.", "src": "Fox Business"},
  // vagina-sheath, checked 2026-10-31
  //   https://en.wiktionary.org/wiki/vagina
  //   https://www.merriam-webster.com/dictionary/vagina
  {"id": "vagina-sheath", "topic": "language", "adult": true, "q": "The Latin word 'vagina' originally meant a ___ for a sword.", "a": "sheath", "lie": "handle", "why": "The anatomical sense is not recorded before the 1500s. The Romans already used the word as a sexual metaphor.", "src": "Merriam-Webster"},
  // penis-tail, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/penis
  //   https://en.wikipedia.org/wiki/Penis
  {"id": "penis-tail", "topic": "language", "adult": true, "q": "The Latin word 'penis' originally meant a ___.", "a": "tail", "lie": "spear", "why": "It was a euphemism that stuck. English first recorded it in 1578.", "src": "Merriam-Webster"},
  // tomcat-spines, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Cat_anatomy
  //   https://cdn.citl.illinois.edu/courses/ANSC207/week7/cat_repro/web_data/slides_and_notes.htm
  {"id": "tomcat-spines", "topic": "body", "adult": true, "q": "A tomcat's penis is covered in hundreds of tiny ___, which help trigger the female's ovulation.", "a": "spines", "lie": "hairs", "why": "Cats ovulate only when stimulated by mating. The spines depend on testosterone and vanish within weeks after castration.", "src": "University of Illinois"},
  // bundling-board, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Bundling_(tradition)
  //   https://daily.jstor.org/bundling-an-old-tradition-on-new-ground
  {"id": "bundling-board", "topic": "history", "adult": true, "q": "In colonial New England, a suitor could spend the night in bed with his sweetheart, as long as a ___ lay between them.", "a": "board", "lie": "curtain", "why": "It was called bundling. Courtship happened under the parents' roof, and some couples used a sleeping sack sewn shut down the middle.", "src": "JSTOR Daily"},
  // merkin-wig, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Merkin
  //   https://www.merriam-webster.com/dictionary/merkin
  {"id": "merkin-wig", "topic": "language", "adult": true, "q": "A 'merkin', a word recorded since 1617, is a wig made for the ___.", "a": "pubic area", "lie": "armpits", "why": "It is worn after shaving, for stage nudity or fun. The word probably comes from 'malkin', a pet form of Mary.", "src": "Merriam-Webster"},
  // french-letter-capote, checked 2026-10-31
  //   https://fr.wiktionary.org/wiki/capote_anglaise
  //   https://www.whiteswritingwhiteness.ed.ac.uk/blog/french-letters/
  {"id": "french-letter-capote", "topic": "history", "adult": true, "q": "Britons called condoms 'French letters'. The French returned the favour with 'capote anglaise', an English ___.", "a": "overcoat", "lie": "umbrella", "why": "Each nation blamed the other. The British term dates from the 1850s, a time of French invasion jitters.", "src": "University of Edinburgh"},
  // dunnock-cloaca-pecking, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Dunnock
  //   https://besgroup.org/2013/12/22/sex-and-the-birds-10-dunnock%e2%80%99s-mixed-bag-of-breeding-systems/
  {"id": "dunnock-cloaca-pecking", "topic": "nature", "adult": true, "q": "Before mating, a male dunnock pecks the female's ___ repeatedly so she ejects sperm from an earlier mating.", "a": "cloaca", "lie": "neck", "why": "The tiny brown bird's sex life is so competitive that biologist Nick Davies built a career on it.", "src": "Bird Ecology Study Group"},
  // berk-berkeley-hunt, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Cockney_rhyming_slang
  //   https://www.merriam-webster.com/dictionary/berk
  {"id": "berk-berkeley-hunt", "topic": "language", "adult": true, "q": "The mild British insult 'berk' is short for the Berkeley Hunt, a famous ___ whose name rhymes with a far ruder word.", "a": "fox hunt", "lie": "racecourse", "why": "It is usually traced to Cockney rhyming slang. Few people who say it realise what it stands in for.", "src": "Merriam-Webster"},
]});
