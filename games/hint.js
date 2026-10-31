// Hint / Narážka: the clue-giver secretly picks one of six cards and gives one clue out loud.
// Everyone else drags their name onto the card they think it was. The clue-giver predicts how
// many will find it and only scores when some, but not all, do.
(function () {
  const L = (a, b) => PB.L(a, b);
  const SAVE = 'hint:save';
  const NAME = () => L('Narážka', 'Hint');
  const HAND = 6;
  const defaults = { decks: null, players: ['', '', '', ''], laps: 2 };
  let G = null; // running game

  const pname = (i) => (G.players[i] || '').trim() || L('Hráč ', 'Player ') + (i + 1);
  const save = () => PB.store.set(SAVE, G);
  const decks = () => PB.decksFor('hint');
  const cardsOf = (d) => [1, 2, 3].flatMap((l) => d.words[l] || []).filter((w) => !PB.hidden.has('w', w));
  const totalTurns = () => G.players.length * G.laps;
  const giver = () => G.turn % G.players.length;
  const others = () => G.players.map((p, i) => i).filter((i) => i !== giver());

  function start() {
    const saved = PB.store.get(SAVE, null);
    if (saved && saved.lang === PB.lang) {
      PB.render(`${PB.top(NAME())}
        <div class="play">${PB.art('hint')}<h2>${L('Máte rozehranou hru', 'You have a game in progress')}</h2>
        <p class="muted">${L('Tah', 'Turn')} ${saved.turn + 1}/${saved.players.length * saved.laps}</p></div>
        <div class="stack"><button class="btn" data-c>${L('Pokračovat', 'Continue')}</button><button class="btn secondary" data-n>${L('Nová hra', 'New game')}</button></div>`,
      (root) => {
        PB.bindTop(root);
        PB.on(root, '[data-c]', () => { G = saved; PB.keepAwake(); turn(); });
        PB.on(root, '[data-n]', () => { PB.store.del(SAVE); setup(); });
      });
    } else setup();
  }

  function setup() {
    const { s, save: saveS } = PB.settings('hint', defaults);
    const all = decks();
    if (!s.decks || !s.decks.some((id) => all.find((d) => d.id === id))) s.decks = all.map((d) => d.id);
    const draw = () => PB.render(`
      ${PB.top(NAME())}
      <div class="box rules">${L(
        'Kdo je na řadě, uvidí potají <b>šest karet</b>, jednu si vybere a řekne k ní <b>jednu narážku</b>: slovo, úryvek písničky, zvuk nebo gesto. Pak tipne, <b>kolik z vás ji uhodne</b>. Mobil leží na stole a ostatní přetáhnou své jméno na kartu, kterou myslel. <b>Body dostane, jen když ji uhodnou někteří, ale ne všichni.</b> Moc jasná narážka nebo moc temná = nula.',
        'On your turn you secretly see <b>six cards</b>, pick one and give <b>one hint</b> out loud: a word, a song line, a sound or a gesture. Then predict <b>how many of the others will get it</b>. The phone lies on the table and everyone drags their name onto the card they think you meant. <b>You only score when some, but not all, find it.</b> Too obvious or too obscure = zero.')}</div>
      <h3>${L('Hráči, v pořadí jak sedíte', 'Players, in seating order')} (${s.players.length})</h3>
      ${PB.ui.names('players', s.players, L('Hráč', 'Player'))}
      <h3>${L('Balíčky', 'Decks')}</h3>
      <div class="chips" data-decks>
        ${all.map((d) => `<button class="chip ${s.decks.includes(d.id) ? 'on' : ''}" data-id="${d.id}">${PB.esc(d.name)}</button>`).join('')}
      </div>
      <h3>${L('Nastavení', 'Settings')}</h3>
      <div class="stack">
        ${PB.ui.stepper('laps', L('Kolikrát dokola', 'Times around the table'), s.laps)}
      </div>
      <div class="spacer"></div>
      <button class="btn big" data-go>${L('Začít', 'Start')}</button>
    `, (root) => {
      PB.bindTop(root, () => { saveS(); PB.home(); });
      PB.ui.bindNames(root, 'players', s, draw, { min: 3, max: 12 });
      PB.ui.bindStepper(root, 'laps', s, { min: 1, max: 5 });
      PB.on(root, '[data-decks] .chip', (e, el) => {
        const id = el.dataset.id;
        if (s.decks.includes(id)) { if (s.decks.length > 1) s.decks = s.decks.filter((x) => x !== id); }
        else s.decks.push(id);
        PB.$$('[data-decks] .chip', root).forEach((c) => c.classList.toggle('on', s.decks.includes(c.dataset.id)));
      });
      PB.on(root, '[data-go]', () => {
        if (s.players.length < 3) return PB.toast(L('Potřebujete aspoň 3 hráče.', 'You need at least 3 players.'));
        if (!all.length) return PB.toast(L('V tomhle jazyce zatím nejsou karty.', 'No cards in this language yet.'));
        saveS();
        G = { lang: PB.lang, players: s.players.slice(), decks: s.decks.slice(), laps: s.laps,
          turn: 0, scores: s.players.map(() => 0), used: [] };
        save();
        PB.keepAwake();
        turn();
      });
    });
    draw();
  }

  // Deal six cards from one themed deck, preferring cards this game hasn't shown yet.
  function deal() {
    const pool = PB.shuffle(decks().filter((d) => G.decks.includes(d.id) && cardsOf(d).length >= HAND));
    const d = pool[0] || decks()[0];
    let cards = cardsOf(d).filter((c) => !G.used.includes(c));
    if (cards.length < HAND) cards = cardsOf(d);
    const hand = PB.shuffle(cards).slice(0, HAND);
    G.used = G.used.concat(hand);
    return { deck: d.name, hand };
  }

  function pause(onResume) {
    PB.menu(L('Pauza', 'Paused'), [
      { label: L('Pokračovat', 'Continue'), fn: onResume },
      { label: L('Přeskočit tah', 'Skip this turn'), cls: 'secondary', fn: () => next() },
      { label: L('Skóre', 'Scores'), cls: 'secondary', fn: () => scores(onResume) },
      { label: L('Ukončit hru', 'End game'), cls: 'secondary', fn: () => final() },
      { label: L('Odejít do menu', 'Quit to menu'), cls: 'bad', fn: () => { PB.stopAll(); PB.home(); } },
    ]);
  }
  const topbar = () => `<div class="top">${PB.pauseBtn()}<div class="title">${NAME()}</div><span class="pill">${G.turn + 1}/${totalTurns()}</span></div>`;

  // 1. Hand the phone to the clue-giver.
  function turn() {
    PB.stopAll();
    G.round = Object.assign(deal(), { secret: null, guess: null, votes: {} });
    save();
    PB.pass({ title: NAME(), name: pname(giver()), sub: L('Dáváš narážku', "You're giving the hint"), onBack: () => final(),
      button: L('Jsem to já, ukaž karty', "It's me, show the cards"), onReady: pick });
  }

  // 2. In private: pick a card.
  function pick() {
    const R = G.round;
    PB.render(`${topbar()}
      <p class="muted">${PB.esc(R.deck)}</p>
      <h2>${L('Vyber kartu, ke které dáš narážku', 'Pick the card you will hint at')}</h2>
      <div class="list" data-hand>
        ${R.hand.map((c, j) => `<button class="it hn-card ${R.secret === j ? 'on' : ''}" data-j="${j}"><span>${PB.esc(c)}</span></button>`).join('')}
      </div>
      <div class="grow"></div>
      <button class="btn big" data-ok ${R.secret == null ? 'disabled' : ''}>${L('Tuhle', 'This one')}</button>`,
    (root) => {
      PB.on(root, '[data-pause]', () => pause(pick));
      PB.on(root, '[data-j]', (e, el) => {
        R.secret = +el.dataset.j; PB.sfx.tick();
        PB.$$('[data-j]', root).forEach((b) => b.classList.toggle('on', +b.dataset.j === R.secret));
        PB.$('[data-ok]', root).disabled = false;
      });
      PB.on(root, '[data-ok]', predict);
    });
  }

  // 3. Still in private: how many of the others will find it?
  function predict() {
    const R = G.round, m = others().length;
    PB.render(`${topbar()}
      <div class="word">${PB.esc(R.hand[R.secret])}</div>
      <h2>${L(`Kolik z ${m} ostatních to uhodne?`, `How many of the other ${m} will get it?`)}</h2>
      <p class="muted small">${L(`Body jen když 1 až ${m - 1}. Trefa počtu = bonus.`, `You only score with 1 to ${m - 1}. Exact count = bonus.`)}</p>
      <div class="chips" data-guess>
        ${[...Array(m + 1).keys()].map((k) => `<button class="chip ${R.guess === k ? 'on' : ''}" data-k="${k}">${k}</button>`).join('')}
      </div>
      <div class="grow"></div>
      <div class="stack">
        <button class="btn secondary" data-back>${L('Jiná karta', 'Different card')}</button>
        <button class="btn big" data-ok ${R.guess == null ? 'disabled' : ''}>${L('Schovat a dát mobil na stůl', 'Hide it and put the phone down')}</button>
      </div>`,
    (root) => {
      PB.on(root, '[data-pause]', () => pause(predict));
      PB.on(root, '[data-back]', pick);
      PB.on(root, '[data-k]', (e, el) => {
        R.guess = +el.dataset.k; PB.sfx.tick();
        PB.$$('[data-k]', root).forEach((b) => b.classList.toggle('on', +b.dataset.k === R.guess));
        PB.$('[data-ok]', root).disabled = false;
      });
      PB.on(root, '[data-ok]', () => { save(); clue(); });
    });
  }

  // 4. The phone goes on the table: the clue-giver says the hint.
  function clue() {
    PB.render(`${topbar()}
      <div class="play">
        ${PB.art('talk')}
        <div class="who">${PB.esc(pname(giver()))}</div>
        <p>${L('teď řekne svou narážku. Jedno slovo, zvuk, gesto nebo úryvek písničky.', 'now gives the hint. One word, a sound, a gesture or a song line.')}</p>
        <p class="muted small">${L('Pak všichni ostatní najednou ukážou na kartu a přetáhnou na ni své jméno.', 'Then everyone else points at a card at the same time and drags their name onto it.')}</p>
      </div>
      <button class="btn big" data-ok>${L('Hádat', 'Guess')}</button>`,
    (root) => {
      PB.on(root, '[data-pause]', () => pause(clue));
      PB.on(root, '[data-ok]', vote);
    });
  }

  // 5. Everyone else drags their name onto a card. The cards are shuffled again.
  function vote() {
    const R = G.round;
    if (!R.order) { R.order = PB.shuffle([...R.hand.keys()]); save(); }
    PB.voteBoard({
      seats: G.players.length,
      voters: others(),
      chip: pname,
      title: L(`Kterou kartu myslí ${pname(giver())}?`, `Which card does ${pname(giver())} mean?`),
      opts: R.order.map((j) => ({ k: j, text: R.hand[j] })),
      allowed: () => true,
      denied: '',
      votes: R.votes,
      onDone: reveal,
      onPause: pause,
    });
  }

  // 6. Reveal and score.
  function reveal() {
    PB.stopAll();
    const R = G.round, m = others().length;
    const finders = others().filter((i) => R.votes[i] === R.secret);
    const k = finders.length, scored = k > 0 && k < m, exact = R.guess === k;
    const delta = G.players.map(() => 0);
    finders.forEach((i) => (delta[i] += 2));
    if (scored) delta[giver()] += k + (exact ? 2 : 0);
    const verdict = k === m ? L('Moc jasné! Uhodli všichni.', 'Too obvious! Everyone got it.')
      : k === 0 ? L('Moc temné! Nikdo neuhodl.', 'Too obscure! Nobody got it.')
      : L('Akorát! Někdo ano, někdo ne.', 'Just right! Some did, some didn\'t.');
    const who = (j) => others().filter((i) => R.votes[i] === j).map((i) => PB.esc(pname(i))).join(', ');
    PB.render(`${topbar()}
      <h2>${verdict}</h2>
      <p class="muted">${L('Tip', 'Predicted')}: <b>${R.guess}</b>, ${L('uhodlo', 'got it')}: <b>${k}</b>${scored && exact ? ` ${PB.ico('star')} ${L('přesně!', 'spot on!')}` : ''}</p>
      <div class="stack gp-revs">
        ${R.order.map((j) => `<div class="gp-rev ${j === R.secret ? 'truth' : ''}"><div class="gp-rev-a">${PB.esc(R.hand[j])}</div>${who(j) ? `<div class="small">${who(j)}</div>` : ''}</div>`).join('')}
      </div>
      <div class="grow"></div>
      <button class="btn big" data-next>${L('Body za tah', 'Turn scores')}</button>`,
    (root) => {
      PB.on(root, '[data-pause]', () => pause(reveal));
      if (scored) { PB.sfx.good(); PB.fx.burstAt(PB.$('.gp-rev.truth', root), 40); } else PB.sfx.skip();
      PB.on(root, '[data-next]', () => { delta.forEach((d, i) => (G.scores[i] += d)); turnScores(delta); });
    });
  }

  function standings(delta) {
    const rank = G.players.map((p, i) => i).sort((a, b) => G.scores[b] - G.scores[a]);
    const top = G.scores[rank[0]];
    return `<div class="stack">${rank.map((i) => `<div class="score ${G.scores[i] === top && top > 0 ? 'lead' : ''}"><span>${PB.esc(pname(i))}</span><span>${delta && delta[i] ? `<span class="muted small">+${delta[i]}</span> ` : ''}<b>${G.scores[i]}</b></span></div>`).join('')}</div>`;
  }
  function turnScores(delta) {
    const last = G.turn + 1 >= totalTurns();
    PB.render(`${PB.top(L('Skóre', 'Scores'), { close: true })}
      ${standings(delta)}
      <p class="muted small">${L('Uhodneš +2. Dáváš narážku: +1 za každého, kdo uhodl, a +2 za přesný tip, ale jen když neuhodli všichni ani nikdo.',
        'Guess right +2. Hint-giver: +1 per player who got it, and +2 for an exact prediction, but only if not everyone and not nobody got it.')}</p>
      <div class="grow"></div>
      <button class="btn big" data-next>${last ? L('Výsledky', 'Results') : L('Další tah', 'Next turn')}</button>`,
    (root) => {
      PB.bindTop(root, () => final(), true);
      PB.on(root, '[data-next]', next);
    });
  }
  function next() {
    G.turn++;
    if (G.turn >= totalTurns()) return final();
    save(); turn();
  }
  function scores(back) {
    PB.render(`${PB.top(L('Skóre', 'Scores'))}${standings()}<div class="grow"></div><button class="btn big" data-b>${L('Zpět do hry', 'Back to the game')}</button>`,
      (root) => { PB.bindTop(root, back); PB.on(root, '[data-b]', back); });
  }

  function final() {
    PB.stopAll();
    PB.store.del(SAVE);
    PB.keepAwake(false);
    const best = Math.max(...G.scores);
    const winners = G.players.map((p, i) => i).filter((i) => G.scores[i] === best);
    PB.render(`${PB.top(L('Výsledky', 'Results'))}
      <div class="play" style="flex:0">${PB.art('trophy')}<div class="who">${winners.map((i) => PB.esc(pname(i))).join(', ')}</div></div>
      ${standings()}
      <div class="grow"></div>
      <div class="stack"><button class="btn" data-again>${L('Hrát znovu', 'Play again')}</button><button class="btn secondary" data-home>${L('Menu', 'Menu')}</button></div>`,
    (root) => {
      PB.bindTop(root);
      PB.on(root, '[data-again]', setup);
      PB.on(root, '[data-home]', PB.home);
    });
  }

  PB.register({ id: 'hint', icon: 'hint', ink: ['#0097a7', '#ff3d8b'], onInk: '#18161c', name: NAME,
    tagline: () => L('Jedna narážka, šest karet. Ne moc jasně, ne moc temně.', 'One hint, six cards. Not too obvious, not too obscure.'), start });
})();
