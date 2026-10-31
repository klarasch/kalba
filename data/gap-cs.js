// The Gap / Díra facts (cs). Every fact must be TRUE.
// Each fact was checked against at least two sources that were opened and read (URLs above it).
// To add one: same fields, two sources, then run the second check before committing.
// "knowledge" says who can be expected to know it: czech, european or worldwide (see data/README.md).
window.PB_GAP = window.PB_GAP || [];
PB_GAP.push({ lang: 'cs', facts: [
  // robot, checked 2026-10-31
  //   https://www.novinky.cz/historie/clanek/pred-130-lety-se-narodil-literarni-velikan-ktery-dal-svetu-robota-toto-slovo-vsak-nevymyslel-40309280
  //   https://www.merriam-webster.com/dictionary/robot
  //   https://en.wikipedia.org/wiki/R.U.R.
  {"id": "robot", "topic": "language", "knowledge": "european", "q": "Slovo „robot“ pro hru R.U.R. svému bratrovi Karlovi vymyslel ___.", "a": "Josef Čapek", "lie": "Jaroslav Hašek", "why": "Karel chtěl „laboři“, ale znělo mu to papírově. Josef navrhl „roboti“, od slova robota.", "src": "Lidové noviny (K. Čapek, 1933)"},
  // dollar, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/dollar
  //   https://en.wikipedia.org/wiki/Joachimsthaler
  //   https://en.wikipedia.org/wiki/Dollar
  {"id": "dollar", "topic": "language", "knowledge": "european", "q": "Slovo „dolar“ pochází od stříbrné mince ražené v 16. století ve městě ___.", "a": "Jáchymov", "lie": "Kutná Hora", "why": "Mince se jmenovala jáchymovský tolar, německy Joachimsthaler. Z „thaler“ vznikl dolar.", "src": "Merriam-Webster"},
  // pistol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/pistol
  //   https://www.dictionary.com/browse/pistol
  //   https://en.wikipedia.org/wiki/Pistol
  {"id": "pistol", "topic": "language", "knowledge": "czech", "q": "Anglické slovo „pistol“ nejspíš pochází z českého slova ___.", "a": "píšťala", "lie": "bič", "why": "Husité tak říkali lehké ruční palné zbrani. Do angličtiny slovo doputovalo přes němčinu a francouzštinu.", "src": "Merriam-Webster"},
  // howitzer, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/howitzer
  //   https://www.dictionary.com/browse/howitzer
  //   https://en.wikipedia.org/wiki/Howitzer
  {"id": "howitzer", "topic": "language", "knowledge": "czech", "q": "Anglické slovo „howitzer“ pochází z češtiny, od husitského slova ___.", "a": "houfnice", "lie": "hákovnice", "why": "Husité z ní stříleli na krátkou vzdálenost do houfu nepřátel. Do angličtiny se dostala přes němčinu a nizozemštinu.", "src": "Merriam-Webster"},
  // brambor, checked 2026-10-31
  //   https://macau.uni-kiel.de/servlets/MCRFileNodeServlet/macau_derivate_00006618//kiel-up_2750-9605_p4.pdf
  //   https://en.wiktionary.org/wiki/brambor
  {"id": "brambor", "topic": "language", "knowledge": "czech", "q": "Česká „brambora“ dostala jméno podle země, odkud k nám podle tradice přišla: ___.", "a": "Braniborsko", "lie": "Bavorsko", "why": "Etymologové (Machek, Rejzek) ho vykládají jako „plodinu z Branibor“. Přinést ji měli pruští vojáci v 18. století.", "src": "Kiel-UP: J. Šnejdrlová, Názvy bramboru"},
  // polka, checked 2026-10-31
  //   https://www.bozemandailychronicle.com/go/word-of-the-week-polka-dance-craze-has-disputed-origins/article_13fc2570-2c7b-11e3-84aa-0019bb2963f4.html
  //   https://en.wikipedia.org/wiki/Polka
  //   https://www.newworldencyclopedia.org/entry/polka
  {"id": "polka", "topic": "history", "knowledge": "european", "q": "Tanec polka vznikl ve 30. letech 19. století v této zemi: ___.", "a": "Čechy", "lie": "Polsko", "why": "Původ jména je sporný: možná od „půlky“ podle krátkých půlkroků, možná od slova Polka.", "src": "Bozeman Daily Chronicle (Chrysti the Wordsmith)"},
  // semtex, checked 2026-10-31
  //   https://www.csmonitor.com/2002/0226/p07s02-woeu.html
  //   https://en.wikipedia.org/wiki/Semtex
  //   https://explosia.cz/historie/
  {"id": "semtex", "topic": "places", "knowledge": "czech", "q": "Výbušnina Semtex má jméno podle místa u Pardubic: ___.", "a": "Semtín", "lie": "Semily", "why": "Vynalezli ji tamní chemici a vyrábí se tam od 60. let 20. století, dnes v podniku Explosia.", "src": "The Christian Science Monitor"},
  // octopus, checked 2026-10-31
  //   https://www.sciencefocus.com/nature/why-does-an-octopus-have-more-than-one-heart
  //   https://en.wikipedia.org/wiki/Octopus
  {"id": "octopus", "topic": "nature", "knowledge": "worldwide", "q": "Chobotnice má tolik srdcí: ___.", "a": "tři", "lie": "dvě", "why": "Dvě pumpují krev přes žábry, třetí do celého těla. Krev mají modrou díky mědi.", "src": "BBC Science Focus"},
  // wombat, checked 2026-10-31
  //   https://www.australiangeographic.com.au/news/2021/02/why-do-wombats-have-cube-shaped-poo-scientists-may-have-solved-the-mystery/
  //   https://www.sci.news/biology/wombat-square-shaped-feces-09314.html
  //   https://en.wikipedia.org/wiki/Common_wombat
  {"id": "wombat", "topic": "nature", "knowledge": "worldwide", "q": "Trus vombata má neobvyklý tvar: ___.", "a": "kostka", "lie": "hvězdička", "why": "Tvar vzniká ve střevě, které má tužší a pružnější úseky. Kostky kladou na nápadná místa jako vzkaz ostatním.", "src": "Australian Geographic"},
  // shark, checked 2026-10-31
  //   https://pubmed.ncbi.nlm.nih.gov/27516602/
  //   https://www.sciencenews.org/article/study-ranks-greenland-shark-longest-lived-vertebrate
  //   https://www.pbs.org/wgbh/nova/article/greenland-shark-is-officially-the-longest-living-vertebrate-on-earth/
  {"id": "shark", "topic": "nature", "knowledge": "worldwide", "q": "Nejstarší zkoumaný žralok malohlavý (grónský) měl podle odhadu vědců zhruba ___ let.", "a": "400", "lie": "150", "why": "Věk (asi 272 až 512 let) určili radiouhlíkem z oční čočky. Je to nejdéle žijící známý obratlovec.", "src": "Science (2016): Nielsen et al."},
  // koala, checked 2026-10-31
  //   https://www.pbs.org/wgbh/nova/article/koala-fingerprints/
  //   https://indianapublicmedia.org/amomentofscience/humans-arent-unique-when-it-comes-to-fingerprints.php
  {"id": "koala", "topic": "nature", "knowledge": "worldwide", "q": "Jediné zvíře mimo primáty, které má otisky prstů nápadně podobné lidským: ___.", "a": "koala", "lie": "lenochod", "why": "Vyvinuly se nezávisle na našich, nejspíš kvůli uchopování eukalyptových větví a listů.", "src": "PBS NOVA"},
  // banana, checked 2026-10-31
  //   https://www.livescience.com/57477-why-are-bananas-considered-berries.html
  //   https://en.wikipedia.org/wiki/Berry_(botany)
  {"id": "banana", "topic": "nature", "knowledge": "worldwide", "q": "Botanicky je bobule ___, ale jahoda ne.", "a": "banán", "lie": "malina", "why": "Bobule vzniká z květu s jediným semeníkem. Jahoda je nepravý plod, malina souplodí.", "src": "Live Science"},
  // sugar, checked 2026-10-31
  //   https://www.dacice.cz/introduction/world-primacy/
  //   https://dpma.de/english/our_office/publications/milestones/inventionsthatmadehistory/sugarcubes/index.html
  //   https://english.radio.cz/node/8706003
  {"id": "sugar", "topic": "food", "knowledge": "czech", "q": "Kostkový cukr si v roce 1843 nechal patentovat ředitel cukrovaru ve městě ___.", "a": "Dačice", "lie": "Kolín", "why": "Podle vyprávění se jeho žena Juliana řízla při sekání homole cukru a chtěla lepší řešení.", "src": "Město Dačice"},
  // pilsner, checked 2026-10-31
  //   https://live.pilsnerurquell.com/stories/how-pilsner-urquell-changed-beer-forever/
  //   https://english.radio.cz/node/8180026
  //   https://en.wikipedia.org/wiki/Josef_Groll
  {"id": "pilsner", "topic": "food", "knowledge": "european", "q": "První plzeňský ležák uvařil v roce 1842 sládek, který byl původem ___.", "a": "Bavor", "lie": "Vídeňák", "why": "Jmenoval se Josef Groll a uvařil světlý ležák bavorskou metodou spodního kvašení.", "src": "Pilsner Urquell"},
  // ketchup, checked 2026-10-31
  //   https://www.wnyc.org/story/ketchup-the-all-american-condiment-that-comes-from-asia
  //   https://www.csmonitor.com/The-Culture/In-a-Word/2023/0410/The-origins-of-ketchup-or-catsup-run-through-fish-sauce
  //   https://en.wikipedia.org/wiki/Ketchup
  {"id": "ketchup", "topic": "food", "knowledge": "worldwide", "q": "Původní asijský „kečup“ se nedělal z rajčat, ale z tohohle: ___.", "a": "ryby", "lie": "švestky", "why": "Byl to nálev z nakládaných ryb z jižní Číny. První recept na rajčatový kečup vyšel v USA až v roce 1812.", "src": "WNYC / NPR"},
  // beer, checked 2026-10-31
  //   https://www.kirinholdings.com/en/newsroom/release/2025/1222_01.html
  //   https://www.newstream.cz/zpravy-z-firem/alespon-v-necem-prvni-cesi-opet-ovladli-zebricek-spotreby-piva
  //   https://en.wikipedia.org/wiki/List_of_countries_by_beer_consumption_per_capita
  {"id": "beer", "topic": "food", "knowledge": "european", "q": "Nejvíc piva na osobu na světě se už přes 30 let po sobě vypije v této zemi: ___.", "a": "Česko", "lie": "Německo", "why": "Podle žebříčku Kirin je první nepřetržitě od roku 1993. V roce 2024 to bylo zhruba 150 litrů na osobu.", "src": "Kirin Holdings (2025)"},
  // venus, checked 2026-10-31
  //   https://science.nasa.gov/venus/venus-facts/
  //   https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html
  //   https://en.wikipedia.org/wiki/Venus
  {"id": "venus", "topic": "science", "knowledge": "worldwide", "q": "Na planetě ___ trvá jedna otočka kolem osy déle než celý rok.", "a": "Venuše", "lie": "Mars", "why": "Otočí se za 243 pozemských dní, kolem Slunce oběhne za 225. A točí se opačně.", "src": "NASA"},
  // stapes, checked 2026-10-31
  //   https://www.healthline.com/human-body-maps/stapes-bone
  //   https://en.wikipedia.org/wiki/Stapes
  {"id": "stapes", "topic": "science", "knowledge": "worldwide", "q": "Nejmenší kost lidského těla najdeš tady: ___.", "a": "v uchu", "lie": "v nose", "why": "Je to třmínek, kůstka středního ucha. Měří jen asi 2 až 3 milimetry.", "src": "Healthline"},
  // bluetooth, checked 2026-10-31
  //   https://www.bluetooth.com/about-us/bluetooth-origin/
  //   https://en.wikipedia.org/wiki/Harald_Bluetooth
  {"id": "bluetooth", "topic": "science", "knowledge": "european", "q": "Bluetooth je pojmenovaný po králi, který v 10. století vládl této zemi: ___.", "a": "Dánsko", "lie": "Švédsko", "why": "Harald Modrozub sjednotil Dánsko a Norsko, tak jako má Bluetooth propojit zařízení.", "src": "Bluetooth SIG"},
  // cimrman, checked 2026-10-31
  //   https://english.radio.cz/node/8095952
  //   https://www.novinky.cz/kultura/clanek/nejvetsim-cechem-se-stal-karel-iv-40101476
  //   https://cs.wikipedia.org/wiki/Nejv%C4%9Bt%C5%A1%C3%AD_%C4%8Cech
  {"id": "cimrman", "topic": "history", "knowledge": "czech", "q": "V anketě ČT Největší Čech (2005) neoficiálně vedl, ale vyřadili ho, protože je smyšlený: ___.", "a": "Jára Cimrman", "lie": "Josef Švejk", "why": "Oficiálně tak vyhrál Karel IV., druhý byl T. G. Masaryk a třetí Václav Havel.", "src": "Radio Prague International"},
  // masaryk, checked 2026-10-31
  //   https://ct24.ceskatelevize.cz/domaci/2240131-pred-80-lety-se-narodil-taticek-i-prezident-osvoboditel-tgm
  //   https://english.radio.cz/node/8601235
  //   https://en.wikipedia.org/wiki/Charlotte_Garrigue_Masaryk
  {"id": "masaryk", "topic": "history", "knowledge": "czech", "q": "Tomáš G. Masaryk si ke svému jménu přidal příjmení Garrigue, které patřilo jeho: ___.", "a": "manželka", "lie": "matka", "why": "Charlotte Garrigue byla Američanka. Její jméno přijal po svatbě v New Yorku v roce 1878.", "src": "Česká televize"},
  // wichterle, checked 2026-10-31
  //   https://www.kudyznudy.cz/ceska-nej/vedecke/kontaktni-cocky
  //   https://blog.google/intl/cs-CZ/produkty-sluzby/objevujte-ziskavejte-odpovedi/2021_10_google-dnes-v-rade-zemi-pripomina/
  //   https://en.wikipedia.org/wiki/Otto_Wichterle
  {"id": "wichterle", "topic": "history", "knowledge": "czech", "q": "Otto Wichterle vyrobil o Vánocích 1961 první měkké kontaktní čočky doma na stroji ze stavebnice ___.", "a": "Merkur", "lie": "Lego", "why": "Stroj poháněl dynamem z jízdního kola. Originál je dnes v Národním technickém muzeu.", "src": "CzechTourism (Kudy z nudy)"},
  // purkyne, checked 2026-10-31
  //   https://www.nlm.nih.gov/exhibition/visibleproofs/galleries/exhibition/views_image_6.html
  //   https://en.wikipedia.org/wiki/Jan_Evangelista_Purkyn%C4%9B
  {"id": "purkyne", "topic": "history", "knowledge": "czech", "q": "Jan Evangelista Purkyně v roce 1823 jako jeden z prvních vědecky roztřídil ___.", "a": "otisky prstů", "lie": "krevní skupiny", "why": "Popsal devět typů vzorů. K identifikaci lidí je ale začali používat až o desítky let později.", "src": "U.S. National Library of Medicine"},
  // jansky, checked 2026-10-31
  //   https://english.radio.cz/node/8588826
  //   https://www.visitczechia.com/en-us/news/2023/03/n-jan-jansky-prominent-czech-physician
  //   https://en.wikipedia.org/wiki/Jan_Jansk%C3%BD
  {"id": "jansky", "topic": "history", "knowledge": "czech", "q": "Český lékař Jan Janský v roce 1907 rozdělil lidskou krev do tohoto počtu skupin: ___.", "a": "čtyři", "lie": "šest", "why": "Landsteiner v roce 1901 popsal tři. Janský jako první roztřídil krev do čtyř: dnešní 0, A, B a AB.", "src": "Radio Prague International"},
  // pravcicka, checked 2026-10-31
  //   https://www.novinky.cz/cestovani/tipy-na-vylety/clanek/nejvetsi-piskovcovou-branu-v-evrope-strezi-skalni-hrady-bez-posadky-40296094
  //   https://en.wikipedia.org/wiki/Pravčická_brána
  //   https://cs.wikipedia.org/wiki/Pravčická_brána
  {"id": "pravcicka", "topic": "places", "knowledge": "czech", "q": "Největší přírodní pískovcová brána v Evropě je v Česku a jmenuje se ___.", "a": "Pravčická brána", "lie": "Tiská brána", "why": "Rozpětí oblouku je přes 26 metrů. Kvůli trhlinám se na ni od roku 1982 nesmí chodit.", "src": "Novinky.cz"},
  // hranice, checked 2026-10-31
  //   https://www.novinky.cz/clanek/veda-skoly-speleologove-namerili-novy-svetovy-rekord-hranicke-propasti-40404594
  //   https://en.wikipedia.org/wiki/Hranice_Abyss
  {"id": "hranice", "topic": "places", "knowledge": "czech", "q": "Nejhlubší známá zatopená propast na světě je u města ___.", "a": "Hranice", "lie": "Blansko", "why": "Robot se v roce 2022 dostal 450 metrů pod hladinu a dno nenašel. Může být až kilometr hluboko.", "src": "Novinky.cz (ČTK)"},
  // charlesbridge, checked 2026-10-31
  //   https://visitczechia.com/en-us/news/2024/07/n-charles-bridge-660-years
  //   https://www.praha1.cz/karluv-most-667-let/
  //   https://en.wikipedia.org/wiki/Charles_Bridge
  {"id": "charlesbridge", "topic": "places", "knowledge": "czech", "q": "Podle legendy byl základní kámen Karlova mostu položen 9. 7. 1357 v 5:31, takže čísla 1357 9 7 5 31 tvoří ___.", "a": "palindrom", "lie": "Karlovo datum narození", "why": "Řada 135797531 se čte stejně zepředu i zezadu. Čas prý doporučili dvorní astrologové.", "src": "VisitCzechia (CzechTourism)"},
  // crown-keys, checked 2026-10-31
  //   https://english.radio.cz/node/8828817
  //   https://en.wikipedia.org/wiki/Bohemian_Crown_Jewels
  {"id": "crown-keys", "topic": "history", "knowledge": "czech", "q": "Komora s českými korunovačními klenoty v katedrále sv. Víta má zámky a klíče drží současně několik lidí (prezident, premiér, arcibiskup...). Počet držitelů klíčů: ___.", "a": "sedm", "lie": "tři", "why": "Tradice sedmi klíčů vznikla v roce 1791, u klíčů se střídají zástupci státu, města a církve.", "src": "Český rozhlas"},
  // zizka-blind, checked 2026-10-31
  //   https://www.worldhistory.org/Jan_Zizka/
  //   https://en.wikipedia.org/wiki/Jan_%C5%BDi%C5%BEka
  {"id": "zizka-blind", "topic": "history", "knowledge": "czech", "q": "Husitský vojevůdce Jan Žižka zůstal za života nepřemožen, a to i v posledních letech, kdy byl úplně ___.", "a": "slepý", "lie": "hluchý", "why": "Oko ztratil v mládí, o druhé přišel při obléhání hradu Rabí roku 1421, a přesto dál velel vojsku.", "src": "World History Encyclopedia"},
  // tycho-nose, checked 2026-10-31
  //   https://muzeum3000.nm.cz/national-museum-news/research-of-the-tomb-and-remains-of-tycho-brahe
  //   https://en.wikipedia.org/wiki/Tycho_Brahe
  {"id": "tycho-nose", "topic": "history", "knowledge": "european", "q": "Astronom Tycho Brahe přišel v souboji o kus nosu a nosil protézu. Rozbor jeho ostatků exhumovaných v roce 2010 ukázal, že nebyla ze zlata ani ze stříbra, ale z tohoto kovu: ___.", "a": "mosaz", "lie": "olovo", "why": "V kosti nosu se našla měď a zinek v poměru typickém pro mosaz. Tycho zemřel v Praze roku 1601.", "src": "Národní muzeum"},
  // remek, checked 2026-10-31
  //   https://english.radio.cz/node/8598510
  //   https://en.wikipedia.org/wiki/Vladim%C3%ADr_Remek
  //   https://spacefacts.de/mission/english/soyuz-28.htm
  {"id": "remek", "topic": "history", "knowledge": "czech", "q": "Prvním člověkem ve vesmíru, který nebyl ani Američan, ani Sovět, se v roce 1978 stal Čechoslovák: ___.", "a": "Vladimír Remek", "lie": "Jiří Grygar", "why": "Letěl v březnu 1978 na Sojuzu 28 v rámci programu Interkosmos a ve vesmíru strávil necelých osm dní.", "src": "Český rozhlas"},
  // suttner, checked 2026-10-31
  //   https://www.nobelprize.org/prizes/peace/1905/suttner/facts/
  //   https://en.wikipedia.org/wiki/Bertha_von_Suttner
  {"id": "suttner", "topic": "history", "knowledge": "european", "q": "První ženou, která získala Nobelovu cenu míru (v roce 1905), byla Bertha von Suttnerová. Její rodné město: ___.", "a": "Praha", "lie": "Vídeň", "why": "Narodila se roku 1843 v Praze jako hraběnka Kinská.", "src": "Nobelprize.org"},
  // mucha-stamps, checked 2026-10-31
  //   https://muchafoundation.org/gallery/browse-works/object/263
  //   https://en.wikipedia.org/wiki/Alfons_Mucha
  {"id": "mucha-stamps", "topic": "history", "knowledge": "czech", "q": "Malíř Alfons Mucha po vzniku Československa v roce 1918 navrhl bankovky a první československé ___.", "a": "poštovní známky", "lie": "vlajku", "why": "První bankovka podle jeho návrhu vyšla v roce 1919, pro nový stát navrhl dokonce i policejní uniformy.", "src": "Mucha Foundation"},
  // arcimboldo, checked 2026-10-31
  //   https://skoklostersslott.se/en/paintings/giuseppe-arcimboldo
  //   https://en.wikipedia.org/wiki/Vertumnus_%28Arcimboldo%29
  {"id": "arcimboldo", "topic": "history", "knowledge": "european", "q": "Italský malíř Arcimboldo namaloval císaře Rudolfa II. jako římského boha Vertumna. Jeho tvář a tělo tvoří: ___.", "a": "ovoce a zelenina", "lie": "knihy", "why": "Obraz vznikl kolem roku 1590 pro pražský dvůr, dnes visí na zámku Skokloster ve Švédsku.", "src": "Skokloster Castle"},
  // charles-name, checked 2026-10-31
  //   https://english.radio.cz/node/8226516
  //   https://en.wikipedia.org/wiki/Charles_IV,_Holy_Roman_Emperor
  {"id": "charles-name", "topic": "history", "knowledge": "european", "q": "Císař Karel IV. se při narození jmenoval jinak, jméno Karel přijal až při biřmování ve Francii. Jeho rodné jméno: ___.", "a": "Václav", "lie": "Jan", "why": "Jméno Karel si vybral na počest francouzského krále Karla IV., na jehož dvoře v Paříži vyrůstal.", "src": "Český rozhlas"},
  // divis-drought, checked 2026-10-31
  //   https://english.radio.cz/node/8819683
  //   https://en.wikipedia.org/wiki/Prokop_Divi%C5%A1
  {"id": "divis-drought", "topic": "history", "knowledge": "czech", "q": "Kněz Prokop Diviš postavil v Přímětici roku 1754 jeden z prvních uzemněných bleskosvodů. Místní ho v roce 1759 zničili, protože ho obviňovali, že způsobil: ___.", "a": "sucho", "lie": "povodeň", "why": "Diviš svůj přístroj nazval meteorologický stroj a po zničení ho už znovu nepostavil.", "src": "Český rozhlas"},
  // zatopek, checked 2026-10-31
  //   https://www.olympedia.org/results/58937
  //   https://en.wikipedia.org/wiki/Emil_Z%C3%A1topek
  {"id": "zatopek", "topic": "history", "knowledge": "european", "q": "Na olympiádě v Helsinkách 1952 vyhrál Emil Zátopek 5000 m, 10 000 m a pak ještě závod, který běžel úplně poprvé v životě: ___.", "a": "maraton", "lie": "chůzi na 50 km", "why": "O startu se rozhodl na poslední chvíli a vyhrál s olympijským rekordem.", "src": "Olympedia"},
  // smetana-deaf, checked 2026-10-31
  //   https://english.radio.cz/node/8083862
  //   https://en.wikipedia.org/wiki/Bed%C5%99ich_Smetana
  {"id": "smetana-deaf", "topic": "history", "knowledge": "european", "q": "Skladatel Bedřich Smetana napsal většinu cyklu Má vlast, aniž by ho slyšel, protože byl od roku 1874 úplně: ___.", "a": "hluchý", "lie": "slepý", "why": "Ohluchl po dlouhé nemoci a cyklus dokončil na konci 70. let 19. století.", "src": "Český rozhlas"},
  // anthem-fidlovacka, checked 2026-10-31
  //   https://eurozpravy.cz/magazin/ceska-hymna-poprve-zaznela-pred-190-lety-v-tylove-fidlovacce.txkavdj1
  //   https://en.wikipedia.org/wiki/Kde_domov_m%C5%AFj
  {"id": "anthem-fidlovacka", "topic": "history", "knowledge": "czech", "q": "Píseň Kde domov můj poprvé zazněla roku 1834 v Tylově divadelní hře s názvem ___.", "a": "Fidlovačka", "lie": "Strakonický dudák", "why": "Hudbu napsal František Škroup, píseň zpíval slepý houslista a hymnou se stala až po roce 1918.", "src": "Eurozprávy"},
  // legion-railway, checked 2026-10-31
  //   https://english.radio.cz/node/8146390
  //   https://en.wikipedia.org/wiki/Czechoslovak_Legion
  //   https://mentalfloss.com/article/545120/wwi-centennial-czech-legion-revolts-sedition-act-passed
  {"id": "legion-railway", "topic": "history", "knowledge": "czech", "q": "V roce 1918 ovládly československé legie v Rusku na čas celou tuto železnici: ___.", "a": "Transsibiřská magistrála", "lie": "Bajkalsko-amurská magistrála", "why": "Kolem 70 tisíc legionářů se pak vracelo domů přes Vladivostok, vlaky jim byly dlouho pojízdným domovem.", "src": "Český rozhlas"},
  // wenceslas-duke, checked 2026-10-31
  //   https://www.classicfm.com/discover-music/real-story-good-king-wenceslas-carol/
  //   https://en.wikipedia.org/wiki/Wenceslaus_I,_Duke_of_Bohemia
  {"id": "wenceslas-duke", "topic": "history", "knowledge": "european", "q": "Svatý Václav z anglické vánoční koledy Good King Wenceslas králem za života nikdy nebyl. Byl: ___.", "a": "kníže", "lie": "hrabě", "why": "Králem ho podle tradice až po smrti prohlásil císař Ota I., v koledě tak nese titul, který nikdy neměl.", "src": "Classic FM"},
  // molasses, checked 2026-10-31
  //   https://www.history.com/news/the-great-molasses-flood-of-1919
  //   https://en.wikipedia.org/wiki/Great_Molasses_Flood
  {"id": "molasses", "topic": "history", "knowledge": "worldwide", "q": "V lednu 1919 se v Bostonu protrhla obří nádrž a ulicemi se přehnala vlna téměř 9 milionů litrů této tekutiny: ___.", "a": "melasa", "lie": "pivo", "why": "Vlna zabila 21 lidí a zranila asi 150, úklid trval týdny.", "src": "History.com"},
  // pig-war, checked 2026-10-31
  //   https://www.nps.gov/sajh/historyculture/the-pig-war.htm
  //   https://en.wikipedia.org/wiki/Pig_War_%281859%29
  {"id": "pig-war", "topic": "history", "knowledge": "worldwide", "q": "V roce 1859 se USA a Británie málem dostaly do války o ostrov San Juan a jedinou obětí sporu byl jeden ___.", "a": "prase", "lie": "kůň", "why": "Američan zastřelil prase Hudsonovy společnosti, které se mu hrabalo na zahradě. Spor o hranici nakonec v roce 1872 rozsoudil německý císař.", "src": "National Park Service"},
  // dancing-plague, checked 2026-10-31
  //   https://publicdomainreview.org/essay/the-dancing-plague-of-1518/
  //   https://en.wikipedia.org/wiki/Dancing_plague_of_1518
  {"id": "dancing-plague", "topic": "history", "knowledge": "worldwide", "q": "V létě 1518 propukla v ulicích města ___ podivná epidemie nezastavitelného tance, do které se zapojily desítky až stovky lidí.", "a": "Štrasburk", "lie": "Norimberk", "why": "Začalo to jednou ženou jménem Troffea, příčina epidemie je dodnes sporná.", "src": "Public Domain Review"},
  // newton-mint, checked 2026-10-31
  //   https://www.numismaticnews.net/world-coins/genius-newton-chased-counterfeiters
  //   https://en.wikipedia.org/wiki/Later_life_of_Isaac_Newton
  {"id": "newton-mint", "topic": "history", "knowledge": "worldwide", "q": "Isaac Newton jako správce královské mincovny pracoval i jako detektiv. Pronásledoval tyto zločince: ___.", "a": "padělatelé mincí", "lie": "pašeráci čaje", "why": "Sám vyslýchal svědky, pracoval i v utajení a dostal před soud 28 padělatelů, za padělání hrozil trest smrti.", "src": "Numismatic News"},
  // zanzibar-war, checked 2026-10-31
  //   https://www.historyhit.com/the-anglo-zanzibar-war-the-shortest-war-in-history-which-lasted-38-minutes/
  //   https://en.wikipedia.org/wiki/Anglo-Zanzibar_War
  {"id": "zanzibar-war", "topic": "history", "knowledge": "worldwide", "q": "Anglo-zanzibarská válka z roku 1896 je považována za nejkratší válku v dějinách. Trvala jen asi ___ minut.", "a": "40", "lie": "120", "why": "Britské lodě ostřelovaly sultánův palác, odhady délky se pohybují mezi 38 a 45 minutami.", "src": "History Hit"},
  // pancavsky-vodopad, checked 2026-10-31
  //   https://www.kudyznudy.cz/aktivity/pancavsky-vodopad-v-krkonosich
  //   https://cs.wikipedia.org/wiki/Pančavský_vodopád
  {"id": "pancavsky-vodopad", "topic": "nature", "knowledge": "czech", "q": "Nejvyšší vodopád v Česku, ležící v Krkonoších, měří zhruba ___ metrů.", "a": "148", "lie": "63", "why": "Pančavský vodopád padá v několika stupních z Pančavské louky do Labského dolu.", "src": "Kudy z nudy (CzechTourism)"},
  // hrensko-nejnize, checked 2026-10-31
  //   https://mzv.gov.cz/bratislava/cz/cr_a_eu/zakladni_informace_o_cr/index.html
  //   https://cs.wikipedia.org/wiki/Hřensko
  {"id": "hrensko-nejnize", "topic": "nature", "knowledge": "czech", "q": "Nejníže položené místo Česka, 115 metrů nad mořem, kde řeka Labe opouští republiku, leží u obce ___.", "a": "Hřensko", "lie": "Litoměřice", "why": "Labe pak teče dál do Německa a nakonec do Severního moře.", "src": "Ministerstvo zahraničních věcí ČR"},
  // zofinsky-prales, checked 2026-10-31
  //   https://ct24.ceskatelevize.cz/veda/2456605-zofinsky-prales-pomuze-nasa-popsat-evropske-lesy-je-dokonale-zmereny
  //   https://www.kudyznudy.cz/aktivity/narodni-prirodni-rezervace-zofinsky-prales
  {"id": "zofinsky-prales", "topic": "nature", "knowledge": "czech", "q": "V roce ___ hrabě Buquoy vyhlásil ochranu Žofínského pralesa v Novohradských horách, jedné z nejstarších přírodních rezervací Evropy.", "a": "1838", "lie": "1892", "why": "Ochranu vyhlásil majitel panství Nové Hrady 28. srpna 1838.", "src": "Česká televize (ČT24)"},
  // rozmberk-rybnik, checked 2026-10-31
  //   https://www.kudyznudy.cz/ceska-nej/zemepisne/rybnik-rozmberk
  //   https://eurozpravy.cz/wiki/rozmberk
  {"id": "rozmberk-rybnik", "topic": "nature", "knowledge": "czech", "q": "Největší rybník v Česku, s vodní hladinou zhruba 490 hektarů, se jmenuje ___.", "a": "Rožmberk", "lie": "Svět", "why": "Rybník u Třeboně postavil v letech 1584 až 1590 Jakub Krčín, hlavně na chov ryb a proti povodním.", "src": "Kudy z nudy (CzechTourism)"},
  // douglaska-vlastibor, checked 2026-10-31
  //   https://www.ziva.avcr.cz/files/ziva/pdf/lovci-stromovych-rekordu.pdf
  //   https://deti.vls.cz/wp-content/uploads/2025/07/stromovi-rekordmani-i.pdf
  {"id": "douglaska-vlastibor", "topic": "nature", "knowledge": "czech", "q": "Nejvyšší známý strom v Česku roste u Vlastiboře na Jablonecku a v roce 2024 měřil skoro 67 metrů. Je to tento druh: ___.", "a": "douglaska tisolistá", "lie": "smrk ztepilý", "why": "Stromolezci ho měří pásmem spuštěným z vrcholu: v roce 2014 měl 64 metrů, v roce 2024 už 66,72 metru.", "src": "Živa (AV ČR)"},
  // litvinovice-mraz, checked 2026-10-31
  //   https://english.radio.cz/node/8807812
  //   https://ct24.ceskatelevize.cz/archiv/1421464-minus-422-stupne-celsia-dosud-neprekonana-nejnizsi-teplota-v-cr
  {"id": "litvinovice-mraz", "topic": "nature", "knowledge": "czech", "q": "Nejnižší teplota, jaká kdy byla v Česku naměřena (11. února 1929 v Litvínovicích u Českých Budějovic), byla minus ___ stupně Celsia.", "a": "42,2", "lie": "37,8", "why": "Téhož dne mrzlo i v Jablunkově, kde naměřili minus 41,5 stupně.", "src": "Český rozhlas (Radio Prague)"},
  // vltaviny-meteorit, checked 2026-10-31
  //   https://www.ckrumlov.info/cz/pamatky-a-kultura-66-muzeum-vltavinu/
  //   https://cs.wikipedia.org/wiki/Vltav%C3%ADn
  {"id": "vltaviny-meteorit", "topic": "nature", "knowledge": "czech", "q": "Zelené sklo vltavíny z jižních Čech vzniklo před zhruba 15 miliony let při dopadu meteoritu na území dnešní německé spolkové země ___.", "a": "Bavorsko", "lie": "Sasko", "why": "Výbuch vymrštil roztavenou horninu až zhruba 400 kilometrů daleko, vltavíny jsou jediné evropské tektity.", "src": "Muzeum vltavínů Český Krumlov"},
  // sullivan-blesk, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/most-lightning-strikes-survived
  //   https://en.wikipedia.org/wiki/Roy_Sullivan
  {"id": "sullivan-blesk", "topic": "nature", "knowledge": "worldwide", "q": "Americký strážce národního parku Roy Sullivan přežil zásah bleskem celkem ___.", "a": "sedmkrát", "lie": "třikrát", "why": "Guinnessova kniha rekordů ho uvádí jako jediného člověka, kterého blesk zasáhl sedmkrát.", "src": "Guinness World Records"},
  // rorys-200-dni, checked 2026-10-31
  //   https://www.nature.com/articles/ncomms3554
  //   https://www.nationalgeographic.com/animals/article/swift-bird-10-month-migration
  {"id": "rorys-200-dni", "topic": "nature", "knowledge": "worldwide", "q": "Podle švýcarské studie z roku 2013 vydrží rorýs alpský ve vzduchu bez přistání zhruba ___ dní.", "a": "200", "lie": "40", "why": "Ptáci nesli miniaturní záznamníky pohybu, podle nich nejspíš celou zimu v Africe nepřistáli.", "src": "Nature Communications (2013)"},
  // breheus-rekord, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/news/2023/1/the-record-breaking-bird-that-flew-from-alaska-to-australia-731576
  //   https://www.npr.org/2023/01/05/1147052902/migrating-bird-a-bar-tailed-godwit-flies-from-alaska-to-australia-without-stoppi
  {"id": "breheus-rekord", "topic": "nature", "knowledge": "worldwide", "q": "V roce 2022 přeletěl pětiměsíční břehouš rudý z Aljašky do Tasmánie bez jediné zastávky za rekordních ___ dní.", "a": "11", "lie": "5", "why": "Uletěl přitom asi 13 560 kilometrů bez jídla a odpočinku.", "src": "Guinness World Records"},
  // lenochod-tyden, checked 2026-10-31
  //   https://www.scientificamerican.com/article/why-sloths-leave-the-trees-to-defecate
  //   https://en.wikipedia.org/wiki/Sloth
  {"id": "lenochod-tyden", "topic": "nature", "knowledge": "european", "q": "Lenochod tříprstý slézá ze stromu na zem, aby se vykakal, jen zhruba ___.", "a": "jednou týdně", "lie": "jednou za měsíc", "why": "Na zemi jsou snadnou kořistí a sestup je stojí hodně energie, proč to dělají, vědci dodnes nevědí jistě.", "src": "Scientific American"},
  // pando-osika, checked 2026-10-31
  //   https://americanforests.org/climate/the-heaviest-organism-on-the-planet
  //   https://www.sciencealert.com/the-worlds-largest-organism-is-slowly-being-eaten
  {"id": "pando-osika", "topic": "nature", "knowledge": "worldwide", "q": "Pando, háj osik v Utahu, je ve skutečnosti jediný organismus. Počet jeho kmenů se odhaduje zhruba na: ___.", "a": "47 000", "lie": "800", "why": "Všechny kmeny jsou geneticky stejné a vyrůstají z jedné společné kořenové sítě.", "src": "American Forests"},
  // rybak-70000, checked 2026-10-31
  //   https://www.nationalgeographic.com/animals/article/100111-worlds-longest-migration-arctic-tern-bird
  //   https://en.wikipedia.org/wiki/Arctic_tern
  {"id": "rybak-70000", "topic": "nature", "knowledge": "worldwide", "q": "Rybák dlouhoocasý podle studie z roku 2010 uletí na cestě z Arktidy do Antarktidy a zpátky za rok zhruba ___ kilometrů.", "a": "70 000", "lie": "20 000", "why": "Patří to k nejdelším známým migracím ze všech živočichů, některé ptáky pozdější studie naměřily ještě dál.", "src": "National Geographic"},
  // zebra-ovadi, checked 2026-10-31
  //   https://bristol.ac.uk/news/2019/february/zebra-stripes.html
  //   https://www.sciencedaily.com/releases/2019/02/190220145032.htm
  {"id": "zebra-ovadi", "topic": "nature", "knowledge": "worldwide", "q": "Studie z roku 2019 ukázala, že pruhy chrání zebry hlavně před jedním krvesajným hmyzem, který na nich nedokáže pořádně přistát: ___.", "a": "ovád", "lie": "komár", "why": "Ovádi u zeber nestihnou zpomalit a přeletí je nebo do nich narazí; přesný mechanismus se ale stále zkoumá.", "src": "University of Bristol"},
  // vostok-mraz, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/66137-lowest-temperature-recorded-on-earth
  //   https://en.wikipedia.org/wiki/Lowest_temperature_recorded_on_Earth
  {"id": "vostok-mraz", "topic": "nature", "knowledge": "worldwide", "q": "Nejnižší teplota vzduchu, jaká kdy byla na Zemi přímo naměřena (stanice Vostok v Antarktidě, 1983), byla minus ___ °C.", "a": "89,2", "lie": "74,6", "why": "Bylo to 21. července 1983, tedy uprostřed antarktické zimy.", "src": "Guinness World Records"},
  // narval-zub, checked 2026-10-31
  //   https://smithsonianscience.org/2012/04/for-dentist-the-narwhals-smile-is-a-mystery-of-evolution/
  //   https://en.wikipedia.org/wiki/Narwhal
  {"id": "narval-zub", "topic": "nature", "knowledge": "worldwide", "q": "Dlouhý spirálovitý „roh“ narvala není roh, ale obří zub. Konkrétně je to: ___.", "a": "špičák", "lie": "řezák", "why": "Vědci to potvrdili v roce 2012: kel roste z horní čelisti, odkud savcům rostou špičáky.", "src": "Smithsonian"},
  // vaclavka-oregon, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/75043-heaviest-fungi
  //   https://en.wikipedia.org/wiki/Armillaria_ostoyae
  {"id": "vaclavka-oregon", "topic": "nature", "knowledge": "czech", "q": "Nejhmotnější houba světa, rostoucí v lesích Oregonu, je druh, který Češi dobře znají ze sběru: ___.", "a": "václavka", "lie": "pýchavka", "why": "Jediný jedinec v Oregonu váží podle odhadu 6 800 až 31 750 tun.", "src": "Guinness World Records"},
  // becherovka-english-bitter, checked 2026-10-31
  //   https://english.radio.cz/node/8120512
  //   https://english.radio.cz/node/8717307
  //   https://cs.wikipedia.org/wiki/Becherovka
  {"id": "becherovka-english-bitter", "topic": "food", "knowledge": "czech", "q": "Když se Becherovka v roce 1807 začala prodávat v Karlových Varech, měla úplně jiný název: ___.", "a": "English Bitter", "lie": "Karlsbader Gold", "why": "Josef Becher prý dostal recept od anglického lékaře Frobriga a likér se zpočátku prodával jako lék na žaludek.", "src": "Radio Prague International"},
  // tvaruzky-lostice, checked 2026-10-31
  //   https://english.radio.cz/node/8884125
  //   https://en.wikipedia.org/wiki/Olomouck%C3%A9_tvar%C5%AF%C5%BEky
  {"id": "tvaruzky-lostice", "topic": "food", "knowledge": "czech", "q": "Olomoucké tvarůžky mají jméno po Olomouci, ale od roku 1876 se vyrábějí v jiném městě: ___.", "a": "Loštice", "lie": "Litovel", "why": "Tento výrazně vonící sýr s ochranným označením EU se dodnes vyrábí v Lošticích, asi 30 km severně od Olomouce.", "src": "Český rozhlas (Radio Prague)"},
  // hawaiian-pizza-canada, checked 2026-10-31
  //   https://thecanadianencyclopedia.ca/en/article/sam-panopolous
  //   https://www.nbcnews.com/news/world/alleged-inventor-controversial-hawaiian-pizza-dies-canada-n770716
  {"id": "hawaiian-pizza-canada", "topic": "food", "knowledge": "worldwide", "q": "Pizzu Hawaii se šunkou a ananasem vymyslel roku 1962 řecký přistěhovalec Sam Panopoulos. V jaké zemi? ___.", "a": "Kanada", "lie": "Austrálie", "why": "Panopoulos ji poprvé připravil v restauraci Satellite ve městě Chatham v kanadském Ontariu.", "src": "The Canadian Encyclopedia"},
  // fanta-germany, checked 2026-10-31
  //   https://www.thelocal.de/20170523/fanta-how-the-nazi-era-drink-became-the-world-famous-brand
  //   https://en.wikipedia.org/wiki/Fanta
  {"id": "fanta-germany", "topic": "food", "knowledge": "worldwide", "q": "Fanta vznikla roku 1940 jako náhrada Coca-Coly, protože do jedné země přestal kvůli válce chodit sirup. Do které? ___.", "a": "Německo", "lie": "Švédsko", "why": "Šéf místní pobočky Coca-Coly Max Keith ji vymyslel ze surovin, které popsal jako „zbytky ze zbytků“.", "src": "The Local (Germany)"},
  // gros-michel-banana, checked 2026-10-31
  //   https://daily.jstor.org/the-beloved-bedeviled-banana
  //   https://blog.hmns.org/2018/08/the-bananapocolypse-its-real-its-scary-its-real-scary/
  {"id": "gros-michel-banana", "topic": "food", "knowledge": "worldwide", "q": "Banány, které jedli Američané zhruba do roku 1960, nebyly dnešní odrůdy Cavendish. Tu dřívější zničila houbová panamská choroba. Jmenovala se ___.", "a": "Gros Michel", "lie": "Santa Clara", "why": "Byla větší a podle pamětníků chutnější, ale všechny rostliny byly klony, takže nemoc zničila celé plantáže.", "src": "JSTOR Daily"},
  // vanilla-albius, checked 2026-10-31
  //   https://www.nationalgeographic.com/science/article/the-little-boy-who-shouldve-vanished-but-didnt
  //   https://en.wikipedia.org/wiki/Edmond_Albius
  {"id": "vanilla-albius", "topic": "food", "knowledge": "worldwide", "q": "Vanilka se dodnes opyluje ručně metodou, kterou roku 1841 na ostrově Réunion vymyslel zotročený chlapec. Kolik mu bylo let? ___.", "a": "12", "lie": "17", "why": "Edmond Albius použil tenkou tyčinku a palec. Mnozí mu zásluhy upírali, protože byl dítě bez vzdělání.", "src": "National Geographic"},
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
  // quarantine, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/quarantine
  //   https://en.wiktionary.org/wiki/quarantine
  {"id": "quarantine", "topic": "language", "knowledge": "european", "q": "Slovo karanténa pochází z italštiny a původně označovalo izolaci lodí, která trvala ___ dnů.", "a": "40", "lie": "14", "why": "Lodě podezřelé z přenosu nemocí musely kotvit mimo přístav, než mohly vyložit lidi i zboží.", "src": "Merriam-Webster"},
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
  // walnut, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/walnut
  //   https://en.wiktionary.org/wiki/walnut
  {"id": "walnut", "topic": "language", "knowledge": "worldwide", "q": "Anglický název vlašského ořechu walnut znamenal ve staré angličtině doslova: ___ ořech.", "a": "cizí", "lie": "tvrdý", "why": "Ořešák přišel do Anglie z jihu Evropy, domácím ořechem tam byla líska.", "src": "Merriam-Webster"},
  // algorithm, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/algorithm
  //   https://en.wiktionary.org/wiki/algorithm
  {"id": "algorithm", "topic": "language", "knowledge": "european", "q": "Slovo algoritmus pochází ze jména perského matematika z 9. století, který se jmenoval al-___.", "a": "Chvárizmí", "lie": "Chajjám", "why": "Al-Chvárizmí žil kolem roku 825 a z latinského přepisu jeho jména vzniklo slovo algoritmus.", "src": "Merriam-Webster"},
  // nerd, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/nerd
  //   https://en.wiktionary.org/wiki/nerd
  //   https://en.wikipedia.org/wiki/Nerd
  {"id": "nerd", "topic": "language", "knowledge": "worldwide", "q": "Slovo nerd se poprvé objevilo roku 1950 v dětské knize, kterou napsal ___.", "a": "Dr. Seuss", "lie": "Roald Dahl", "why": "Seuss tak v knize If I Ran the Zoo pojmenoval vymyšlené zvíře, ne ještě šprta.", "src": "Merriam-Webster"},
  // googol, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/googol
  //   https://en.wikipedia.org/wiki/Googol
  {"id": "googol", "topic": "language", "knowledge": "worldwide", "q": "Číslo googol (jednička a 100 nul), podle kterého se jmenuje Google, vymyslel devítiletý ___ matematika Edwarda Kasnera.", "a": "synovec", "lie": "syn", "why": "Chlapec se jmenoval Milton Sirotta a Kasner jeho slovo zpopularizoval pro číslo 10 na stou.", "src": "Merriam-Webster"},
  // ikea, checked 2026-10-31
  //   https://www.thelocal.se/20180128/five-things-to-know-about-ingvar-kamprad-and-ikea
  //   https://www.dictionary.com/e/acronyms/ikea/
  {"id": "ikea", "topic": "language", "knowledge": "european", "q": "Název IKEA je zkratka: I a K jsou iniciály zakladatele, E je farma Elmtaryd a A je vesnice ___.", "a": "Agunnaryd", "lie": "Älmhult", "why": "Ingvar Kamprad vyrostl na farmě Elmtaryd poblíž vsi Agunnaryd ve Smålandu.", "src": "The Local (Sweden)"},
  // haribo, checked 2026-10-31
  //   https://www.haribo.com/en-us/preview/71222
  //   https://en.wikipedia.org/wiki/Haribo
  {"id": "haribo", "topic": "language", "knowledge": "european", "q": "Název HARIBO je zkratka jména zakladatele a města: Hans Riegel ___.", "a": "Bonn", "lie": "Berlín", "why": "Hans Riegel založil firmu roku 1920 v kuchyni v Bonnu.", "src": "HARIBO"},
  // vampire, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/vampire
  //   https://en.wiktionary.org/wiki/vampire
  {"id": "vampire", "topic": "language", "knowledge": "worldwide", "q": "Anglické slovo vampire (upír) pochází přes francouzštinu a němčinu ze srbského vampir. V angličtině je poprvé doloženo roku ___.", "a": "1732", "lie": "1897", "why": "Stokerův Dracula vyšel až roku 1897, víc než 160 let poté.", "src": "Merriam-Webster"},
  // vodka, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/vodka
  //   https://en.wiktionary.org/wiki/vodka
  {"id": "vodka", "topic": "language", "knowledge": "european", "q": "Slovo vodka je v ruštině zdrobnělina od slova voda, doslova tedy ___.", "a": "vodička", "lie": "ohnivá voda", "why": "Koncovka -ka tvoří zdrobněliny, podobně jako v češtině ruka a ručka.", "src": "Merriam-Webster"},
  // zero, checked 2026-10-31
  //   https://www.merriam-webster.com/dictionary/cipher
  //   https://www.merriam-webster.com/dictionary/zero
  //   https://en.wiktionary.org/wiki/cipher
  {"id": "zero", "topic": "language", "knowledge": "worldwide", "q": "Anglická slova zero (nula) a cipher (šifra) pocházejí ze stejného arabského slova ṣifr, které znamenalo: ___.", "a": "prázdný", "lie": "tajný", "why": "Šifra původně znamenala nulu a k tajným zprávám se dostala až později.", "src": "Merriam-Webster"},
  // bohemian, checked 2026-10-31
  //   https://worldwidewords.org/qa-boh1.html
  //   https://en.wiktionary.org/wiki/Bohemian
  {"id": "bohemian", "topic": "language", "knowledge": "european", "q": "Francouzské bohémien, ze kterého máme slovo bohém, původně neoznačovalo umělce. Francouzi tak nazývali tyto lidi, protože si mysleli, že přišli z Čech: ___.", "a": "Romové", "lie": "husité", "why": "Význam nekonvenčního umělce vznikl až v 19. století, do angličtiny ho uvedl Thackeray roku 1848.", "src": "World Wide Words"},
  // ahoj, checked 2026-10-31
  //   https://expats.cz/czech-news/article/the-origins-of-ahoj-and-nazar
  //   https://cs.wikipedia.org/wiki/Ahoj
  {"id": "ahoj", "topic": "language", "knowledge": "czech", "q": "Český pozdrav ahoj pochází z anglického zvolání, které původně používali ___.", "a": "námořníci", "lie": "vojáci", "why": "Do češtiny se dostal v první polovině 20. století hlavně díky trampům a vodákům.", "src": "Expats.cz (ÚJČ)"},
  // vltava, checked 2026-10-31
  //   https://www.ziva.avcr.cz/files/ziva/pdf/vltava-staly-proud-inspirace.pdf
  //   https://cs.wikipedia.org/wiki/Vltava
  {"id": "vltava", "topic": "language", "knowledge": "czech", "q": "Název řeky Vltavy pochází pravděpodobně z germánského wilth-ahwa, což znamená divoká ___.", "a": "voda", "lie": "zvěř", "why": "Z téhož základu pochází i německé Moldau, ale vyvinulo se jinak.", "src": "Živa (AV ČR)"},
  // kafka, checked 2026-10-31
  //   https://www.jewishmuseum.cz/e-shop/upominkove-predmety/t-shirt-two-kafkas-size-l/
  //   https://en.wiktionary.org/wiki/Kafka
  {"id": "kafka", "topic": "language", "knowledge": "czech", "q": "Příjmení Kafka pochází z českého názvu tohoto černého ptáka: ___.", "a": "kavka", "lie": "kos", "why": "Otec Franze Kafky Hermann měl na štítu svého obchodu v Praze namalovanou kavku.", "src": "Židovské muzeum v Praze"},
  // prebuz-smallest-town, checked 2026-10-31
  //   https://www.kudyznudy.cz/kam-pojedete/oblasti/krusne-hory/prebuz
  //   https://cs.wikipedia.org/wiki/Přebuz
  {"id": "prebuz-smallest-town", "topic": "places", "knowledge": "czech", "q": "Nejmenší město v Česku, kde žije jen asi 70 lidí (2025), se jmenuje ___.", "a": "Přebuz", "lie": "Zubrnice", "why": "Leží v Krušných horách v okrese Sokolov, 886 metrů nad mořem.", "src": "Kudy z nudy"},
  // hamburg-czech-port, checked 2026-10-31
  //   https://english.radio.cz/node/8240796
  //   https://www.e15.cz/byznys/doprava-a-logistika/cesko-obnovuje-pristup-k-mori-chysta-smlouvu-pro-nove-uzemi-v-hamburku-1389654
  {"id": "hamburg-czech-port", "topic": "places", "knowledge": "czech", "q": "V roce 1929 si Československo na 99 let pronajalo kus přístavu v německém městě ___.", "a": "Hamburk", "lie": "Brémy", "why": "Nárok vyplýval z Versailleské smlouvy. Pronajatá část se jmenuje Moldauhafen, tedy Vltavský přístav.", "src": "Radio Prague International"},
  // brno-clock-marble, checked 2026-10-31
  //   https://english.radio.cz/node/8546429
  //   https://en.wikipedia.org/wiki/Brno_astronomical_clock
  {"id": "brno-clock-marble", "topic": "places", "knowledge": "czech", "q": "Každý den přesně v 11:00 vypadne z brněnského orloje tento předmět, který si návštěvníci mohou odnést: ___.", "a": "skleněná kulička", "lie": "bronzová mince", "why": "Připomíná rok 1645: podle legendy Brno odolalo Švédům, protože zvon odbil poledne už v 11 hodin.", "src": "Radio Prague International"},
  // france-time-zones, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/584626-country-with-the-most-time-zones
  //   https://www.thelocal.fr/20220325/reader-question-how-does-france-have-12-different-time-zones
  {"id": "france-time-zones", "topic": "places", "knowledge": "worldwide", "q": "Nejvíc časových pásem na světě má díky svým zámořským územím tento stát: ___.", "a": "Francie", "lie": "Rusko", "why": "Pevninská Francie má jen jedno pásmo, celkem jich je 12 (podle Guinnessovy knihy část roku 13).", "src": "Guinness World Records"},
  // maldives-lowest-peak, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/flattest-country/
  //   https://en.wikipedia.org/wiki/Maldives
  {"id": "maldives-lowest-peak", "topic": "places", "knowledge": "worldwide", "q": "Stát, jehož nejvyšší přirozený bod je jen asi 2,4 metru nad mořem, se jmenuje ___.", "a": "Maledivy", "lie": "Nizozemsko", "why": "Průměrná výška souše je kolem 1,5 metru; zdroje se u přesného nejvyššího bodu mírně liší.", "src": "Guinness World Records"},
  // prague-castle-guinness, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/69343-largest-ancient-castle
  //   https://en.wikipedia.org/wiki/Prague_Castle
  {"id": "prague-castle-guinness", "topic": "places", "knowledge": "european", "q": "Podle Guinnessovy knihy rekordů je největším starobylým hradem na světě tento český hrad: ___.", "a": "Pražský hrad", "lie": "Český Krumlov", "why": "Je dlouhý asi 570 metrů a zabírá přes 7 hektarů.", "src": "Guinness World Records"},
  // hluboka-windsor, checked 2026-10-31
  //   https://www.zamek-hluboka.cz/en/about/history
  //   https://en.wikipedia.org/wiki/Hluboká_nad_Vltavou_Castle
  {"id": "hluboka-windsor", "topic": "places", "knowledge": "czech", "q": "Zámek Hluboká nad Vltavou byl v 19. století přestavěn podle vzoru slavného britského sídla: ___.", "a": "hrad Windsor", "lie": "Buckinghamský palác", "why": "Přestavbu v novogotickém stylu zadal kníže Jan Adolf II. ze Schwarzenbergu po cestě do Anglie.", "src": "Zámek Hluboká (official site)"},
  // brno-ossuary-second, checked 2026-10-31
  //   https://english.radio.cz/node/8561939
  //   https://en.wikipedia.org/wiki/Brno_Ossuary
  {"id": "brno-ossuary-second", "topic": "places", "knowledge": "czech", "q": "Kostnice, kterou archeologové označují za druhou největší v Evropě po pařížských katakombách, leží v tomto českém městě: ___.", "a": "Brno", "lie": "Olomouc", "why": "Pod kostelem sv. Jakuba leží přes 50 000 lidí. Objevili ji roku 2001, veřejnosti je otevřena od roku 2012.", "src": "Radio Prague International"},
  // jested-hyperboloid, checked 2026-10-31
  //   https://english.radio.cz/node/8148809
  //   https://www.archiweb.cz/en/b/televizni-vysilac-a-horsky-hotel-jested
  {"id": "jested-hyperboloid", "topic": "places", "knowledge": "czech", "q": "Hotel s vysílačem na Ještědu má tvar geometrického tělesa, které se jmenuje rotační ___.", "a": "hyperboloid", "lie": "elipsoid", "why": "Architekt Karel Hubáček za stavbu dostal roku 1969 Perretovu cenu; v anketě byla Stavbou století.", "src": "Radio Prague International"},
  // point-nemo-astronauts, checked 2026-10-31
  //   https://www.skyatnightmagazine.com/earth-from-space/point-nemo
  //   https://en.wikipedia.org/wiki/Point_Nemo
  {"id": "point-nemo-astronauts", "topic": "places", "knowledge": "worldwide", "q": "Lidé nejblíž k bodu Nemo, místu v oceánu nejvzdálenějšímu od pevniny, bývají někdy tito: ___.", "a": "astronauti na ISS", "lie": "polárníci", "why": "Nejbližší souš je asi 2 700 km daleko, ISS létá ve výšce zhruba 400 km.", "src": "BBC Sky at Night Magazine"},
  // lednice-minaret, checked 2026-10-31
  //   https://www.zamek-lednice.com/en/visitors-information/tours/781-minarett
  //   https://www.kudyznudy.cz/aktivity/minaret-lednice
  {"id": "lednice-minaret", "topic": "places", "knowledge": "czech", "q": "V parku u zámku Lednice stojí kolem roku 1800 postavená, téměř 60 metrů vysoká rozhledna ve tvaru: ___.", "a": "minaret", "lie": "maják", "why": "Navrhl ji Josef Hardtmuth a patří k nejvyšším stavbám svého druhu mimo islámský svět.", "src": "Zámek Lednice (NPÚ)"},
  // saturn-float, checked 2026-10-31
  //   https://science.nasa.gov/saturn/facts/
  //   https://en.wikipedia.org/wiki/Saturn
  {"id": "saturn-float", "topic": "science", "knowledge": "worldwide", "q": "Jediná planeta sluneční soustavy s průměrnou hustotou nižší než voda je ___.", "a": "Saturn", "lie": "Jupiter", "why": "Kdyby existovala dost velká vana, Saturn by v ní plaval. Jeho průměrná hustota je asi 0,69 g/cm3.", "src": "NASA"},
  // holy-hiv, checked 2026-10-31
  //   https://english.radio.cz/node/8187005
  //   https://ct24.ceskatelevize.cz/veda/3400466-pred-20-lety-se-cesi-dostali-k-leku-proti-aids-zaklad-polozil-vedec-antonin-holy
  {"id": "holy-hiv", "topic": "science", "knowledge": "czech", "q": "Jeden z nejpoužívanějších léků proti HIV, na jehož vývoji se podílel český chemik Antonín Holý, se jmenuje ___.", "a": "tenofovir", "lie": "zidovudin", "why": "Tým Antonína Holého z Ústavu organické chemie a biochemie AV ČR ho syntetizoval už v roce 1984.", "src": "Radio Prague International"},
  // jachymov-radium, checked 2026-10-31
  //   https://orau.org/health-physics-museum/articles/jachymov-cradle-of-the-atomic-age.html
  //   https://en.wikipedia.org/wiki/Jáchymov
  {"id": "jachymov-radium", "topic": "science", "knowledge": "european", "q": "Marie Curie-Skłodowská izolovala rádium ze zbytků uranové rudy, které pocházely z tohoto českého města: ___.", "a": "Jáchymov", "lie": "Příbram", "why": "Odpad z tamní továrny na uranové barvy jí poslala rakouská vláda.", "src": "ORAU Health Physics Museum"},
  // heyrovsky-nobel, checked 2026-10-31
  //   https://www.nobelprize.org/prizes/chemistry/1959/heyrovsky/facts/
  //   https://en.wikipedia.org/wiki/Jaroslav_Heyrovsk%C3%BD
  {"id": "heyrovsky-nobel", "topic": "science", "knowledge": "european", "q": "Český chemik Jaroslav Heyrovský získal v roce 1959 Nobelovu cenu za objev analytické metody zvané ___.", "a": "polarografie", "lie": "chromatografie", "why": "Metoda využívá kapkovou rtuťovou elektrodu a vyvinul ji v roce 1922.", "src": "Nobel Prize"},
  // cori-nobel, checked 2026-10-31
  //   https://www.nobelprize.org/prizes/medicine/1947/cori-gt/facts/
  //   https://en.wikipedia.org/wiki/Gerty_Cori
  {"id": "cori-nobel", "topic": "science", "knowledge": "european", "q": "Pražská rodačka Gerty Coriová se v roce 1947 stala první ženou s Nobelovou cenou v oboru: ___.", "a": "fyziologie nebo lékařství", "lie": "chemie", "why": "Cenu získala za objev přeměny glykogenu v těle. Marie Curie byla první ženou s Nobelovkou obecně.", "src": "Nobel Prize"},
  // pitch-drop, checked 2026-10-31
  //   https://www.guinnessworldrecords.com/world-records/longest-running-laboratory-experiment
  //   https://en.wikipedia.org/wiki/Pitch_drop_experiment
  {"id": "pitch-drop", "topic": "science", "knowledge": "worldwide", "q": "Od roku 1927 sledují na univerzitě v australském Brisbane, jak z nálevky pomaličku kape tato hmota: ___.", "a": "smola", "lie": "med", "why": "Jedna kapka padá zhruba deset let. Podle Guinnessovy knihy jde o nejdéle běžící laboratorní pokus.", "src": "Guinness World Records"},
  // coffee-webcam, checked 2026-10-31
  //   https://www.cl.cam.ac.uk/coffee/qsf/coffee.html
  //   https://www.cai.cam.ac.uk/news/caian-coffee-pot-and-webcam-awardwinning-combination
  //   https://en.wikipedia.org/wiki/Trojan_Room_coffee_pot
  {"id": "coffee-webcam", "topic": "science", "knowledge": "worldwide", "q": "První webkamera na světě, zprovozněná v roce 1991 na univerzitě v Cambridgi, sledovala tento předmět: ___.", "a": "konvice s kávou", "lie": "akvárium", "why": "Vědci nechtěli zbytečně chodit po schodech k prázdné konvici. Na web se dostala v roce 1993.", "src": "University of Cambridge"},
  // moth-bug, checked 2026-10-31
  //   https://www.computinghistory.org.uk/det/5927/First-computer-bug-is-found/
  //   https://en.wikipedia.org/wiki/Software_bug
  {"id": "moth-bug", "topic": "science", "knowledge": "worldwide", "q": "V roce 1947 našli technici v počítači Harvard Mark II zaseknutý hmyz a přilepili ho do deníku s poznámkou „první skutečný případ nalezeného bugu“. Byl to tento hmyz: ___.", "a": "můra", "lie": "moucha", "why": "Slovo „bug“ pro chybu je starší, ale tato stránka deníku ho proslavila.", "src": "Computing History Museum"},
  // stethoscope-paper, checked 2026-10-31
  //   https://lemelson.mit.edu/resources/rene-laennec
  //   https://en.wikipedia.org/wiki/Stethoscope
  {"id": "stethoscope-paper", "topic": "science", "knowledge": "european", "q": "Úplně první stetoskop vznikl v roce 1816 svinutím tohoto materiálu: ___.", "a": "papír", "lie": "kůže", "why": "René Laennec nechtěl přikládat ucho přímo na hruď pacientky. Později trubici vyrobil ze dřeva.", "src": "MIT Lemelson Center"},
  // rinderpest, checked 2026-10-31
  //   https://www.cidrap.umn.edu/oie-declares-rinderpest-eradicated
  //   https://pirbright.ac.uk/node/697
  {"id": "rinderpest", "topic": "science", "knowledge": "worldwide", "q": "Druhou nemocí v historii, kterou lidé úplně vymýtili (v roce 2011), byl po pravých neštovicích ___.", "a": "dobytčí mor", "lie": "obrna", "why": "Postihoval skot a další zvířata. Poslední případ byl zaznamenán v roce 2001.", "src": "CIDRAP"},
  // tardigrade-space, checked 2026-10-31
  //   https://www.esa.int/Our_Activities/Human_Spaceflight/Research/Tiny_animals_survive_exposure_to_space
  //   https://sciencedaily.com/releases/2008/09/080908135906.htm
  {"id": "tardigrade-space", "topic": "science", "knowledge": "worldwide", "q": "V roce 2007 přežila jako první zvířata vystavení volnému vesmíru tato drobná zvířátka: ___.", "a": "želvušky", "lie": "ploštěnky", "why": "Asi 3 000 jich strávilo 12 dní na oběžné dráze. Některá přežila i smrtící UV záření a pak se rozmnožila.", "src": "ESA"},
  // velcro-burrs, checked 2026-10-31
  //   https://www.wipo.int/en/web/ip-advantage/w/stories/the-velcro-ip-story
  //   https://www.swissinfo.ch/eng/science/how-a-swiss-invention-hooked-the-world/5653568
  {"id": "velcro-burrs", "topic": "science", "knowledge": "worldwide", "q": "Suchý zip vynalezl Švýcar George de Mestral po procházce se psem. Na jeho oblečení a psí srst se nalepily plody rostliny: ___.", "a": "lopuch", "lie": "kopřiva", "why": "Pod mikroskopem uviděl drobné háčky, které se zachytávaly do smyček látky.", "src": "WIPO"},
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
  // orloj-1410, checked 2026-10-31
  //   https://www.lindahall.org/about/news/scientist-of-the-day/prague-astronomical-clock/
  //   https://en.wikipedia.org/wiki/Prague_astronomical_clock
  {"id": "orloj-1410", "topic": "science", "knowledge": "european", "q": "Pražský orloj se poprvé objevuje v městských záznamech v roce ___.", "a": "1410", "lie": "1490", "why": "Postavili ho Mikuláš z Kadaně a Jan Šindel. Dlouho se mylně tradovalo, že vznikl až kolem 1490.", "src": "Linda Hall Library"},
]});
