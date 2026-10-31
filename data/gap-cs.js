// The Gap / Díra facts (cs). Every fact must be TRUE.
// Each fact was checked against at least two sources that were opened and read (URLs above it).
// To add one: same fields, two sources, then run the second check before committing.
window.PB_GAP = window.PB_GAP || [];
PB_GAP.push({ lang: 'cs', facts: [
  // robot, checked 2026-10-31
  //   https://www.novinky.cz/historie/clanek/pred-130-lety-se-narodil-literarni-velikan-ktery-dal-svetu-robota-toto-slovo-vsak-nevymyslel-40309280
  //   https://www.merriam-webster.com/dictionary/robot
  //   https://en.wikipedia.org/wiki/R.U.R.
  {"id": "robot", "topic": "language", "q": "Slovo „robot“ pro hru R.U.R. svému bratrovi Karlovi vymyslel ___.", "a": "Josef Čapek", "lie": "Jaroslav Hašek", "why": "Karel chtěl „laboři“, ale znělo mu to papírově. Josef navrhl „roboti“, od slova robota.", "src": "Lidové noviny (K. Čapek, 1933)"},
  // dollar, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/dollar
  //   https://en.wikipedia.org/wiki/Joachimsthaler
  //   https://en.wikipedia.org/wiki/Dollar
  {"id": "dollar", "topic": "language", "q": "Slovo „dolar“ pochází od stříbrné mince ražené v 16. století ve městě ___.", "a": "Jáchymov", "lie": "Kutná Hora", "why": "Mince se jmenovala jáchymovský tolar, německy Joachimsthaler. Z „thaler“ vznikl dolar.", "src": "Merriam-Webster"},
  // pistol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pistol
  //   https://www.dictionary.com/browse/pistol
  //   https://en.wikipedia.org/wiki/Pistol
  {"id": "pistol", "topic": "language", "q": "Anglické slovo „pistol“ nejspíš pochází z českého slova ___.", "a": "píšťala", "lie": "bič", "why": "Husité tak říkali lehké ruční palné zbrani. Do angličtiny slovo doputovalo přes němčinu a francouzštinu.", "src": "Merriam-Webster"},
  // howitzer, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/howitzer
  //   https://www.dictionary.com/browse/howitzer
  //   https://en.wikipedia.org/wiki/Howitzer
  {"id": "howitzer", "topic": "language", "q": "Anglické slovo „howitzer“ pochází z češtiny, od husitského slova ___.", "a": "houfnice", "lie": "hákovnice", "why": "Husité z ní stříleli na krátkou vzdálenost do houfu nepřátel. Do angličtiny se dostala přes němčinu a nizozemštinu.", "src": "Merriam-Webster"},
  // brambor, checked 2026-10-31
  //   https://macau.uni-kiel.de/servlets/MCRFileNodeServlet/macau_derivate_00006618//kiel-up_2750-9605_p4.pdf
  //   https://en.wiktionary.org/wiki/brambor
  {"id": "brambor", "topic": "language", "q": "Česká „brambora“ dostala jméno podle země, odkud k nám podle tradice přišla: ___.", "a": "Braniborsko", "lie": "Bavorsko", "why": "Etymologové (Machek, Rejzek) ho vykládají jako „plodinu z Branibor“. Přinést ji měli pruští vojáci v 18. století.", "src": "Kiel-UP: J. Šnejdrlová, Názvy bramboru"},
  // polka, checked 2026-10-31
  //   https://www.bozemandailychronicle.com/go/word-of-the-week-polka-dance-craze-has-disputed-origins/article_13fc2570-2c7b-11e3-84aa-0019bb2963f4.html
  //   https://en.wikipedia.org/wiki/Polka
  //   https://www.newworldencyclopedia.org/entry/polka
  {"id": "polka", "topic": "history", "q": "Tanec polka vznikl ve 30. letech 19. století v této zemi: ___.", "a": "Čechy", "lie": "Polsko", "why": "Původ jména je sporný: možná od „půlky“ podle krátkých půlkroků, možná od slova Polka.", "src": "Bozeman Daily Chronicle (Chrysti the Wordsmith)"},
  // semtex, checked 2026-10-31
  //   https://www.csmonitor.com/2002/0226/p07s02-woeu.html
  //   https://en.wikipedia.org/wiki/Semtex
  //   https://explosia.cz/historie/
  {"id": "semtex", "topic": "places", "q": "Výbušnina Semtex má jméno podle místa u Pardubic: ___.", "a": "Semtín", "lie": "Semily", "why": "Vynalezli ji tamní chemici a vyrábí se tam od 60. let 20. století, dnes v podniku Explosia.", "src": "The Christian Science Monitor"},
  // octopus, checked 2026-10-31
  //   https://www.sciencefocus.com/nature/why-does-an-octopus-have-more-than-one-heart
  //   https://en.wikipedia.org/wiki/Octopus
  {"id": "octopus", "topic": "nature", "q": "Chobotnice má tolik srdcí: ___.", "a": "tři", "lie": "dvě", "why": "Dvě pumpují krev přes žábry, třetí do celého těla. Krev mají modrou díky mědi.", "src": "BBC Science Focus"},
  // wombat, checked 2026-10-31
  //   https://www.australiangeographic.com.au/news/2021/02/why-do-wombats-have-cube-shaped-poo-scientists-may-have-solved-the-mystery/
  //   https://www.sci.news/biology/wombat-square-shaped-feces-09314.html
  //   https://en.wikipedia.org/wiki/Common_wombat
  {"id": "wombat", "topic": "nature", "q": "Trus vombata má neobvyklý tvar: ___.", "a": "kostka", "lie": "hvězdička", "why": "Tvar vzniká ve střevě, které má tužší a pružnější úseky. Kostky kladou na nápadná místa jako vzkaz ostatním.", "src": "Australian Geographic"},
  // shark, checked 2026-10-31
  //   https://pubmed.ncbi.nlm.nih.gov/27516602/
  //   https://www.sciencenews.org/article/study-ranks-greenland-shark-longest-lived-vertebrate
  //   https://www.pbs.org/wgbh/nova/article/greenland-shark-is-officially-the-longest-living-vertebrate-on-earth/
  {"id": "shark", "topic": "nature", "q": "Nejstarší zkoumaný žralok malohlavý (grónský) měl podle odhadu vědců zhruba ___ let.", "a": "400", "lie": "150", "why": "Věk (asi 272 až 512 let) určili radiouhlíkem z oční čočky. Je to nejdéle žijící známý obratlovec.", "src": "Science (2016): Nielsen et al."},
  // koala, checked 2026-10-31
  //   https://www.pbs.org/wgbh/nova/article/koala-fingerprints/
  //   https://indianapublicmedia.org/amomentofscience/humans-arent-unique-when-it-comes-to-fingerprints.php
  {"id": "koala", "topic": "nature", "q": "Jediné zvíře mimo primáty, které má otisky prstů nápadně podobné lidským: ___.", "a": "koala", "lie": "lenochod", "why": "Vyvinuly se nezávisle na našich, nejspíš kvůli uchopování eukalyptových větví a listů.", "src": "PBS NOVA"},
  // banana, checked 2026-10-31
  //   https://www.livescience.com/57477-why-are-bananas-considered-berries.html
  //   https://en.wikipedia.org/wiki/Berry_(botany)
  {"id": "banana", "topic": "nature", "q": "Botanicky je bobule ___, ale jahoda ne.", "a": "banán", "lie": "malina", "why": "Bobule vzniká z květu s jediným semeníkem. Jahoda je nepravý plod, malina souplodí.", "src": "Live Science"},
  // sugar, checked 2026-10-31
  //   https://www.dacice.cz/introduction/world-primacy/
  //   https://dpma.de/english/our_office/publications/milestones/inventionsthatmadehistory/sugarcubes/index.html
  //   https://english.radio.cz/node/8706003
  {"id": "sugar", "topic": "food", "q": "Kostkový cukr si v roce 1843 nechal patentovat ředitel cukrovaru ve městě ___.", "a": "Dačice", "lie": "Kolín", "why": "Podle vyprávění se jeho žena Juliana řízla při sekání homole cukru a chtěla lepší řešení.", "src": "Město Dačice"},
  // pilsner, checked 2026-10-31
  //   https://live.pilsnerurquell.com/stories/how-pilsner-urquell-changed-beer-forever/
  //   https://english.radio.cz/node/8180026
  //   https://en.wikipedia.org/wiki/Josef_Groll
  {"id": "pilsner", "topic": "food", "q": "První plzeňský ležák uvařil v roce 1842 sládek, který byl původem ___.", "a": "Bavor", "lie": "Vídeňák", "why": "Jmenoval se Josef Groll a uvařil světlý ležák bavorskou metodou spodního kvašení.", "src": "Pilsner Urquell"},
  // ketchup, checked 2026-10-31
  //   https://www.wnyc.org/story/ketchup-the-all-american-condiment-that-comes-from-asia
  //   https://www.csmonitor.com/The-Culture/In-a-Word/2023/0410/The-origins-of-ketchup-or-catsup-run-through-fish-sauce
  //   https://en.wikipedia.org/wiki/Ketchup
  {"id": "ketchup", "topic": "food", "q": "Původní asijský „kečup“ se nedělal z rajčat, ale z tohohle: ___.", "a": "ryby", "lie": "švestky", "why": "Byl to nálev z nakládaných ryb z jižní Číny. První recept na rajčatový kečup vyšel v USA až v roce 1812.", "src": "WNYC / NPR"},
  // beer, checked 2026-10-31
  //   https://www.kirinholdings.com/en/newsroom/release/2025/1222_01.html
  //   https://www.newstream.cz/zpravy-z-firem/alespon-v-necem-prvni-cesi-opet-ovladli-zebricek-spotreby-piva
  //   https://en.wikipedia.org/wiki/List_of_countries_by_beer_consumption_per_capita
  {"id": "beer", "topic": "food", "q": "Nejvíc piva na osobu na světě se už přes 30 let po sobě vypije v této zemi: ___.", "a": "Česko", "lie": "Německo", "why": "Podle žebříčku Kirin je první nepřetržitě od roku 1993. V roce 2024 to bylo zhruba 150 litrů na osobu.", "src": "Kirin Holdings (2025)"},
  // venus, checked 2026-10-31
  //   https://science.nasa.gov/venus/venus-facts/
  //   https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html
  //   https://en.wikipedia.org/wiki/Venus
  {"id": "venus", "topic": "science", "q": "Na planetě ___ trvá jedna otočka kolem osy déle než celý rok.", "a": "Venuše", "lie": "Mars", "why": "Otočí se za 243 pozemských dní, kolem Slunce oběhne za 225. A točí se opačně.", "src": "NASA"},
  // stapes, checked 2026-10-31
  //   https://www.healthline.com/human-body-maps/stapes-bone
  //   https://en.wikipedia.org/wiki/Stapes
  {"id": "stapes", "topic": "science", "q": "Nejmenší kost lidského těla najdeš tady: ___.", "a": "v uchu", "lie": "v nose", "why": "Je to třmínek, kůstka středního ucha. Měří jen asi 2 až 3 milimetry.", "src": "Healthline"},
  // bluetooth, checked 2026-10-31
  //   https://www.bluetooth.com/about-us/bluetooth-origin/
  //   https://en.wikipedia.org/wiki/Harald_Bluetooth
  {"id": "bluetooth", "topic": "science", "q": "Bluetooth je pojmenovaný po králi, který v 10. století vládl této zemi: ___.", "a": "Dánsko", "lie": "Švédsko", "why": "Harald Modrozub sjednotil Dánsko a Norsko, tak jako má Bluetooth propojit zařízení.", "src": "Bluetooth SIG"},
  // cimrman, checked 2026-10-31
  //   https://english.radio.cz/node/8095952
  //   https://www.novinky.cz/kultura/clanek/nejvetsim-cechem-se-stal-karel-iv-40101476
  //   https://cs.wikipedia.org/wiki/Nejv%C4%9Bt%C5%A1%C3%AD_%C4%8Cech
  {"id": "cimrman", "topic": "history", "q": "V anketě ČT Největší Čech (2005) neoficiálně vedl, ale vyřadili ho, protože je smyšlený: ___.", "a": "Jára Cimrman", "lie": "Josef Švejk", "why": "Oficiálně tak vyhrál Karel IV., druhý byl T. G. Masaryk a třetí Václav Havel.", "src": "Radio Prague International"},
  // masaryk, checked 2026-10-31
  //   https://ct24.ceskatelevize.cz/domaci/2240131-pred-80-lety-se-narodil-taticek-i-prezident-osvoboditel-tgm
  //   https://english.radio.cz/node/8601235
  //   https://en.wikipedia.org/wiki/Charlotte_Garrigue_Masaryk
  {"id": "masaryk", "topic": "history", "q": "Tomáš G. Masaryk si ke svému jménu přidal příjmení Garrigue, které patřilo jeho: ___.", "a": "manželka", "lie": "matka", "why": "Charlotte Garrigue byla Američanka. Její jméno přijal po svatbě v New Yorku v roce 1878.", "src": "Česká televize"},
  // wichterle, checked 2026-10-31
  //   https://www.kudyznudy.cz/ceska-nej/vedecke/kontaktni-cocky
  //   https://blog.google/intl/cs-CZ/produkty-sluzby/objevujte-ziskavejte-odpovedi/2021_10_google-dnes-v-rade-zemi-pripomina/
  //   https://en.wikipedia.org/wiki/Otto_Wichterle
  {"id": "wichterle", "topic": "history", "q": "Otto Wichterle vyrobil o Vánocích 1961 první měkké kontaktní čočky doma na stroji ze stavebnice ___.", "a": "Merkur", "lie": "Lego", "why": "Stroj poháněl dynamem z jízdního kola. Originál je dnes v Národním technickém muzeu.", "src": "CzechTourism (Kudy z nudy)"},
  // purkyne, checked 2026-10-31
  //   https://www.nlm.nih.gov/exhibition/visibleproofs/galleries/exhibition/views_image_6.html
  //   https://en.wikipedia.org/wiki/Jan_Evangelista_Purkyn%C4%9B
  {"id": "purkyne", "topic": "history", "q": "Jan Evangelista Purkyně v roce 1823 jako jeden z prvních vědecky roztřídil ___.", "a": "otisky prstů", "lie": "krevní skupiny", "why": "Popsal devět typů vzorů. K identifikaci lidí je ale začali používat až o desítky let později.", "src": "U.S. National Library of Medicine"},
  // jansky, checked 2026-10-31
  //   https://english.radio.cz/node/8588826
  //   https://www.visitczechia.com/en-us/news/2023/03/n-jan-jansky-prominent-czech-physician
  //   https://en.wikipedia.org/wiki/Jan_Jansk%C3%BD
  {"id": "jansky", "topic": "history", "q": "Český lékař Jan Janský v roce 1907 rozdělil lidskou krev do tohoto počtu skupin: ___.", "a": "čtyři", "lie": "šest", "why": "Landsteiner v roce 1901 popsal tři. Janský jako první roztřídil krev do čtyř: dnešní 0, A, B a AB.", "src": "Radio Prague International"},
  // pravcicka, checked 2026-10-31
  //   https://www.novinky.cz/cestovani/tipy-na-vylety/clanek/nejvetsi-piskovcovou-branu-v-evrope-strezi-skalni-hrady-bez-posadky-40296094
  //   https://en.wikipedia.org/wiki/Pravčická_brána
  //   https://cs.wikipedia.org/wiki/Pravčická_brána
  {"id": "pravcicka", "topic": "places", "q": "Největší přírodní pískovcová brána v Evropě je v Česku a jmenuje se ___.", "a": "Pravčická brána", "lie": "Tiská brána", "why": "Rozpětí oblouku je přes 26 metrů. Kvůli trhlinám se na ni od roku 1982 nesmí chodit.", "src": "Novinky.cz"},
  // hranice, checked 2026-10-31
  //   https://www.novinky.cz/clanek/veda-skoly-speleologove-namerili-novy-svetovy-rekord-hranicke-propasti-40404594
  //   https://en.wikipedia.org/wiki/Hranice_Abyss
  {"id": "hranice", "topic": "places", "q": "Nejhlubší známá zatopená propast na světě je u města ___.", "a": "Hranice", "lie": "Blansko", "why": "Robot se v roce 2022 dostal 450 metrů pod hladinu a dno nenašel. Může být až kilometr hluboko.", "src": "Novinky.cz (ČTK)"},
  // charlesbridge, checked 2026-10-31
  //   https://visitczechia.com/en-us/news/2024/07/n-charles-bridge-660-years
  //   https://www.praha1.cz/karluv-most-667-let/
  //   https://en.wikipedia.org/wiki/Charles_Bridge
  {"id": "charlesbridge", "topic": "places", "q": "Podle legendy byl základní kámen Karlova mostu položen 9. 7. 1357 v 5:31, takže čísla 1357 9 7 5 31 tvoří ___.", "a": "palindrom", "lie": "Karlovo datum narození", "why": "Řada 135797531 se čte stejně zepředu i zezadu. Čas prý doporučili dvorní astrologové.", "src": "VisitCzechia (CzechTourism)"},
]});
