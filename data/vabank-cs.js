// Vabank cards (cs). One question, exactly 10 answers, each marked true or false.
// Every answer was checked against sources that were opened and read (URLs above the card).
// "knowledge": czech, european or worldwide (see data/README.md).
window.PB_VB = window.PB_VB || [];
PB_VB.push({ lang: 'cs', cards: [
  // botanical-berries, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Berry_(botany)
  //   https://en.wikipedia.org/wiki/Banana
  //   https://en.wikipedia.org/wiki/Eggplant
  //   https://en.wikipedia.org/wiki/Watermelon
  //   https://en.wikipedia.org/wiki/Kiwifruit
  {"id": "botanical-berries", "knowledge": "worldwide", "q": "Které z těchto plodů jsou botanicky bobule?", "items": [["banán", true], ["rajče", true], ["hroznové víno", true], ["kiwi", true], ["lilek", true], ["jahoda", false], ["malina", false], ["ostružina", false], ["třešeň", false], ["broskev", false]], "why": "Banán je pravá bobule, kdežto jahoda, malina a ostružina bobule nejsou.", "src": "Wikipedia"},
  // which-are-fish, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Fish
  //   https://en.wikipedia.org/wiki/Seahorse
  //   https://en.wikipedia.org/wiki/Manta_ray
  //   https://en.wikipedia.org/wiki/Swordfish
  {"id": "which-are-fish", "knowledge": "worldwide", "q": "Která z těchto zvířat jsou ryby?", "items": [["mořský koník", true], ["úhoř", true], ["mečoun", true], ["manta", true], ["žralok", true], ["delfín", false], ["medúza", false], ["hvězdice", false], ["sépie", false], ["rak", false]], "why": "Mořský koník je kostnatá ryba a manta ryba chrupavčitá, ale delfíni jsou savci.", "src": "Wikipedia"},
  // marsupials, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Marsupial
  //   https://en.wikipedia.org/wiki/Armadillo
  //   https://en.wikipedia.org/wiki/Lemur
  //   https://en.wikipedia.org/wiki/Meerkat
  {"id": "marsupials", "knowledge": "worldwide", "q": "Která z těchto zvířat jsou vačnatci?", "items": [["koala", true], ["wombat", true], ["vačice", true], ["vakoveverka", true], ["tasmánský čert", true], ["bandikut", true], ["poletucha sibiřská", false], ["pásovec", false], ["lemur", false], ["surikata", false]], "why": "Vačice jsou vačnatci a vakoveverka také, na rozdíl od placentální veverky letuchy.", "src": "Wikipedia"},
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
  {"id": "older-than-eiffel", "knowledge": "worldwide", "q": "Které z těchto věcí jsou starší než Eiffelova věž (1889)?", "items": [["Socha Svobody", true], ["Coca-Cola", true], ["Tádž Mahal", true], ["Brooklynský most", true], ["telefon", true], ["Tower Bridge", false], ["Empire State Building", false], ["Opera v Sydney", false], ["Mount Rushmore", false], ["nápis Hollywood", false]], "why": "Coca-Cola (1886) i Socha Svobody (1886) jsou starší než věž, ale Tower Bridge (1894) ne.", "src": "Wikipedia"},
  // landlocked, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Landlocked_country
  {"id": "landlocked", "knowledge": "worldwide", "q": "Které z těchto zemí nemají přístup k moři?", "items": [["Etiopie", true], ["Mongolsko", true], ["Paraguay", true], ["Srbsko", true], ["Laos", true], ["Bangladéš", false], ["Uruguay", false], ["Vietnam", false], ["Slovinsko", false], ["Litva", false]], "why": "Etiopie nemá pobřeží od roku 1993, kdy se osamostatnila Eritrea.", "src": "Wikipedia: Landlocked country"},
  // from-the-americas, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Columbian_exchange
  //   https://en.wikipedia.org/wiki/Vanilla
  {"id": "from-the-americas", "knowledge": "worldwide", "q": "Které z těchto plodin pocházejí původně z Ameriky?", "items": [["rajče", true], ["brambory", true], ["vanilka", true], ["ananas", true], ["arašídy", true], ["kukuřice", true], ["banán", false], ["káva", false], ["pomeranč", false], ["rýže", false]], "why": "Vanilka a čokoláda se do Evropy dostaly až ve 20. letech 16. století díky Cortésovi.", "src": "Wikipedia: Columbian exchange"},
  // human-bones, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_bones_of_the_human_skeleton
  //   https://en.wikipedia.org/wiki/Ulnar_nerve
  //   https://en.wikipedia.org/wiki/Laryngeal_prominence
  //   https://en.wikipedia.org/wiki/Achilles_tendon
  //   https://en.wikipedia.org/wiki/Human_nose
  //   https://en.wikipedia.org/wiki/Earlobe
  {"id": "human-bones", "knowledge": "worldwide", "q": "Které z těchto částí těla jsou skutečné kosti?", "items": [["jazylka", true], ["třmínek", true], ["čéška", true], ["hrudní kost", true], ["kostrč", true], ["meniskus", false], ["ohryzek", false], ["Achillova šlacha", false], ["ušní lalůček", false], ["špička nosu", false]], "why": "Meniskus v koleni je chrupavka a ohryzek také, takže ani jeden není kost.", "src": "Wikipedia"},
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
  {"id": "women-inventors", "knowledge": "worldwide", "q": "Které z těchto vynálezů vymyslela alespoň jedna žena?", "items": [["Kevlar", true], ["stěrače", true], ["domácí kamerový systém", true], ["Liquid Paper", true], ["Scotchgard", true], ["suchý zip", false], ["lepicí papírky", false], ["mikrovlnka", false], ["teflon", false], ["zip", false]], "why": "Mary Anderson si stěrač nechala patentovat v roce 1903 a Marie Van Brittan Brownová s manželem vymyslela domácí kamerový systém (1966).", "src": "Wikipedia"},
  // best-picture, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Academy_Award_for_Best_Picture
  //   https://en.wikipedia.org/wiki/Rocky_(film)
  //   https://en.wikipedia.org/wiki/The_Shawshank_Redemption
  //   https://en.wikipedia.org/wiki/50th_Academy_Awards
  //   https://en.wikipedia.org/wiki/48th_Academy_Awards
  {"id": "best-picture", "knowledge": "worldwide", "q": "Které z těchto filmů získaly Oscara za nejlepší film?", "items": [["Rocky", true], ["Statečné srdce", true], ["Titanic", true], ["Gladiátor", true], ["Parazit", true], ["Oppenheimer", true], ["Hvězdné války", false], ["Pulp Fiction", false], ["Čelisti", false], ["Matrix", false]], "why": "Hvězdné války a Čelisti byly nominovány na nejlepší film, ale prohrály, a Matrix nominován nebyl.", "src": "Wikipedia"},
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
  {"id": "older-than-pyramids", "knowledge": "worldwide", "q": "Které z těchto věcí jsou starší než Velká pyramida v Gíze (asi 2600 př. n. l.)?", "items": [["Newgrange", true], ["Göbekli Tepe", true], ["klínové písmo", true], ["ledový muž Ötzi", true], ["kolo", true], ["Koloseum", false], ["Parthenón", false], ["Velká čínská zeď", false], ["Machu Picchu", false], ["Petra", false]], "why": "Ötzi chodil po Alpách kolem roku 3250 př. n. l., staletí před stavbou Velké pyramidy.", "src": "Wikipedia"},
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
  {"id": "arabic-route", "knowledge": "worldwide", "q": "Která z těchto slov pocházejí z arabštiny?", "items": [["algebra", true], ["alkohol", true], ["káva", true], ["cukr", true], ["admirál", true], ["rajče", false], ["bungalov", false], ["šampon", false], ["džungle", false], ["pyžamo", false]], "why": "Admirál pochází z arabského amír, \"velitel\", kdežto šampon a džungle z hindštiny.", "src": "Wiktionary"},
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
  {"id": "capitals-not-biggest", "knowledge": "worldwide", "q": "Která z těchto hlavních měst NEJSOU největším městem své země?", "items": [["Canberra", true], ["Ankara", true], ["Bern", true], ["Ottawa", true], ["Wellington", true], ["Vídeň", false], ["Lisabon", false], ["Madrid", false], ["Budapešť", false], ["Atény", false]], "why": "Ottawa je teprve čtvrté největší město Kanady a Bern páté největší ve Švýcarsku.", "src": "Wikipedia"},
  // drive-on-left, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Left-_and_right-hand_traffic
  {"id": "drive-on-left", "knowledge": "worldwide", "q": "Ve kterých z těchto zemí se jezdí vlevo?", "items": [["Irsko", true], ["Japonsko", true], ["Kypr", true], ["Indonésie", true], ["Thajsko", true], ["Švédsko", false], ["Filipíny", false], ["Brazílie", false], ["Čína", false], ["Vietnam", false]], "why": "Švédsko jezdilo vlevo asi dvě století a přešlo na pravou stranu až v roce 1967.", "src": "Wikipedia"},
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
  {"id": "named-after-people", "knowledge": "worldwide", "q": "Která z těchto slov jsou pojmenována po člověku?", "items": [["sendvič", true], ["kardigan", true], ["diesel", true], ["braillovo písmo", true], ["saxofon", true], ["bojkot", true], ["hamburger", false], ["bikiny", false], ["džíny", false], ["smoking", false]], "why": "Bojkot pochází od Charlese Boycotta, irského správce půdy, kterého v roce 1880 lidé bojkotovali.", "src": "Wiktionary, Wikipedia"},
  // animals-in-space, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Animals_in_space
  //   https://en.wikipedia.org/wiki/Zond_5
  //   https://en.wikipedia.org/wiki/Tardigrade
  {"id": "animals-in-space", "knowledge": "worldwide", "q": "Která z těchto zvířat do konce roku 2025 letěla do vesmíru?", "items": [["želva", true], ["kočka", true], ["medúza", true], ["želvuška", true], ["pavouk", true], ["slon", false], ["kůň", false], ["delfín", false], ["tučňák", false], ["žirafa", false]], "why": "Dvě želvy obletěly Měsíc na sondě Zond 5 už v roce 1968, dřív než jakýkoli člověk.", "src": "Wikipedia"},
  // poland-borders, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Poland
  //   https://en.wikipedia.org/wiki/Kaliningrad_Oblast
  {"id": "poland-borders", "knowledge": "european", "q": "Které z těchto zemí sousedí s Polskem?", "items": [["Německo", true], ["Česko", true], ["Slovensko", true], ["Ukrajina", true], ["Bělorusko", true], ["Litva", true], ["Rusko", true], ["Maďarsko", false], ["Lotyšsko", false], ["Rakousko", false]], "why": "Rusko sousedí s Polskem přes svou kaliningradskou exklávu.", "src": "Wikipedia"},
  // brands-named-after-people, checked 2026-10-31
  //   https://www.todayifoundout.com/index.php/2013/03/how-nintendo-lego-adidas-and-17-other-major-companies-got-their-names/
  //   https://en.wikipedia.org/wiki/Mercedes-Benz
  //   https://en.wikipedia.org/wiki/Nokia
  //   https://en.wikipedia.org/wiki/Fiat_Automobiles
  {"id": "brands-named-after-people", "knowledge": "worldwide", "q": "Které z těchto značek se jmenují po skutečném člověku?", "items": [["Adidas", true], ["Honda", true], ["Boeing", true], ["Mercedes", true], ["Dell", true], ["Lego", false], ["Pepsi", false], ["Nokia", false], ["Adobe", false], ["Fiat", false]], "why": "Mercedes je jméno dcery Emila Jellinka, který auta objednával; Adidas je přezdívka Adiho Dasslera.", "src": "Wikipedie, Today I Found Out"},
  // spacecraft-touched-down, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_landings_on_extraterrestrial_bodies
  {"id": "spacecraft-touched-down", "knowledge": "worldwide", "q": "Na která z těchto těles do konce roku 2025 přistála sonda?", "items": [["Měsíc", true], ["Venuše", true], ["Mars", true], ["Titan", true], ["kometa 67P", true], ["Pluto", false], ["měsíc Europa", false], ["Neptun", false], ["Halleyova kometa", false], ["Saturn", false]], "why": "Huygens přistála na Saturnově měsíci Titan v roce 2005 a Philae poskočila na kometě 67P v roce 2014.", "src": "Wikipedie"},
  // elements-named-after-places, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_chemical_element_name_etymologies
  {"id": "elements-named-after-places", "knowledge": "worldwide", "q": "Které z těchto prvků jsou pojmenované po místě na Zemi?", "items": [["europium", true], ["hafnium", true], ["polonium", true], ["stroncium", true], ["ytterbium", true], ["curium", false], ["einsteinium", false], ["helium", false], ["neptunium", false], ["titan", false]], "why": "Hafnium je pojmenováno po Hafnii, latinském názvu Kodaně, a ytterbium po švédské vesnici Ytterby.", "src": "Wikipedie"},
  // discontinued-olympic-events, checked 2026-10-31
  //   https://www.topendsports.com/events/discontinued/list.htm
  {"id": "discontinued-olympic-events", "knowledge": "worldwide", "q": "Které z těchto disciplín byly kdysi na letních olympijských hrách medailové?", "items": [["přetahování lanem", true], ["pólo", true], ["kriket", true], ["šplh na laně", true], ["skok z místa do výšky", true], ["šachy", false], ["šipky", false], ["snooker", false], ["poker", false], ["vybíjená", false]], "why": "Kriket se na olympiádě hrál jen jednou, v roce 1900, a vrací se v roce 2028.", "src": "TopEndSports"},
  // musicians-oscar-winners, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Academy_Award_for_Best_Original_Song
  //   https://www.thecurrent.org/feature/2015/03/25/today-in-music-history-prince-takes-home-an-oscar
  //   https://en.wikipedia.org/wiki/I_Just_Called_to_Say_I_Love_You
  //   https://www.aol.com/articles/grammy-winner-becomes-oscars-biggest-151400273.html
  {"id": "musicians-oscar-winners", "knowledge": "worldwide", "q": "Kteří z těchto hudebníků získali soutěžního Oscara (stav po ceremoniálu 2026)?", "items": [["Bob Dylan", true], ["Eminem", true], ["Prince", true], ["Elton John", true], ["Lionel Richie", true], ["Billie Eilish", true], ["Stevie Wonder", true], ["Dolly Parton", false], ["Beyoncé", false], ["Diane Warren", false]], "why": "Diane Warren v roce 2026 prohrála už po sedmnácté a má jen čestného Oscara; Prince vyhrál za hudbu k filmu Purpurový déšť.", "src": "Wikipedie, The Current"},
  // brands-founded-in-sweden, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_companies_of_Sweden
  //   https://en.wikipedia.org/wiki/IKEA
  //   https://en.wikipedia.org/wiki/Philips
  //   https://en.wikipedia.org/wiki/Nespresso
  //   https://en.wikipedia.org/wiki/Lego
  {"id": "brands-founded-in-sweden", "knowledge": "european", "q": "Které z těchto značek vznikly ve Švédsku?", "items": [["IKEA", true], ["Spotify", true], ["H&M", true], ["Electrolux", true], ["Volvo", true], ["Nokia", false], ["Lego", false], ["Philips", false], ["Nespresso", false], ["Nestlé", false]], "why": "Nokia je finská, Lego dánské, Philips nizozemský a Nespresso švýcarské.", "src": "Wikipedie"},
  // si-base-units, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/SI_base_unit
  {"id": "si-base-units", "knowledge": "worldwide", "q": "Které z těchto jednotek jsou základními jednotkami soustavy SI?", "items": [["kilogram", true], ["kelvin", true], ["mol", true], ["kandela", true], ["ampér", true], ["gram", false], ["litr", false], ["volt", false], ["watt", false], ["stupeň Celsia", false]], "why": "Základní jednotkou je kilogram, ne gram, a mol počítá částice.", "src": "Wikipedie"},
  // world-cup-hosts-2022, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/FIFA_World_Cup
  {"id": "world-cup-hosts-2022", "knowledge": "worldwide", "q": "Která z těchto zemí do konce roku 2022 pořádala mistrovství světa ve fotbale mužů?", "items": [["USA", true], ["Švédsko", true], ["Švýcarsko", true], ["Chile", true], ["Katar", true], ["Nizozemsko", false], ["Portugalsko", false], ["Austrálie", false], ["Belgie", false], ["Dánsko", false]], "why": "Švýcarsko pořádalo v roce 1954 a Švédsko v roce 1958, Nizozemsko nikdy.", "src": "Wikipedie"},
  // eurovision-winners, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_Eurovision_Song_Contest_winners
  {"id": "eurovision-winners", "knowledge": "european", "q": "Kteří z těchto interpretů vyhráli Eurovizi?", "items": [["ABBA", true], ["Céline Dion", true], ["Måneskin", true], ["Loreen", true], ["Lordi", true], ["Conchita Wurst", true], ["Cliff Richard", false], ["Julio Iglesias", false], ["Olivia Newton-John", false], ["Engelbert Humperdinck", false]], "why": "Cliff Richard skončil v roce 1968 o jediný bod druhý a nikdy nevyhrál; Céline Dion vyhrála roku 1988 za Švýcarsko.", "src": "Wikipedie"},
  // cz-inventions, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_Czech_inventions_and_discoveries
  //   https://en.wikipedia.org/wiki/Remoska
  //   https://en.wikipedia.org/wiki/Karel_Kl%C3%AD%C4%8D
  //   https://en.wikipedia.org/wiki/Josef_Ressel
  {"id": "cz-inventions", "knowledge": "czech", "q": "Které z těchto věcí vynalezli Češi?", "items": [["měkké kontaktní čočky", true], ["Semtex", true], ["remoska", true], ["silon", true], ["nylon", false], ["dynamit", false], ["kuličkové pero", false], ["zip", false], ["suchý zip", false], ["Tetra Pak", false]], "why": "Otto Wichterle vynalezl měkké kontaktní čočky i silon, český protějšek nylonu, který vymysleli v USA.", "src": "Wikipedie"},
  // cz-real-villages, checked 2026-10-31
  //   https://cs.wikipedia.org/wiki/Hovězí
  //   https://cs.wikipedia.org/wiki/Zadní_Třebaň
  //   https://cs.wikipedia.org/wiki/Přední_Výtoň
  //   https://cs.wikipedia.org/wiki/Kobylí
  //   https://cs.wikipedia.org/wiki/Žabeň
  //   https://en.wikipedia.org/wiki/Hnojn%C3%ADk
  {"id": "cz-real-villages", "knowledge": "czech", "q": "Které z těchto obcí v Česku opravdu existují?", "items": [["Hovězí", true], ["Zadní Třebaň", true], ["Přední Výtoň", true], ["Kobylí", true], ["Žabeň", true], ["Hnojník", true], ["Horní Prdelka", false], ["Kozí Hospoda", false], ["Dolní Zázvorka", false], ["Zadní Hospoda", false]], "why": "Hovězí, Zadní Třebaň i Přední Výtoň jsou skutečné obce, ale v registru RÚIAN žádná Horní Prdelka není.", "src": "Wikipedie: hesla obcí"},
  // cz-cartoons-made-here, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Pat_%26_Mat
  //   https://en.wikipedia.org/wiki/Bolek_and_Lolek
  //   https://en.wikipedia.org/wiki/Maya_the_Bee
  //   https://en.wikipedia.org/wiki/Pingu
  //   https://en.wikipedia.org/wiki/The_Smurfs
  //   https://en.wikipedia.org/wiki/Rumcajs
  {"id": "cz-cartoons-made-here", "knowledge": "czech", "q": "Které z těchto kreslených postaviček vznikly v Československu?", "items": [["Krteček", true], ["Pat a Mat", true], ["Rumcajs", true], ["Maxipes Fík", true], ["Mach a Šebestová", true], ["Bob a Bobek", true], ["Bolek a Lolek", false], ["Včelka Mája", false], ["Šmoulové", false], ["Pingu", false]], "why": "Bolek a Lolek, stálice českého večerníčku, vznikli v Polsku ve studiu v Bielsku-Białé.", "src": "Wikipedie a Radio Prague"},
  // cz-car-makes, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Automotive_industry_in_the_Czech_Republic
  //   https://en.wikipedia.org/wiki/Wikov
  //   https://en.wikipedia.org/wiki/Tatra_(company)
  //   https://en.wikipedia.org/wiki/Trabant
  {"id": "cz-car-makes", "knowledge": "czech", "q": "Které z těchto značek aut se vyráběly v Československu?", "items": [["Tatra", true], ["Praga", true], ["Wikov", true], ["Walter", true], ["Aero", true], ["Laurin & Klement", true], ["Trabant", false], ["Wartburg", false], ["Zastava", false], ["Dacia", false]], "why": "Prostějovský Wikov vyráběl auta v letech 1925 až 1937, zatímco Trabant a Wartburg byly východoněmecké.", "src": "Wikipedie a Radio Prague"},
  // cz-rivers, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_rivers_of_the_Czech_Republic
  //   https://en.wikipedia.org/wiki/Lusatian_Neisse
  {"id": "cz-rivers", "knowledge": "czech", "q": "Které z těchto řek protékají Českem?", "items": [["Vltava", true], ["Labe", true], ["Morava", true], ["Odra", true], ["Lužická Nisa", true], ["Ohře", true], ["Dunaj", false], ["Visla", false], ["Rýn", false], ["Tisa", false]], "why": "Dunaj Českem neteče, jen do něj ústí Morava a Dyje, zato Lužická Nisa pramení u Liberce.", "src": "Wikipedie"},
  // cz-words-in-english, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_English_words_of_Czech_origin
  //   https://en.wiktionary.org/wiki/ketchup
  //   https://en.wiktionary.org/wiki/paprika
  //   https://en.wiktionary.org/wiki/goulash
  //   https://en.wiktionary.org/wiki/vodka
  //   https://en.wiktionary.org/wiki/pretzel
  {"id": "cz-words-in-english", "knowledge": "czech", "q": "Která z těchto anglických slov pocházejí z češtiny?", "items": [["robot", true], ["howitzer", true], ["kolache", true], ["háček", true], ["Semtex", true], ["goulash", false], ["ketchup", false], ["vodka", false], ["pretzel", false], ["paprika", false]], "why": "Howitzer pochází z husitské houfnice, kdežto ketchup nejspíš z čínské hokkienštiny.", "src": "Wikipedie, Wikislovník"},
  // cz-born-in-czechia, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_people_from_Brno
  //   https://en.wikipedia.org/wiki/Nikola_Tesla
  //   https://en.wikipedia.org/wiki/Johannes_Kepler
  //   https://en.wikipedia.org/wiki/B%C3%A9la_Bart%C3%B3k
  //   https://www.politicalgraveyard.com/group/czech-slovak.html
  {"id": "cz-born-in-czechia", "knowledge": "czech", "q": "Kdo z těchto lidí se narodil na území dnešního Česka?", "items": [["Sigmund Freud", true], ["Gregor Mendel", true], ["Gustav Mahler", true], ["Tom Stoppard", true], ["Kurt Gödel", true], ["Madeleine Albright", true], ["Albert Einstein", false], ["Nikola Tesla", false], ["Johannes Kepler", false], ["Béla Bartók", false]], "why": "Freud se narodil v Příboře, Mendel v Hynčicích, Mahler v Kališti a Stoppard ve Zlíně, ale Einstein v německém Ulmu.", "src": "Wikipedie a Radio Prague"},
  // cz-metro-stations, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_Prague_Metro_stations
  //   https://cs.wikipedia.org/wiki/Seznam_stanic_metra_v_Praze
  {"id": "cz-metro-stations", "knowledge": "czech", "q": "Které z těchto stanic opravdu existují v pražském metru (stav k roku 2026)?", "items": [["Skalka", true], ["Hůrka", true], ["Luka", true], ["Flora", true], ["Rajská zahrada", true], ["Kolbenova", true], ["Karlín", false], ["Žižkov", false], ["Hradčany", false], ["Letná", false]], "why": "Karlín ani Žižkov vlastní stanici nemají, zato Rajská zahrada ano.", "src": "Wikipedie: Seznam stanic metra v Praze"},
  // cz-old-metro-names, checked 2026-10-31
  //   https://cs.wikipedia.org/wiki/Seznam_stanic_metra_v_Praze
  //   https://www.seznamzpravy.cz/clanek/misto-lenina-evropska-misto-gottwalda-vysehrad-jak-jsme-si-prejmenovali-prahu-88864
  {"id": "cz-old-metro-names", "knowledge": "czech", "q": "Které z těchto názvů nesly stanice pražského metra před přejmenováním v roce 1990?", "items": [["Moskevská", true], ["Leninova", true], ["Kosmonautů", true], ["Fučíkova", true], ["Mládežnická", true], ["Primátora Vacka", true], ["Chodov", false], ["Opatov", false], ["Florenc", false], ["Vyšehrad", false]], "why": "Vyšehrad se do roku 1990 jmenoval Gottwaldova, Florenc Sokolovská a Chodov Budovatelů.", "src": "Wikipedie: Seznam stanic metra v Praze"},
  // cz-unesco, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_the_Czech_Republic
  //   https://whc.unesco.org/en/list/search=czechia&order=year
  {"id": "cz-unesco", "knowledge": "czech", "q": "Které z těchto míst jsou v Česku na seznamu UNESCO (stav k roku 2025)?", "items": [["Telč", true], ["Kutná Hora", true], ["Holašovice", true], ["zámek Litomyšl", true], ["Olomoucký morový sloup", true], ["Žatecká krajina chmele", true], ["hrad Karlštejn", false], ["zámek Hluboká", false], ["hrad Pernštejn", false], ["Moravský kras", false]], "why": "Na seznamu je morový sloup v Olomouci i chmelařská krajina kolem Žatce, ale Karlštejn ne.", "src": "UNESCO a Wikipedie"},
  // cz-kings-of-bohemia, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_monarchs_of_Bohemia
  //   https://english.radio.cz/node/8149860
  {"id": "cz-kings-of-bohemia", "knowledge": "czech", "q": "Kdo z těchto byl českým králem?", "items": [["Karel IV.", true], ["Přemysl Otakar II.", true], ["Jiří z Poděbrad", true], ["Rudolf II.", true], ["Václav IV.", true], ["Jan Lucemburský", true], ["svatý Václav", false], ["Bořivoj I.", false], ["Jan Žižka", false], ["Libuše", false]], "why": "Svatý Václav byl jen kníže a Libuše je pověstná vládkyně.", "src": "Wikipedie a Radio Prague"},
  // cz-oscar-films, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/List_of_Czech_Academy_Award_winners_and_nominees
  //   https://en.wikipedia.org/wiki/List_of_Czech_submissions_for_the_Academy_Award_for_Best_International_Feature_Film
  {"id": "cz-oscar-films", "knowledge": "czech", "q": "Které z těchto filmů získaly Oscara za cizojazyčný film, nebo na něj byly nominované?", "items": [["Ostře sledované vlaky", true], ["Hoří, má panenko", true], ["Vesničko má středisková", true], ["Obecná škola", true], ["Želary", true], ["Kolja", true], ["Tmavomodrý svět", false], ["Pelíšky", false], ["Vratné lahve", false], ["Samotáři", false]], "why": "Vesničko má středisková nominaci dostala, ale Tmavomodrý svět byl jen přihlášen a nominován nebyl.", "src": "Wikipedie"},
  // cz-mountain-ranges, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Orlick%C3%A9_Mountains
  //   https://cs.wikipedia.org/wiki/Geomorfologické_členění_Česka
  {"id": "cz-mountain-ranges", "knowledge": "czech", "q": "Které z těchto pohoří leží v Česku?", "items": [["Krkonoše", true], ["Brdy", true], ["Železné hory", true], ["Novohradské hory", true], ["Orlické hory", true], ["Rychlebské hory", true], ["Vysoké Tatry", false], ["Malá Fatra", false], ["Pieniny", false], ["Harz", false]], "why": "Brdy, Železné hory i Rychlebské hory leží v Česku, ale Tatry ne.", "src": "Wikipedie"},
  // cz-beers-brewed-here, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Beer_in_the_Czech_Republic
  //   https://en.wikipedia.org/wiki/Beer_in_Slovakia
  {"id": "cz-beers-brewed-here", "knowledge": "czech", "q": "Která z těchto piv se vaří v Česku?", "items": [["Budvar", true], ["Kozel", true], ["Gambrinus", true], ["Radegast", true], ["Svijany", true], ["Bernard", true], ["Zlatý Bažant", false], ["Šariš", false], ["Corgoň", false], ["Smädný Mních", false]], "why": "Šariš a Smädný Mních se vaří ve Veľkém Šarišu, Zlatý Bažant v Hurbanovu a Corgoň v Nitře, tedy na Slovensku.", "src": "Wikipedie"},
]});
