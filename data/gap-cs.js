// The Gap / Díra facts (cs). Every fact must be TRUE.
// Each fact was checked against at least two sources that were opened and read (URLs above it).
// To add one: same fields, two sources, then run the second check before committing.
// A good fact is little known (not school history, not pub trivia), the gap invites funny fakes
// (a thing, not a number or a date) and nobody's illness, death or misfortune is the punchline.
// "adult": true puts a fact in the 18+ set, which only plays when the table switches it on.
window.PB_GAP = window.PB_GAP || [];
PB_GAP.push({ lang: 'cs', facts: [
  // pistol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pistol
  //   https://www.dictionary.com/browse/pistol
  //   https://en.wikipedia.org/wiki/Pistol
  {"id": "pistol", "topic": "language", "q": "Anglické slovo „pistol“ nejspíš pochází z českého slova ___.", "a": "píšťala", "lie": "bič", "why": "Husité tak říkali lehké ruční palné zbrani. Do angličtiny slovo doputovalo přes němčinu a francouzštinu.", "src": "Merriam-Webster"},
  // brambor, checked 2026-10-31
  //   https://macau.uni-kiel.de/servlets/MCRFileNodeServlet/macau_derivate_00006618//kiel-up_2750-9605_p4.pdf
  //   https://en.wiktionary.org/wiki/brambor
  {"id": "brambor", "topic": "language", "q": "Česká „brambora“ dostala jméno podle země, odkud k nám podle tradice přišla: ___.", "a": "Braniborsko", "lie": "Bavorsko", "why": "Etymologové (Machek, Rejzek) ho vykládají jako „plodinu z Branibor“. Přinést ji měli pruští vojáci v 18. století.", "src": "Kiel-UP: J. Šnejdrlová, Názvy bramboru"},
  // semtex, checked 2026-10-31
  //   https://www.csmonitor.com/2002/0226/p07s02-woeu.html
  //   https://en.wikipedia.org/wiki/Semtex
  //   https://explosia.cz/historie/
  {"id": "semtex", "topic": "places", "q": "Výbušnina Semtex má jméno podle místa u Pardubic: ___.", "a": "Semtín", "lie": "Semily", "why": "Vynalezli ji tamní chemici a vyrábí se tam od 60. let 20. století, dnes v podniku Explosia.", "src": "The Christian Science Monitor"},
  // wombat, checked 2026-10-31
  //   https://www.australiangeographic.com.au/news/2021/02/why-do-wombats-have-cube-shaped-poo-scientists-may-have-solved-the-mystery/
  //   https://www.sci.news/biology/wombat-square-shaped-feces-09314.html
  //   https://en.wikipedia.org/wiki/Common_wombat
  {"id": "wombat", "topic": "nature", "q": "Trus vombata má neobvyklý tvar: ___.", "a": "kostka", "lie": "hvězdička", "why": "Tvar vzniká ve střevě, které má tužší a pružnější úseky. Kostky kladou na nápadná místa jako vzkaz ostatním.", "src": "Australian Geographic"},
  // koala, checked 2026-10-31
  //   https://www.pbs.org/wgbh/nova/article/koala-fingerprints/
  //   https://indianapublicmedia.org/amomentofscience/humans-arent-unique-when-it-comes-to-fingerprints.php
  {"id": "koala", "topic": "nature", "q": "Jediné zvíře mimo primáty, které má otisky prstů nápadně podobné lidským: ___.", "a": "koala", "lie": "lenochod", "why": "Vyvinuly se nezávisle na našich, nejspíš kvůli uchopování eukalyptových větví a listů.", "src": "PBS NOVA"},
  // ketchup, checked 2026-10-31
  //   https://www.wnyc.org/story/ketchup-the-all-american-condiment-that-comes-from-asia
  //   https://www.csmonitor.com/The-Culture/In-a-Word/2023/0410/The-origins-of-ketchup-or-catsup-run-through-fish-sauce
  //   https://en.wikipedia.org/wiki/Ketchup
  {"id": "ketchup", "topic": "food", "q": "Původní asijský „kečup“ se nedělal z rajčat, ale z tohohle: ___.", "a": "ryby", "lie": "švestky", "why": "Byl to nálev z nakládaných ryb z jižní Číny. První recept na rajčatový kečup vyšel v USA až v roce 1812.", "src": "WNYC / NPR"},
  // tycho-nose, checked 2026-10-31
  //   https://muzeum3000.nm.cz/national-museum-news/research-of-the-tomb-and-remains-of-tycho-brahe
  //   https://en.wikipedia.org/wiki/Tycho_Brahe
  {"id": "tycho-nose", "topic": "history", "q": "Astronom Tycho Brahe přišel v souboji o kus nosu a nosil protézu. Rozbor jeho ostatků exhumovaných v roce 2010 ukázal, že nebyla ze zlata ani ze stříbra, ale z tohoto kovu: ___.", "a": "mosaz", "lie": "olovo", "why": "V kosti nosu se našla měď a zinek v poměru typickém pro mosaz. Tycho zemřel v Praze roku 1601.", "src": "Národní muzeum"},
  // divis-drought, checked 2026-10-31
  //   https://english.radio.cz/node/8819683
  //   https://en.wikipedia.org/wiki/Prokop_Divi%C5%A1
  {"id": "divis-drought", "topic": "history", "q": "Kněz Prokop Diviš postavil v Přímětici roku 1754 jeden z prvních uzemněných bleskosvodů. Místní ho v roce 1759 zničili, protože ho obviňovali, že způsobil: ___.", "a": "sucho", "lie": "povodeň", "why": "Diviš svůj přístroj nazval meteorologický stroj a po zničení ho už znovu nepostavil.", "src": "Český rozhlas"},
  // pig-war, checked 2026-10-31
  //   https://www.nps.gov/sajh/historyculture/the-pig-war.htm
  //   https://en.wikipedia.org/wiki/Pig_War_%281859%29
  {"id": "pig-war", "topic": "history", "q": "V roce 1859 se USA a Británie málem dostaly do války o ostrov San Juan a jedinou obětí sporu byl jeden ___.", "a": "prase", "lie": "kůň", "why": "Američan zastřelil prase Hudsonovy společnosti, které se mu hrabalo na zahradě. Spor o hranici nakonec v roce 1872 rozsoudil německý císař.", "src": "National Park Service"},
  // newton-mint, checked 2026-10-31
  //   https://www.numismaticnews.net/world-coins/genius-newton-chased-counterfeiters
  //   https://en.wikipedia.org/wiki/Later_life_of_Isaac_Newton
  {"id": "newton-mint", "topic": "history", "q": "Isaac Newton jako správce královské mincovny pracoval i jako detektiv. Pronásledoval tyto zločince: ___.", "a": "padělatelé mincí", "lie": "pašeráci čaje", "why": "Sám vyslýchal svědky, pracoval i v utajení a dostal před soud 28 padělatelů, za padělání hrozil trest smrti.", "src": "Numismatic News"},
  // lenochod-tyden, checked 2026-10-31
  //   https://www.scientificamerican.com/article/why-sloths-leave-the-trees-to-defecate
  //   https://en.wikipedia.org/wiki/Sloth
  {"id": "lenochod-tyden", "topic": "nature", "q": "Lenochod tříprstý slézá ze stromu na zem, aby se vykakal, jen zhruba ___.", "a": "jednou týdně", "lie": "jednou za měsíc", "why": "Na zemi jsou snadnou kořistí a sestup je stojí hodně energie, proč to dělají, vědci dodnes nevědí jistě.", "src": "Scientific American"},
  // zebra-ovadi, checked 2026-10-31
  //   https://bristol.ac.uk/news/2019/february/zebra-stripes.html
  //   https://www.sciencedaily.com/releases/2019/02/190220145032.htm
  {"id": "zebra-ovadi", "topic": "nature", "q": "Studie z roku 2019 ukázala, že pruhy chrání zebry hlavně před jedním krvesajným hmyzem, který na nich nedokáže pořádně přistát: ___.", "a": "ovád", "lie": "komár", "why": "Ovádi u zeber nestihnou zpomalit a přeletí je nebo do nich narazí; přesný mechanismus se ale stále zkoumá.", "src": "University of Bristol"},
  // narval-zub, checked 2026-10-31
  //   https://smithsonianscience.org/2012/04/for-dentist-the-narwhals-smile-is-a-mystery-of-evolution/
  //   https://en.wikipedia.org/wiki/Narwhal
  {"id": "narval-zub", "topic": "nature", "q": "Dlouhý spirálovitý „roh“ narvala není roh, ale obří zub. Konkrétně je to: ___.", "a": "špičák", "lie": "řezák", "why": "Vědci to potvrdili v roce 2012: kel roste z horní čelisti, odkud savcům rostou špičáky.", "src": "Smithsonian"},
  // becherovka-english-bitter, checked 2026-10-31
  //   https://english.radio.cz/node/8120512
  //   https://english.radio.cz/node/8717307
  //   https://cs.wikipedia.org/wiki/Becherovka
  {"id": "becherovka-english-bitter", "topic": "food", "q": "Když se Becherovka v roce 1807 začala prodávat v Karlových Varech, měla úplně jiný název: ___.", "a": "English Bitter", "lie": "Karlsbader Gold", "why": "Josef Becher prý dostal recept od anglického lékaře Frobriga a likér se zpočátku prodával jako lék na žaludek.", "src": "Radio Prague International"},
  // hawaiian-pizza-canada, checked 2026-10-31
  //   https://thecanadianencyclopedia.ca/en/article/sam-panopolous
  //   https://www.nbcnews.com/news/world/alleged-inventor-controversial-hawaiian-pizza-dies-canada-n770716
  {"id": "hawaiian-pizza-canada", "topic": "food", "q": "Pizzu Hawaii se šunkou a ananasem vymyslel roku 1962 řecký přistěhovalec Sam Panopoulos. V jaké zemi? ___.", "a": "Kanada", "lie": "Austrálie", "why": "Panopoulos ji poprvé připravil v restauraci Satellite ve městě Chatham v kanadském Ontariu.", "src": "The Canadian Encyclopedia"},
  // haagen-dazs-bronx, checked 2026-10-31
  //   https://culinarylore.com/food-history:what-does-haagen-dazs-mean/
  //   https://www.6sqft.com/haagen-dazs-may-be-a-danish-name-but-the-ice-cream-was-founded-in-the-bronx/
  //   https://en.wikipedia.org/wiki/H%C3%A4agen-Dazs
  {"id": "haagen-dazs-bronx", "topic": "food", "q": "Zmrzlina Häagen-Dazs zní skandinávsky, ale název je vymyšlený a firma vznikla roku 1960 v newyorské čtvrti: ___.", "a": "Bronx", "lie": "Brooklyn", "why": "Zakladatel Reuben Mattus chtěl, aby značka zněla dánsky, ale slova nic neznamenají.", "src": "CulinaryLore"},
  // caesar-salad-mexico, checked 2026-10-31
  //   https://www.fox6now.com/news/caesar-salad-origins-100th-birthday
  //   https://en.wikipedia.org/wiki/Caesar_salad
  {"id": "caesar-salad-mexico", "topic": "food", "q": "Caesar salát není pojmenovaný po římském císaři, ale po kuchaři Caesaru Cardinim, který ho prý vymyslel roku 1924 v zemi: ___.", "a": "Mexiko", "lie": "Itálie", "why": "Cardini, italský přistěhovalec, měl restauraci v Tijuaně. Přesné okolnosti vzniku se ale v různých vyprávěních liší.", "src": "FOX TV Stations"},
  // nutella-ancestor, checked 2026-10-31
  //   https://ebsco.com/research-starters/history/nutella
  //   https://en.wikipedia.org/wiki/Nutella
  {"id": "nutella-ancestor", "topic": "food", "q": "Předchůdce Nutelly, který pekař Pietro Ferrero začal prodávat roku 1946, se nemazal, ale krájel. Prodával se totiž jako tuhý ___.", "a": "blok", "lie": "perník", "why": "Kvůli nedostatku kakaa ho Ferrero natáhl lískovými ořechy. Mazací verze přišla roku 1951, název Nutella až 1964.", "src": "EBSCO Research Starters"},
  // pineapple-rental, checked 2026-10-31
  //   https://cabinetmagazine.org/issues/23/beauman.php
  //   https://www.historic-uk.com/CultureUK/King-Pineapple/
  {"id": "pineapple-rental", "topic": "food", "q": "Ananas byl v 18. století tak drahý symbol bohatství, že ho někteří cukráři nabízeli na večírky formou: ___.", "a": "pronájem", "lie": "splátky", "why": "Ananas se na hostině často nejedl, jen se vystavil na stole jako ozdoba a důkaz bohatství.", "src": "Cabinet Magazine"},
  // avocado, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/avocado
  //   https://en.wikipedia.org/wiki/Avocado
  {"id": "avocado", "topic": "language", "q": "Slovo avokádo pochází z aztéckého (nahuatlského) slova āhuacatl, které znamenalo také: ___.", "a": "varle", "lie": "oko", "why": "Původní význam byl ale plod; pro varle šlo zřejmě o přenesený, eufemistický výraz.", "src": "Merriam-Webster"},
  // kangaroo, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/kangaroo
  //   https://en.wiktionary.org/wiki/kangaroo
  //   https://en.wikipedia.org/wiki/Kangaroo
  {"id": "kangaroo", "topic": "language", "q": "Podle rozšířeného, ale mylného mýtu znamená anglické kangaroo (klokan) v jazyce australských domorodců: ___.", "a": "nevím", "lie": "skokan", "why": "Mýtus je vyvrácený: gangurru z jazyka guugu yimithirr je prostě název jednoho druhu klokana.", "src": "Merriam-Webster"},
  // muscle, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/muscle
  //   https://en.wiktionary.org/wiki/muscle
  {"id": "muscle", "topic": "language", "q": "Latinsky se sval řekl musculus, což doslova znamená malá ___.", "a": "myš", "lie": "kočka", "why": "Římanům stahující se sval pod kůží připomínal malé zvíře.", "src": "Merriam-Webster"},
  // pedigree, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pedigree
  //   https://en.wiktionary.org/wiki/pedigree
  {"id": "pedigree", "topic": "language", "q": "Anglické slovo pedigree (rodokmen) pochází z francouzského pé de grue, doslova noha jednoho ptáka. Kterého? ___.", "a": "jeřáb", "lie": "kohout", "why": "Rozvětvené čáry rodokmenu připomínaly ptačí nohu.", "src": "Merriam-Webster"},
  // sarcophagus, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/sarcophagus
  //   https://en.wiktionary.org/wiki/sarcophagus
  {"id": "sarcophagus", "topic": "language", "q": "Slovo sarkofág pochází z řeckého výrazu, který doslova znamená: ___.", "a": "kámen požírající maso", "lie": "dům mrtvých", "why": "Plinius Starší tvrdil, že jistý vápenec od Tróje rozkládá těla, a proto se z něj dělaly rakve.", "src": "Merriam-Webster"},
  // pandemonium, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pandemonium
  //   https://en.wiktionary.org/wiki/pandemonium
  {"id": "pandemonium", "topic": "language", "q": "Slovo pandemonium (vřava, chaos) vymyslel básník John Milton. Ve Ztraceném ráji se tak jmenuje hlavní město: ___.", "a": "peklo", "lie": "Atlantida", "why": "Milton ho složil z pan (všichni) a daemonium (démon), tedy místo všech démonů.", "src": "Merriam-Webster"},
  // nerd, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/nerd
  //   https://en.wiktionary.org/wiki/nerd
  //   https://en.wikipedia.org/wiki/Nerd
  {"id": "nerd", "topic": "language", "q": "Slovo nerd se poprvé objevilo roku 1950 v dětské knize, kterou napsal ___.", "a": "Dr. Seuss", "lie": "Roald Dahl", "why": "Seuss tak v knize If I Ran the Zoo pojmenoval vymyšlené zvíře, ne ještě šprta.", "src": "Merriam-Webster"},
  // googol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/googol
  //   https://en.wikipedia.org/wiki/Googol
  {"id": "googol", "topic": "language", "q": "Číslo googol (jednička a 100 nul), podle kterého se jmenuje Google, vymyslel devítiletý ___ matematika Edwarda Kasnera.", "a": "synovec", "lie": "syn", "why": "Chlapec se jmenoval Milton Sirotta a Kasner jeho slovo zpopularizoval pro číslo 10 na stou.", "src": "Merriam-Webster"},
  // hamburg-czech-port, checked 2026-10-31
  //   https://english.radio.cz/node/8240796
  //   https://www.e15.cz/byznys/doprava-a-logistika/cesko-obnovuje-pristup-k-mori-chysta-smlouvu-pro-nove-uzemi-v-hamburku-1389654
  {"id": "hamburg-czech-port", "topic": "places", "q": "V roce 1929 si Československo na 99 let pronajalo kus přístavu v německém městě ___.", "a": "Hamburk", "lie": "Brémy", "why": "Nárok vyplýval z Versailleské smlouvy. Pronajatá část se jmenuje Moldauhafen, tedy Vltavský přístav.", "src": "Radio Prague International"},
  // brno-clock-marble, checked 2026-10-31
  //   https://english.radio.cz/node/8546429
  //   https://en.wikipedia.org/wiki/Brno_astronomical_clock
  {"id": "brno-clock-marble", "topic": "places", "q": "Každý den přesně v 11:00 vypadne z brněnského orloje tento předmět, který si návštěvníci mohou odnést: ___.", "a": "skleněná kulička", "lie": "bronzová mince", "why": "Připomíná rok 1645: podle legendy Brno odolalo Švédům, protože zvon odbil poledne už v 11 hodin.", "src": "Radio Prague International"},
  // point-nemo-astronauts, checked 2026-10-31
  //   https://www.skyatnightmagazine.com/earth-from-space/point-nemo
  //   https://en.wikipedia.org/wiki/Point_Nemo
  {"id": "point-nemo-astronauts", "topic": "places", "q": "Lidé nejblíž k bodu Nemo, místu v oceánu nejvzdálenějšímu od pevniny, bývají někdy tito: ___.", "a": "astronauti na ISS", "lie": "polárníci", "why": "Nejbližší souš je asi 2 700 km daleko, ISS létá ve výšce zhruba 400 km.", "src": "BBC Sky at Night Magazine"},
  // pitch-drop, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/longest-running-laboratory-experiment
  //   https://en.wikipedia.org/wiki/Pitch_drop_experiment
  {"id": "pitch-drop", "topic": "science", "q": "Od roku 1927 sledují na univerzitě v australském Brisbane, jak z nálevky pomaličku kape tato hmota: ___.", "a": "smola", "lie": "med", "why": "Jedna kapka padá zhruba deset let. Podle Guinnessovy knihy jde o nejdéle běžící laboratorní pokus.", "src": "Guinness World Records"},
  // coffee-webcam, checked 2026-10-31
  //   https://www.cl.cam.ac.uk/coffee/qsf/coffee.html
  //   https://www.cai.cam.ac.uk/news/caian-coffee-pot-and-webcam-awardwinning-combination
  //   https://en.wikipedia.org/wiki/Trojan_Room_coffee_pot
  {"id": "coffee-webcam", "topic": "science", "q": "První webkamera na světě, zprovozněná v roce 1991 na univerzitě v Cambridgi, sledovala tento předmět: ___.", "a": "konvice s kávou", "lie": "akvárium", "why": "Vědci nechtěli zbytečně chodit po schodech k prázdné konvici. Na web se dostala v roce 1993.", "src": "University of Cambridge"},
  // stethoscope-paper, checked 2026-10-31
  //   https://lemelson.mit.edu/resources/rene-laennec
  //   https://en.wikipedia.org/wiki/Stethoscope
  {"id": "stethoscope-paper", "topic": "science", "q": "Úplně první stetoskop vznikl v roce 1816 svinutím tohoto materiálu: ___.", "a": "papír", "lie": "kůže", "why": "René Laennec nechtěl přikládat ucho přímo na hruď pacientky. Později trubici vyrobil ze dřeva.", "src": "MIT Lemelson Center"},
  // tardigrade-space, checked 2026-10-31
  //   https://www.esa.int/Our_Activities/Human_Spaceflight/Research/Tiny_animals_survive_exposure_to_space
  //   https://sciencedaily.com/releases/2008/09/080908135906.htm
  {"id": "tardigrade-space", "topic": "science", "q": "V roce 2007 přežila jako první zvířata vystavení volnému vesmíru tato drobná zvířátka: ___.", "a": "želvušky", "lie": "ploštěnky", "why": "Asi 3 000 jich strávilo 12 dní na oběžné dráze. Některá přežila i smrtící UV záření a pak se rozmnožila.", "src": "ESA"},
  // barcode-gum, checked 2026-10-31
  //   https://www.gs1.org/articles/marsh-holds-place-honor-history-gs1-barcode
  //   https://history.com/this-day-in-history/june-26/barcode-scanner-invention-first-use
  {"id": "barcode-gum", "topic": "science", "q": "Úplně první zboží naskenované čárovým kódem v obchodě (v americkém Ohiu v roce 1974) bylo balení tohoto zboží: ___.", "a": "žvýkačky", "lie": "cigarety", "why": "Byly to žvýkačky Wrigley's Juicy Fruit za 67 centů. Šlo o důkaz, že kód zvládne i drobné zboží.", "src": "GS1"},
  // bubble-wrap, checked 2026-10-31
  //   https://www.retailbrew.com/stories/2022/07/22/tools-of-the-trade-how-bubble-wrap-became-a-pop-idol
  //   https://en.wikipedia.org/wiki/Bubble_Wrap
  {"id": "bubble-wrap", "topic": "science", "q": "Bublinkovou fólii vynalezli roku 1957 inženýři, kteří se pokoušeli vyrobit nový druh interiérové dekorace: ___.", "a": "tapeta", "lie": "koberec", "why": "Jako tapeta neuspěla, zkoušeli ji i jako izolaci skleníků. Prosadila se až jako obal.", "src": "Retail Brew"},
  // neutron-sugar, checked 2026-10-31
  //   https://imagine.gsfc.nasa.gov/science/objects/neutron_stars1.html
  //   https://en.wikipedia.org/wiki/Neutron_star
  {"id": "neutron-sugar", "topic": "science", "q": "Kousek neutronové hvězdy o velikosti tohoto předmětu by na Zemi vážil zhruba miliardu tun: ___.", "a": "kostka cukru", "lie": "fotbalový míč", "why": "Podle NASA zhruba tolik co celá hora. Jiné odhady jsou ještě několikrát vyšší.", "src": "NASA"},
  // flame-space, checked 2026-10-31
  //   https://www.nasa.gov/image-article/candle-flame-1g-vs-microgravity/
  //   https://en.wikipedia.org/wiki/Flame
  {"id": "flame-space", "topic": "science", "q": "Plamen svíčky ve stavu beztíže nemá tvar kapky, ale má tvar: ___.", "a": "koule", "lie": "plochý kotouč", "why": "Plamen je také modrý a bez sazí, protože chybí proudění vzduchu vzhůru.", "src": "NASA"},
]});
