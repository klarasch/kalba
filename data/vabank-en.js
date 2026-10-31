// Bank or Bust cards (en). One question, exactly 10 answers, each marked true or false.
// Every answer was checked against sources that were opened and read (URLs above the card).
// "knowledge": czech, european or worldwide (see data/README.md).
window.PB_VB = window.PB_VB || [];
PB_VB.push({ lang: 'en', cards: [
  // botanical-berries, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Berry_(botany)
  //   https://en.wikipedia.org/wiki/Banana
  //   https://en.wikipedia.org/wiki/Eggplant
  //   https://en.wikipedia.org/wiki/Watermelon
  //   https://en.wikipedia.org/wiki/Kiwifruit
  {"id": "botanical-berries", "knowledge": "worldwide", "q": "Which of these are botanically berries?", "items": [["banana", true], ["tomato", true], ["grape", true], ["kiwi", true], ["eggplant", true], ["strawberry", false], ["raspberry", false], ["blackberry", false], ["cherry", false], ["peach", false]], "why": "A banana is a true berry, but strawberries, raspberries and blackberries are not.", "src": "Wikipedia"},
  // which-are-fish, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Fish
  //   https://en.wikipedia.org/wiki/Seahorse
  //   https://en.wikipedia.org/wiki/Manta_ray
  //   https://en.wikipedia.org/wiki/Swordfish
  {"id": "which-are-fish", "knowledge": "worldwide", "q": "Which of these are fish?", "items": [["seahorse", true], ["eel", true], ["swordfish", true], ["manta ray", true], ["shark", true], ["dolphin", false], ["jellyfish", false], ["starfish", false], ["cuttlefish", false], ["crayfish", false]], "why": "The seahorse is a bony fish and the manta a cartilaginous one, while dolphins are mammals.", "src": "Wikipedia"},
  // marsupials, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Marsupial
  //   https://en.wikipedia.org/wiki/Armadillo
  //   https://en.wikipedia.org/wiki/Lemur
  //   https://en.wikipedia.org/wiki/Meerkat
  {"id": "marsupials", "knowledge": "worldwide", "q": "Which of these are marsupials?", "items": [["koala", true], ["wombat", true], ["opossum", true], ["sugar glider", true], ["Tasmanian devil", true], ["bandicoot", true], ["flying squirrel", false], ["armadillo", false], ["lemur", false], ["meerkat", false]], "why": "The American opossum is a marsupial, and the sugar glider is one, unlike the placental flying squirrel.", "src": "Wikipedia"},
  // older-than-eiffel, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Eiffel_Tower
  //   https://en.wikipedia.org/wiki/Statue_of_Liberty
  //   https://en.wikipedia.org/wiki/Coca-Cola
  //   https://en.wikipedia.org/wiki/Taj_Mahal
  //   https://en.wikipedia.org/wiki/Brooklyn_Bridge
  //   https://en.wikipedia.org/wiki/Telephone
  //   https://en.wikipedia.org/wiki/Tower_Bridge
  //   https://en.wikipedia.org/wiki/Aspirin
  //   https://en.wikipedia.org/wiki/Sydney_Opera_House
  //   https://en.wikipedia.org/wiki/Zipper
  //   https://en.wikipedia.org/wiki/Hollywood_Sign
  //   https://en.wikipedia.org/wiki/Empire_State_Building
  //   https://en.wikipedia.org/wiki/Mount_Rushmore
  {"id": "older-than-eiffel", "knowledge": "worldwide", "q": "Which of these are older than the Eiffel Tower (1889)?", "items": [["Statue of Liberty", true], ["Coca-Cola", true], ["Taj Mahal", true], ["Brooklyn Bridge", true], ["Telephone", true], ["Tower Bridge", false], ["Empire State Building", false], ["Sydney Opera House", false], ["Mount Rushmore", false], ["Hollywood sign", false]], "why": "Coca-Cola (1886) and the Statue of Liberty (1886) both predate the tower, while Tower Bridge (1894) does not.", "src": "Wikipedia"},
  // landlocked, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Landlocked_country
  {"id": "landlocked", "knowledge": "worldwide", "q": "Which of these countries are landlocked?", "items": [["Ethiopia", true], ["Mongolia", true], ["Paraguay", true], ["Serbia", true], ["Laos", true], ["Bangladesh", false], ["Uruguay", false], ["Vietnam", false], ["Slovenia", false], ["Lithuania", false]], "why": "Ethiopia has had no coast since Eritrea became independent in 1993.", "src": "Wikipedia: Landlocked country"},
  // from-the-americas, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Columbian_exchange
  //   https://en.wikipedia.org/wiki/Vanilla
  {"id": "from-the-americas", "knowledge": "worldwide", "q": "Which of these crops come originally from the Americas?", "items": [["tomato", true], ["potato", true], ["vanilla", true], ["pineapple", true], ["peanut", true], ["maize", true], ["banana", false], ["coffee", false], ["orange", false], ["rice", false]], "why": "Vanilla and chocolate only reached Europe in the 1520s, brought by Cortés.", "src": "Wikipedia: Columbian exchange"},
  // human-bones, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_bones_of_the_human_skeleton
  //   https://en.wikipedia.org/wiki/Ulnar_nerve
  //   https://en.wikipedia.org/wiki/Laryngeal_prominence
  //   https://en.wikipedia.org/wiki/Achilles_tendon
  //   https://en.wikipedia.org/wiki/Human_nose
  //   https://en.wikipedia.org/wiki/Earlobe
  {"id": "human-bones", "knowledge": "worldwide", "q": "Which of these are real bones?", "items": [["hyoid", true], ["stapes", true], ["patella", true], ["sternum", true], ["coccyx", true], ["knee meniscus", false], ["Adam's apple", false], ["Achilles tendon", false], ["earlobe", false], ["tip of the nose", false]], "why": "The knee meniscus is cartilage and the Adam's apple too, so neither is a bone.", "src": "Wikipedia"},
  // women-inventors, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Stephanie_Kwolek
  //   https://en.wikipedia.org/wiki/Mary_Anderson_(inventor)
  //   https://en.wikipedia.org/wiki/Josephine_Cochrane
  //   https://en.wikipedia.org/wiki/Bette_Nesmith_Graham
  //   https://en.wikipedia.org/wiki/Patsy_Sherman
  //   https://en.wikipedia.org/wiki/Velcro
  //   https://en.wikipedia.org/wiki/Post-it_note
  //   https://en.wikipedia.org/wiki/Microwave_oven
  //   https://en.wikipedia.org/wiki/Polytetrafluoroethylene
  //   https://en.wikipedia.org/wiki/Marie_Van_Brittan_Brown
  {"id": "women-inventors", "knowledge": "worldwide", "q": "Which of these were (co-)invented by a woman?", "items": [["Kevlar", true], ["Windshield wipers", true], ["Home security system", true], ["Liquid Paper", true], ["Scotchgard", true], ["Velcro", false], ["Post-it notes", false], ["Microwave oven", false], ["Teflon", false], ["Zipper", false]], "why": "Mary Anderson patented the windshield wiper in 1903, and Marie Van Brittan Brown co-invented the home security system in 1966.", "src": "Wikipedia"},
  // best-picture, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Academy_Award_for_Best_Picture
  //   https://en.wikipedia.org/wiki/Rocky_(film)
  //   https://en.wikipedia.org/wiki/The_Shawshank_Redemption
  //   https://en.wikipedia.org/wiki/50th_Academy_Awards
  //   https://en.wikipedia.org/wiki/48th_Academy_Awards
  {"id": "best-picture", "knowledge": "worldwide", "q": "Which of these films won the Oscar for Best Picture?", "items": [["Rocky", true], ["Braveheart", true], ["Titanic", true], ["Gladiator", true], ["Parasite", true], ["Oppenheimer", true], ["Star Wars", false], ["Pulp Fiction", false], ["Jaws", false], ["The Matrix", false]], "why": "Star Wars and Jaws were nominated for Best Picture but lost, and The Matrix was never nominated.", "src": "Wikipedia"},
  // older-than-pyramids, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza
  //   https://en.wikipedia.org/wiki/Stonehenge
  //   https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe
  //   https://en.wikipedia.org/wiki/%C3%96tzi
  //   https://en.wikipedia.org/wiki/Cuneiform
  //   https://en.wikipedia.org/wiki/Wheel
  //   https://en.wikipedia.org/wiki/Colosseum
  //   https://en.wikipedia.org/wiki/Great_Wall_of_China
  //   https://en.wikipedia.org/wiki/Parthenon
  //   https://en.wikipedia.org/wiki/Machu_Picchu
  //   https://en.wikipedia.org/wiki/Petra
  //   https://en.wikipedia.org/wiki/Newgrange
  {"id": "older-than-pyramids", "knowledge": "worldwide", "q": "Which of these are older than the Great Pyramid of Giza (c. 2600 BC)?", "items": [["Newgrange", true], ["Göbekli Tepe", true], ["Cuneiform script", true], ["Ötzi the Iceman", true], ["The wheel", true], ["Colosseum", false], ["Parthenon", false], ["Great Wall of China", false], ["Machu Picchu", false], ["Petra", false]], "why": "Ötzi walked the Alps around 3250 BC, centuries before the Great Pyramid was built.", "src": "Wikipedia"},
  // arabic-route, checked 2026-10-31
  //   https://en.wiktionary.org/wiki/algebra
  //   https://en.wiktionary.org/wiki/alcohol
  //   https://en.wiktionary.org/wiki/coffee
  //   https://en.wiktionary.org/wiki/sugar
  //   https://en.wiktionary.org/wiki/admiral
  //   https://en.wikipedia.org/wiki/Tomato
  //   https://en.wiktionary.org/wiki/bungalow
  //   https://en.wiktionary.org/wiki/shampoo
  //   https://en.wiktionary.org/wiki/jungle
  //   https://en.wiktionary.org/wiki/pajamas
  {"id": "arabic-route", "knowledge": "worldwide", "q": "Which of these English words come from Arabic?", "items": [["algebra", true], ["alcohol", true], ["coffee", true], ["sugar", true], ["admiral", true], ["tomato", false], ["bungalow", false], ["shampoo", false], ["jungle", false], ["pajamas", false]], "why": "Admiral comes from Arabic amir, \"commander\", while shampoo and jungle come from Hindi.", "src": "Wiktionary"},
  // capitals-not-biggest, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Canberra
  //   https://en.wikipedia.org/wiki/Ankara
  //   https://en.wikipedia.org/wiki/Bern
  //   https://en.wikipedia.org/wiki/Ottawa
  //   https://en.wikipedia.org/wiki/Wellington
  //   https://en.wikipedia.org/wiki/Vienna
  //   https://en.wikipedia.org/wiki/Lisbon
  //   https://en.wikipedia.org/wiki/Madrid
  //   https://en.wikipedia.org/wiki/Budapest
  //   https://en.wikipedia.org/wiki/Athens
  {"id": "capitals-not-biggest", "knowledge": "worldwide", "q": "Which of these capitals are NOT the biggest city in their country?", "items": [["Canberra", true], ["Ankara", true], ["Bern", true], ["Ottawa", true], ["Wellington", true], ["Vienna", false], ["Lisbon", false], ["Madrid", false], ["Budapest", false], ["Athens", false]], "why": "Ottawa is only the fourth-largest city in Canada and Bern the fifth in Switzerland.", "src": "Wikipedia"},
  // drive-on-left, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Left-_and_right-hand_traffic
  {"id": "drive-on-left", "knowledge": "worldwide", "q": "In which of these countries do cars drive on the left?", "items": [["Ireland", true], ["Japan", true], ["Cyprus", true], ["Indonesia", true], ["Thailand", true], ["Sweden", false], ["Philippines", false], ["Brazil", false], ["China", false], ["Vietnam", false]], "why": "Sweden drove on the left for about two centuries and switched only in 1967.", "src": "Wikipedia"},
  // named-after-people, checked 2026-10-31
  //   https://en.wiktionary.org/wiki/cardigan
  //   https://en.wiktionary.org/wiki/saxophone
  //   https://en.wiktionary.org/wiki/braille
  //   https://en.wiktionary.org/wiki/diesel
  //   https://en.wiktionary.org/wiki/boycott
  //   https://en.wikipedia.org/wiki/Eponym
  //   https://en.wiktionary.org/wiki/hamburger
  //   https://en.wiktionary.org/wiki/bikini
  //   https://en.wiktionary.org/wiki/jeans
  //   https://en.wiktionary.org/wiki/tuxedo
  {"id": "named-after-people", "knowledge": "worldwide", "q": "Which of these words are named after a person?", "items": [["sandwich", true], ["cardigan", true], ["diesel", true], ["braille", true], ["saxophone", true], ["boycott", true], ["hamburger", false], ["bikini", false], ["jeans", false], ["tuxedo", false]], "why": "Boycott comes from Charles Boycott, an Irish land agent shunned in 1880.", "src": "Wiktionary, Wikipedia"},
  // animals-in-space, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Animals_in_space
  //   https://en.wikipedia.org/wiki/Zond_5
  //   https://en.wikipedia.org/wiki/Tardigrade
  {"id": "animals-in-space", "knowledge": "worldwide", "q": "By the end of 2025, which of these animals have flown in space?", "items": [["tortoise", true], ["cat", true], ["jellyfish", true], ["tardigrade", true], ["spider", true], ["elephant", false], ["horse", false], ["dolphin", false], ["penguin", false], ["giraffe", false]], "why": "Two tortoises circled the Moon on Zond 5 in 1968, before any human did.", "src": "Wikipedia"},
  // poland-borders, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Poland
  //   https://en.wikipedia.org/wiki/Kaliningrad_Oblast
  {"id": "poland-borders", "knowledge": "european", "q": "Which of these countries border Poland?", "items": [["Germany", true], ["Czechia", true], ["Slovakia", true], ["Ukraine", true], ["Belarus", true], ["Lithuania", true], ["Russia", true], ["Hungary", false], ["Latvia", false], ["Austria", false]], "why": "Russia borders Poland through its Kaliningrad exclave.", "src": "Wikipedia"},
  // brands-named-after-people, checked 2026-10-31
  //   https://www.todayifoundout.com/index.php/2013/03/how-nintendo-lego-adidas-and-17-other-major-companies-got-their-names/
  //   https://en.wikipedia.org/wiki/Mercedes-Benz
  //   https://en.wikipedia.org/wiki/Nokia
  //   https://en.wikipedia.org/wiki/Fiat_Automobiles
  {"id": "brands-named-after-people", "knowledge": "worldwide", "q": "Which of these brand names come from a person?", "items": [["Adidas", true], ["Honda", true], ["Boeing", true], ["Mercedes", true], ["Dell", true], ["Lego", false], ["Pepsi", false], ["Nokia", false], ["Adobe", false], ["Fiat", false]], "why": "Mercedes is named after Mercedes Jellinek, the daughter of the businessman who ordered the cars; Adidas is Adi Dassler's nickname.", "src": "Wikipedia, Today I Found Out"},
  // spacecraft-touched-down, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_landings_on_extraterrestrial_bodies
  {"id": "spacecraft-touched-down", "knowledge": "worldwide", "q": "By the end of 2025, which of these have had a spacecraft land on them?", "items": [["the Moon", true], ["Venus", true], ["Mars", true], ["Titan", true], ["Comet 67P", true], ["Pluto", false], ["Europa (moon)", false], ["Neptune", false], ["Halley's Comet", false], ["Saturn", false]], "why": "Huygens touched down on Saturn's moon Titan in 2005, and Philae bounced onto Comet 67P in 2014.", "src": "Wikipedia"},
  // elements-named-after-places, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_chemical_element_name_etymologies
  {"id": "elements-named-after-places", "knowledge": "worldwide", "q": "Which of these elements are named after a place on Earth?", "items": [["Europium", true], ["Hafnium", true], ["Polonium", true], ["Strontium", true], ["Ytterbium", true], ["Curium", false], ["Einsteinium", false], ["Helium", false], ["Neptunium", false], ["Titanium", false]], "why": "Hafnium is named after Hafnia, the Latin name of Copenhagen, and ytterbium after the Swedish village of Ytterby.", "src": "Wikipedia"},
  // discontinued-olympic-events, checked 2026-10-31
  //   https://www.topendsports.com/events/discontinued/list.htm
  {"id": "discontinued-olympic-events", "knowledge": "worldwide", "q": "Which of these were once medal events at the Summer Olympics?", "items": [["Tug of war", true], ["Polo", true], ["Cricket", true], ["Rope climbing", true], ["Standing high jump", true], ["Chess", false], ["Darts", false], ["Snooker", false], ["Poker", false], ["Dodgeball", false]], "why": "Cricket was played at the Olympics once, in 1900, and returns in 2028.", "src": "TopEndSports"},
  // musicians-oscar-winners, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Academy_Award_for_Best_Original_Song
  //   https://www.thecurrent.org/feature/2015/03/25/today-in-music-history-prince-takes-home-an-oscar
  //   https://en.wikipedia.org/wiki/I_Just_Called_to_Say_I_Love_You
  //   https://www.aol.com/articles/grammy-winner-becomes-oscars-biggest-151400273.html
  {"id": "musicians-oscar-winners", "knowledge": "worldwide", "q": "As of the 2026 ceremony, which of these musicians have won a competitive Oscar?", "items": [["Bob Dylan", true], ["Eminem", true], ["Prince", true], ["Elton John", true], ["Lionel Richie", true], ["Billie Eilish", true], ["Stevie Wonder", true], ["Dolly Parton", false], ["Beyoncé", false], ["Diane Warren", false]], "why": "Diane Warren lost again in 2026 for her 17th nomination and still has only an honorary Oscar; Prince won for the Purple Rain score.", "src": "Wikipedia, The Current"},
  // brands-founded-in-sweden, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_companies_of_Sweden
  //   https://en.wikipedia.org/wiki/IKEA
  //   https://en.wikipedia.org/wiki/Philips
  //   https://en.wikipedia.org/wiki/Nespresso
  //   https://en.wikipedia.org/wiki/Lego
  {"id": "brands-founded-in-sweden", "knowledge": "european", "q": "Which of these brands were founded in Sweden?", "items": [["IKEA", true], ["Spotify", true], ["H&M", true], ["Electrolux", true], ["Volvo", true], ["Nokia", false], ["Lego", false], ["Philips", false], ["Nespresso", false], ["Nestlé", false]], "why": "Nokia is Finnish, Lego Danish, Philips Dutch and Nespresso Swiss.", "src": "Wikipedia"},
  // si-base-units, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/SI_base_unit
  {"id": "si-base-units", "knowledge": "worldwide", "q": "Which of these are SI base units?", "items": [["kilogram", true], ["kelvin", true], ["mole", true], ["candela", true], ["ampere", true], ["gram", false], ["litre", false], ["volt", false], ["watt", false], ["degree Celsius", false]], "why": "The kilogram is the base unit, not the gram, and the mole counts particles.", "src": "Wikipedia"},
  // world-cup-hosts-2022, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/FIFA_World_Cup
  {"id": "world-cup-hosts-2022", "knowledge": "worldwide", "q": "By the end of 2022, which of these countries had hosted the men's football World Cup?", "items": [["USA", true], ["Sweden", true], ["Switzerland", true], ["Chile", true], ["Qatar", true], ["Netherlands", false], ["Portugal", false], ["Australia", false], ["Belgium", false], ["Denmark", false]], "why": "Switzerland hosted in 1954 and Sweden in 1958, but the Netherlands never has.", "src": "Wikipedia"},
  // eurovision-winners, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_Eurovision_Song_Contest_winners
  {"id": "eurovision-winners", "knowledge": "european", "q": "Which of these acts have won Eurovision?", "items": [["ABBA", true], ["Céline Dion", true], ["Måneskin", true], ["Loreen", true], ["Lordi", true], ["Conchita Wurst", true], ["Cliff Richard", false], ["Julio Iglesias", false], ["Olivia Newton-John", false], ["Engelbert Humperdinck", false]], "why": "Cliff Richard finished second in 1968, one point behind Spain, and never won; Celine Dion won in 1988 for Switzerland.", "src": "Wikipedia"},
  // cz-inventions, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_Czech_inventions_and_discoveries
  //   https://en.wikipedia.org/wiki/Remoska
  //   https://en.wikipedia.org/wiki/Karel_Kl%C3%AD%C4%8D
  //   https://en.wikipedia.org/wiki/Josef_Ressel
  {"id": "cz-inventions", "knowledge": "czech", "q": "Which of these were invented by Czechs?", "items": [["soft contact lens", true], ["Semtex", true], ["Remoska", true], ["Silon (fibre)", true], ["nylon", false], ["dynamite", false], ["ballpoint pen", false], ["zipper", false], ["Velcro", false], ["Tetra Pak", false]], "why": "Otto Wichterle invented both the soft contact lens and Silon, a Czech cousin of nylon, which came from the USA.", "src": "Wikipedia"},
  // cz-real-villages, checked 2026-10-31
  //   https://cs.wikipedia.org/wiki/Hovězí
  //   https://cs.wikipedia.org/wiki/Zadní_Třebaň
  //   https://cs.wikipedia.org/wiki/Přední_Výtoň
  //   https://cs.wikipedia.org/wiki/Kobylí
  //   https://cs.wikipedia.org/wiki/Žabeň
  //   https://en.wikipedia.org/wiki/Hnojn%C3%ADk
  {"id": "cz-real-villages", "knowledge": "czech", "q": "Which of these are real Czech villages?", "items": [["Hovězí", true], ["Zadní Třebaň", true], ["Přední Výtoň", true], ["Kobylí", true], ["Žabeň", true], ["Hnojník", true], ["Horní Prdelka", false], ["Kozí Hospoda", false], ["Dolní Zázvorka", false], ["Zadní Hospoda", false]], "why": "Hovězí (beef), Zadní Třebaň and Přední Výtoň are real municipalities, but the official RÚIAN register has no Horní Prdelka.", "src": "Czech Wikipedia: municipality articles"},
  // cz-cartoons-made-here, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Pat_%26_Mat
  //   https://en.wikipedia.org/wiki/Bolek_and_Lolek
  //   https://en.wikipedia.org/wiki/Maya_the_Bee
  //   https://en.wikipedia.org/wiki/Pingu
  //   https://en.wikipedia.org/wiki/The_Smurfs
  //   https://en.wikipedia.org/wiki/Rumcajs
  {"id": "cz-cartoons-made-here", "knowledge": "czech", "q": "Which of these cartoon characters were created in Czechoslovakia?", "items": [["Mole (Krtek)", true], ["Pat & Mat", true], ["Rumcajs", true], ["Maxipes Fík", true], ["Mach & Šebestová", true], ["Bob & Bobek", true], ["Bolek and Lolek", false], ["Maya the Bee", false], ["The Smurfs", false], ["Pingu", false]], "why": "Bolek and Lolek, a staple of Czech bedtime TV, were made in Poland at the Bielsko-Biała studio.", "src": "Wikipedia: Bolek and Lolek, Pat & Mat, Rumcajs"},
  // cz-car-makes, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Automotive_industry_in_the_Czech_Republic
  //   https://en.wikipedia.org/wiki/Wikov
  //   https://en.wikipedia.org/wiki/Tatra_(company)
  //   https://en.wikipedia.org/wiki/Trabant
  {"id": "cz-car-makes", "knowledge": "czech", "q": "Which of these car makes were built in Czechoslovakia?", "items": [["Tatra", true], ["Praga", true], ["Wikov", true], ["Walter", true], ["Aero", true], ["Laurin & Klement", true], ["Trabant", false], ["Wartburg", false], ["Zastava", false], ["Dacia", false]], "why": "Wikov of Prostějov built cars from 1925 to 1937, while Trabant and Wartburg were East German.", "src": "Wikipedia: Automotive industry in the Czech Republic; Wikov"},
  // cz-rivers, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_rivers_of_the_Czech_Republic
  //   https://en.wikipedia.org/wiki/Lusatian_Neisse
  {"id": "cz-rivers", "knowledge": "czech", "q": "Which of these rivers flow through Czechia?", "items": [["Vltava", true], ["Elbe", true], ["Morava", true], ["Oder", true], ["Lusatian Neisse", true], ["Ohře", true], ["Danube", false], ["Vistula", false], ["Rhine", false], ["Tisza", false]], "why": "The Danube never touches Czechia, though the Morava and Dyje drain into it, while the Lusatian Neisse rises near Liberec.", "src": "Wikipedia: List of rivers of the Czech Republic"},
  // cz-words-in-english, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_English_words_of_Czech_origin
  //   https://en.wiktionary.org/wiki/ketchup
  //   https://en.wiktionary.org/wiki/paprika
  //   https://en.wiktionary.org/wiki/goulash
  //   https://en.wiktionary.org/wiki/vodka
  //   https://en.wiktionary.org/wiki/pretzel
  {"id": "cz-words-in-english", "knowledge": "czech", "q": "Which of these English words come from Czech?", "items": [["robot", true], ["howitzer", true], ["kolache", true], ["háček", true], ["Semtex", true], ["goulash", false], ["ketchup", false], ["vodka", false], ["pretzel", false], ["paprika", false]], "why": "Howitzer goes back to the Hussite catapult houfnice, while ketchup most likely comes from Hokkien Chinese.", "src": "Wikipedia, Wiktionary"},
  // cz-born-in-czechia, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_people_from_Brno
  //   https://en.wikipedia.org/wiki/Nikola_Tesla
  //   https://en.wikipedia.org/wiki/Johannes_Kepler
  //   https://en.wikipedia.org/wiki/B%C3%A9la_Bart%C3%B3k
  //   https://www.politicalgraveyard.com/group/czech-slovak.html
  {"id": "cz-born-in-czechia", "knowledge": "czech", "q": "Which of these people were born in what is now Czechia?", "items": [["Sigmund Freud", true], ["Gregor Mendel", true], ["Gustav Mahler", true], ["Tom Stoppard", true], ["Kurt Gödel", true], ["Madeleine Albright", true], ["Albert Einstein", false], ["Nikola Tesla", false], ["Johannes Kepler", false], ["Béla Bartók", false]], "why": "Freud was born in Příbor, Mendel in Hynčice, Mahler in Kaliště and Stoppard in Zlín, while Einstein was born in Ulm.", "src": "Wikipedia and Radio Prague"},
  // cz-metro-stations, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_Prague_Metro_stations
  //   https://cs.wikipedia.org/wiki/Seznam_stanic_metra_v_Praze
  {"id": "cz-metro-stations", "knowledge": "czech", "q": "As of 2026, which of these are real Prague metro station names?", "items": [["Skalka", true], ["Hůrka", true], ["Luka", true], ["Flora", true], ["Rajská zahrada", true], ["Kolbenova", true], ["Karlín", false], ["Žižkov", false], ["Hradčany", false], ["Letná", false]], "why": "Karlín and Žižkov are districts without a station of their own, while Rajská zahrada (Paradise Garden) is a real one.", "src": "Wikipedia: List of Prague Metro stations"},
  // cz-old-metro-names, checked 2026-10-31
  //   https://cs.wikipedia.org/wiki/Seznam_stanic_metra_v_Praze
  //   https://www.seznamzpravy.cz/clanek/misto-lenina-evropska-misto-gottwalda-vysehrad-jak-jsme-si-prejmenovali-prahu-88864
  {"id": "cz-old-metro-names", "knowledge": "czech", "q": "Which of these were names of Prague metro stations before the 1990 renaming?", "items": [["Moskevská", true], ["Leninova", true], ["Kosmonautů", true], ["Fučíkova", true], ["Mládežnická", true], ["Primátora Vacka", true], ["Chodov", false], ["Opatov", false], ["Florenc", false], ["Vyšehrad", false]], "why": "Vyšehrad was Gottwaldova, Florenc was Sokolovská and Chodov was Budovatelů until 12 stations were renamed in 1990.", "src": "Wikipedia: List of Prague Metro stations"},
  // cz-unesco, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_the_Czech_Republic
  //   https://whc.unesco.org/en/list/search=czechia&order=year
  {"id": "cz-unesco", "knowledge": "czech", "q": "Which of these are UNESCO World Heritage Sites in Czechia (as of 2025)?", "items": [["Telč", true], ["Kutná Hora", true], ["Holašovice", true], ["Litomyšl Castle", true], ["Olomouc plague column", true], ["Žatec hop landscape", true], ["Karlštejn Castle", false], ["Hluboká Castle", false], ["Pernštejn Castle", false], ["Moravian Karst", false]], "why": "A plague column in Olomouc and the hop fields around Žatec are listed, but Karlštejn is not.", "src": "UNESCO and Wikipedia"},
  // cz-kings-of-bohemia, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_monarchs_of_Bohemia
  //   https://english.radio.cz/node/8149860
  {"id": "cz-kings-of-bohemia", "knowledge": "czech", "q": "Which of these ruled as King of Bohemia?", "items": [["Charles IV", true], ["Přemysl Otakar II", true], ["George of Poděbrady", true], ["Rudolf II", true], ["Wenceslaus IV", true], ["John of Luxembourg", true], ["Saint Wenceslas", false], ["Bořivoj I", false], ["Jan Žižka", false], ["Libuše", false]], "why": "Good King Wenceslas was only a duke of Bohemia, and Libuše is a legendary ruler.", "src": "Wikipedia: List of monarchs of Bohemia; Radio Prague"},
  // cz-oscar-films, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_Czech_Academy_Award_winners_and_nominees
  //   https://en.wikipedia.org/wiki/List_of_Czech_submissions_for_the_Academy_Award_for_Best_International_Feature_Film
  {"id": "cz-oscar-films", "knowledge": "czech", "q": "Which of these films won or were nominated for the Oscar for Best Foreign Language Film?", "items": [["Closely Watched Trains", true], ["The Firemen's Ball", true], ["My Sweet Little Village", true], ["The Elementary School", true], ["Želary", true], ["Kolya", true], ["Dark Blue World", false], ["Pelíšky", false], ["Empties", false], ["Loners", false]], "why": "My Sweet Little Village was nominated, but Dark Blue World was only submitted and never nominated.", "src": "Wikipedia: List of Czech Academy Award winners and nominees"},
  // cz-mountain-ranges, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Orlick%C3%A9_Mountains
  //   https://cs.wikipedia.org/wiki/Geomorfologické_členění_Česka
  {"id": "cz-mountain-ranges", "knowledge": "czech", "q": "Which of these are mountain ranges in Czechia?", "items": [["Krkonoše", true], ["Brdy", true], ["Železné hory", true], ["Novohradské hory", true], ["Orlické hory", true], ["Rychlebské hory", true], ["High Tatras", false], ["Malá Fatra", false], ["Pieniny", false], ["Harz", false]], "why": "Brdy, Železné hory and Rychlebské hory are all in Czechia, but the Tatras are not.", "src": "Wikipedia: Geomorfologické členění Česka"},
  // cz-beers-brewed-here, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Beer_in_the_Czech_Republic
  //   https://en.wikipedia.org/wiki/Beer_in_Slovakia
  {"id": "cz-beers-brewed-here", "knowledge": "czech", "q": "Which of these beers are brewed in Czechia?", "items": [["Budvar", true], ["Kozel", true], ["Gambrinus", true], ["Radegast", true], ["Svijany", true], ["Bernard", true], ["Zlatý Bažant", false], ["Šariš", false], ["Corgoň", false], ["Smädný Mních", false]], "why": "Šariš and Smädný Mních are brewed in Veľký Šariš, Zlatý Bažant in Hurbanovo and Corgoň in Nitra, all in Slovakia.", "src": "Wikipedia: Beer in the Czech Republic, Beer in Slovakia"},
]});
