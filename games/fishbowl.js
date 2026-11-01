// Fishbowl / Klobouk: teams guess the same card stack over 3 or 4 rounds (describe, one word, mime, freeze frame).
(function () {
  const L = (a, b) => PB.L(a, b);
  const SAVE = 'fishbowl:save';
  const ROUNDS = () => [
    { name: L('Popis', 'Describe'), art: 'talk', rule: L('Popisuj slovy. Nesmíš říct hádané slovo ani jeho část, ani ho přeložit.', "Describe it in words. Don't say the word, any part of it, or a translation.") },
    { name: L('Jedno slovo', 'One word'), art: '1', rule: L('Smíš říct jen jedno jediné slovo. Pak už jen čekáš.', 'You may say exactly one word. Then just wait.') },
    { name: L('Pantomima', 'Mime'), art: 'hand', rule: L('Beze slov a bez zvuků. Jen gesta a mimika.', 'No words, no sounds. Gestures and faces only.') },
    { name: L('Výjev', 'Freeze frame'), art: 'pose', rule: L('Ztuhni v jedné póze jako socha. Žádný pohyb, žádné zvuky. Pózu smíš změnit, ale pak zase ztuhni.', 'Freeze in one pose like a statue. No moving, no sounds. You may switch to a new pose, then freeze again.') },
  ];
  const defaults = { decks: null, levels: [1, 2], know: null, cards: 40, time: 45, skip: true, own: false, draft: false, freeze: true, hand: 8, keep: 5, drafters: 4,
    teams: [{ name: '', players: '' }, { name: '', players: '' }] };
  let G = null; // running game state (G.flags: cards reported as bad in the draft, G.aside: cards put aside during play)

  const save = () => PB.store.set(SAVE, G);
  const teamName = (t, i) => (t.name || '').trim() || L('Tým ', 'Team ') + String.fromCharCode(65 + i);
  const players = (t) => (t.players || '').split(',').map((x) => x.trim()).filter(Boolean);
  const total = (t) => t.score.reduce((a, b) => a + b, 0);
  const roster = (s) => s.teams.flatMap(players);
  const NR = () => G.nr || 3; // rounds in this game (older saves had 3)
  // Who explains for team index i right now (null when the team has no player names).
  const explainerOf = (i) => { const t = G.teams[i], ps = players(t); return ps.length ? ps[t.next % ps.length] : null; };
  const PLAYER_PH = () => L('Přidej hráče (nepovinné)', 'Add a player (optional)');

  function start() {
    const saved = PB.store.get(SAVE, null);
    if (saved && saved.lang === PB.lang) {
      PB.render(`${PB.top(L('Klobouk', 'Fishbowl'))}
        <div class="play">${PB.art('hat')}<h2>${L('Máte rozehranou hru', 'You have a game in progress')}</h2>
        <p class="muted">${L('Kolo', 'Round')} ${saved.round + 1}/${saved.nr || 3}</p><p class="muted">${saved.teams.map((t, i) => `${PB.esc(teamName(t, i))}: ${total(t)}`).join(', ')}</p></div>
        <div class="stack"><button class="btn" data-c>${L('Pokračovat', 'Continue')}</button><button class="btn secondary" data-n>${L('Nová hra', 'New game')}</button></div>`,
      (root) => {
        PB.bindTop(root);
        PB.on(root, '[data-c]', () => { G = saved; PB.keepAwake(); turnReady(); });
        PB.on(root, '[data-n]', () => { PB.store.del(SAVE); setup(); });
      });
    } else setup();
  }

  function setup() {
    const { s, save: saveS } = PB.settings('fishbowl', defaults);
    const draw = () => { const y0 = window.scrollY; PB.render(`
      ${PB.top(L('Klobouk', 'Fishbowl'))}
      <div class="box rules">${L(
        'Týmy hádají <b>pořád stejný balíček karet</b> v několika kolech: <b>popis → jedno slovo → pantomima</b>, a pokud chcete, ještě <b>výjev</b>. V dalších kolech už všichni slova znají, takže to jde rychle a je to čím dál vtipnější. Za každé uhodnuté slovo je bod. Hráči se střídají pořád ve stejném pořadí. Když se balíček v půlce tahu vyprázdní, stejný hráč pokračuje se zbylým časem v dalším kole.',
        'Teams guess <b>the same card stack</b> over several rounds: <b>describe → one word → mime</b>, and if you like, a <b>freeze frame</b>. In later rounds everyone knows the words, so it gets faster and funnier. One point per guessed card. Players take turns in a fixed order. If the stack runs out mid-turn, the same player carries on into the next round with the time left.')}</div>
      <h3>${L('Týmy', 'Teams')}</h3>
      <div class="stack" data-teams data-flow>
        ${s.teams.map((t, i) => `<div class="box stack">
          <div class="namerow"><input type="text" data-tn="${i}" value="${PB.esc(t.name)}" placeholder="${L('Tým ', 'Team ')}${String.fromCharCode(65 + i)}" maxlength="40">
          <button class="iconbtn" data-dice="${i}" aria-label="${L('Náhodný název týmu', 'Random team name')}">${PB.ico('dice')}</button>
          ${s.teams.length > 2 ? `<button class="iconbtn" data-trm="${i}" aria-label="remove">${PB.ico('close')}</button>` : ''}</div>
          ${PB.ui.tags('tp' + i, players(t), PLAYER_PH())}
        </div>`).join('')}
        ${s.teams.length < 6 ? `<button class="btn secondary" data-tadd>+ ${L('Přidat tým', 'Add team')}</button>` : ''}
      </div>
      ${PB.ui.deckPicker('fishbowl', s)}
      <h3>${L('Nastavení', 'Settings')}</h3>
      <div class="stack">
        ${s.draft ? PB.ui.stepper('hand', L('Karty v ruce', 'Cards in hand'), s.hand) + PB.ui.stepper('keep', L('Ponechat', 'Keep'), s.keep)
          + `<p class="muted small center" data-size style="margin:0"></p>` : PB.ui.stepper('cards', L('Počet karet', 'Cards'), s.cards)}
        ${PB.ui.stepper('time', L('Čas na tah', 'Time per turn'), s.time, ' s')}
        ${PB.ui.toggle('freeze', L('4. kolo: výjev', 'Round 4: freeze frame'), s.freeze, L('Ztuhnout v jedné póze, beze slov a bez pohybu', 'Freeze in one pose, no words, no moving'))}
        ${PB.ui.toggle('skip', L('Povolit přeskakování', 'Allow skipping'), s.skip, L('Přeskočená karta se vrátí do balíčku', 'Skipped cards go back into the stack'))}
        ${PB.ui.toggle('own', L('Přidat vlastní lístečky', 'Add your own cards'), s.own, L('Hráči napíšou vlastní jména a pojmy, zbytek doplní balíček', 'Players write their own names and things, decks fill the rest'))}
        ${PB.ui.toggle('draft', L('Každý si vybere karty', 'Everyone picks cards'), s.draft, L('Každý dostane tajně pár karet a nechá si jen ty, které chce', 'Everyone gets a few cards in secret and keeps only the ones they want'))}
      </div>
      <div class="spacer"></div>
      <button class="btn big" data-go>${L('Začít', 'Start')}</button>
    `, (root) => {
      window.scrollTo(0, y0);
      PB.bindTop(root, () => { saveS(); PB.home(); });
      PB.ui.bindDeckPicker(root, s, null, 'fishbowl', draw);
      const size = () => {
        const el = PB.$('[data-size]', root); if (!el) return;
        const n = roster(s).length;
        el.textContent = L('Balíček: ', 'Deck: ') + (n ? `${n} × ${s.keep} = ${n * s.keep}` : L(`počet hráčů × ${s.keep}`, `players × ${s.keep}`));
      };
      if (s.draft) {
        const kopts = { min: 2, get max() { return Math.max(2, s.hand - 1); } };
        PB.ui.bindStepper(root, 'hand', s, { min: 4, max: 12 }, () => {
          if (s.keep > kopts.max) { s.keep = kopts.max; PB.$('[data-step="keep"] .val', root).textContent = s.keep; }
          size();
        });
        PB.ui.bindStepper(root, 'keep', s, kopts, size);
        size();
      } else PB.ui.bindStepper(root, 'cards', s, { min: 10, max: 100, step: 5 });
      PB.ui.bindStepper(root, 'time', s, { min: 20, max: 120, step: 5, unit: ' s' });
      PB.ui.bindToggle(root, 'skip', s);
      PB.ui.bindToggle(root, 'freeze', s);
      PB.ui.bindToggle(root, 'own', s);
      PB.ui.bindToggle(root, 'draft', s, draw);
      PB.on(root, '[data-tn]', (e, el) => { s.teams[+el.dataset.tn].name = el.value; }, 'input');
      PB.on(root, '[data-dice]', (e, el) => {
        const i = +el.dataset.dice, name = freeName(s.teams.map((t, k) => (k === i ? '' : t.name)).concat(s.teams[i].name));
        if (!name) return;
        s.teams[i].name = name; PB.$(`[data-tn="${i}"]`, root).value = name;
        PB.sfx.deal(); PB.vibrate(15);
      });
      s.teams.forEach((t, i) => PB.ui.bindTags(root, 'tp' + i, () => players(s.teams[i]), (l) => { s.teams[i].players = l.join(', '); size(); }, PLAYER_PH()));
      PB.on(root, '[data-trm]', (e, el) => { s.teams.splice(+el.dataset.trm, 1); draw(); });
      PB.on(root, '[data-tadd]', () => { s.teams.push({ name: '', players: '' }); draw(); });
      PB.on(root, '[data-go]', () => {
        saveS();
        if (s.own) ownCards(s, []); else begin(s, []);
      });
    }); };
    draw();
  }

  // Players type their own cards one by one; entries are hidden from the next writer.
  function ownCards(s, own) {
    PB.render(`
      ${PB.top(L('Vlastní lístečky', 'Your own cards'))}
      <div class="box rules">${L('Každý napíše pár jmen nebo pojmů (osobnost, postava, věc, společný zážitek…) a předá mobil dalšímu. Napsané lístečky se schovají.',
        'Everyone writes a few names or things (a celebrity, a character, an object, an inside joke…) and passes the phone on. Written cards are hidden.')}</div>
      <div class="spacer"></div>
      <form class="namerow" data-f><input type="text" data-w maxlength="40" placeholder="${L('Napiš lísteček', 'Write a card')}" autocomplete="off"><button class="iconbtn" type="submit" aria-label="add">${PB.ico('plus')}</button></form>
      <p class="center"><span class="pill" data-n>${L('V klobouku', 'In the hat')}: ${own.length}</span></p>
      <p class="center muted small" data-last></p>
      <div class="grow"></div>
      <div class="stack">
        <button class="btn secondary" data-pass>${L('Hotovo, předat dalšímu', 'Done, pass it on')}</button>
        <button class="btn" data-go>${L('Všichni napsali, hrajeme', 'Everyone is done, play')}</button>
      </div>
    `, (root) => {
      PB.bindTop(root, setup);
      const inp = PB.$('[data-w]', root);
      PB.$('[data-f]', root).addEventListener('submit', (e) => {
        e.preventDefault();
        const v = inp.value.trim();
        if (!v) return;
        if (!own.some((x) => x.toLowerCase() === v.toLowerCase())) own.push(v);
        inp.value = '';
        PB.$('[data-n]', root).textContent = L('V klobouku', 'In the hat') + ': ' + own.length;
        PB.$('[data-last]', root).textContent = L('Přidáno', 'Added');
        PB.vibrate(20);
        inp.focus();
      });
      PB.on(root, '[data-pass]', () => PB.pass({ title: L('Vlastní lístečky', 'Your own cards'), name: L('dalšímu hráči', 'the next player'), onReady: () => ownCards(s, own), onBack: setup }));
      PB.on(root, '[data-go]', () => begin(s, own));
    });
  }

  function begin(s, own) {
    const ownLower = new Set(own.map((w) => w.toLowerCase()));
    const fill = PB.pool(s.decks, s.levels, s.know).filter((w) => !ownLower.has(w.toLowerCase()));
    if (s.draft) return draftIntro(s, own, fill);
    const take = Math.max(0, s.cards - own.length);
    const words = PB.shuffle(own.concat(fill.slice(0, take)));
    if (words.length < 3) { PB.toast(L('Málo slov. Vyber víc balíčků nebo obtížností.', 'Not enough words. Pick more decks or levels.')); return; }
    startGame(s, words, null, fill.slice(take, take + 40));
  }

  // A random library name that no team uses yet (taken = names to avoid; empty ones are ignored).
  function freeName(taken) {
    const used = new Set(taken.map((x) => String(x || '').trim().toLowerCase()).filter(Boolean));
    const free = PB.teamNames().filter((n) => !used.has(n.toLowerCase()));
    return free.length ? PB.pick(free) : '';
  }

  // Optional draft: everyone gets a private hand and keeps exactly `keep` cards. Cards can be flagged as bad
  // (not discarded here; the flags are reviewed on the results screen).
  function draftIntro(s, own, fill) {
    const names = roster(s);
    const line = () => `${names.length || s.drafters} × ${s.keep} = ${(names.length || s.drafters) * s.keep}`;
    PB.render(`
      ${PB.top(L('Výběr karet', 'Pick your cards'))}
      <div class="box rules">${L(
        `Každý hráč dostane <b>${s.hand} karet</b>, které nikdo jiný neuvidí, a nechá si <b>${s.keep}</b>. Špatnou kartu nahlásí vlaječkou: nepočítá se mezi vybrané a po hře se rozhodne, jestli ji navždy vyřadit.`,
        `Each player gets <b>${s.hand} cards</b> nobody else sees and keeps <b>${s.keep}</b>. A bad card gets flagged: it can't be kept, and after the game you decide whether to discard it for good.`)}</div>
      ${names.length ? `<h3>${L('Hráči', 'Players')}</h3><div class="chips">${names.map((n) => `<span class="pill">${PB.esc(n)}</span>`).join('')}</div>`
        : `<div class="spacer"></div>${PB.ui.stepper('drafters', L('Počet hráčů', 'Players'), s.drafters)}`}
      <p class="muted small center" data-size>${L('Balíček: ', 'Deck: ')}${line()}</p>
      <div class="grow"></div>
      <button class="btn big" data-go>${L('Začít výběr', 'Start picking')}</button>
    `, (root) => {
      PB.bindTop(root, setup);
      if (!names.length) PB.ui.bindStepper(root, 'drafters', s, { min: 2, max: 12 }, () => { PB.$('[data-size]', root).textContent = L('Balíček: ', 'Deck: ') + line(); });
      PB.on(root, '[data-go]', () => {
        const list = names.length ? names : Array.from({ length: s.drafters }, (_, i) => L('Hráč ', 'Player ') + (i + 1));
        if (list.length * s.hand > fill.length) return PB.toast(L('Málo slov pro tolik hráčů. Vyber víc balíčků nebo obtížností.', 'Not enough words for that many players. Pick more decks or levels.'));
        PB.store.set('set:fishbowl:' + PB.lang, s); // remember the player count
        draftPass({ s, own, names: list, hand: s.hand, keep: s.keep, pool: fill.slice(), i: 0, hands: [], picks: [], flagged: new Set() });
      });
    });
  }

  function draftPass(D) {
    const n = D.names.length;
    PB.sfx.deal();
    PB.pass({ title: L('Výběr karet', 'Pick your cards'), name: D.names[D.i], sub: `${D.i + 1} / ${n}`, onReady: () => draftHand(D), onBack: setup });
  }

  function draftHand(D) {
    const n = D.names.length, hand = D.hands[D.i] = D.hands[D.i] || D.pool.splice(0, D.hand), sel = new Set();
    const last = D.i === n - 1;
    PB.render(`
      ${PB.top(D.names[D.i], { close: true, right: `<span class="pill" data-cnt></span>` })}
      <p class="muted small" style="margin-top:0">${L(`Klepnutím vyber přesně ${D.keep} karet. Vlaječka znamená „tahle karta je špatná“.`, `Tap to keep exactly ${D.keep} cards. The flag means “this card is bad”.`)}</p>
      <div class="stack picks">${hand.map((w, k) => `<div class="pick"><button class="chip" data-c="${k}" aria-pressed="false">${PB.esc(w)}</button>
        <button class="iconbtn sm" data-f="${k}" aria-pressed="false" title="${L('Nahlásit', 'Flag')}" aria-label="${L('Nahlásit', 'Flag')}: ${PB.esc(w)}">${PB.ico('flag')}</button></div>`).join('')}</div>
      <div class="spacer"></div>
      <button class="btn big" data-done disabled>${last ? L('Hotovo, hrajeme', 'Done, let’s play') : L('Hotovo, předat dál', 'Done, pass it on')}</button>
    `, (root) => {
      PB.bindTop(root, setup, true);
      const rows = PB.$$('.pick', root);
      const paint = () => {
        rows.forEach((r, k) => {
          const bad = D.flagged.has(hand[k]), on = sel.has(k);
          r.classList.toggle('bad', bad);
          PB.$('.chip', r).classList.toggle('on', on); PB.$('.chip', r).setAttribute('aria-pressed', on);
          PB.$('.iconbtn', r).classList.toggle('on', bad); PB.$('.iconbtn', r).setAttribute('aria-pressed', bad);
        });
        PB.$('[data-cnt]', root).textContent = L('Vybráno ', 'Picked ') + sel.size + ' / ' + D.keep;
        PB.$('[data-done]', root).disabled = sel.size !== D.keep;
      };
      PB.on(root, '[data-c]', (e, el) => {
        const k = +el.dataset.c;
        if (D.flagged.has(hand[k])) return PB.toast(L('Nahlášenou kartu nejde ponechat.', 'A flagged card can’t be kept.'));
        if (sel.has(k)) sel.delete(k);
        else if (sel.size >= D.keep) return PB.toast(L(`Máš už ${D.keep}. Jednu odeber.`, `You have ${D.keep} already. Put one back first.`));
        else sel.add(k);
        PB.sfx.tick(); PB.vibrate(10); paint();
      });
      PB.on(root, '[data-f]', (e, el) => {
        const k = +el.dataset.f, w = hand[k];
        if (D.flagged.has(w)) D.flagged.delete(w);
        else {
          const bad = hand.filter((x) => D.flagged.has(x)).length;
          if (hand.length - bad - 1 < D.keep) return PB.toast(L(`Aspoň ${D.keep} karet musí zůstat k výběru.`, `At least ${D.keep} cards must stay available.`));
          D.flagged.add(w); sel.delete(k);
        }
        PB.sfx.tick(); PB.vibrate(10); paint();
      });
      PB.on(root, '[data-done]', () => {
        if (sel.size !== D.keep) return;
        sel.forEach((k) => D.picks.push(hand[k]));
        D.i++;
        if (D.i < n) return draftPass(D);
        const words = PB.shuffle(D.own.concat(D.picks));
        if (words.length < 3) return PB.toast(L('Málo karet.', 'Too few cards.'));
        startGame(D.s, words, D.flagged, D.pool.slice(0, 40));
      });
      paint();
    });
  }

  // spare: unused cards that can replace a card put aside.
  function startGame(s, words, flagged, spare) {
    const nr = s.freeze ? 4 : 3;
    G = {
      lang: PB.lang, nr,
      settings: { time: s.time, skip: s.skip },
      teams: s.teams.map((t) => ({ name: t.name, players: t.players, score: Array(nr).fill(0), next: 0 })),
      flags: Array.from(flagged || []), aside: [], spare: spare || [], played: words.slice(),
      all: words, deck: PB.shuffle(words), round: 0, team: 0, carry: null, introShown: false,
    };
    // An empty team name becomes a random library name, kept for the whole game.
    const taken = G.teams.map((t) => t.name);
    G.teams.forEach((t) => { if (!(t.name || '').trim()) { const nm = freeName(taken); if (nm) { t.name = nm; taken.push(nm); } } });
    save();
    PB.keepAwake();
    turnReady();
  }

  function roundIntro(next) {
    const r = ROUNDS()[G.round];
    PB.render(`
      ${PB.top(L('Kolo ', 'Round ') + (G.round + 1) + '/' + NR(), { close: true })}
      <div class="play">
        ${PB.art(r.art)}
        <h1>${r.name}</h1>
        <p class="box">${r.rule}</p>
        <p class="muted">${G.all.length} ${L('karet', 'cards')}</p>
      </div>
      <button class="btn big" data-ok>${L('Jasně', 'Got it')}</button>
    `, (root) => {
      PB.bindTop(root, null, true);
      PB.on(root, '[data-ok]', () => { G.introShown = true; save(); next(); });
    });
  }

  function turnReady() {
    if (!G.introShown) return roundIntro(turnReady);
    const t = G.teams[G.team];
    const explainer = explainerOf(G.team);
    const secs = G.carry != null ? G.carry : G.settings.time;
    const r = ROUNDS()[G.round];
    PB.render(`
      ${PB.top(`${L('Kolo', 'Round')} ${G.round + 1}/${NR()}: ${r.name}`, { close: true })}
      <div class="play">
        <div class="muted">${L('Na tahu je', 'Up next')}</div>
        <div class="who">${PB.esc(teamName(t, G.team))}</div>
        ${explainer ? `<p>${G.carry != null ? L('Pokračuje', 'Carrying on') : L('Vysvětluje', 'Explaining')}: <b>${PB.esc(explainer)}</b></p>` : `<p class="muted">${L('Vyberte, kdo vysvětluje. Ostatní z týmu hádají.', 'Pick who explains. The rest of the team guesses.')}</p>`}
        <p><span class="pill">${PB.ico('clock')} ${Math.round(secs)} s${G.carry != null ? ' (' + L('přenesený čas', 'carried time') + ')' : ''}</span> <span class="pill">${PB.ico('cards')} ${G.deck.length}</span></p>
        <div class="stack" style="margin-top:12px">${G.teams.map((x, i) => `<div class="score"><span>${PB.esc(teamName(x, i))}${i === G.team ? `<span class="now">${L('Na tahu', 'Up next')}</span>` : ''}</span><b>${total(x)}</b></div>`).join('')}</div>
      </div>
      <button class="btn big" data-go>${L('Start', 'Start')}</button>
    `, (root) => {
      PB.bindTop(root, null, true);
      PB.on(root, '[data-go]', () => turn(secs));
    });
  }

  function turn(secs) {
    const guessed = [], skipped = [];
    let timer;
    const r = ROUNDS()[G.round];
    // Missed cards for the review: the one on screen when time ran out first (often guessed but not tapped), then the skipped ones.
    const finish = (timeLeft) => {
      timer.stop();
      const missed = G.deck.length ? [G.deck[0]] : [];
      skipped.forEach((w) => { if (!missed.includes(w) && G.deck.includes(w)) missed.push(w); });
      summary(guessed, missed, timeLeft);
    };
    PB.render(`
      <div class="top">${PB.pauseBtn()}<span class="pill">${r.name}</span><div class="title"></div><span class="pill" data-left>${PB.ico('cards')} ${G.deck.length}</span></div>
      <div class="play">
        <div class="timer" data-t>${secs}</div>
        <div class="bar"><i data-bar style="width:100%"></i></div>
        <div class="deck" data-w></div>
      </div>
      <div class="row">
        ${G.settings.skip ? `<button class="btn bad big" data-skip>${L('Přeskočit', 'Skip')}</button>` : ''}
        <button class="btn good big" data-ok>${PB.ico('check')} ${L('Uhodnuto', 'Got it')}</button>
      </div>
    `, (root) => {
      const w = PB.$('[data-w]', root), tEl = PB.$('[data-t]', root), bar = PB.$('[data-bar]', root), left = PB.$('[data-left]', root);
      // Each word is a card: dealt in, thrown away when guessed, dropped when skipped.
      const show = (out) => {
        const old = w.querySelector('.word:not(.got):not(.skip)');
        if (old) { old.classList.remove('in'); old.classList.add(out || 'got'); setTimeout(() => old.remove(), PB.reduced() ? 0 : 380); }
        const c = document.createElement('div');
        c.className = 'word in'; c.textContent = G.deck[0];
        c.style.setProperty('--tilt', (Math.random() * 5 - 2.5).toFixed(1) + 'deg');
        w.appendChild(c);
        left.innerHTML = PB.ico('cards') + ' ' + G.deck.length;
      };
      show();
      let lastSec = Math.ceil(secs);
      timer = PB.timer(secs, (t) => {
        const c = Math.ceil(t);
        tEl.textContent = c;
        tEl.classList.toggle('low', t <= 5);
        bar.style.width = (100 * t) / G.settings.time + '%';
        if (c !== lastSec) { lastSec = c; if (c <= 5 && c > 0) PB.sfx.warn(); }
      }, () => { PB.sfx.end(); PB.vibrate([200, 100, 200]); finish(0); });
      PB.on(root, '[data-ok]', () => {
        guessed.push(G.deck.shift());
        PB.sfx.good(); PB.vibrate(30);
        PB.fx.burstAt(PB.$('[data-ok]', root), 16, { speed: 5, g: .14, life: 36, size: 3.5 });
        if (!G.deck.length) finish(timer.left()); else { show('got'); PB.sfx.deal(); }
      });
      PB.on(root, '[data-skip]', () => {
        if (!skipped.includes(G.deck[0])) skipped.push(G.deck[0]);
        if (G.deck.length > 1) G.deck.push(G.deck.shift());
        PB.sfx.skip(); show('skip');
      });
      PB.on(root, '[data-pause]', () => {
        timer.pause();
        PB.menu(L('Pauza', 'Paused'), [
          { label: L('Pokračovat', 'Resume'), fn: () => timer.resume() },
          { label: L('Ukončit tah', 'End this turn'), cls: 'secondary', fn: () => finish(0) },
          { label: L('Odejít (hra zůstane uložená)', 'Leave (game stays saved)'), cls: 'secondary', fn: () => { PB.stopAll(); PB.home(); } },
        ]);
      });
    });
  }

  // Review the turn before passing the phone: fix guesses either way, put unplayable cards aside
  // (out of this game, optionally replaced by a fresh card). Nothing changes until Continue.
  function summary(guessed, missed, timeLeft) {
    const items = guessed.map((w) => ({ w, was: true, got: true, aside: false, repl: false }))
      .concat(missed.map((w) => ({ w, was: false, got: false, aside: false, repl: false })));
    const t = G.teams[G.team];
    const spare = G.spare || [];
    // What the game looks like after this review (used for the button label and on Continue).
    const plan = () => {
      let deck = G.deck.slice(), all = G.all.slice(), sp = spare.slice(), score = 0;
      const aside = [], add = [];
      items.forEach((it) => {
        if (it.got) score++;
        if (it.aside) { all = all.filter((x) => x !== it.w); aside.push(it.w); if (it.repl && sp.length) add.push(sp.shift()); }
        const keep = !it.got && !it.aside, inDeck = !it.was;
        if (inDeck && !keep) deck = deck.filter((x) => x !== it.w);
        if (!inDeck && keep) deck.push(it.w);
      });
      add.forEach((w) => { all.push(w); deck.push(w); });
      return { deck, all, spare: sp, aside, add, score };
    };
    const row = (it, i) => {
      const acts = it.aside
        ? `${spare.length ? `<button class="aside ${it.repl ? 'on' : ''}" data-rep="${i}" aria-pressed="${it.repl}">${it.repl ? PB.ico('check') + ' ' : ''}${L('Nahradit novou', 'Replace with a new one')}</button>` : ''}
           <button class="aside" data-as="${i}">${L('Vrátit', 'Undo')}</button>`
        : `<button class="aside" data-as="${i}">${L('Odložit', 'Put aside')}</button>${PB.ico(it.got ? 'check' : 'close')}`;
      return `<div class="it ${it.aside ? 'off' : ''} ${it.aside ? 'wrap' : ''}" data-i="${i}"><span>${PB.esc(it.w)}${it.aside ? `<br><span class="muted small">${L('Odloženo z této hry', 'Out of this game')}</span>` : ''}</span><span class="acts">${acts}</span></div>`;
    };
    const draw = () => { const y = window.scrollY; const p = plan();
      // Who gets the phone next: the same player if the round ends with time to carry, otherwise the next team.
      const carries = !p.deck.length && G.round < NR() - 1 && timeLeft >= 3;
      const ni = (G.team + 1) % G.teams.length, nextName = explainerOf(ni) || teamName(G.teams[ni], ni);
      const label = !p.deck.length && G.round >= NR() - 1 ? L('Na výsledky', 'See the results') : carries ? L('Pokračovat', 'Continue') : L(`Pokračovat a předat mobil: ${nextName}`, `Continue, then pass the phone to ${nextName}`);
      // Cards sit in the list matching their current state, so a corrected card moves across.
      const got = items.map((it, i) => [it, i]).filter(([it]) => it.got), miss = items.map((it, i) => [it, i]).filter(([it]) => !it.got);
      PB.render(`
      ${PB.top(L('Konec tahu', 'Turn over'), { close: true })}
      <h2>${PB.esc(teamName(t, G.team))}: +${p.score}</h2>
      <div class="box">${L('<b>Mobil zatím nepředávej.</b> Projděte karty a opravte, co nesedí: ťuknutím kartu přesuneš mezi uhodnuté a neuhodnuté.', '<b>Don’t pass the phone yet.</b> Go through the cards and fix anything that’s off: tap a card to move it between guessed and not guessed.')}</div>
      <h3>${L('Uhodnuté', 'Guessed')}</h3>
      ${got.length ? `<div class="list">${got.map(([it, i]) => row(it, i)).join('')}</div>` : `<p class="muted small">${L('Zatím nic. Nevadí!', 'Nothing yet. No worries!')}</p>`}
      ${miss.length ? `<h3>${L('Neuhodnuté', 'Not guessed')}</h3>
      <p class="muted small" style="margin-top:0">${L('Karta, kterou nikdo nezná, se dá odložit, aby se na ní hra nezasekla.', 'A card nobody knows can be put aside so the game doesn’t get stuck on it.')}</p>
      <div class="list">${miss.map(([it, i]) => row(it, i)).join('')}</div>` : ''}
      <div class="spacer"></div>
      <button class="btn big" data-next>${PB.esc(label)}</button>
    `, (root) => {
      PB.bindTop(root, null, true);
      window.scrollTo(0, y);
      PB.on(root, '[data-as]', (e, el) => {
        e.stopPropagation();
        const it = items[+el.dataset.as];
        it.aside = !it.aside; it.repl = false;
        PB.sfx.tick(); PB.vibrate(10); draw();
      });
      PB.on(root, '[data-rep]', (e, el) => {
        e.stopPropagation();
        const it = items[+el.dataset.rep];
        if (!it.repl && items.filter((x) => x.repl).length >= spare.length) return PB.toast(L('Další náhradní karty už nejsou.', 'No more spare cards.'));
        it.repl = !it.repl; PB.sfx.tick(); draw();
      });
      PB.on(root, '[data-i]', (e, el) => {
        const it = items[+el.dataset.i];
        if (it.aside) return;
        it.got = !it.got; PB.sfx.tick(); PB.vibrate(10); draw();
      });
      PB.on(root, '[data-next]', () => {
        const p = plan();
        t.score[G.round] += p.score;
        G.all = p.all; G.spare = p.spare; G.deck = PB.shuffle(p.deck);
        G.aside = (G.aside || []).concat(p.aside);
        G.played = (G.played || []).concat(p.add);
        G.carry = null;
        if (!G.deck.length) {
          // Round over: the same player carries on into the next round with the leftover time.
          if (G.round < NR() - 1 && timeLeft >= 3) G.carry = Math.round(timeLeft);
          else { G.team = (G.team + 1) % G.teams.length; t.next++; }
          G.round++;
          if (G.round >= NR()) { PB.store.del(SAVE); return results(); }
          G.deck = PB.shuffle(G.all); G.introShown = false;
          save();
          return roundOver();
        }
        t.next++;
        G.team = (G.team + 1) % G.teams.length;
        save();
        turnReady();
      });
    }); };
    draw();
  }

  function scoreboard() {
    const max = Math.max(...G.teams.map(total));
    return G.teams.map((x, i) => ({ x, i })).sort((a, b) => total(b.x) - total(a.x)).map(({ x, i }) =>
      `<div class="score ${total(x) === max ? 'lead' : ''}"><span>${PB.esc(teamName(x, i))}<br><span class="muted small">${x.score.join(' + ')}</span></span><b>${total(x)}</b></div>`).join('');
  }

  function roundOver() {
    PB.render(`
      ${PB.top(L('Konec kola ', 'End of round ') + G.round, { close: true })}
      <div class="play">${PB.art('hat')}<h1>${L('Balíček je prázdný!', 'The stack is empty!')}</h1>
      ${G.carry != null ? `<p class="muted">${PB.esc(explainerOf(G.team) || teamName(G.teams[G.team], G.team))} ${L('pokračuje se zbylým časem', 'carries on with the time left')}: ${G.carry} s</p>` : ''}
      <div class="stack">${scoreboard()}</div></div>
      <button class="btn big" data-n>${L('Další kolo', 'Next round')}</button>
    `, (root) => { PB.bindTop(root, null, true); PB.on(root, '[data-n]', turnReady); });
  }

  function results() {
    const max = Math.max(...G.teams.map(total));
    const winners = G.teams.filter((x) => total(x) === max).map((x) => teamName(x, G.teams.indexOf(x)));
    PB.keepAwake(false);
    PB.render(`
      ${PB.top(L('Výsledky', 'Results'))}
      <div class="play">${PB.art('trophy')}
      <h1>${winners.length > 1 ? L('Remíza!', "It's a tie!") : PB.esc(winners[0])}</h1>
      <p class="muted">${winners.length > 1 ? winners.map(PB.esc).join(', ') : L('vyhrává', 'wins')}</p>
      <div class="stack">${scoreboard()}</div></div>
      <div data-flags></div>
      <div class="stack"><button class="btn" data-again>${L('Hrát znovu', 'Play again')}</button><button class="btn secondary" data-home>${L('Domů', 'Home')}</button></div>
    `, (root) => {
      PB.bindTop(root);
      PB.sfx.sting(); PB.fx.burstAt(PB.$('h1', root), 80, { speed: 9, g: .18, life: 80, size: 4.5 });
      PB.on(root, '[data-again]', setup);
      PB.on(root, '[data-home]', PB.home);
      flagsSection(PB.$('[data-flags]', root));
    });
  }

  // End of game: the phone owner may discard cards for good. Cards put aside or flagged in the draft come first,
  // every other card of the game sits in a folded list. A discarded card never shows up in future games.
  function flagsSection(el) {
    const lo = (w) => w.toLowerCase();
    const top = [];
    (G.aside || []).concat(G.flags || []).forEach((w) => { if (!top.some((x) => lo(x) === lo(w))) top.push(w); });
    const rest = (G.played || G.all || []).filter((w) => !top.some((x) => lo(x) === lo(w)));
    const gone = (w) => PB.hidden.has('w', w);
    let open = false;
    const rowHtml = (w, k) => `<div class="it ${gone(w) ? 'off' : ''}" style="cursor:default"><span>${PB.esc(w)}</span><span class="acts">
      <button class="iconbtn sm ${gone(w) ? 'on' : ''}" data-fd="${k}" aria-pressed="${gone(w)}" aria-label="${L('Vyřadit navždy', 'Discard forever')}: ${PB.esc(w)}">${PB.ico('trash')}</button></span></div>`;
    const all = top.concat(rest);
    const draw = () => {
      el.innerHTML = `<h3>${L('Vyřadit karty navždy?', 'Discard cards for good?')}</h3>
        <p class="muted small" style="margin-top:0">${L('Nepovinné. Vyřazená karta se už v žádné další hře neobjeví (obnovit jde v nastavení balíčků).', 'Optional. A discarded card won’t show up in any future game (you can restore it in the deck settings).')}</p>
        ${top.length ? `<div class="list">${top.map((w, k) => rowHtml(w, k)).join('')}</div>
          <button class="btn secondary small" data-fall style="margin:10px 0 0 auto" ${top.every(gone) ? 'disabled' : ''}>${L('Vyřadit všechny tyto', 'Discard all of these')}</button>` : ''}
        ${rest.length ? `<details style="margin:12px 0 18px" ${open ? 'open' : ''}><summary>${L('Ostatní karty z této hry', 'Other cards from this game')} (${rest.length})</summary>
          <div class="list" style="margin-top:8px">${rest.map((w, k) => rowHtml(w, top.length + k)).join('')}</div></details>` : ''}`;
      const det = PB.$('details', el); if (det) det.addEventListener('toggle', () => { open = det.open; });
      PB.on(el, '[data-fd]', (e, b) => { const w = all[+b.dataset.fd]; if (gone(w)) { PB.hidden.remove('w', w); PB.sfx.tick(); } else { PB.hidden.add('w', w); PB.sfx.skip(); } draw(); });
      PB.on(el, '[data-fall]', () => { top.forEach((w) => PB.hidden.add('w', w)); PB.sfx.skip(); draw(); });
    };
    draw();
  }

  PB.register({ id: 'fishbowl', icon: 'hat', ink: ['#ff3d8b', '#1f4be0'], name: () => L('Klobouk', 'Fishbowl'), tagline: () => L('Popis, jedno slovo, pantomima. Týmová klasika na celý večer.', 'Describe, one word, mime. A team classic for the whole night.'), start });
})();
