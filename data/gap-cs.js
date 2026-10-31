// The Gap / Díra facts (cs). Every fact must be TRUE.
// Each fact was checked against at least two sources that were opened and read (URLs above it).
// To add one: same fields, two sources, then run the second check before committing.
// "knowledge" says who can be expected to know it: czech, european or worldwide (see data/README.md).
// A good fact is little known (not school history, not pub trivia), the gap invites funny fakes
// (a thing, not a number or a date) and nobody's illness, death or misfortune is the punchline.
// "adult": true puts a fact in the 18+ set, which only plays when the table switches it on.
window.PB_GAP = window.PB_GAP || [];
PB_GAP.push({ lang: 'cs', facts: [
  // pistol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pistol
  //   https://www.dictionary.com/browse/pistol
  //   https://en.wikipedia.org/wiki/Pistol
  {"id": "pistol", "topic": "language", "knowledge": "czech", "q": "Anglické slovo „pistol“ nejspíš pochází z českého slova ___.", "a": "píšťala", "lie": "bič", "why": "Husité tak říkali lehké ruční palné zbrani. Do angličtiny slovo doputovalo přes němčinu a francouzštinu.", "src": "Merriam-Webster"},
  // brambor, checked 2026-10-31
  //   https://macau.uni-kiel.de/servlets/MCRFileNodeServlet/macau_derivate_00006618//kiel-up_2750-9605_p4.pdf
  //   https://en.wiktionary.org/wiki/brambor
  {"id": "brambor", "topic": "language", "knowledge": "czech", "q": "Česká „brambora“ dostala jméno podle země, odkud k nám podle tradice přišla: ___.", "a": "Braniborsko", "lie": "Bavorsko", "why": "Etymologové (Machek, Rejzek) ho vykládají jako „plodinu z Branibor“. Přinést ji měli pruští vojáci v 18. století.", "src": "Kiel-UP: J. Šnejdrlová, Názvy bramboru"},
  // semtex, checked 2026-10-31
  //   https://www.csmonitor.com/2002/0226/p07s02-woeu.html
  //   https://en.wikipedia.org/wiki/Semtex
  //   https://explosia.cz/historie/
  {"id": "semtex", "topic": "places", "knowledge": "czech", "q": "Výbušnina Semtex má jméno podle místa u Pardubic: ___.", "a": "Semtín", "lie": "Semily", "why": "Vynalezli ji tamní chemici a vyrábí se tam od 60. let 20. století, dnes v podniku Explosia.", "src": "The Christian Science Monitor"},
  // wombat, checked 2026-10-31
  //   https://www.australiangeographic.com.au/news/2021/02/why-do-wombats-have-cube-shaped-poo-scientists-may-have-solved-the-mystery/
  //   https://www.sci.news/biology/wombat-square-shaped-feces-09314.html
  //   https://en.wikipedia.org/wiki/Common_wombat
  {"id": "wombat", "topic": "nature", "knowledge": "worldwide", "q": "Trus vombata má neobvyklý tvar: ___.", "a": "kostka", "lie": "hvězdička", "why": "Tvar vzniká ve střevě, které má tužší a pružnější úseky. Kostky kladou na nápadná místa jako vzkaz ostatním.", "src": "Australian Geographic"},
  // koala, checked 2026-10-31
  //   https://www.pbs.org/wgbh/nova/article/koala-fingerprints/
  //   https://indianapublicmedia.org/amomentofscience/humans-arent-unique-when-it-comes-to-fingerprints.php
  {"id": "koala", "topic": "nature", "knowledge": "worldwide", "q": "Jediné zvíře mimo primáty, které má otisky prstů nápadně podobné lidským: ___.", "a": "koala", "lie": "lenochod", "why": "Vyvinuly se nezávisle na našich, nejspíš kvůli uchopování eukalyptových větví a listů.", "src": "PBS NOVA"},
  // ketchup, checked 2026-10-31
  //   https://www.wnyc.org/story/ketchup-the-all-american-condiment-that-comes-from-asia
  //   https://www.csmonitor.com/The-Culture/In-a-Word/2023/0410/The-origins-of-ketchup-or-catsup-run-through-fish-sauce
  //   https://en.wikipedia.org/wiki/Ketchup
  {"id": "ketchup", "topic": "food", "knowledge": "worldwide", "q": "Původní asijský „kečup“ se nedělal z rajčat, ale z tohohle: ___.", "a": "ryby", "lie": "švestky", "why": "Byl to nálev z nakládaných ryb z jižní Číny. První recept na rajčatový kečup vyšel v USA až v roce 1812.", "src": "WNYC / NPR"},
  // tycho-nose, checked 2026-10-31
  //   https://muzeum3000.nm.cz/national-museum-news/research-of-the-tomb-and-remains-of-tycho-brahe
  //   https://en.wikipedia.org/wiki/Tycho_Brahe
  {"id": "tycho-nose", "topic": "history", "knowledge": "european", "q": "Astronom Tycho Brahe přišel v souboji o kus nosu a nosil protézu. Rozbor jeho ostatků exhumovaných v roce 2010 ukázal, že nebyla ze zlata ani ze stříbra, ale z tohoto kovu: ___.", "a": "mosaz", "lie": "olovo", "why": "V kosti nosu se našla měď a zinek v poměru typickém pro mosaz. Tycho zemřel v Praze roku 1601.", "src": "Národní muzeum"},
  // divis-drought, checked 2026-10-31
  //   https://english.radio.cz/node/8819683
  //   https://en.wikipedia.org/wiki/Prokop_Divi%C5%A1
  {"id": "divis-drought", "topic": "history", "knowledge": "czech", "q": "Kněz Prokop Diviš postavil v Přímětici roku 1754 jeden z prvních uzemněných bleskosvodů. Místní ho v roce 1759 zničili, protože ho obviňovali, že způsobil: ___.", "a": "sucho", "lie": "povodeň", "why": "Diviš svůj přístroj nazval meteorologický stroj a po zničení ho už znovu nepostavil.", "src": "Český rozhlas"},
  // pig-war, checked 2026-10-31
  //   https://www.nps.gov/sajh/historyculture/the-pig-war.htm
  //   https://en.wikipedia.org/wiki/Pig_War_%281859%29
  {"id": "pig-war", "topic": "history", "knowledge": "worldwide", "q": "V roce 1859 se USA a Británie málem dostaly do války o ostrov San Juan a jedinou obětí sporu byl jeden ___.", "a": "prase", "lie": "kůň", "why": "Američan zastřelil prase Hudsonovy společnosti, které se mu hrabalo na zahradě. Spor o hranici nakonec v roce 1872 rozsoudil německý císař.", "src": "National Park Service"},
  // newton-mint, checked 2026-10-31
  //   https://www.numismaticnews.net/world-coins/genius-newton-chased-counterfeiters
  //   https://en.wikipedia.org/wiki/Later_life_of_Isaac_Newton
  {"id": "newton-mint", "topic": "history", "knowledge": "worldwide", "q": "Isaac Newton jako správce královské mincovny pracoval i jako detektiv. Pronásledoval tyto zločince: ___.", "a": "padělatelé mincí", "lie": "pašeráci čaje", "why": "Sám vyslýchal svědky, pracoval i v utajení a dostal před soud 28 padělatelů, za padělání hrozil trest smrti.", "src": "Numismatic News"},
  // lenochod-tyden, checked 2026-10-31
  //   https://www.scientificamerican.com/article/why-sloths-leave-the-trees-to-defecate
  //   https://en.wikipedia.org/wiki/Sloth
  {"id": "lenochod-tyden", "topic": "nature", "knowledge": "european", "q": "Lenochod tříprstý slézá ze stromu na zem, aby se vykakal, jen zhruba ___.", "a": "jednou týdně", "lie": "jednou za měsíc", "why": "Na zemi jsou snadnou kořistí a sestup je stojí hodně energie, proč to dělají, vědci dodnes nevědí jistě.", "src": "Scientific American"},
  // zebra-ovadi, checked 2026-10-31
  //   https://bristol.ac.uk/news/2019/february/zebra-stripes.html
  //   https://www.sciencedaily.com/releases/2019/02/190220145032.htm
  {"id": "zebra-ovadi", "topic": "nature", "knowledge": "worldwide", "q": "Studie z roku 2019 ukázala, že pruhy chrání zebry hlavně před jedním krvesajným hmyzem, který na nich nedokáže pořádně přistát: ___.", "a": "ovád", "lie": "komár", "why": "Ovádi u zeber nestihnou zpomalit a přeletí je nebo do nich narazí; přesný mechanismus se ale stále zkoumá.", "src": "University of Bristol"},
  // narval-zub, checked 2026-10-31
  //   https://smithsonianscience.org/2012/04/for-dentist-the-narwhals-smile-is-a-mystery-of-evolution/
  //   https://en.wikipedia.org/wiki/Narwhal
  {"id": "narval-zub", "topic": "nature", "knowledge": "worldwide", "q": "Dlouhý spirálovitý „roh“ narvala není roh, ale obří zub. Konkrétně je to: ___.", "a": "špičák", "lie": "řezák", "why": "Vědci to potvrdili v roce 2012: kel roste z horní čelisti, odkud savcům rostou špičáky.", "src": "Smithsonian"},
  // becherovka-english-bitter, checked 2026-10-31
  //   https://english.radio.cz/node/8120512
  //   https://english.radio.cz/node/8717307
  //   https://cs.wikipedia.org/wiki/Becherovka
  {"id": "becherovka-english-bitter", "topic": "food", "knowledge": "czech", "q": "Když se Becherovka v roce 1807 začala prodávat v Karlových Varech, měla úplně jiný název: ___.", "a": "English Bitter", "lie": "Karlsbader Gold", "why": "Josef Becher prý dostal recept od anglického lékaře Frobriga a likér se zpočátku prodával jako lék na žaludek.", "src": "Radio Prague International"},
  // hawaiian-pizza-canada, checked 2026-10-31
  //   https://thecanadianencyclopedia.ca/en/article/sam-panopolous
  //   https://www.nbcnews.com/news/world/alleged-inventor-controversial-hawaiian-pizza-dies-canada-n770716
  {"id": "hawaiian-pizza-canada", "topic": "food", "knowledge": "worldwide", "q": "Pizzu Hawaii se šunkou a ananasem vymyslel roku 1962 řecký přistěhovalec Sam Panopoulos. V jaké zemi? ___.", "a": "Kanada", "lie": "Austrálie", "why": "Panopoulos ji poprvé připravil v restauraci Satellite ve městě Chatham v kanadském Ontariu.", "src": "The Canadian Encyclopedia"},
  // haagen-dazs-bronx, checked 2026-10-31
  //   https://culinarylore.com/food-history:what-does-haagen-dazs-mean/
  //   https://www.6sqft.com/haagen-dazs-may-be-a-danish-name-but-the-ice-cream-was-founded-in-the-bronx/
  //   https://en.wikipedia.org/wiki/H%C3%A4agen-Dazs
  {"id": "haagen-dazs-bronx", "topic": "food", "knowledge": "worldwide", "q": "Zmrzlina Häagen-Dazs zní skandinávsky, ale název je vymyšlený a firma vznikla roku 1960 v newyorské čtvrti: ___.", "a": "Bronx", "lie": "Brooklyn", "why": "Zakladatel Reuben Mattus chtěl, aby značka zněla dánsky, ale slova nic neznamenají.", "src": "CulinaryLore"},
  // caesar-salad-mexico, checked 2026-10-31
  //   https://www.fox6now.com/news/caesar-salad-origins-100th-birthday
  //   https://en.wikipedia.org/wiki/Caesar_salad
  {"id": "caesar-salad-mexico", "topic": "food", "knowledge": "worldwide", "q": "Caesar salát není pojmenovaný po římském císaři, ale po kuchaři Caesaru Cardinim, který ho prý vymyslel roku 1924 v zemi: ___.", "a": "Mexiko", "lie": "Itálie", "why": "Cardini, italský přistěhovalec, měl restauraci v Tijuaně. Přesné okolnosti vzniku se ale v různých vyprávěních liší.", "src": "FOX TV Stations"},
  // nutella-ancestor, checked 2026-10-31
  //   https://ebsco.com/research-starters/history/nutella
  //   https://en.wikipedia.org/wiki/Nutella
  {"id": "nutella-ancestor", "topic": "food", "knowledge": "worldwide", "q": "Předchůdce Nutelly, který pekař Pietro Ferrero začal prodávat roku 1946, se nemazal, ale krájel. Prodával se totiž jako tuhý ___.", "a": "blok", "lie": "perník", "why": "Kvůli nedostatku kakaa ho Ferrero natáhl lískovými ořechy. Mazací verze přišla roku 1951, název Nutella až 1964.", "src": "EBSCO Research Starters"},
  // pineapple-rental, checked 2026-10-31
  //   https://cabinetmagazine.org/issues/23/beauman.php
  //   https://www.historic-uk.com/CultureUK/King-Pineapple/
  {"id": "pineapple-rental", "topic": "food", "knowledge": "worldwide", "q": "Ananas byl v 18. století tak drahý symbol bohatství, že ho někteří cukráři nabízeli na večírky formou: ___.", "a": "pronájem", "lie": "splátky", "why": "Ananas se na hostině často nejedl, jen se vystavil na stole jako ozdoba a důkaz bohatství.", "src": "Cabinet Magazine"},
  // avocado, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/avocado
  //   https://en.wikipedia.org/wiki/Avocado
  {"id": "avocado", "topic": "language", "knowledge": "worldwide", "q": "Slovo avokádo pochází z aztéckého (nahuatlského) slova āhuacatl, které znamenalo také: ___.", "a": "varle", "lie": "oko", "why": "Původní význam byl ale plod; pro varle šlo zřejmě o přenesený, eufemistický výraz.", "src": "Merriam-Webster"},
  // kangaroo, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/kangaroo
  //   https://en.wiktionary.org/wiki/kangaroo
  //   https://en.wikipedia.org/wiki/Kangaroo
  {"id": "kangaroo", "topic": "language", "knowledge": "worldwide", "q": "Podle rozšířeného, ale mylného mýtu znamená anglické kangaroo (klokan) v jazyce australských domorodců: ___.", "a": "nevím", "lie": "skokan", "why": "Mýtus je vyvrácený: gangurru z jazyka guugu yimithirr je prostě název jednoho druhu klokana.", "src": "Merriam-Webster"},
  // muscle, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/muscle
  //   https://en.wiktionary.org/wiki/muscle
  {"id": "muscle", "topic": "language", "knowledge": "worldwide", "q": "Latinsky se sval řekl musculus, což doslova znamená malá ___.", "a": "myš", "lie": "kočka", "why": "Římanům stahující se sval pod kůží připomínal malé zvíře.", "src": "Merriam-Webster"},
  // pedigree, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pedigree
  //   https://en.wiktionary.org/wiki/pedigree
  {"id": "pedigree", "topic": "language", "knowledge": "european", "q": "Anglické slovo pedigree (rodokmen) pochází z francouzského pé de grue, doslova noha jednoho ptáka. Kterého? ___.", "a": "jeřáb", "lie": "kohout", "why": "Rozvětvené čáry rodokmenu připomínaly ptačí nohu.", "src": "Merriam-Webster"},
  // sarcophagus, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/sarcophagus
  //   https://en.wiktionary.org/wiki/sarcophagus
  {"id": "sarcophagus", "topic": "language", "knowledge": "european", "q": "Slovo sarkofág pochází z řeckého výrazu, který doslova znamená: ___.", "a": "kámen požírající maso", "lie": "dům mrtvých", "why": "Plinius Starší tvrdil, že jistý vápenec od Tróje rozkládá těla, a proto se z něj dělaly rakve.", "src": "Merriam-Webster"},
  // pandemonium, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pandemonium
  //   https://en.wiktionary.org/wiki/pandemonium
  {"id": "pandemonium", "topic": "language", "knowledge": "worldwide", "q": "Slovo pandemonium (vřava, chaos) vymyslel básník John Milton. Ve Ztraceném ráji se tak jmenuje hlavní město: ___.", "a": "peklo", "lie": "Atlantida", "why": "Milton ho složil z pan (všichni) a daemonium (démon), tedy místo všech démonů.", "src": "Merriam-Webster"},
  // nerd, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/nerd
  //   https://en.wiktionary.org/wiki/nerd
  //   https://en.wikipedia.org/wiki/Nerd
  {"id": "nerd", "topic": "language", "knowledge": "worldwide", "q": "Slovo nerd se poprvé objevilo roku 1950 v dětské knize, kterou napsal ___.", "a": "Dr. Seuss", "lie": "Roald Dahl", "why": "Seuss tak v knize If I Ran the Zoo pojmenoval vymyšlené zvíře, ne ještě šprta.", "src": "Merriam-Webster"},
  // googol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/googol
  //   https://en.wikipedia.org/wiki/Googol
  {"id": "googol", "topic": "language", "knowledge": "worldwide", "q": "Číslo googol (jednička a 100 nul), podle kterého se jmenuje Google, vymyslel devítiletý ___ matematika Edwarda Kasnera.", "a": "synovec", "lie": "syn", "why": "Chlapec se jmenoval Milton Sirotta a Kasner jeho slovo zpopularizoval pro číslo 10 na stou.", "src": "Merriam-Webster"},
  // hamburg-czech-port, checked 2026-10-31
  //   https://english.radio.cz/node/8240796
  //   https://www.e15.cz/byznys/doprava-a-logistika/cesko-obnovuje-pristup-k-mori-chysta-smlouvu-pro-nove-uzemi-v-hamburku-1389654
  {"id": "hamburg-czech-port", "topic": "places", "knowledge": "czech", "q": "V roce 1929 si Československo na 99 let pronajalo kus přístavu v německém městě ___.", "a": "Hamburk", "lie": "Brémy", "why": "Nárok vyplýval z Versailleské smlouvy. Pronajatá část se jmenuje Moldauhafen, tedy Vltavský přístav.", "src": "Radio Prague International"},
  // brno-clock-marble, checked 2026-10-31
  //   https://english.radio.cz/node/8546429
  //   https://en.wikipedia.org/wiki/Brno_astronomical_clock
  {"id": "brno-clock-marble", "topic": "places", "knowledge": "czech", "q": "Každý den přesně v 11:00 vypadne z brněnského orloje tento předmět, který si návštěvníci mohou odnést: ___.", "a": "skleněná kulička", "lie": "bronzová mince", "why": "Připomíná rok 1645: podle legendy Brno odolalo Švédům, protože zvon odbil poledne už v 11 hodin.", "src": "Radio Prague International"},
  // point-nemo-astronauts, checked 2026-10-31
  //   https://www.skyatnightmagazine.com/earth-from-space/point-nemo
  //   https://en.wikipedia.org/wiki/Point_Nemo
  {"id": "point-nemo-astronauts", "topic": "places", "knowledge": "worldwide", "q": "Lidé nejblíž k bodu Nemo, místu v oceánu nejvzdálenějšímu od pevniny, bývají někdy tito: ___.", "a": "astronauti na ISS", "lie": "polárníci", "why": "Nejbližší souš je asi 2 700 km daleko, ISS létá ve výšce zhruba 400 km.", "src": "BBC Sky at Night Magazine"},
  // pitch-drop, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/longest-running-laboratory-experiment
  //   https://en.wikipedia.org/wiki/Pitch_drop_experiment
  {"id": "pitch-drop", "topic": "science", "knowledge": "worldwide", "q": "Od roku 1927 sledují na univerzitě v australském Brisbane, jak z nálevky pomaličku kape tato hmota: ___.", "a": "smola", "lie": "med", "why": "Jedna kapka padá zhruba deset let. Podle Guinnessovy knihy jde o nejdéle běžící laboratorní pokus.", "src": "Guinness World Records"},
  // coffee-webcam, checked 2026-10-31
  //   https://www.cl.cam.ac.uk/coffee/qsf/coffee.html
  //   https://www.cai.cam.ac.uk/news/caian-coffee-pot-and-webcam-awardwinning-combination
  //   https://en.wikipedia.org/wiki/Trojan_Room_coffee_pot
  {"id": "coffee-webcam", "topic": "science", "knowledge": "worldwide", "q": "První webkamera na světě, zprovozněná v roce 1991 na univerzitě v Cambridgi, sledovala tento předmět: ___.", "a": "konvice s kávou", "lie": "akvárium", "why": "Vědci nechtěli zbytečně chodit po schodech k prázdné konvici. Na web se dostala v roce 1993.", "src": "University of Cambridge"},
  // stethoscope-paper, checked 2026-10-31
  //   https://lemelson.mit.edu/resources/rene-laennec
  //   https://en.wikipedia.org/wiki/Stethoscope
  {"id": "stethoscope-paper", "topic": "science", "knowledge": "european", "q": "Úplně první stetoskop vznikl v roce 1816 svinutím tohoto materiálu: ___.", "a": "papír", "lie": "kůže", "why": "René Laennec nechtěl přikládat ucho přímo na hruď pacientky. Později trubici vyrobil ze dřeva.", "src": "MIT Lemelson Center"},
  // tardigrade-space, checked 2026-10-31
  //   https://www.esa.int/Our_Activities/Human_Spaceflight/Research/Tiny_animals_survive_exposure_to_space
  //   https://sciencedaily.com/releases/2008/09/080908135906.htm
  {"id": "tardigrade-space", "topic": "science", "knowledge": "worldwide", "q": "V roce 2007 přežila jako první zvířata vystavení volnému vesmíru tato drobná zvířátka: ___.", "a": "želvušky", "lie": "ploštěnky", "why": "Asi 3 000 jich strávilo 12 dní na oběžné dráze. Některá přežila i smrtící UV záření a pak se rozmnožila.", "src": "ESA"},
  // barcode-gum, checked 2026-10-31
  //   https://www.gs1.org/articles/marsh-holds-place-honor-history-gs1-barcode
  //   https://history.com/this-day-in-history/june-26/barcode-scanner-invention-first-use
  {"id": "barcode-gum", "topic": "science", "knowledge": "worldwide", "q": "Úplně první zboží naskenované čárovým kódem v obchodě (v americkém Ohiu v roce 1974) bylo balení tohoto zboží: ___.", "a": "žvýkačky", "lie": "cigarety", "why": "Byly to žvýkačky Wrigley's Juicy Fruit za 67 centů. Šlo o důkaz, že kód zvládne i drobné zboží.", "src": "GS1"},
  // bubble-wrap, checked 2026-10-31
  //   https://www.retailbrew.com/stories/2022/07/22/tools-of-the-trade-how-bubble-wrap-became-a-pop-idol
  //   https://en.wikipedia.org/wiki/Bubble_Wrap
  {"id": "bubble-wrap", "topic": "science", "knowledge": "worldwide", "q": "Bublinkovou fólii vynalezli roku 1957 inženýři, kteří se pokoušeli vyrobit nový druh interiérové dekorace: ___.", "a": "tapeta", "lie": "koberec", "why": "Jako tapeta neuspěla, zkoušeli ji i jako izolaci skleníků. Prosadila se až jako obal.", "src": "Retail Brew"},
  // neutron-sugar, checked 2026-10-31
  //   https://imagine.gsfc.nasa.gov/science/objects/neutron_stars1.html
  //   https://en.wikipedia.org/wiki/Neutron_star
  {"id": "neutron-sugar", "topic": "science", "knowledge": "worldwide", "q": "Kousek neutronové hvězdy o velikosti tohoto předmětu by na Zemi vážil zhruba miliardu tun: ___.", "a": "kostka cukru", "lie": "fotbalový míč", "why": "Podle NASA zhruba tolik co celá hora. Jiné odhady jsou ještě několikrát vyšší.", "src": "NASA"},
  // flame-space, checked 2026-10-31
  //   https://www.nasa.gov/image-article/candle-flame-1g-vs-microgravity/
  //   https://en.wikipedia.org/wiki/Flame
  {"id": "flame-space", "topic": "science", "knowledge": "worldwide", "q": "Plamen svíčky ve stavu beztíže nemá tvar kapky, ale má tvar: ___.", "a": "koule", "lie": "plochý kotouč", "why": "Plamen je také modrý a bez sazí, protože chybí proudění vzduchu vzhůru.", "src": "NASA"},
  // chicken-tax-trucks, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Chicken_tax
  //   https://www.tastingtable.com/1956155/1960s-chicken-tariff-history/
  {"id": "chicken-tax-trucks", "topic": "history", "knowledge": "worldwide", "q": "Americké clo 25 % na dovážené pickupy platí od roku 1964 a vzniklo jako odveta ve sporu o: ___.", "a": "kuřata", "lie": "sýr", "why": "Evropa omezila dovoz amerického kuřecího, tak USA zdanily několik evropských produktů. Přežilo jen clo na lehké náklaďáky.", "src": "Wikipedia"},
  // tally-sticks-parliament, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Burning_of_Parliament
  //   https://museumofscottishfireheritage.org/the-palace-of-westminster-fire-16-october-1834/
  {"id": "tally-sticks-parliament", "topic": "history", "knowledge": "worldwide", "q": "Londýnský parlament vyhořel roku 1834 poté, co dělníci v pecích pod Sněmovnou lordů spálili staré: ___.", "a": "rováše", "lie": "volební lístky", "why": "Byly to vroubkované dřevěné hůlky, kterými Státní pokladna vedla účetnictví do roku 1826. Oheň zničil většinu starého paláce.", "src": "Wikipedia"},
  // knocker-up-peashooter, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Knocker-up
  //   https://www.npr.org/2007/08/25/13879507/mary-smith-wakes-up-village-sleepyheads
  {"id": "knocker-up-peashooter", "topic": "history", "knowledge": "worldwide", "q": "Než se vynalezly budíky, budili britští „knocker-upové“ dělníky tím, že jim foukačkou stříleli do okna: ___.", "a": "hrách", "lie": "rýži", "why": "Fotografie Mary Smithové z londýnského East Endu z roku 1931 z ní udělala nejslavnější budičku vůbec.", "src": "Wikipedia"},
  // pez-anti-smoking, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Pez
  //   https://www.mentalfloss.com/food/candy/10-indispensable-facts-about-pez
  {"id": "pez-anti-smoking", "topic": "food", "knowledge": "worldwide", "q": "Pez vznikl roku 1927 ve Vídni jako mátová pastilka pro dospělé a propagoval se jako náhrada za: ___.", "a": "kouření", "lie": "kávu", "why": "Název je zkratka německého Pfefferminz (máta peprná). První dávkovače vypadaly jako zapalovače.", "src": "Mental Floss"},
  // salmon-suspicious-circumstances, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Salmon_Act_1986
  //   https://www.legislation.gov.uk/ukpga/1986/62/section/32
  {"id": "salmon-suspicious-circumstances", "topic": "history", "knowledge": "worldwide", "q": "Britský zákon z roku 1986 trestá nakládání „za podezřelých okolností“ s jednou konkrétní rybou: ___.", "a": "losos", "lie": "kaviár", "why": "Míří na pytlácky ulovené ryby, ale vágní formulace se stala oblíbeným vtipem. Od roku 2009 platí i pro jiné ryby.", "src": "legislation.gov.uk"},
  // vw-currywurst, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Volkswagen_currywurst
  //   https://www.kitchenstories.com/en/stories/vw-brings-their-classic-currywurst-to-supermarkets
  {"id": "vw-currywurst", "topic": "food", "knowledge": "worldwide", "q": "Ve Wolfsburgu vyrábí Volkswagen vlastní jídlo a v mnoha letech ho udělá víc než aut. Je to: ___.", "a": "currywurst", "lie": "preclíky", "why": "Vyrábí se od roku 1973 a má číslo dílu 199 398 500 A. K tomu se prodává i originální kečup.", "src": "Wikipedia"},
  // samsung-dried-fish, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Samsung
  //   https://m.gsmarena.com/from_seafood_trader_to_global_technology_powerhouse__a_glimpse_at_samsungs_history-news-13375.php
  {"id": "samsung-dried-fish", "topic": "history", "knowledge": "worldwide", "q": "Samsung začal roku 1938 jako malá korejská obchodní firma, která vyvážela zeleninu, ovoce a: ___.", "a": "sušené ryby", "lie": "ženšen", "why": "Zakladatel Lee Byung-chul začínal v Tegu a zboží posílal do Mandžuska a Pekingu.", "src": "Wikipedia"},
  // nike-waffle-iron, checked 2026-10-31
  //   https://about.nike.com/stories/nike-moon-shoe-waffle-iron-true-history
  //   https://www.history.com/this-day-in-history/february-26/nike-patent-waffle-sole-trainers-invented-in-waffle-iron
  {"id": "nike-waffle-iron", "topic": "history", "knowledge": "worldwide", "q": "Podrážka Nike s vaflovým vzorem vznikla roku 1971, když trenér Bill Bowerman nalil tekutý uretan do spotřebiče své ženy. Byl to: ___.", "a": "vaflovač", "lie": "toustovač", "why": "Vaflovač se navždy zalepil, tak Bowerman zkoušel dál na dalších, až vznikla bota Moon Shoe.", "src": "Nike"},
  // cotton-candy-dentist, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Cotton_candy
  //   https://pubmed.ncbi.nlm.nih.gov/16092607/
  {"id": "cotton-candy-dentist", "topic": "food", "knowledge": "worldwide", "q": "Stroj na cukrovou vatu vymyslel roku 1897 mimo jiné William Morrison. Jeho povolání bylo: ___.", "a": "zubař", "lie": "pekař", "why": "Veřejnosti se představil na světové výstavě v St. Louis roku 1904 pod názvem „pohádkové chmýří“ (fairy floss).", "src": "Wikipedia"},
  // twinkie-banana-cream, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Twinkie
  //   https://www.militarytimes.com/off-duty/military-culture/2022/06/01/how-a-wwii-banana-shortage-changed-the-course-of-twinkie-history/
  {"id": "twinkie-banana-cream", "topic": "food", "knowledge": "worldwide", "q": "Původní Twinkies z roku 1930 měly náplň z ovoce, které za války nebylo k sehnání, a nahradila ho vanilka: ___.", "a": "banány", "lie": "kokos", "why": "Banánové Twinkies se vrátily až roku 2007, s náplní obsahující jen 2 % banánového pyré.", "src": "Wikipedia"},
  // hungry-jacks-australia, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Hungry_Jack%27s
  //   https://en.wikipedia.org/wiki/Burger_King
  {"id": "hungry-jacks-australia", "topic": "history", "knowledge": "worldwide", "q": "Jméno Burger King v Austrálii už vlastnilo občerstvení v Adelaide, proto se tam řetězec jmenuje: ___.", "a": "Hungry Jack's", "lie": "Aussie King", "why": "Australský franšízant vybral jméno z ochranné známky palačinkové směsi Pillsbury a přidal apostrof a s.", "src": "Wikipedia"},
  // skinner-pigeon-bomb, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Project_Pigeon
  //   https://www.smithsonianmag.com/smithsonian-institution/bf-skinners-pigeon-guided-rocket-53443995/
  {"id": "skinner-pigeon-bomb", "topic": "science", "knowledge": "worldwide", "q": "Psycholog B. F. Skinner navrhl za války naváděnou bombu, kterou klováním do obrázku cíle řídila živá zvířata: ___.", "a": "holubi", "lie": "vrány", "why": "Armáda mu dala 25 000 dolarů, ale nápad nikdy nepoužila. Zaměřovací kužel dnes patří do sbírek Smithsonian.", "src": "Smithsonian Magazine"},
  // jaffa-cake-stale, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Jaffa_Cakes
  //   https://www.yorkshirepost.co.uk/read-this/is-a-jaffa-cake-a-cake-or-a-biscuit-heres-the-definitive-answer-as-decided-by-a-court-1379222
  {"id": "jaffa-cake-stale", "topic": "food", "knowledge": "worldwide", "q": "Britský daňový soud roku 1991 uznal Jaffa Cakes za dortíky, ne sušenky, mj. proto, že stejně jako dort jsou po čase: ___.", "a": "tvrdé", "lie": "měkké", "why": "Dorty se v Británii nedaní DPH, čokoládou polité sušenky ano. Soud zvažoval texturu, velikost i to, kde se prodávají.", "src": "Wikipedia"},
  // wojtek-bear-corporal, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Wojtek_(bear)
  //   https://www.smithsonianmag.com/smart-news/meet-bear-who-earned-rank-corporal-polish-army-180956579/
  {"id": "wojtek-bear-corporal", "topic": "history", "knowledge": "worldwide", "q": "Polští vojáci za 2. světové války zařadili do armády jako vojína Wojteka, později povýšeného na desátníka. Byl to: ___.", "a": "medvěd", "lie": "oslík", "why": "Hodnost mu zajistili, aby obešli britský zákaz maskotů na lodích. Zbytek života strávil v zoo v Edinburghu.", "src": "Wikipedia"},
  // shopping-cart-models, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Shopping_cart
  //   https://www.smithsonianmag.com/history/industrious-grocer-1930s-wanted-make-easier-customers-buy-more-just-needed-push-180987633/
  {"id": "shopping-cart-models", "topic": "history", "knowledge": "worldwide", "q": "Když Sylvan Goldman roku 1937 zavedl nákupní vozíky, lidé se jim vyhýbali, a tak je po obchodě nechal vozit najaté: ___.", "a": "modely", "lie": "klauny", "why": "Muži je považovali za nemužné a ženy za kočárky. Až když viděli, že je používají jiní, vozíky se ujaly.", "src": "Smithsonian Magazine"},
  // armour-in-parliament, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Statute_forbidding_Bearing_of_Armour
  //   https://www.legislation.gov.uk/aep/Edw2/7/0/section/wrapper1/data.htm?view=plain
  {"id": "armour-in-parliament", "topic": "history", "knowledge": "worldwide", "q": "Anglický zákon z roku 1313, formálně platný dodnes, zakazuje vstup do parlamentu v: ___.", "a": "brnění", "lie": "kloboucích", "why": "Prokuratura prý uvedla, že by případ oblečeného rytíře řešila nejdřív policie.", "src": "Wikipedia"},
  // snickers-horse, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Snickers
  //   https://www.tastingtable.com/1042389/the-racehorse-snickers-candy-bars-are-named-after
  {"id": "snickers-horse", "topic": "food", "knowledge": "worldwide", "q": "Tyčinka Snickers z roku 1930 je pojmenovaná podle oblíbeného zvířete rodiny Marsových. Byl to: ___.", "a": "kůň", "lie": "pes", "why": "Marsovi na své farmě chovali plnokrevné koně.", "src": "Wikipedia"},
  // royal-fish-sturgeon, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Royal_fish
  //   https://www.gov.uk/guidance/protection-of-common-sturgeon-advice-for-fishermen
  {"id": "royal-fish-sturgeon", "topic": "nature", "knowledge": "worldwide", "q": "Podle britského práva si může panovník nárokovat velryby a jednu rybu, ze které se dělá kaviár, ulovené v britských vodách: ___.", "a": "jeseter", "lie": "humr", "why": "Rybář, který jednoho chytí, musí kontaktovat Receiver of Wreck, úředníka jednajícího za Korunu.", "src": "Wikipedia"},
  // scotland-unicorn, checked 2026-10-31
  //   https://www.mentalfloss.com/culture/folklore-mythology/scotland-national-animal-unicorn
  //   https://en.wikipedia.org/wiki/Unicorn
  {"id": "scotland-unicorn", "topic": "nature", "knowledge": "worldwide", "q": "Národní zvíře Skotska je: ___.", "a": "jednorožec", "lie": "highlandský skot", "why": "Skotští králové dávali jednorožce do svého státního znaku jako štítonoše a už mu to zůstalo.", "src": "Mental Floss"},
  // nils-olav-knight, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Nils_Olav_III
  //   https://www.edinburghzoo.org.uk/news/major-general-sir-nils-olav-baron-bouvet-islands
  {"id": "nils-olav-knight", "topic": "nature", "knowledge": "worldwide", "q": "Tučňák z edinburské zoo dostal roku 2008 od norské královské gardy titul: ___.", "a": "rytíř", "lie": "biskup", "why": "Povýšení musel schválit norský král a tučňák je dnes dokonce generálmajor.", "src": "Edinburgh Zoo"},
  // dung-beetle-milky-way, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Dung_beetle
  //   https://earthsky.org/earth/dung-beetles-use-the-milky-way-to-navigate-at-night/
  {"id": "dung-beetle-milky-way", "topic": "nature", "knowledge": "worldwide", "q": "Brouk kutáleč, který valí kuličky trusu, se v noci drží směru podle části noční oblohy: ___.", "a": "Mléčná dráha", "lie": "Polárka", "why": "Vědci to ověřili v planetáriu: s Mléčnou dráhou šli rovně, jen s nejjasnějšími hvězdami bloudili.", "src": "Current Biology"},
  // otto-octopus-lamp, checked 2026-10-31
  //   https://www.practicalfishkeeping.co.uk/fishkeeping-news/aquarium-octopus-causes-havoc/
  //   https://www.peta.org/news/youve-punked-octopus/
  {"id": "otto-octopus-lamp", "topic": "nature", "knowledge": "worldwide", "q": "Chobotnice Otto z německého akvária opakovaně vyřadila proud v celé budově tím, že stříkala vodu na: ___.", "a": "reflektor", "lie": "bezpečnostní kameru", "why": "Navíc házela kameny do skla a přestavovala si nádrž. Ředitel říkal, že touží po pozornosti.", "src": "Practical Fishkeeping"},
  // stubbs-cat-mayor, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Stubbs_(cat)
  //   https://www.cbsnews.com/news/stubbs-dead-alaska-talkeetna-honorary-cat-mayor/
  {"id": "stubbs-cat-mayor", "topic": "nature", "knowledge": "worldwide", "q": "Aljašské městečko Talkeetna mělo dvacet let čestného starostu, kterým byl: ___.", "a": "kocour", "lie": "psí spřežení", "why": "Obyvatelé ho ze žertu psali na lístky a funkce byla čestná, protože městečko je jen historická čtvrť.", "src": "Wikipedia"},
  // dogs-poop-compass, checked 2026-10-31
  //   https://www.pbs.org/newshour/science/dogs-poop-in-alignment-with-earths-magnetic-field-study-finds
  //   https://www.foxnews.com/science/scientists-discover-dogs-preferred-bathroom-position
  {"id": "dogs-poop-compass", "topic": "science", "knowledge": "worldwide", "q": "Za klidných podmínek se psi při velké potřebě natáčejí k severu nebo jihu, protože cítí zemské: ___.", "a": "magnetické pole", "lie": "otáčení", "why": "Vědci dva roky sledovali 70 psů z 37 plemen. Při neklidném magnetickém poli efekt zmizel.", "src": "Frontiers in Zoology"},
  // ig-nobel-cats-liquid, checked 2026-10-31
  //   https://www.smithsonianmag.com/smart-news/ig-nobel-prizes-recognize-humorous-real-research-180964916/
  //   https://www.sciencealert.com/are-cats-a-liquid-ig-nobel-prize-physics-winner
  {"id": "ig-nobel-cats-liquid", "topic": "science", "knowledge": "worldwide", "q": "Ig Nobelovu cenu za fyziku 2017 dostal článek o tom, zda může být kočka zároveň pevná a: ___.", "a": "tekutá", "lie": "plynná", "why": "Autor došel k tomu, že kočka je tekutá, pokud jí dáte dost času, aby se přizpůsobila nádobě.", "src": "Smithsonian Magazine"},
  // pigeons-monet-picasso, checked 2026-10-31
  //   https://pmc.ncbi.nlm.nih.gov/articles/PMC1334394/
  //   https://en.wikipedia.org/wiki/Pigeon_intelligence
  {"id": "pigeons-monet-picasso", "topic": "science", "knowledge": "worldwide", "q": "V japonském pokusu se holubi naučili rozlišit obrazy Moneta od obrazů malíře: ___.", "a": "Picasso", "lie": "Rembrandt", "why": "Poznali i obrazy, které předtím neviděli. Moneta vzhůru nohama poznávali hůř, Picassa vzhůru nohama v pohodě.", "src": "J. of the Experimental Analysis of Behavior"},
  // bumblebees-roll-balls, checked 2026-10-31
  //   https://www.qmul.ac.uk/news/latest-news/2022/se/first-ever-study-shows-bumble-bees-play.html
  //   https://www.sci.news/biology/bumblebee-play-11342.html
  {"id": "bumblebees-roll-balls", "topic": "nature", "knowledge": "worldwide", "q": "Čmeláci opakovaně, jen tak pro zábavu a bez odměny, válejí malé dřevěné: ___.", "a": "kuličky", "lie": "kostky", "why": "Jeden čmelák kuličku převalil 117krát. Samci váleli déle než samice.", "src": "Queen Mary University of London"},
  // gerrymander-salamander, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/gerrymander
  //   https://en.wikipedia.org/wiki/Gerrymandering
  {"id": "gerrymander-salamander", "topic": "language", "knowledge": "worldwide", "q": "Slovo gerrymandering vzniklo z příjmení guvernéra a zvířete, které připomínal podivně tvarovaný volební obvod: ___.", "a": "salamandr", "lie": "štír", "why": "Guvernér Elbridge Gerry s touto praktikou prý nesouhlasil, ale slovo je přesto pojmenované po něm.", "src": "Merriam-Webster"},
  // tabby-baghdad-silk, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/tabby
  //   https://en.wikipedia.org/wiki/Tabby_cat
  {"id": "tabby-baghdad-silk", "topic": "language", "knowledge": "worldwide", "q": "Anglické slovo tabby (mourovatá kočka) je pojmenováno podle pruhovaného bagdádského: ___.", "a": "hedvábí", "lie": "koberce", "why": "Čtvrť v Bagdádu se jmenovala Attabíja. Kočka dostala jméno podle látky, ne naopak.", "src": "Merriam-Webster"},
  // alcohol-kohl, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/alcohol
  //   https://en.wikipedia.org/wiki/Alcohol_(chemistry)
  {"id": "alcohol-kohl", "topic": "language", "knowledge": "worldwide", "q": "Slovo alkohol pochází z arabského al-kuhl, původně jemného minerálního prášku, kterým si lidé malovali kolem: ___.", "a": "očí", "lie": "rtů", "why": "Kuhl byl prášek z nerostu antimonitu. Teprve později jeho jméno dostal destilovaný líh.", "src": "Merriam-Webster"},
  // pineapple-pinecone, checked 2026-10-31
  //   https://en.wiktionary.org/wiki/pineapple
  //   https://www.merriam-webster.com/dictionary/pineapple
  {"id": "pineapple-pinecone", "topic": "language", "knowledge": "worldwide", "q": "Než se slovo pineapple (ananas) přeneslo na ovoce, označovalo plod jehličnanu: ___.", "a": "šiška", "lie": "hruška", "why": "Ovoce vypadalo jako borová šiška, a tak se starému slovu dal nový význam.", "src": "Merriam-Webster"},
  // nickel-goblin, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Nickel
  //   https://www.merriam-webster.com/dictionary/nickel
  {"id": "nickel-goblin", "topic": "language", "knowledge": "worldwide", "q": "Němečtí horníci nazvali rudu, která vypadala jako měděná, ale měď nedala, „měděný ___“ (Kupfernickel).", "a": "skřítek", "lie": "mnich", "why": "Podle téhož skřítka dostal později jméno kov nikl.", "src": "Merriam-Webster"},
  // turtle-tears-butterflies, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Lachryphagy
  //   https://www.smithsonianmag.com/smart-news/watch-moth-gently-slurp-tears-slumbering-bird-180970430/
  {"id": "turtle-tears-butterflies", "topic": "nature", "knowledge": "worldwide", "q": "V Amazonii byli vyfotografováni motýli, jak pijí z očí říčních želv: ___.", "a": "slzy", "lie": "pot", "why": "Pití slz se jmenuje lachryfagie. Slzy jsou pro motýly zdroj soli a bílkovin.", "src": "Smithsonian Magazine"},
  // snail-love-dart, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Love_dart
  //   https://nhm.org/stories/snail-love
  {"id": "snail-love-dart", "topic": "nature", "knowledge": "worldwide", "q": "Před pářením se mnozí hlemýždi snaží navzájem zabodnout ostrý: ___.", "a": "milostný šíp", "lie": "žihadlo", "why": "Šíp nese hlen, který ovlivní, jak partner naloží se spermiemi, takže střelec zplodí víc potomků.", "src": "Natural History Museum of Los Angeles"},
  // sitovka-hairnets, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/String_bag
  //   https://www.archiweb.cz/en/n/home/ve-zdaru-n-s-ma-pomnik-taska-sitovka-ktera-ve-meste-vznikla
  {"id": "sitovka-hairnets", "topic": "history", "knowledge": "czech", "q": "Česká síťovka vznikla ve 20. letech ve Žďáru nad Sázavou v podniku, který předtím vyráběl: ___.", "a": "síťky na vlasy", "lie": "rybářské sítě", "why": "Když síťky na vlasy vyšly z módy, dal Vavřín Krčil svým domácím pracovnicím plést tašky.", "src": "Wikipedia, Archiweb"},
  // hron-elephant-balloon, checked 2026-10-31
  //   https://ekonomickydenik.cz/jakub-hron-metanovsky-skutecny-jara-cimrman
  //   https://cs.wikipedia.org/wiki/Jakub_Hron_Metánovský
  {"id": "hron-elephant-balloon", "topic": "science", "knowledge": "czech", "q": "Jakub Hron Metánovský postavil horkovzdušný balon ve tvaru zvířete, na jehož hřbetě měla sedět posádka: ___.", "a": "slon", "lie": "žirafa", "why": "V roce 1901 se balon roztrhl ještě před plánovaným startem v Hradci Králové. Mnohem lépe fungoval jeho nepřevrhnutelný kalamář.", "src": "Ekonomický deník, Wikipedie"},
  // hasek-imaginary-animals, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Jaroslav_Ha%C5%A1ek
  //   https://cs.wikipedia.org/wiki/Jaroslav_Hašek
  //   https://stephenjones.blog/2017/01/02/a-czech-mate/
  {"id": "hasek-imaginary-animals", "topic": "history", "knowledge": "czech", "q": "Jaroslava Haška vyhodili z redakce časopisu Svět zvířat, protože jeho články byly plné ___.", "a": "vymyšlených zvířat", "lie": "opsaných vtipů", "why": "Později založil obchod se psy zvaný Kynologický ústav, který za pár měsíců zkrachoval, ale inspiroval knihu Můj obchod se psy.", "src": "Wikipedie"},
  // colorado-beetle-propaganda, checked 2026-10-31
  //   https://english.radio.cz/node/8596512
  //   https://en.wikipedia.org/wiki/War_against_the_potato_beetle
  {"id": "colorado-beetle-propaganda", "topic": "history", "knowledge": "czech", "q": "Na začátku 50. let tvrdila československá propaganda, že americká letadla shazují na naše brambory ___.", "a": "mandelinky", "lie": "kobylky", "why": "Brouk se oficiálně jmenoval 'americký brouk', do pole šly hledat děti a vše skončilo až v uvolněných šedesátých letech.", "src": "Radio Prague International"},
  // velorex-oskar, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Velorex
  //   https://english.radio.cz/node/8716063
  {"id": "velorex-oskar", "topic": "history", "knowledge": "czech", "q": "Československá trojkolka s plátěnou karoserií z jízdních kol se dřív, než dostala jméno Velorex, jmenovala ___.", "a": "Oskar", "lie": "Pepík", "why": "První postavili bratři Stránští, kteří měli opravnu kol. Raný model jel nanejvýš kolem 30 km/h.", "src": "Wikipedie, Radio Prague International"},
  // krenovy-scales-museum, checked 2026-10-31
  //   https://www.kudyznudy.cz/aktuality/20-muzei-o-jejichz-existenci-jste-nemeli-tuseni
  //   https://www.visitczechia.com/en-us/news/2025/02/n-unique-objects-in-czech-museums
  {"id": "krenovy-scales-museum", "topic": "places", "knowledge": "czech", "q": "Nejmenší muzeum v Česku sídlí ve vážním domku v Křenovech a na čtyřech metrech čtverečních vystavuje ___.", "a": "váhy", "lie": "myší pasti", "why": "V domečku je dodnes funkční mechanismus zemědělské váhy.", "src": "Kudy z nudy, VisitCzechia"},
  // petrin-funicular-water, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Pet%C5%99%C3%ADn_funicular
  //   https://english.radio.cz/node/8723831
  {"id": "petrin-funicular-water", "topic": "places", "knowledge": "czech", "q": "Petřínská lanovka z roku 1891 neměla motor. Pohánělo ji závaží z ___.", "a": "vody", "lie": "písku", "why": "Sestupný vůz se plnil vodou. V zimě mrzla a lidem v Újezdě občas netekla z kohoutků.", "src": "Radio Prague International, Wikipedia"},
  // kinoautomat-fire, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Kinoautomat
  //   https://www.filfre.net/?p=3084
  {"id": "kinoautomat-fire", "topic": "history", "knowledge": "czech", "q": "V Kinoautomatu (Expo 67) diváci hlasovali devětkrát, ale ať zvolili cokoli, na konci shořel ___ pana Nováka.", "a": "dům", "lie": "kůlna", "why": "Režisér Radúz Činčera chtěl pevným koncem zesměšnit demokracii: všichni hlasují a nic se nemění.", "src": "Wikipedie"},
  // cesky-terrier-secret-police, checked 2026-10-31
  //   https://www.akc.org/expert-advice/dog-breeds/cesky-terrier-history-from-a-bohemian-hunting-dog-to-the-terrier-group/
  //   https://en.wikipedia.org/wiki/Cesky_Terrier
  {"id": "cesky-terrier-secret-police", "topic": "nature", "knowledge": "czech", "q": "Chovatel František Horák, tvůrce českého teriéra, dostával z ciziny tolik dopisů, že si na něj došla komunistická ___.", "a": "tajná policie", "lie": "celní správa", "why": "Prý jim řekl, že přece vědí, proč mu lidé píšou, když už jeho dopisy otevřeli a přečetli.", "src": "American Kennel Club, Wikipedie"},
  // mahen-theatre-edison, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Mahen_Theatre
  //   https://archiweb.cz/en/n/home/pred-140-lety-byl-zahajen-provoz-nynejsiho-mahenova-divadla-v-brne
  {"id": "mahen-theatre-edison", "topic": "science", "knowledge": "czech", "q": "Brněnské Mahenovo divadlo z roku 1882 vsadilo místo plynu na elektřinu, protože divadla často hořela. Plány osvětlení nakreslil osobně ___.", "a": "Thomas Edison", "lie": "František Křižík", "why": "Instalaci řídil Edisonův asistent Francis Jehl. Šlo o jednu z prvních veřejných budov na světě osvětlených výhradně elektřinou.", "src": "Wikipedie, Archiweb"},
  // fugging-signs, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Fugging
  //   https://www.travelweekly.com.au/article/no-fking-austrian-destination-changes-hilariously-unfortunate-name/
  {"id": "fugging-signs", "topic": "places", "knowledge": "worldwide", "adult": true, "q": "Rakouská ves Fucking se v roce 2021 přejmenovala na Fugging, mimo jiné proto, že jí turisté pořád kradli ___.", "a": "cedule s názvem", "lie": "čísla popisná", "why": "Ves má asi 100 obyvatel a měla dost vtipů i věčně mizejících cedulí.", "src": "Travel Weekly, Wikipedia"},
  // shitterton-stone, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Shitterton
  //   https://stonespecialist.com/news/stones-quarries/purbeck-sign-shitterton
  {"id": "shitterton-stone", "topic": "places", "knowledge": "worldwide", "adult": true, "q": "Anglická osada Shitterton měla tak dost krádeží své cedule, že si nechala udělat novou z 1,5tunového bloku ___.", "a": "purbeckého kamene", "lie": "cornwallské žuly", "why": "Přes polovina domácností přispěla po 20 librách a na usazení 1,5tunového bloku bylo potřeba nákladní auto s jeřábem.", "src": "Wikipedia, Stone Specialist"},
  // hell-gods-expedition, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Hell,_Norway
  //   https://www.lifeinnorway.net/hell-norway
  {"id": "hell-gods-expedition", "topic": "language", "knowledge": "worldwide", "q": "Stará cedule na nádraží v norské obci Hell hlásá „Gods-Expedition“, což v norštině znamená: ___.", "a": "expedice zboží", "lie": "úschovna zavazadel", "why": "„Gods“ je prostě „zboží“. Norské „hell“ navíc znamená štěstí a jméno obce pochází ze staré severštiny, kde označovalo skalní převis.", "src": "Life in Norway, Wikipedia"},
  // fartlek-speed-play, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Fartlek
  //   https://athleticsweekly.com/performance/training-cat/coaching/fartlek-running-playing-speed-15128/
  {"id": "fartlek-speed-play", "topic": "language", "knowledge": "worldwide", "q": "Běžecká metoda zvaná fartlek má název ze švédských slov, která znamenají „rychlostní ___“.", "a": "hra", "lie": "honička", "why": "Vymyslel ji švédský trenér Gösta Holmér koncem 30. let, aby střídal rychlé a pomalé úseky.", "src": "Wikipedia, Athletics Weekly"},
  // petomane-candle, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Joseph_Pujol
  //   https://www.messynessychic.com/2016/05/13/the-french-fartist-who-headlined-the-moulin-rouge/
  {"id": "petomane-candle", "topic": "body", "knowledge": "worldwide", "adult": true, "q": "Hvězda pařížského Moulin Rouge Joseph Pujol uměl v 90. letech 19. století sfouknout svíčku z několika metrů jen pomocí svého ___.", "a": "zadku", "lie": "plic", "why": "Vystupoval jako Le Pétomane, napodoboval také dělostřelbu a bouřku a Moulin Rouge ho žalovalo, když si přivydělával jinde.", "src": "Wikipedia, Messy Nessy Chic"},
  // herring-submarines, checked 2026-10-31
  //   https://iflscience.com/plants-and-animals/for-15-years-sweden-thought-enemy-submarines-were-invading-its-territory-it-turned-out-to-be-herring-farts
  //   https://www.herripedia.com/farting/
  {"id": "herring-submarines", "topic": "nature", "knowledge": "worldwide", "adult": true, "q": "Zvuky, které švédské námořnictvo ve 80. a 90. letech považovalo za sovětské ponorky, částečně způsobovali sledi: ___.", "a": "prdy", "lie": "námluvní zpěv", "why": "Sledi vypouštějí vzduch z plynového měchýře zadečkem. Výzkum zvuků sledů získal v roce 2004 Ig Nobelovu cenu za biologii.", "src": "IFLScience, Herripedia"},
  // giraffe-urine-test, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Flehmen_response
  //   https://gizmodo.com/how-giraffes-flirt-mating-habits-urine-1850090535
  {"id": "giraffe-urine-test", "topic": "nature", "knowledge": "worldwide", "adult": true, "q": "Samec žirafy zjišťuje, jestli je samice připravená k páření, tak, že ochutná její ___.", "a": "moč", "lie": "pot", "why": "Pomocí grimasy zvané flehmen vycítí ovulaci, protože žirafy jinak žádné viditelné známky nedávají.", "src": "Wikipedia, Gizmodo"},
  // fruit-flies-booze, checked 2026-10-31
  //   https://www.sciencedaily.com/releases/2012/03/120315145415.htm
  //   https://csmonitor.com/Science/2012/0315/Rejected-fruit-flies-use-alcohol-to-cope
  {"id": "fruit-flies-booze", "topic": "party", "knowledge": "worldwide", "adult": true, "q": "Podle studie z časopisu Science z roku 2012 si samci octomilek odmítnutí samicemi pak raději dopřávali potravu s příměsí ___.", "a": "alkoholu", "lie": "kofeinu", "why": "Samci, kteří se spářili, o ni zájem neměli, takže vědci tuto zálibu spojili s chemií odměny v mozku.", "src": "ScienceDaily, Christian Science Monitor"},
  // pliny-canary, checked 2026-10-31
  //   https://www.nationalgeographic.com/culture/article/from-fried-canary-to-pickled-plums-historys-questionable-hangover-cures
  //   https://www.mentalfloss.com/history/15-historical-hangover-cures
  {"id": "pliny-canary", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "Proti kocovině radil římský spisovatel Plinius Starší k snídani smaženého ___.", "a": "kanárka", "lie": "vrabce", "why": "Podle National Geographic se posypával solí a pepřem. Dalším římským nápadem proti kocovině byla syrová vejce sovy ve víně.", "src": "National Geographic, Mental Floss"},
  // navel-lint-ig-nobel, checked 2026-10-31
  //   https://pmc.ncbi.nlm.nih.gov/articles/PMC137346
  //   https://improbable.com/airchives/press/2002/chronicle-high-10-07-2002.html
  {"id": "navel-lint-ig-nobel", "topic": "body", "knowledge": "worldwide", "adult": true, "q": "Australský popularizátor vědy Karl Kruszelnicki získal v roce 2002 Ig Nobelovu cenu za průzkum ___.", "a": "žmolků v pupku", "lie": "ušního mazu", "why": "V průzkumu více než 4500 lidí zjistil, že žmolky v pupku mívají spíš muži, starší a ochlupení lidé a ti s pupkem dovnitř.", "src": "Improbable Research, CMAJ"},
  // mountain-dew-moonshine, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Mountain_Dew
  //   https://www.smithsonianmag.com/smart-news/mountain-dew-had-ties-moonshine-once-upon-time-180957978
  {"id": "mountain-dew-moonshine", "topic": "food", "knowledge": "worldwide", "adult": true, "q": "Limonáda Mountain Dew je pojmenovaná podle starého slangového výrazu pro ___.", "a": "domácí pálenku", "lie": "pramenitou vodu", "why": "Bratři Hartmanovi z Tennessee ji původně vyráběli jako citronovou přísadu do whisky.", "src": "Smithsonian Magazine, Wikipedia"},
  // kalsarikannit-underwear, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Kalsarik%C3%A4nnit
  //   https://www.mentalfloss.com/article/560095/kalsarikanni-or-getting-drunk-in-your-underwear-finland-version-hygge
  {"id": "kalsarikannit-underwear", "topic": "language", "knowledge": "worldwide", "adult": true, "q": "Finské slovo kalsarikännit popisuje opíjení se doma, bez plánu někam jít, jen ve ___.", "a": "spodním prádle", "lie": "županu", "why": "Doslova se překládá jako „opilost v kalhotách“ a Finsko pro to udělalo i emoji.", "src": "Mental Floss, Wikipedia"},
  // vin-mariani-pope, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Vin_Mariani
  //   https://www.mentalfloss.com/food/alcohol/vin-mariani-cocaine-wine-history
  {"id": "vin-mariani-pope", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "Papež Lev XIII. byl slavným příznivcem bordeauxského vína Vin Mariani, do něhož se přidával výtažek z ___.", "a": "kokových listů", "lie": "makovic", "why": "V jedné unci bylo asi 6 mg kokainu a reklamy tvrdily, že papež poslal výrobci zlatou medaili.", "src": "Mental Floss, Wikipedia"},
  // groom-of-the-stool, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Groom_of_the_Stool
  //   https://tudorsociety.com/groom-stool-sarah-bryson/
  {"id": "groom-of-the-stool", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "Na dvoře Jindřicha VIII. patřil k nejžádanějším postům „Groom of the Stool“, jehož držitel pečoval o královy ___.", "a": "toaletní záležitosti", "lie": "lovecké psy", "why": "Blízkost králi mu časem přinesla skutečnou moc včetně správy královské soukromé pokladny.", "src": "Wikipedia, Tudor Society"},
  // hippo-sunscreen, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Hipposudoric_acid
  //   https://animals.sandiegozoo.org/animals/hippo
  {"id": "hippo-sunscreen", "topic": "nature", "knowledge": "worldwide", "q": "Načervenalá tekutina na kůži hrochů, které se říká „krvavý pot“, funguje jako přírodní ___.", "a": "opalovací krém", "lie": "parfém", "why": "Není to krev ani pot: nejdřív je bezbarvá a během pár minut zčervená do oranžova a pak zhnědne.", "src": "Wikipedia, San Diego Zoo"},
  // barnacle-longest, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Barnacle
  //   https://pmc.ncbi.nlm.nih.gov/articles/PMC2600913/
  {"id": "barnacle-longest", "topic": "nature", "knowledge": "worldwide", "adult": true, "q": "Vzhledem k velikosti těla má nejdelší penis ze všech zvířat ___.", "a": "svijonožec", "lie": "tuleň sloní", "why": "Může měřit až osminásobek délky těla, což se hodí, když je živočich přilepený na místě.", "src": "PubMed Central, Wikipedia"},
  // bowerbird-blue, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Satin_bowerbird
  //   https://www.australiangeographic.com.au/news/2017/12/satin-bowerbird-saved-from-plastic-chokehold/
  {"id": "bowerbird-blue", "topic": "nature", "knowledge": "worldwide", "q": "Aby zaujali samice, zdobí samci lemčíků saténových své besídky modrými předměty, třeba ___.", "a": "víčky od lahví", "lie": "kuličkami", "why": "Poblíž měst berou i kolíčky na prádlo, slámky a propisky, hlavně když jsou modré.", "src": "Australian Geographic, Wikipedia"},
  // duck-corkscrew, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Argentine_lake_duck
  //   https://www.sciencefocus.com/nature/duck-penis-corkscrew
  {"id": "duck-corkscrew", "topic": "nature", "knowledge": "worldwide", "adult": true, "q": "Penis kačera je stočený jako ___ a u jednoho argentinského kačera naměřili 42,5 cm.", "a": "vývrtka", "lie": "bumerang", "why": "Je to rekord a zhruba tolik měří tělo ptáka. Samice si vyvinuly spirálovité pochvy stočené opačným směrem, takže mají v tom, kdo uspěje, slovo.", "src": "Science Focus"},
  // echidna-four-heads, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Echidna
  //   https://www.australiangeographic.com.au/topics/wildlife/2021/05/echidna-penises-why-theyre-so-weird
  {"id": "echidna-four-heads", "topic": "nature", "knowledge": "worldwide", "adult": true, "q": "Penis ježury má čtyři ___, ale najednou se používají jen dvě.", "a": "hlavy", "lie": "ostny", "why": "Dvojice, která je právě v akci, se při dalším páření střídá, druhá dvojice se vypne.", "src": "Australian Geographic"},
  // winchester-geese, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Winchester_Geese
  //   https://wellcomecollection.org/stories/the-bishop-s-profitable-sex-workers
  {"id": "winchester-geese", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "Licence pro středověké nevěstince v Southwarku, kde pracovaly „winchesterské husy“, vydával winchesterský ___.", "a": "biskup", "lie": "starosta", "why": "Biskup z nich vybíral nájmy a pokuty, takže londýnská čtvrť červených luceren vydělávala církvi.", "src": "Wellcome Collection"},
  // kabuto-gata-condom, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Condom
  //   https://wellcomecollection.org/works/drhdmnh6
  {"id": "kabuto-gata-condom", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "Rané japonské kondomy zvané kabuto-gata se dělaly ze zvířecího rohu nebo z ___.", "a": "želvoviny", "lie": "bambusu", "why": "Zakrývaly jen špičku. Muzea dodnes uchovávají želvovinové kousky z 19. století.", "src": "Wellcome Collection"},
  // flatworm-penis-fencing, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Penis_fencing
  //   https://www.sciencenews.org/?p=29801
  {"id": "flatworm-penis-fencing", "topic": "nature", "knowledge": "worldwide", "adult": true, "q": "Někteří hermafroditní ploštěnci svádějí souboj o to, kdo ponese nákladnou roli samice, a šermují při něm svými ___.", "a": "penisy", "lie": "ocasy", "why": "Každý se snaží vpíchnout sperma druhému a sám se vyhnout vpichu. Podle jednoho badatele chce být samcem každý.", "src": "Science News"},
  // prohibition-wine-brick, checked 2026-10-31
  //   https://www.smithsonianmag.com/smart-news/ingenious-brick-helped-wine-industry-survive-prohibition-180956412/
  //   https://www.tastingtable.com/1943655/prohibition-era-grape-juice-warnings
  {"id": "prohibition-wine-brick", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "Za prohibice se prodávaly cihly hroznového koncentrátu s „varováním“: rozpuštěnou šťávu nenechávejte 21 dní ve skříňce, jinak se z ní stane ___.", "a": "víno", "lie": "pálenka", "why": "Domácí výroba vína byla legální skulina, a tak vinaři cihly prodávali a podrobně popsali, co NEDĚLAT.", "src": "Smithsonian Magazine"},
  // edward-love-chair, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Love_chair
  //   https://www.foxbusiness.com/markets/royal-love-chair-could-be-yours-for-68k
  {"id": "edward-love-chair", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "Budoucí Eduard VII. si nechal do pařížského nevěstince Le Chabanais dodat speciálně vyrobené ___.", "a": "křeslo lásky", "lie": "postel s nebesy", "why": "Vyrobila ho firma Soubrier a bylo navržené pro více společníků. V roce 2015 bylo k vidění v Musée d'Orsay.", "src": "Fox Business"},
  // penis-tail, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/penis
  //   https://en.wikipedia.org/wiki/Penis
  {"id": "penis-tail", "topic": "language", "knowledge": "worldwide", "adult": true, "q": "Latinské slovo „penis“ původně znamenalo ___.", "a": "ocas", "lie": "kopí", "why": "Byl to eufemismus, který zdomácněl. V angličtině je poprvé doložen roku 1578.", "src": "Merriam-Webster"},
  // tomcat-spines, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Cat_anatomy
  //   https://cdn.citl.illinois.edu/courses/ANSC207/week7/cat_repro/web_data/slides_and_notes.htm
  {"id": "tomcat-spines", "topic": "body", "knowledge": "worldwide", "adult": true, "q": "Penis kocoura je pokrytý stovkami drobných ___, které u kočky pomáhají spustit ovulaci.", "a": "ostnů", "lie": "chloupků", "why": "Kočky ovulují až po páření. Ostny závisejí na testosteronu a po kastraci zmizí během několika týdnů.", "src": "University of Illinois"},
  // bundling-board, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Bundling_(tradition)
  //   https://daily.jstor.org/bundling-an-old-tradition-on-new-ground
  {"id": "bundling-board", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "V koloniální Nové Anglii mohl nápadník strávit noc v posteli s dívkou, pokud mezi nimi leželo ___.", "a": "prkno", "lie": "závěs", "why": "Říkalo se tomu bundling. Dělo se to pod dohledem rodičů a někteří páry místo prkna používali spací pytel zašitý uprostřed.", "src": "JSTOR Daily"},
  // merkin-wig, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Merkin
  //   https://www.merriam-webster.com/dictionary/merkin
  {"id": "merkin-wig", "topic": "language", "knowledge": "worldwide", "adult": true, "q": "„Merkin“, slovo doložené od roku 1617, je paruka určená pro ___.", "a": "ohanbí", "lie": "podpaží", "why": "Nosí se po oholení, na jevišti nebo pro zábavu. Slovo pravděpodobně pochází z „malkin“, zdrobněliny jména Mary.", "src": "Merriam-Webster"},
  // french-letter-capote, checked 2026-10-31
  //   https://fr.wiktionary.org/wiki/capote_anglaise
  //   https://www.whiteswritingwhiteness.ed.ac.uk/blog/french-letters/
  {"id": "french-letter-capote", "topic": "history", "knowledge": "worldwide", "adult": true, "q": "Britové říkali kondomům „francouzské dopisy“. Francouzi oplatili „capote anglaise“, tedy anglický ___.", "a": "plášť", "lie": "deštník", "why": "Každý národ to svaloval na druhý. Britský název se objevuje v 50. letech 19. století, kdy Britové žili obavami z francouzské invaze.", "src": "University of Edinburgh"},
  // dunnock-cloaca-pecking, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Dunnock
  //   https://besgroup.org/2013/12/22/sex-and-the-birds-10-dunnock%e2%80%99s-mixed-bag-of-breeding-systems/
  {"id": "dunnock-cloaca-pecking", "topic": "nature", "knowledge": "worldwide", "adult": true, "q": "Samec pěvušky modré před spářením opakovaně klove samici do ___, aby vypudila sperma z dřívějšího páření.", "a": "kloaky", "lie": "krku", "why": "Sexuální život nenápadného hnědého ptáčka je tak soutěživý, že na něm biolog Nick Davies postavil kariéru.", "src": "Bird Ecology Study Group"},
  // berk-berkeley-hunt, checked 2026-10-31
  //   https://en.wikipedia.org/wiki/Cockney_rhyming_slang
  //   https://www.merriam-webster.com/dictionary/berk
  {"id": "berk-berkeley-hunt", "topic": "language", "knowledge": "worldwide", "adult": true, "q": "Mírná britská nadávka „berk“ je zkratka z „Berkeley Hunt“, slavného ___, jehož jméno se rýmuje s mnohem sprostějším slovem.", "a": "liščího honu", "lie": "dostihového závodiště", "why": "Obvykle se odvozuje z cockneyho rýmovaného slangu. Většina lidí, kdo to říkají, netuší, co se za tím skrývá.", "src": "Merriam-Webster"},
]});
