// Vabank / Bank or Bust: one question, ten answers, some true. The phone lies on the table and
// everyone drags their name onto an answer at once. True = +1 to your pot, false = bust, pot gone.
// Bank any time to keep the pot. Push your luck as the true answers run out.
(function () {
  const L = (a, b) => PB.L(a, b);
  const SAVE = 'vabank:save';
  const NAME = () => L('Vabank', 'Bank or Bust');
  const BANK = -1; // the bank tile's key
  const defaults = { know: null, players: ['', '', '', ''], rounds: 6 };
  let G = null; // running game

  const pname = (i) => (G.players[i] || '').trim() || L('Hráč ', 'Player ') + (i + 1);
  const save = () => PB.store.set(SAVE, G);
  const allCards = () => (window.PB_VB || []).filter((d) => d.lang === PB.lang).flatMap((d) => d.cards);
  const cardTags = () => PB.knowSort(allCards().map((c) => c.knowledge || 'worldwide'));
  const cardsFor = (know) => allCards().filter((c) => (!know || know.includes(c.knowledge || 'worldwide')) && !PB.hidden.has('v', c.id));
  const hiddenCards = () => allCards().filter((c) => PB.hidden.has('v', c.id)).map((c) => ({ key: c.id, text: c.q }));

  // Fresh cards first: remember which ids this device has already played.
  function drawCards(n, know) {
    const all = cardsFor(know), key = 'vabank:used:' + PB.lang;
    let used = PB.store.get(key, []);
    let fresh = all.filter((c) => !used.includes(c.id));
    if (fresh.length < n) { used = []; fresh = all; }
    const out = PB.shuffle(fresh).slice(0, n);
    PB.store.set(key, used.concat(out.map((c) => c.id)));
    return out;
  }

  function start() {
    const saved = PB.store.get(SAVE, null);
    if (saved && saved.lang === PB.lang) {
      PB.render(`${PB.top(NAME())}
        <div class="play">${PB.art('vabank')}<h2>${L('Máte rozehranou hru', 'You have a game in progress')}</h2>
        <p class="muted">${L('Karta', 'Card')} ${saved.round + 1}/${saved.cards.length}</p></div>
        <div class="stack"><button class="btn" data-c>${L('Pokračovat', 'Continue')}</button><button class="btn secondary" data-n>${L('Nová hra', 'New game')}</button></div>`,
      (root) => {
        PB.bindTop(root);
        PB.on(root, '[data-c]', () => { G = saved; PB.keepAwake(); board(); });
        PB.on(root, '[data-n]', () => { PB.store.del(SAVE); setup(); });
      });
    } else setup();
  }

  function setup() {
    const { s, save: saveS } = PB.settings('vabank', defaults);
    const tags = cardTags();
    PB.knowFix(s, tags);
    let avail = cardsFor(s.know).length;
    const draw = () => PB.render(`
      ${PB.top(NAME())}
      <div class="box rules">${L(
        'Otázka a deset odpovědí, některé platí. Mobil leží na stole a všichni naráz přetáhnou své jméno na odpověď. <b>Pravda = bod do banku na kartu, chyba = vypadáváš a body z karty jsou pryč.</b> Kdykoli můžeš místo tipu přetáhnout jméno na <b>Beru</b> a body si nechat. Čím míň pravd zbývá, tím víc to pálí.',
        'A question and ten answers, some of them true. The phone lies on the table and everyone drags their name onto an answer at once. <b>True = a point in your pot for this card, false = you bust and lose the pot.</b> Any time, instead of guessing, drag your name to <b>Bank</b> and keep your points. The fewer trues are left, the hotter it gets.')}</div>
      <h3>${L('Hráči, v pořadí jak sedíte', 'Players, in seating order')} (${s.players.length})</h3>
      ${PB.ui.names('players', s.players, L('Hráč', 'Player'))}
      ${PB.ui.knowPicker(s, tags)}
      <p class="muted small">${L('Karet v balíčku: ', 'Cards in the deck: ')}<b data-avail>${avail}</b></p>
      ${PB.ui.hiddenBar()}
      <h3>${L('Nastavení', 'Settings')}</h3>
      <div class="stack">
        ${PB.ui.stepper('rounds', L('Počet karet', 'Cards'), s.rounds)}
      </div>
      <div class="spacer"></div>
      <button class="btn big" data-go>${L('Začít', 'Start')}</button>
    `, (root) => {
      PB.bindTop(root, () => { saveS(); PB.home(); });
      PB.ui.bindNames(root, 'players', s, draw, { min: 1, max: 12 });
      PB.ui.bindStepper(root, 'rounds', s, { min: 2, max: 20 });
      const refresh = () => { avail = cardsFor(s.know).length; PB.$('[data-avail]', root).textContent = avail; PB.ui.updateHidden(root); };
      PB.ui.bindKnow(root, s, refresh);
      PB.ui.bindHiddenBar(root, hiddenCards, (keys) => PB.hidden.removeMany('v', keys), draw);
      refresh();
      PB.on(root, '[data-go]', () => {
        if (!s.players.length) return PB.toast(L('Potřebujete aspoň 1 hráče.', 'You need at least 1 player.'));
        if (!avail) return PB.toast(L('Pro tenhle výběr nejsou karty.', 'No cards for this selection.'));
        saveS();
        G = { lang: PB.lang, players: s.players.slice(), cards: drawCards(Math.min(s.rounds, avail), s.know),
          round: 0, scores: s.players.map(() => 0) };
        newCard();
        PB.keepAwake();
        board();
      });
    });
    draw();
  }

  // Per-card state: which tiles are open, each player's pot and status ('in', 'bank', 'bust').
  function newCard() {
    const c = G.cards[G.round];
    G.order = PB.shuffle(c.items.map((it, k) => k));
    G.open = []; G.pot = G.players.map(() => 0); G.st = G.players.map(() => 'in');
    G.picks = {}; G.turn = 1; G.last = {};
    save();
  }
  const card = () => G.cards[G.round];
  const isTrue = (k) => !!card().items[k][1];
  const truesLeft = () => card().items.filter((it, k) => it[1] && !G.open.includes(k)).length;
  const active = () => G.players.map((p, i) => i).filter((i) => G.st[i] === 'in');

  function pause(onResume) {
    PB.menu(L('Pauza', 'Paused'), [
      { label: L('Pokračovat', 'Continue'), fn: onResume },
      { label: L('Přeskočit kartu', 'Skip this card'), cls: 'secondary', fn: () => nextCard() },
      { label: L('Skóre', 'Scores'), cls: 'secondary', fn: () => scores(onResume) },
      { label: L('Ukončit hru', 'End game'), cls: 'secondary', fn: () => final() },
      { label: L('Odejít do menu', 'Quit to menu'), cls: 'bad', fn: () => { PB.stopAll(); PB.home(); } },
    ]);
  }

  // The table: ten tiles, a bank tile, a name chip at each seat.
  function board() {
    PB.stopAll();
    const c = card(), n = G.players.length;
    const chipText = (i) => {
      const nm = PB.esc(pname(i).slice(0, 12));
      if (G.st[i] === 'bust') return `${nm} <s>0</s>`;
      return `${nm} <b>${G.pot[i]}</b>`;
    };
    const lastMark = (k) => {
      const who = Object.keys(G.last).filter((i) => G.last[i] === k).map((i) => PB.esc(pname(+i).slice(0, 10)));
      return who.length ? `<em>${who.join(', ')}</em>` : '';
    };
    const tile = (k, j) => {
      const open = G.open.includes(k), cls = open ? (isTrue(k) ? 'open yes' : 'open no') : '';
      return `<div class="vb-tile ${cls}" data-k="${k}"><span>${PB.esc(c.items[k][0])}</span>${open ? lastMark(k) : ''}<i class="gp-slots"></i></div>`;
    };
    PB.render(`<div class="gp-board vb-board" data-board>
      <div class="gp-mid">
        <div class="gp-head">${PB.pauseBtn()}<div class="gp-title">${PB.esc(c.q)}</div></div>
        <div class="vb-info"><span class="pill">${L('Platí', 'True')}: ${c.items.filter((it) => it[1]).length}/10</span><span class="pill">${L('Zbývá', 'Left')}: ${truesLeft()}</span><span class="pill">${G.round + 1}/${G.cards.length}</span></div>
        <div class="vb-tiles" data-tiles>${G.order.map(tile).join('')}</div>
        <div class="vb-tile vb-bank" data-k="${BANK}"><span>${PB.ico('check')} ${L('Beru body', 'Bank')}</span><i class="gp-slots"></i></div>
        <div class="row gp-ctrl"><button class="btn secondary" data-count>3, 2, 1</button><button class="btn" data-done>${L('Odhalit', 'Reveal')}</button></div>
      </div>
      ${G.players.map((p, i) => `<div class="gp-chip ${G.st[i] !== 'in' ? 'out ' + G.st[i] : ''}" data-p="${i}">${chipText(i)}</div>`).join('')}
    </div>`, (root) => {
      const b = PB.$('[data-board]', root);
      const chips = PB.$$('.gp-chip', b);
      const say = (msg) => {
        const m = document.createElement('div');
        m.className = 'gp-msg'; m.textContent = msg;
        b.appendChild(m); setTimeout(() => m.remove(), 1800);
      };
      const seat = (i) => {
        const W = b.clientWidth, H = b.clientHeight, m = 26;
        const w = W - 2 * m, h = H - 2 * m, per = 2 * (w + h);
        let d = ((i / n) * per + w / 2) % per;
        if (d < w) return { x: W - m - d, y: H - m, r: 0 };
        d -= w; if (d < h) return { x: m, y: H - m - d, r: 90 };
        d -= h; if (d < w) return { x: m + d, y: m, r: 180 };
        d -= w; return { x: W - m, y: m + d, r: -90 };
      };
      const layout = () => {
        const bb = b.getBoundingClientRect();
        const groups = {};
        Object.keys(G.picks).forEach((i) => (groups[G.picks[i]] = groups[G.picks[i]] || []).push(+i));
        chips.forEach((ch) => {
          if (ch.classList.contains('drag')) return;
          const i = +ch.dataset.p, k = G.picks[i];
          if (k == null) {
            const s = seat(i);
            ch.classList.remove('in');
            ch.style.left = s.x + 'px'; ch.style.top = s.y + 'px'; ch.style.transform = `translate(-50%,-50%) rotate(${s.r}deg)`;
          } else {
            const slot = PB.$(`[data-k="${k}"] .gp-slots`, b).getBoundingClientRect();
            const g = groups[k], idx = g.indexOf(i);
            // Chips line up from the slot's left edge, overlapping when the slot is crowded.
            ch.classList.add('in');
            const cw = ch.offsetWidth, step = Math.min(cw + 4, (slot.width - cw) / Math.max(1, g.length - 1));
            ch.style.left = (slot.left - bb.left + idx * step) + 'px';
            ch.style.top = (slot.top - bb.top + slot.height / 2) + 'px';
            ch.style.transform = 'translate(0,-50%)';
          }
        });
        const act = active();
        PB.$('[data-done]', b).classList.toggle('secondary', act.some((i) => G.picks[i] == null));
      };
      chips.forEach((ch) => {
        const i = +ch.dataset.p;
        if (G.st[i] !== 'in') return;
        ch.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          ch.setPointerCapture(e.pointerId);
          ch.classList.add('drag');
          const bb = b.getBoundingClientRect();
          const move = (ev) => { ch.style.left = (ev.clientX - bb.left) + 'px'; ch.style.top = (ev.clientY - bb.top - 24) + 'px'; };
          move(e);
          const up = (ev) => {
            ch.removeEventListener('pointermove', move);
            ch.removeEventListener('pointerup', up);
            ch.removeEventListener('pointercancel', up);
            ch.classList.remove('drag');
            const hit = ev.type === 'pointerup' && document.elementsFromPoint(ev.clientX, ev.clientY - 24).find((el) => el.dataset && el.dataset.k != null);
            if (hit) {
              const k = +hit.dataset.k;
              if (G.open.includes(k)) { say(L('Tahle už je odkrytá', 'That one is already open')); PB.sfx.skip(); }
              else { G.picks[i] = k; PB.sfx.tick(); }
            } else delete G.picks[i];
            layout();
          };
          ch.addEventListener('pointermove', move);
          ch.addEventListener('pointerup', up);
          ch.addEventListener('pointercancel', up);
        });
      });
      const onResize = () => layout();
      window.addEventListener('resize', onResize);
      PB.track(() => window.removeEventListener('resize', onResize));
      layout();
      PB.on(b, '[data-pause]', () => pause(board));
      PB.on(b, '[data-count]', () => countdown(b));
      PB.on(b, '[data-done]', () => {
        const missing = active().filter((i) => G.picks[i] == null).length;
        if (!Object.keys(G.picks).length) return say(L('Nejdřív přetáhněte jména na odpovědi', 'Drag your names onto answers first'));
        if (missing > 0) PB.ask(L(`${missing} ještě nevybrali a tohle kolo vynechají. Odhalit?`, `${missing} haven't picked and will sit this turn out. Reveal?`), () => resolve(b));
        else resolve(b);
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
      else { o.textContent = L('Teď!', 'Go!'); PB.sfx.good(); PB.vibrate(150); setTimeout(() => o.remove(), 900); }
    };
    step();
  }

  // Apply the picks: bank, then flip every picked tile.
  function resolve(b) {
    const hits = [], busts = [];
    Object.keys(G.picks).forEach((s) => {
      const i = +s, k = G.picks[i];
      if (k === BANK) { G.st[i] = 'bank'; G.scores[i] += G.pot[i]; return; }
      if (isTrue(k)) { G.pot[i]++; hits.push(i); } else { G.st[i] = 'bust'; G.pot[i] = 0; busts.push(i); }
      if (!G.open.includes(k)) G.open.push(k);
    });
    G.last = Object.assign({}, G.picks);
    Object.keys(G.last).forEach((i) => { if (G.last[i] === BANK) delete G.last[i]; });
    G.picks = {}; G.turn++;
    // Nothing left to win: everyone still in banks automatically.
    const over = !truesLeft() || !active().length;
    if (over) active().forEach((i) => { G.st[i] = 'bank'; G.scores[i] += G.pot[i]; });
    save();
    if (busts.length && !hits.length) { PB.sfx.end(); PB.vibrate([80, 60, 80]); PB.fx.shake(); }
    else if (hits.length) { PB.sfx.good(); PB.vibrate(60); }
    else PB.sfx.tick();
    if (over) return setTimeout(cardEnd, hits.length || busts.length ? 900 : 0);
    board();
    PB.$$('.vb-tile.open', document).forEach((t) => {
      if (Object.values(G.last).includes(+t.dataset.k) && t.classList.contains('yes')) PB.fx.burstAt(t, 14);
    });
  }

  // All answers open, the explanation, who banked what.
  function cardEnd() {
    PB.stopAll();
    const c = card();
    const ord = c.items.map((it, k) => k).sort((a, b) => (c.items[b][1] - c.items[a][1]));
    PB.render(`${PB.top(c.q, { close: true })}
      <div class="vb-list">${ord.map((k) => `<div class="vb-row ${c.items[k][1] ? 'yes' : 'no'}">${PB.ico(c.items[k][1] ? 'check' : 'close')}<span>${PB.esc(c.items[k][0])}</span></div>`).join('')}</div>
      ${c.why ? `<div class="box small">${PB.esc(c.why)}${c.src ? `<div class="muted small">${L('Zdroj: ', 'Source: ')}${PB.esc(c.src)}</div>` : ''}</div>` : ''}
      <button class="btn secondary small" data-disc style="align-self:flex-start">${L('Vyřadit kartu', 'Remove this card')}</button>
      <h3>${L('Z této karty', 'From this card')}</h3>
      <div class="stack">${G.players.map((p, i) => `<div class="score"><span>${PB.esc(pname(i))}</span><span>${G.st[i] === 'bust' ? `<span class="muted small">${L('vypadl/a', 'bust')}</span> ` : ''}<b>+${G.st[i] === 'bust' ? 0 : G.pot[i]}</b></span></div>`).join('')}</div>
      <div class="grow"></div>
      <button class="btn big" data-next>${G.round + 1 >= G.cards.length ? L('Výsledky', 'Results') : L('Celkové skóre', 'Scores')}</button>`,
    (root) => {
      PB.bindTop(root, () => final(), true);
      PB.on(root, '[data-disc]', (e, el) => {
        const label = () => { el.textContent = PB.hidden.has('v', c.id) ? L('Vrátit kartu', 'Bring this card back') : L('Vyřadit kartu', 'Remove this card'); };
        if (PB.hidden.has('v', c.id)) { PB.hidden.remove('v', c.id); label(); return; }
        PB.hidden.add('v', c.id); label(); PB.sfx.skip();
        PB.toast(L('Karta vyřazena.', 'Card removed.'), { action: L('Zpět', 'Undo'), onAction: () => { PB.hidden.remove('v', c.id); label(); } });
      });
      PB.on(root, '[data-next]', () => (G.round + 1 >= G.cards.length ? final() : roundScores()));
    });
  }

  function standings() {
    const rank = G.players.map((p, i) => i).sort((a, b) => G.scores[b] - G.scores[a]);
    const top = G.scores[rank[0]];
    return `<div class="stack">${rank.map((i) => `<div class="score ${G.scores[i] === top && top > 0 ? 'lead' : ''}"><span>${PB.esc(pname(i))}</span><b>${G.scores[i]}</b></div>`).join('')}</div>`;
  }
  function roundScores() {
    PB.render(`${PB.top(L('Skóre', 'Scores'), { close: true })}
      ${standings()}
      <div class="grow"></div>
      <button class="btn big" data-next>${L('Další karta', 'Next card')}</button>`,
    (root) => {
      PB.bindTop(root, () => final(), true);
      PB.on(root, '[data-next]', () => nextCard());
    });
  }
  function scores(back) {
    PB.render(`${PB.top(L('Skóre', 'Scores'))}${standings()}<div class="grow"></div><button class="btn big" data-b>${L('Zpět do hry', 'Back to the game')}</button>`,
      (root) => { PB.bindTop(root, back); PB.on(root, '[data-b]', back); });
  }
  function nextCard() {
    G.round++;
    if (G.round >= G.cards.length) return final();
    newCard(); board();
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
      if (best > 0) setTimeout(() => PB.fx.burstAt(PB.$('.who', root), 40), 200);
      PB.on(root, '[data-again]', setup);
      PB.on(root, '[data-home]', PB.home);
    });
  }

  PB.register({ id: 'vabank', icon: 'vabank', ink: ['#6b3df0', '#ffb300'], name: NAME,
    tagline: () => L('Deset odpovědí, některé platí. Tipuj, nebo ber body.', 'Ten answers, some true. Guess on, or bank your points.'), start });
})();
