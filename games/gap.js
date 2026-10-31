// The Gap / Díra: a true fact with one word missing. Everyone writes a fake, the table votes
// which answer is true (and which fake is funniest), then the truth comes out.
(function () {
  const L = (a, b) => PB.L(a, b);
  const SAVE = 'gap:save';
  const NAME = () => L('Díra', 'The Gap');
  const defaults = { players: ['', '', '', ''], rounds: 8, think: 60, stars: true };
  let G = null; // running game

  const pname = (i) => (G.players[i] || '').trim() || L('Hráč ', 'Player ') + (i + 1);
  const save = () => PB.store.set(SAVE, G);
  // Compare answers loosely: case, accents, punctuation and extra spaces don't matter.
  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  const factsFor = () => (window.PB_GAP || []).filter((d) => d.lang === PB.lang).flatMap((d) => d.facts);
  const blank = (q, fill, cls) => PB.esc(q).replace('___', `<span class="gp-blank ${cls || ''}">${fill ? PB.esc(fill) : '&nbsp;'.repeat(12)}</span>`);

  // Fresh facts first: remember which ids this device has already played.
  function drawFacts(n) {
    const all = factsFor(), key = 'gap:used:' + PB.lang;
    let used = PB.store.get(key, []);
    let fresh = all.filter((f) => !used.includes(f.id));
    if (fresh.length < n) { used = []; fresh = all; }
    const out = PB.shuffle(fresh).slice(0, n);
    PB.store.set(key, used.concat(out.map((f) => f.id)));
    return out;
  }

  function start() {
    const saved = PB.store.get(SAVE, null);
    if (saved && saved.lang === PB.lang) {
      PB.render(`${PB.top(NAME())}
        <div class="play"><div class="huge">🕳️</div><h2>${L('Máte rozehranou hru', 'You have a game in progress')}</h2>
        <p class="muted">${L('Kolo', 'Round')} ${saved.round + 1}/${saved.facts.length}</p></div>
        <div class="stack"><button class="btn" data-c>${L('Pokračovat', 'Continue')}</button><button class="btn secondary" data-n>${L('Nová hra', 'New game')}</button></div>`,
      (root) => {
        PB.bindTop(root);
        PB.on(root, '[data-c]', () => { G = saved; PB.keepAwake(); fact(); });
        PB.on(root, '[data-n]', () => { PB.store.del(SAVE); setup(); });
      });
    } else setup();
  }

  function setup() {
    const { s, save: saveS } = PB.settings('gap', defaults);
    const avail = factsFor().length;
    const draw = () => PB.render(`
      ${PB.top(NAME())}
      <div class="box rules">${L(
        'Ukážu <b>skutečný fakt</b>, ve kterém chybí slovo. Každý si na papír vymyslí <b>věrohodnou nebo vtipnou lež</b> a pak ji potají napíše do mobilu. Mobil pak leží na stole, odpovědi se zamíchají a každý přetáhne své jméno na tu, kterou považuje za pravdu. Body za pravdu i za každého, koho tvoje lež napálí.',
        'I show a <b>true fact</b> with one word missing. Everyone makes up a <b>believable or funny fake</b> on paper, then types it into the phone in secret. Then the phone lies on the table, the answers get shuffled, and everyone drags their name onto the one they think is true. Points for finding the truth, and for everyone your fake fools.')}</div>
      <h3>${L('Hráči, v pořadí jak sedíte', 'Players, in seating order')} (${s.players.length})</h3>
      ${PB.ui.names('players', s.players, L('Hráč', 'Player'))}
      <h3>${L('Nastavení', 'Settings')}</h3>
      <div class="stack">
        ${PB.ui.stepper('rounds', L('Počet kol', 'Rounds'), s.rounds)}
        ${PB.ui.stepper('think', L('Čas na vymýšlení', 'Thinking time'), s.think, ' s')}
        ${PB.ui.toggle('stars', L('Hlasovat i o nejvtipnější', 'Also vote for the funniest'), s.stars, L('Hvězda = bod navíc, od 3 hráčů', 'A star = extra point, 3+ players'))}
      </div>
      <p class="muted small">${L('Faktů v balíčku: ', 'Facts in the deck: ')}${avail}</p>
      <div class="spacer"></div>
      <button class="btn big" data-go>${L('Začít', 'Start')}</button>
    `, (root) => {
      PB.bindTop(root, () => { saveS(); PB.home(); });
      PB.ui.bindNames(root, 'players', s, draw, { min: 2, max: 12 });
      PB.ui.bindStepper(root, 'rounds', s, { min: 3, max: 20 });
      PB.ui.bindStepper(root, 'think', s, { min: 0, max: 180, step: 15, unit: ' s' });
      PB.ui.bindToggle(root, 'stars', s);
      PB.on(root, '[data-go]', () => {
        if (s.players.length < 2) return PB.toast(L('Potřebujete aspoň 2 hráče.', 'You need at least 2 players.'));
        if (!avail) return PB.toast(L('V tomhle jazyce zatím nejsou fakty.', 'No facts in this language yet.'));
        saveS();
        G = { lang: PB.lang, players: s.players.slice(), think: s.think, stars: s.stars,
          facts: drawFacts(Math.min(s.rounds, avail)), round: 0, scores: s.players.map(() => 0) };
        save();
        PB.keepAwake();
        fact();
      });
    });
    draw();
  }

  // Pause menu shared by every play screen.
  function pause(onResume) {
    PB.menu(L('Pauza', 'Paused'), [
      { label: L('Pokračovat', 'Continue'), fn: onResume },
      { label: L('Přeskočit tento fakt', 'Skip this fact'), cls: 'secondary', fn: () => nextRound(false) },
      { label: L('Skóre', 'Scores'), cls: 'secondary', fn: () => scores(onResume) },
      { label: L('Ukončit hru', 'End game'), cls: 'secondary', fn: () => final() },
      { label: L('Odejít do menu', 'Quit to menu'), cls: 'bad', fn: () => { PB.stopAll(); PB.home(); } },
    ]);
  }
  const topbar = (extra) => `<div class="top">${PB.pauseBtn()}<div class="title">${NAME()}</div><span class="pill">${G.round + 1}/${G.facts.length}</span>${extra || ''}</div>`;

  // 1. The fact, read out loud. Everyone thinks and writes on paper.
  function fact() {
    PB.stopAll();
    const f = G.facts[G.round];
    G.answers = {}; G.votes = {}; G.starsGiven = {};
    let t = null;
    PB.render(`${topbar()}
      <div class="play">
        <p class="muted">${L('Přečtěte nahlas. Doplňte prázdné místo.', 'Read it out loud. Fill the gap.')}</p>
        <div class="gp-fact">${blank(f.q)}</div>
        ${G.think ? `<div class="timer" data-t></div><div class="bar"><i data-bar style="width:100%"></i></div>
        <p class="muted small">${L('Vymyslete si lež na papír, ať pak psaní do mobilu trvá chvilku.', 'Write your fake on paper first, so typing it in later takes seconds.')}</p>` : ''}
      </div>
      <button class="btn big" data-go>${L('Máme to, psát do mobilu', 'Got it, start typing')}</button>`,
    (root) => {
      PB.on(root, '[data-pause]', () => { t && t.pause(); pause(() => (t ? t.resume() : null)); });
      PB.on(root, '[data-go]', () => { t && t.stop(); write(0); });
      if (G.think) {
        const el = PB.$('[data-t]', root), bar = PB.$('[data-bar]', root);
        t = PB.timer(G.think, (left) => {
          const s = Math.ceil(left);
          el.textContent = s; el.classList.toggle('low', s <= 10);
          bar.style.width = (100 * left / G.think) + '%';
        }, () => { PB.sfx.end(); PB.vibrate(300); });
      }
    });
  }

  // 2. The phone goes around: each player types their fake in private.
  function write(i) {
    if (i >= G.players.length) return vote();
    PB.pass({ title: NAME(), name: pname(i), sub: `${i + 1} / ${G.players.length}`, onBack: () => final(),
      button: L('Jsem to já, psát', "It's me, let me type"), onReady: () => input(i) });
  }
  function input(i) {
    const f = G.facts[G.round];
    PB.render(`${topbar()}
      <div class="play">
        <div class="gp-fact small">${blank(f.q)}</div>
        <input type="text" data-a maxlength="40" placeholder="${L('Tvoje lež', 'Your fake')}" value="${PB.esc(G.answers[i] || '')}" autocomplete="off" autocapitalize="off" spellcheck="false">
        <p class="muted small">${L('Krátce, pár slov. Nikdo se nedívá.', 'Short, a few words. Nobody is looking.')}</p>
      </div>
      <button class="btn big" data-ok>${L('Uložit a schovat', 'Save and hide')}</button>`,
    (root) => {
      const inp = PB.$('[data-a]', root);
      setTimeout(() => inp.focus(), 50);
      PB.on(root, '[data-pause]', () => pause(() => input(i)));
      const ok = () => {
        const v = inp.value.trim().replace(/\s+/g, ' ');
        if (!v) return PB.toast(L('Napiš aspoň něco.', 'Write something.'));
        if (norm(v) === norm(f.a)) {
          inp.value = '';
          PB.sfx.good();
          return PB.toast(L('To je pravda! Pssst. Napiš jinou, falešnou odpověď.', "That's the truth! Shh. Write a different, fake answer."));
        }
        G.answers[i] = v;
        write(i + 1);
      };
      PB.on(root, '[data-ok]', ok);
      inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') ok(); });
    });
  }

  // Build the shuffled options once per round: the truth, the fakes (same fakes merged), maybe a house lie.
  function options() {
    if (G.opts) return G.opts;
    const f = G.facts[G.round], byKey = new Map();
    const add = (text, author) => {
      const k = norm(text);
      if (!byKey.has(k)) byKey.set(k, { text, authors: [] });
      if (author != null) byKey.get(k).authors.push(author);
    };
    add(f.a, 'truth');
    Object.keys(G.answers).forEach((i) => add(G.answers[i], +i));
    // With few players, add our own lie so there is something to choose from.
    if (G.players.length <= 5 && f.lie) add(f.lie, 'house');
    G.opts = PB.shuffle([...byKey.values()]);
    return G.opts;
  }
  const isTruth = (o) => o.authors.includes('truth');

  // 3. Phone on the table: drag your name onto the answer you believe.
  function vote() {
    options();
    const f = G.facts[G.round];
    board({
      title: L('Která odpověď je pravda?', 'Which answer is true?'),
      fact: blank(f.q),
      opts: G.opts.map((o, k) => ({ k, text: o.text })),
      chip: (i) => pname(i),
      allowed: (i, k) => !G.opts[k].authors.includes(i),
      denied: L('Pro svou vlastní nemůžeš', "You can't pick your own"),
      votes: G.votes,
      onDone: () => (G.stars && G.players.length >= 3 && G.opts.some((o) => o.authors.some((a) => typeof a === 'number')) ? starVote() : reveal()),
    });
  }
  function starVote() {
    const fakes = G.opts.map((o, k) => ({ o, k })).filter(({ o }) => o.authors.some((a) => typeof a === 'number'));
    board({
      title: L('⭐ Která lež je nejvtipnější?', '⭐ Which fake is the funniest?'),
      fact: '',
      opts: fakes.map(({ o, k }) => ({ k, text: o.text })),
      chip: (i) => '⭐ ' + pname(i),
      allowed: (i, k) => !G.opts[k].authors.includes(i),
      denied: L('Sám sobě hvězdu nedáš', "You can't star your own"),
      votes: G.starsGiven,
      optional: true,
      onDone: reveal,
    });
  }

  // Shared voting board. The phone lies flat, each name sits on the edge facing its seat.
  function board(cfg) {
    PB.stopAll();
    const n = G.players.length;
    PB.render(`<div class="gp-board" data-board>
      <div class="gp-mid">
        <div class="gp-head">${PB.pauseBtn()}<div class="gp-title">${cfg.title}</div></div>
        ${cfg.fact ? `<div class="gp-fact tiny">${cfg.fact}</div>` : ''}
        <div class="gp-opts" data-opts>
          ${cfg.opts.map((o, j) => `<div class="gp-opt" data-k="${o.k}"><b>${j + 1}</b><div><span>${PB.esc(o.text)}</span><i class="gp-slots"></i></div></div>`).join('')}
        </div>
        <div class="row gp-ctrl"><button class="btn secondary" data-count>3, 2, 1</button><button class="btn" data-done>${L('Hotovo', 'Done')}</button></div>
      </div>
      ${G.players.map((p, i) => `<div class="gp-chip" data-p="${i}">${PB.esc(cfg.chip(i).slice(0, 14))}</div>`).join('')}
    </div>`, (root) => {
      const b = PB.$('[data-board]', root);
      const chips = PB.$$('.gp-chip', b);
      // Messages go in the middle: a toast at the bottom would cover the bottom seat's chip.
      const say = (msg) => {
        const m = document.createElement('div');
        m.className = 'gp-msg'; m.textContent = msg;
        b.appendChild(m); setTimeout(() => m.remove(), 1800);
      };
      const seat = (i) => {
        // Walk the edge clockwise from bottom centre: bottom, left, top, right.
        const W = b.clientWidth, H = b.clientHeight, m = 26;
        const w = W - 2 * m, h = H - 2 * m, per = 2 * (w + h);
        let d = ((i / n) * per + w / 2) % per; // distance from the bottom-right corner going left
        if (d < w) return { x: W - m - d, y: H - m, r: 0 };
        d -= w; if (d < h) return { x: m, y: H - m - d, r: 90 };
        d -= h; if (d < w) return { x: m + d, y: m, r: 180 };
        d -= w; return { x: W - m, y: m + d, r: -90 };
      };
      const layout = () => {
        const bb = b.getBoundingClientRect();
        const groups = {};
        Object.keys(cfg.votes).forEach((i) => (groups[cfg.votes[i]] = groups[cfg.votes[i]] || []).push(+i));
        chips.forEach((c) => {
          if (c.classList.contains('drag')) return;
          const i = +c.dataset.p, k = cfg.votes[i];
          if (k == null) {
            const s = seat(i);
            c.classList.remove('in');
            c.style.left = s.x + 'px'; c.style.top = s.y + 'px'; c.style.transform = `translate(-50%,-50%) rotate(${s.r}deg)`;
          } else {
            const slot = PB.$(`[data-k="${k}"] .gp-slots`, b).getBoundingClientRect();
            const g = groups[k], idx = g.indexOf(i);
            const step = Math.min(64, (slot.width - 40) / Math.max(1, g.length - 1 || 1));
            c.classList.add('in');
            c.style.left = (slot.left - bb.left + 20 + idx * step) + 'px';
            c.style.top = (slot.top - bb.top + slot.height / 2) + 'px';
            c.style.transform = 'translate(-50%,-50%)';
          }
        });
        PB.$('[data-done]', b).classList.toggle('secondary', !cfg.optional && Object.keys(cfg.votes).length < n);
      };
      // Multitouch drag: each finger moves its own chip.
      chips.forEach((c) => {
        const i = +c.dataset.p;
        c.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          c.setPointerCapture(e.pointerId);
          c.classList.add('drag');
          const bb = b.getBoundingClientRect();
          const move = (ev) => { c.style.left = (ev.clientX - bb.left) + 'px'; c.style.top = (ev.clientY - bb.top - 24) + 'px'; };
          move(e);
          const up = (ev) => {
            c.removeEventListener('pointermove', move);
            c.removeEventListener('pointerup', up);
            c.removeEventListener('pointercancel', up);
            c.classList.remove('drag');
            const hit = ev.type === 'pointerup' && document.elementsFromPoint(ev.clientX, ev.clientY - 24).find((el) => el.dataset && el.dataset.k != null);
            if (hit) {
              const k = +hit.dataset.k;
              if (cfg.allowed(i, k)) { cfg.votes[i] = k; PB.sfx.tick(); }
              else { say(cfg.denied); PB.sfx.skip(); }
            } else delete cfg.votes[i];
            layout();
          };
          c.addEventListener('pointermove', move);
          c.addEventListener('pointerup', up);
          c.addEventListener('pointercancel', up);
        });
      });
      const onResize = () => layout();
      window.addEventListener('resize', onResize);
      PB.track(() => window.removeEventListener('resize', onResize));
      layout();
      PB.on(b, '[data-pause]', () => pause(layout));
      PB.on(b, '[data-count]', () => countdown(b));
      PB.on(b, '[data-done]', () => {
        const missing = n - Object.keys(cfg.votes).length;
        if (missing > 0 && !cfg.optional) PB.ask(L(`Ještě nehlasovali ${missing}. Přesto pokračovat?`, `${missing} still haven't voted. Continue anyway?`), cfg.onDone);
        else cfg.onDone();
      });
    });
  }

  // "3, 2, 1, point!" so nobody copies anyone.
  function countdown(b) {
    const o = document.createElement('div');
    o.className = 'gp-count';
    b.appendChild(o);
    let k = 3;
    const step = () => {
      if (!o.isConnected) return;
      if (k > 0) { o.textContent = k; PB.sfx.tock(); k--; setTimeout(step, 700); }
      else { o.textContent = L('Ukažte!', 'Point!'); PB.sfx.good(); PB.vibrate(150); setTimeout(() => o.remove(), 900); }
    };
    step();
  }

  // 4. Reveal one answer at a time: fakes first, the truth last.
  function reveal() {
    PB.stopAll();
    const f = G.facts[G.round], n = G.players.length;
    const voters = (k) => Object.keys(G.votes).filter((i) => G.votes[i] === k).map(Number);
    const starCount = (k) => Object.keys(G.starsGiven).filter((i) => G.starsGiven[i] === k).length;
    const delta = G.players.map(() => 0);
    G.opts.forEach((o, k) => {
      const v = voters(k);
      if (isTruth(o)) v.forEach((i) => (delta[i] += 2));
      o.authors.forEach((a) => { if (typeof a === 'number') delta[a] += v.length + starCount(k); });
    });
    const order = G.opts.map((o, k) => k).filter((k) => !isTruth(G.opts[k]))
      .sort((a, b) => voters(a).length - voters(b).length)
      .concat(G.opts.findIndex(isTruth));
    const who = (list) => list.map((i) => PB.esc(pname(i))).join(', ');
    const card = (k) => {
      const o = G.opts[k], v = voters(k), st = starCount(k);
      const by = isTruth(o) ? L('PRAVDA', 'TRUE')
        : o.authors.map((a) => (a === 'house' ? L('lež od Partyboxu', "Partybox's own lie") : PB.esc(pname(a)))).join(', ');
      return `<div class="gp-rev ${isTruth(o) ? 'truth' : ''}">
        <div class="gp-rev-a">${PB.esc(o.text)}${st ? ` <span class="pill">⭐ ${st}</span>` : ''}</div>
        <div class="small"><b>${by}</b></div>
        <div class="muted small">${v.length ? (isTruth(o) ? L('Uhodli: ', 'Found it: ') : L('Napálil/a: ', 'Fooled: ')) + who(v) : (isTruth(o) ? L('Nikdo neuhodl!', 'Nobody found it!') : L('Nikoho nenapálil/a', 'Fooled nobody'))}</div>
      </div>`;
    };
    let shown = 0;
    const draw = () => {
      const done = shown >= order.length;
      PB.render(`${topbar()}
        <div class="gp-fact small">${blank(f.q, done ? f.a : '', done ? 'filled' : '')}</div>
        ${done ? `<div class="box small">${PB.esc(f.why || '')}${f.src ? `<div class="muted small">${L('Zdroj: ', 'Source: ')}${PB.esc(f.src)}</div>` : ''}${f.ok === false ? `<div class="muted small">⚠️ ${L('Fakt zatím není ověřený ze zdrojů.', 'This fact is not verified against sources yet.')}</div>` : ''}</div>` : ''}
        <div class="stack gp-revs">${order.slice(0, shown).reverse().map(card).join('')}</div>
        <div class="grow"></div>
        <button class="btn big" data-next>${done ? L('Body za kolo', 'Round scores') : shown === order.length - 1 ? L('Odhalit pravdu', 'Reveal the truth') : L('Další odpověď', 'Next answer')}</button>`,
      (root) => {
        PB.on(root, '[data-pause]', () => pause(draw));
        PB.on(root, '[data-next]', () => {
          if (done) { delta.forEach((d, i) => (G.scores[i] += d)); return roundScores(delta); }
          shown++;
          if (shown === order.length) { PB.sfx.good(); PB.vibrate(120); } else PB.sfx.tick();
          draw();
        });
      });
    };
    draw();
  }

  function standings(delta) {
    const rank = G.players.map((p, i) => i).sort((a, b) => G.scores[b] - G.scores[a]);
    const top = G.scores[rank[0]];
    return `<div class="stack">${rank.map((i) => `<div class="score ${G.scores[i] === top && top > 0 ? 'lead' : ''}"><span>${PB.esc(pname(i))}</span><span>${delta && delta[i] ? `<span class="muted small">+${delta[i]}</span> ` : ''}<b>${G.scores[i]}</b></span></div>`).join('')}</div>`;
  }
  function roundScores(delta) {
    G.round++; G.opts = null; save();
    PB.render(`${PB.top(L('Skóre', 'Scores'), { close: true })}
      ${standings(delta)}
      <p class="muted small">${L('Pravda +2, každý napálený +1, hvězda +1.', 'Truth +2, each person fooled +1, star +1.')}</p>
      <div class="grow"></div>
      <button class="btn big" data-next>${G.round >= G.facts.length ? L('Výsledky', 'Results') : L('Další fakt', 'Next fact')}</button>`,
    (root) => {
      PB.bindTop(root, () => final(), true);
      PB.on(root, '[data-next]', () => (G.round >= G.facts.length ? final() : fact()));
    });
  }
  function scores(back) {
    PB.render(`${PB.top(L('Skóre', 'Scores'))}${standings()}<div class="grow"></div><button class="btn big" data-b>${L('Zpět do hry', 'Back to the game')}</button>`,
      (root) => { PB.bindTop(root, back); PB.on(root, '[data-b]', back); });
  }
  function nextRound(scored) {
    G.round++; G.opts = null;
    if (G.round >= G.facts.length) return final();
    save(); fact();
  }

  function final() {
    PB.stopAll();
    PB.store.del(SAVE);
    PB.keepAwake(false);
    const best = Math.max(...G.scores);
    const winners = G.players.map((p, i) => i).filter((i) => G.scores[i] === best);
    PB.render(`${PB.top(L('Výsledky', 'Results'))}
      <div class="play" style="flex:0"><div class="huge">🏆</div><div class="who">${winners.map((i) => PB.esc(pname(i))).join(', ')}</div></div>
      ${standings()}
      <div class="grow"></div>
      <div class="stack"><button class="btn" data-again>${L('Hrát znovu', 'Play again')}</button><button class="btn secondary" data-home>${L('Menu', 'Menu')}</button></div>`,
    (root) => {
      PB.bindTop(root);
      PB.on(root, '[data-again]', setup);
      PB.on(root, '[data-home]', PB.home);
    });
  }

  PB.register({ id: 'gap', emoji: '🕳️', name: NAME,
    tagline: () => L('Skutečný fakt s dírou. Vymysli lež, najdi pravdu.', 'A true fact with a hole. Make up a fake, find the truth.'), start });
})();
