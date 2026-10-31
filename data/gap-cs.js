// The Gap / Díra facts (cs). Every fact must be TRUE.
// DRAFT: written from memory on 2026-10-31. The sources below are planned, NOT yet opened and checked
// (the build environment had no web access). ok:false shows a 'not verified yet' note in the game.
// To verify: open both sources, confirm the fact, then set ok:true and update the date.
window.PB_GAP = window.PB_GAP || [];
PB_GAP.push({ lang: 'cs', facts: [
  // source: https://en.wikipedia.org/wiki/R.U.R.
  // source: https://www.britannica.com/technology/robot-technology
  {"id": "robot", "topic": "language", "q": "Slovo „robot“ pro hru R.U.R. svému bratrovi Karlovi vymyslel ___.", "a": "Josef Čapek", "lie": "Jaroslav Hašek", "why": "Karel chtěl „labori“, Josef navrhl „roboti“ od slova robota, tedy nucená práce.", "src": "Karel Čapek: Lidové noviny, 24. 12. 1933", "ok": false},
  // source: https://www.britannica.com/topic/dollar
  // source: https://en.wikipedia.org/wiki/Joachimsthaler
  {"id": "dollar", "topic": "language", "q": "Slovo „dolar“ pochází od stříbrné mince ražené v 16. století ve městě ___.", "a": "Jáchymov", "lie": "Kutná Hora", "why": "Mince se jmenovala jáchymovský tolar, německy Joachimsthaler. Z „thaler“ vznikl dolar.", "src": "Britannica: dollar", "ok": false},
  // source: https://www.etymonline.com/word/pistol
  // source: https://en.wikipedia.org/wiki/Pistol
  {"id": "pistol", "topic": "language", "q": "Anglické slovo „pistol“ nejspíš pochází z českého slova ___.", "a": "píšťala", "lie": "bič", "why": "Husité tak říkali ruční palné zbrani, protože tvarem připomínala píšťalu.", "src": "Online Etymology Dictionary: pistol", "ok": false},
  // source: https://www.etymonline.com/word/howitzer
  // source: https://en.wikipedia.org/wiki/Howitzer
  {"id": "howitzer", "topic": "language", "q": "Anglické slovo „howitzer“ (houfnice) pochází z češtiny, od husitského slova ___.", "a": "houfnice", "lie": "hákovnice", "why": "Houfnice střílela kamením do houfu nepřátel. Přes němčinu se dostala do angličtiny.", "src": "Online Etymology Dictionary: howitzer", "ok": false},
  // source: https://cs.wikipedia.org/wiki/Brambor_obecn%C3%BD
  // source: https://prirucka.ujc.cas.cz/
  {"id": "brambor", "topic": "language", "q": "Česká „brambora“ dostala jméno podle země, odkud k nám přišla: ___.", "a": "Braniborsko", "lie": "Bavorsko", "why": "Braniborsko je německy Brandenburg. Brambory k nám v 18. století dorazily právě odtud.", "src": "Internetová jazyková příručka ÚJČ AV ČR", "ok": false},
  // source: https://www.britannica.com/art/polka-dance
  // source: https://en.wikipedia.org/wiki/Polka
  {"id": "polka", "topic": "history", "q": "Tanec polka vznikl ve 30. letech 19. století v této zemi: ___.", "a": "Čechy", "lie": "Polsko", "why": "Jméno se často vykládá od „půlky“, podle krátkých půlkroků.", "src": "Britannica: polka", "ok": false},
  // source: https://en.wikipedia.org/wiki/Semtex
  // source: https://www.explosia.cz/
  {"id": "semtex", "topic": "places", "q": "Výbušnina Semtex má jméno podle obce u Pardubic: ___.", "a": "Semtín", "lie": "Semily", "why": "Vyrábí ji tam podnik Explosia od 60. let 20. století.", "src": "Explosia a.s. (výrobce)", "ok": false},
  // source: https://ocean.si.edu/ocean-life/invertebrates/octopuses
  // source: https://en.wikipedia.org/wiki/Octopus
  {"id": "octopus", "topic": "nature", "q": "Chobotnice má tolik srdcí: ___.", "a": "tři", "lie": "dvě", "why": "Dvě pumpují krev přes žábry, třetí do celého těla. Krev mají modrou.", "src": "Smithsonian Ocean: octopus", "ok": false},
  // source: https://pubs.rsc.org/en/content/articlelanding/2021/sm/d0sm01230k
  // source: https://en.wikipedia.org/wiki/Wombat
  {"id": "wombat", "topic": "nature", "q": "Trus vombata má neobvyklý tvar: ___.", "a": "kostka", "lie": "hvězdička", "why": "Tvar vzniká ve střevě, které má různě pružné úseky. Vombati si jím značkují území.", "src": "Soft Matter (2021): How do wombats make cubed poo?", "ok": false},
  // source: https://www.science.org/doi/10.1126/science.aaf1703
  // source: https://en.wikipedia.org/wiki/Greenland_shark
  {"id": "shark", "topic": "nature", "q": "Žralok malohlavý (grónský) se podle vědců může dožít zhruba ___ let.", "a": "400", "lie": "150", "why": "Věk určili radiouhlíkovým datováním čočky oka. Je to nejdéle žijící známý obratlovec.", "src": "Science (2016): Nielsen et al., Greenland shark longevity", "ok": false},
  // source: https://www.nature.com/articles/382577a0
  // source: https://en.wikipedia.org/wiki/Koala
  {"id": "koala", "topic": "nature", "q": "Zvíře, jehož otisky prstů jsou skoro k nerozeznání od lidských: ___.", "a": "koala", "lie": "lenochod", "why": "Vyvinuly se nezávisle na nás, nejspíš kvůli úchopu větviček.", "src": "Nature (1996): Henneberg et al., koala fingerprints", "ok": false},
  // source: https://www.britannica.com/science/berry-plant-reproductive-body
  // source: https://en.wikipedia.org/wiki/Berry_(botany)
  {"id": "banana", "topic": "nature", "q": "Botanicky je bobule ___, ale jahoda ne.", "a": "banán", "lie": "malina", "why": "Bobule vzniká z jednoho semeníku. Jahoda je nepravý plod, malina souplodí.", "src": "Britannica: berry", "ok": false},
  // source: https://www.dacice.cz/
  // source: https://en.wikipedia.org/wiki/Sugar_cube
  {"id": "sugar", "topic": "food", "q": "Kostkový cukr vznikl v roce 1843 v cukrovaru ve městě ___.", "a": "Dačice", "lie": "Kolín", "why": "Ředitel Jakub Kryštof Rad ho vymyslel, když se jeho žena řízla při sekání homole cukru.", "src": "Město Dačice: kostka cukru", "ok": false},
  // source: https://www.prazdroj.cz/
  // source: https://en.wikipedia.org/wiki/Pilsner_Urquell
  {"id": "pilsner", "topic": "food", "q": "První plzeňský ležák uvařil v roce 1842 sládek, který byl původem ___.", "a": "Bavor", "lie": "Vídeňák", "why": "Jmenoval se Josef Groll a přivezl bavorskou metodu spodního kvašení.", "src": "Plzeňský Prazdroj: historie", "ok": false},
  // source: https://www.smithsonianmag.com/arts-culture/the-surprising-origin-of-ketchup
  // source: https://en.wikipedia.org/wiki/Ketchup
  {"id": "ketchup", "topic": "food", "q": "Původní asijský „kečup“ se nedělal z rajčat, ale z tohohle: ___.", "a": "ryby", "lie": "švestky", "why": "Byla to kvašená rybí omáčka. Rajčata přidali až Američané na začátku 19. století.", "src": "Smithsonian Magazine: ketchup history", "ok": false},
  // source: https://www.kirinholdings.com/en/newsroom/
  // source: https://en.wikipedia.org/wiki/List_of_countries_by_beer_consumption_per_capita
  {"id": "beer", "topic": "food", "q": "Nejvíc piva na osobu na světě se už přes 25 let po sobě vypije v této zemi: ___.", "a": "Česko", "lie": "Německo", "why": "Zhruba 130 až 140 litrů na osobu ročně podle žebříčku Kirin.", "src": "Kirin Holdings: Global Beer Consumption by Country", "ok": false},
  // source: https://science.nasa.gov/venus/venus-facts/
  // source: https://en.wikipedia.org/wiki/Venus
  {"id": "venus", "topic": "science", "q": "Na planetě ___ trvá jedna otočka kolem osy déle než celý rok.", "a": "Venuše", "lie": "Mars", "why": "Otočí se za 243 pozemských dní, kolem Slunce oběhne za 225. A točí se opačně.", "src": "NASA: Venus facts", "ok": false},
  // source: https://www.britannica.com/science/stapes
  // source: https://en.wikipedia.org/wiki/Stapes
  {"id": "stapes", "topic": "science", "q": "Nejmenší kost lidského těla najdeš tady: ___.", "a": "v uchu", "lie": "v nose", "why": "Je to třmínek, kůstka středního ucha. Měří asi 3 milimetry.", "src": "Britannica: stapes", "ok": false},
  // source: https://www.bluetooth.com/about-us/bluetooth-origin/
  // source: https://en.wikipedia.org/wiki/Harald_Bluetooth
  {"id": "bluetooth", "topic": "science", "q": "Bluetooth je pojmenovaný po králi, který v 10. století vládl této zemi: ___.", "a": "Dánsko", "lie": "Švédsko", "why": "Harald Modrozub sjednotil dánské kmeny, jako má technologie sjednotit zařízení.", "src": "Bluetooth SIG: Origin of the Bluetooth name", "ok": false},
  // source: https://cs.wikipedia.org/wiki/Nejv%C4%9Bt%C5%A1%C3%AD_%C4%8Cech
  // source: https://www.ceskatelevize.cz/
  {"id": "cimrman", "topic": "history", "q": "V anketě Největší Čech (2005) by vyhrál, ale vyřadili ho, protože je smyšlený: ___.", "a": "Jára Cimrman", "lie": "Josef Švejk", "why": "Vítězem se tak stal Karel IV., druhý byl T. G. Masaryk.", "src": "Česká televize: Největší Čech (2005)", "ok": false},
  // source: https://www.mua.cas.cz/
  // source: https://en.wikipedia.org/wiki/Charlotte_Garrigue_Masaryk
  {"id": "masaryk", "topic": "history", "q": "Tomáš G. Masaryk si ke svému jménu přidal příjmení Garrigue, které patřilo jeho: ___.", "a": "manželka", "lie": "matka", "why": "Charlotte Garrigue byla Američanka. Přidal si její jméno po svatbě v roce 1878.", "src": "Masarykův ústav a Archiv AV ČR", "ok": false},
  // source: https://www.imc.cas.cz/
  // source: https://en.wikipedia.org/wiki/Otto_Wichterle
  {"id": "wichterle", "topic": "history", "q": "Otto Wichterle vyrobil v roce 1961 první měkké kontaktní čočky doma na stroji ze stavebnice ___.", "a": "Merkur", "lie": "Lego", "why": "Pracoval v kuchyni, motorek byl z dynama jízdního kola.", "src": "Ústav makromolekulární chemie AV ČR: Otto Wichterle", "ok": false},
  // source: https://www.britannica.com/biography/Jan-Evangelista-Purkinje
  // source: https://en.wikipedia.org/wiki/Jan_Evangelista_Purkyn%C4%9B
  {"id": "purkyne", "topic": "history", "q": "Jan Evangelista Purkyně v roce 1823 jako jeden z prvních vědecky roztřídil ___.", "a": "otisky prstů", "lie": "krevní skupiny", "why": "Popsal devět typů vzorů. Policie je ale začala používat až o desítky let později.", "src": "Britannica: Jan Evangelista Purkyně", "ok": false},
  // source: https://www.britannica.com/biography/Jan-Jansky
  // source: https://en.wikipedia.org/wiki/Jan_Jansk%C3%BD
  {"id": "jansky", "topic": "history", "q": "Český lékař Jan Janský v roce 1907 rozdělil lidskou krev do tohoto počtu skupin: ___.", "a": "čtyři", "lie": "šest", "why": "Landsteiner předtím popsal tři. Janský jako první všechny čtyři: 0, A, B a AB.", "src": "Britannica: Jan Janský", "ok": false},
  // source: https://www.npcs.cz/
  // source: https://en.wikipedia.org/wiki/Pravčická_brána
  {"id": "pravcicka", "topic": "places", "q": "Největší přírodní pískovcová brána v Evropě je v Česku a jmenuje se ___.", "a": "Pravčická brána", "lie": "Tiská brána", "why": "Rozpětí oblouku je přes 26 metrů. Na bránu se od roku 1982 nesmí chodit.", "src": "Národní park České Švýcarsko", "ok": false},
  // source: https://www.caves.cz/
  // source: https://en.wikipedia.org/wiki/Hranice_Abyss
  {"id": "hranice", "topic": "places", "q": "Nejhlubší známá zatopená propast na světě je u města ___.", "a": "Hranice", "lie": "Blansko", "why": "Dno ještě nikdo nenašel, měření ukazují přes 400 metrů pod hladinou.", "src": "Správa jeskyní ČR: Hranická propast", "ok": false},
  // source: https://www.prague.eu/
  // source: https://en.wikipedia.org/wiki/Charles_Bridge
  {"id": "charlesbridge", "topic": "places", "q": "Podle tradice byl základní kámen Karlova mostu položen 9. 7. 1357 v 5:31, takže čísla 1357 9 7 5 31 tvoří ___.", "a": "palindrom", "lie": "Karlovo datum narození", "why": "Řada 135797531 se čte stejně zepředu i zezadu. Karel IV. věřil astrologii.", "src": "Prague City Tourism: Charles Bridge", "ok": false},
]});
