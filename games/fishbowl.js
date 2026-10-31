// Fishbowl / Klobouk: teams guess the same card stack over 3 rounds (describe, one word, mime).
(function () {
  const L = (a, b) => PB.L(a, b);
  const SAVE = 'fishbowl:save';
  const ROUNDS = () => [
    { name: L('Popis', 'Describe'), art: 'talk', rule: L('Popisuj slovy. Nesmíš říct hádané slovo ani jeho část, ani ho přeložit.', "Describe it in words. Don't say the word, any part of it, or a translation.") },
    { name: L('Jedno slovo', 'One word'), art: '1', rule: L('Smíš říct jen jedno jediné slovo. Pak už jen čekáš.', 'You may say exactly one word. Then just wait.') },
    { name: L('Pantomima', 'Mime'), art: 'hand', rule: L('Beze slov a bez zvuků. Jen gesta a mimika.', 'No words, no sounds. Gestures and faces only.') },
  ];
  const defaults = { decks: null, levels: [1, 2], cards: 40, time: 45, skip: true, own: false,
    teams: [{ name: '', players: '' }, { name: '', players: '' }] };
  let G = null; // running game state

  const save = () => PB.store.set(SAVE, G);
  const teamName = (t, i) => (t.name || '').trim() || L('Tým ', 'Team ') + String.fromCharCode(65 + i);
  const players = (t) => (t.players || '').split(',').map((x) => x.trim()).filter(Boolean);
  const total = (t) => t.score.reduce((a, b) => a + b, 0);
  const PLAYER_PH = () => L('Přidej hráče (nepovinné)', 'Add a player (optional)');

  function start() {
    const saved = PB.store.get(SAVE, null);
    if (saved && saved.lang === PB.lang) {
      PB.render(`${PB.top(L('Klobouk', 'Fishbowl'))}
        <div class="play">${PB.art('hat')}<h2>${L('Máte rozehranou hru', 'You have a game in progress')}</h2>
        <p class="muted">${L('Kolo', 'Round')} ${saved.round + 1}/3</p><p class="muted">${saved.teams.map((t, i) => `${PB.esc(teamName(t, i))}: ${total(t)}`).join(', ')}</p></div>
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
    const draw = () => PB.render(`
      ${PB.top(L('Klobouk', 'Fishbowl'))}
      <div class="box rules">${L(
        'Týmy hádají <b>pořád stejný balíček karet</b> ve 3 kolech: <b>popis → jedno slovo → pantomima</b>. Ve druhém a třetím kole už všichni slova znají, takže to jde rychle a je to čím dál vtipnější. Za každé uhodnuté slovo je bod. Když se balíček v půlce tahu vyprázdní, tým si zbylý čas přenese do dalšího kola.',
        'Teams guess <b>the same card stack</b> across 3 rounds: <b>describe → one word → mime</b>. By rounds 2 and 3 everyone knows the words, so it gets faster and funnier. One point per guessed card. If the stack runs out mid-turn, the team carries the leftover time into the next round.')}</div>
      <h3>${L('Týmy', 'Teams')}</h3>
      <div class="stack" data-teams>
        ${s.teams.map((t, i) => `<div class="box stack">
          <div class="namerow"><input type="text" data-tn="${i}" value="${PB.esc(t.name)}" placeholder="${L('Tým ', 'Team ')}${String.fromCharCode(65 + i)}" maxlength="20">
          ${s.teams.length > 2 ? `<button class="iconbtn" data-trm="${i}" aria-label="remove">${PB.ico('close')}</button>` : ''}</div>
          ${PB.ui.tags('tp' + i, players(t), PLAYER_PH())}
        </div>`).join('')}
        ${s.teams.length < 6 ? `<button class="btn secondary" data-tadd>+ ${L('Přidat tým', 'Add team')}</button>` : ''}
      </div>
      ${PB.ui.deckPicker('fishbowl', s)}
      <p class="muted small" data-avail></p>
      <h3>${L('Nastavení', 'Settings')}</h3>
      <div class="stack">
        ${PB.ui.stepper('cards', L('Počet karet', 'Cards'), s.cards)}
        ${PB.ui.stepper('time', L('Čas na tah', 'Time per turn'), s.time, ' s')}
        ${PB.ui.toggle('skip', L('Povolit přeskakování', 'Allow skipping'), s.skip, L('Přeskočená karta se vrátí do balíčku', 'Skipped cards go back into the stack'))}
        ${PB.ui.toggle('own', L('Přidat vlastní lístečky', 'Add your own cards'), s.own, L('Hráči napíšou vlastní jména a pojmy, zbytek doplní balíček', 'Players write their own names and things, decks fill the rest'))}
      </div>
      <div class="spacer"></div>
      <button class="btn big" data-go>${L('Začít', 'Start')}</button>
    `, (root) => {
      PB.bindTop(root, () => { saveS(); PB.home(); });
      const avail = () => { PB.$('[data-avail]', root).textContent = L('Dostupných slov: ', 'Available words: ') + PB.pool(s.decks, s.levels).length; };
      avail();
      PB.ui.bindDeckPicker(root, s, avail);
      PB.ui.bindStepper(root, 'cards', s, { min: 10, max: 100, step: 5 });
      PB.ui.bindStepper(root, 'time', s, { min: 20, max: 120, step: 5, unit: ' s' });
      PB.ui.bindToggle(root, 'skip', s);
      PB.ui.bindToggle(root, 'own', s);
      PB.on(root, '[data-tn]', (e, el) => { s.teams[+el.dataset.tn].name = el.value; }, 'input');
      s.teams.forEach((t, i) => PB.ui.bindTags(root, 'tp' + i, () => players(s.teams[i]), (l) => { s.teams[i].players = l.join(', '); }, PLAYER_PH()));
      PB.on(root, '[data-trm]', (e, el) => { s.teams.splice(+el.dataset.trm, 1); draw(); });
      PB.on(root, '[data-tadd]', () => { s.teams.push({ name: '', players: '' }); draw(); });
      PB.on(root, '[data-go]', () => {
        saveS();
        if (s.own) ownCards(s, []); else begin(s, []);
      });
    });
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
    const fill = PB.pool(s.decks, s.levels).filter((w) => !ownLower.has(w.toLowerCase()));
    const words = PB.shuffle(own.concat(fill.slice(0, Math.max(0, s.cards - own.length))));
    if (words.length < 3) { PB.toast(L('Málo slov. Vyber víc balíčků nebo obtížností.', 'Not enough words. Pick more decks or levels.')); return; }
    G = {
      lang: PB.lang,
      settings: { time: s.time, skip: s.skip },
      teams: s.teams.map((t) => ({ name: t.name, players: t.players, score: [0, 0, 0], next: 0 })),
      all: words, deck: PB.shuffle(words), round: 0, team: 0, carry: null, introShown: false,
    };
    save();
    PB.keepAwake();
    turnReady();
  }

  function roundIntro(next) {
    const r = ROUNDS()[G.round];
    PB.render(`
      ${PB.top(L('Kolo ', 'Round ') + (G.round + 1) + '/3', { close: true })}
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
    const t = G.teams[G.team], ps = players(t);
    const explainer = ps.length ? ps[t.next % ps.length] : null;
    const secs = G.carry != null ? G.carry : G.settings.time;
    const r = ROUNDS()[G.round];
    PB.render(`
      ${PB.top(`${L('Kolo', 'Round')} ${G.round + 1}/3: ${r.name}`, { close: true })}
      <div class="play">
        <div class="muted">${L('Na tahu je', 'Up next')}</div>
        <div class="who">${PB.esc(teamName(t, G.team))}</div>
        ${explainer ? `<p>${L('Vysvětluje', 'Explaining')}: <b>${PB.esc(explainer)}</b></p>` : `<p class="muted">${L('Vyberte, kdo vysvětluje. Ostatní z týmu hádají.', 'Pick who explains. The rest of the team guesses.')}</p>`}
        <p><span class="pill">${PB.ico('clock')} ${Math.round(secs)} s${G.carry != null ? ' (' + L('přenesený čas', 'carried time') + ')' : ''}</span> <span class="pill">${PB.ico('cards')} ${G.deck.length}</span></p>
        <div class="stack" style="margin-top:12px">${G.teams.map((x, i) => `<div class="score ${i === G.team ? 'lead' : ''}"><span>${PB.esc(teamName(x, i))}</span><b>${total(x)}</b></div>`).join('')}</div>
      </div>
      <button class="btn big" data-go>${L('Start', 'Start')}</button>
    `, (root) => {
      PB.bindTop(root, null, true);
      PB.on(root, '[data-go]', () => turn(secs));
    });
  }

  function turn(secs) {
    const guessed = [];
    let timer;
    const r = ROUNDS()[G.round];
    const finish = (timeLeft) => { timer.stop(); summary(guessed, timeLeft); };
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

  // Review guessed cards (tap to undo a mistake), then score.
  function summary(guessed, timeLeft) {
    const ok = guessed.map(() => true);
    const t = G.teams[G.team];
    const draw = () => PB.render(`
      ${PB.top(L('Konec tahu', 'Turn over'), { close: true })}
      <h2>${PB.esc(teamName(t, G.team))}: +${ok.filter(Boolean).length}</h2>
      <p class="muted small">${guessed.length ? L('Ťukni na kartu, pokud se uhodla neplatně.', 'Tap a card if it was not a fair guess.') : L('Tentokrát nic. Nevadí!', 'Nothing this time. No worries!')}</p>
      <div class="list">${guessed.map((g, i) => `<div class="it ${ok[i] ? '' : 'off'}" data-i="${i}"><span>${PB.esc(g)}</span><span>${PB.ico(ok[i] ? 'check' : 'close')}</span></div>`).join('')}</div>
      <div class="spacer"></div>
      <button class="btn big" data-next>${L('Pokračovat', 'Continue')}</button>
    `, (root) => {
      PB.bindTop(root, null, true);
      PB.on(root, '[data-i]', (e, el) => { const i = +el.dataset.i; ok[i] = !ok[i]; draw(); });
      PB.on(root, '[data-next]', () => {
        const back = guessed.filter((g, i) => !ok[i]);
        t.score[G.round] += ok.filter(Boolean).length;
        if (back.length) G.deck = PB.shuffle(G.deck.concat(back));
        G.carry = null;
        if (!G.deck.length) {
          // Round over: the same team continues next round with leftover time.
          if (G.round < 2 && timeLeft >= 3) G.carry = Math.round(timeLeft);
          else { G.team = (G.team + 1) % G.teams.length; t.next++; }
          G.round++;
          if (G.round > 2) { PB.store.del(SAVE); return results(); }
          G.deck = PB.shuffle(G.all); G.introShown = false;
          save();
          return roundOver();
        }
        t.next++;
        G.team = (G.team + 1) % G.teams.length;
        save();
        turnReady();
      });
    });
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
      ${G.carry != null ? `<p class="muted">${PB.esc(teamName(G.teams[G.team], G.team))} ${L('pokračuje se zbylým časem', 'continues with leftover time')}: ${G.carry} s</p>` : ''}
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
      <div class="stack"><button class="btn" data-again>${L('Hrát znovu', 'Play again')}</button><button class="btn secondary" data-home>${L('Domů', 'Home')}</button></div>
    `, (root) => {
      PB.bindTop(root);
      PB.sfx.sting(); PB.fx.burstAt(PB.$('h1', root), 80, { speed: 9, g: .18, life: 80, size: 4.5 });
      PB.on(root, '[data-again]', setup);
      PB.on(root, '[data-home]', PB.home);
    });
  }

  PB.register({ id: 'fishbowl', icon: 'hat', ink: ['#ff3d8b', '#1f4be0'], name: () => L('Klobouk', 'Fishbowl'), tagline: () => L('Popis, jedno slovo, pantomima. Týmová klasika na celý večer.', 'Describe, one word, mime. A team classic for the whole night.'), start });
})();
