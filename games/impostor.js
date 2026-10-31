// Impostor: everyone sees the secret word except the impostor(s). Talk, then vote.
(function () {
  const L = (a, b) => PB.L(a, b);
  const defaults = { decks: null, levels: [1, 2], know: null, players: ['', '', '', ''], impostors: 1, hint: true };
  const used = new Set();
  const pname = (s, i) => (s.players[i] || '').trim() || L('Hráč ', 'Player ') + (i + 1);

  function setup() {
    const { s, save } = PB.settings('impostor', defaults);
    const draw = () => PB.render(`
      ${PB.top('Impostor')}
      <div class="box rules">${L(
        'Mobil koluje a každý si potají přečte <b>tajné slovo</b>. Jen <b>impostor</b> ho nezná. Pak každý postupně řekne jedno slovo, které k tajnému slovu sedí. Impostor musí blafovat. Po jednom až dvou kolech hlasujete, kdo to je. Když ho odhalíte, má ještě šanci tajné slovo uhodnout.',
        'The phone goes around and everyone secretly reads the <b>secret word</b>, except the <b>impostor</b>. Then each player says one word related to it, and the impostor has to bluff. After one or two rounds, vote on who it is. If caught, the impostor gets one guess at the word.')}</div>
      <h3>${L('Hráči', 'Players')} (${s.players.length})</h3>
      ${PB.ui.names('players', s.players, L('Hráč', 'Player'))}
      ${PB.ui.deckPicker('impostor', s)}
      <h3>${L('Nastavení', 'Settings')}</h3>
      <div class="stack">
        ${PB.ui.stepper('impostors', L('Počet impostorů', 'Impostors'), s.impostors)}
        ${PB.ui.toggle('hint', L('Impostor vidí kategorii', 'Impostor sees the category'), s.hint, L('Snazší pro impostora', 'Easier for the impostor'))}
      </div>
      <div class="spacer"></div>
      <button class="btn big" data-go>${L('Rozdat role', 'Deal roles')}</button>
    `, (root) => {
      PB.bindTop(root, () => { save(); PB.home(); });
      PB.ui.bindNames(root, 'players', s, draw, { min: 3, max: 20 });
      PB.ui.bindDeckPicker(root, s, null, 'impostor', draw);
      PB.ui.bindStepper(root, 'impostors', s, { min: 1, max: 3 });
      PB.ui.bindToggle(root, 'hint', s);
      PB.on(root, '[data-go]', () => {
        if (s.players.length < 3) return PB.toast(L('Potřebujete aspoň 3 hráče.', 'You need at least 3 players.'));
        s.impostors = Math.min(s.impostors, Math.max(1, Math.floor((s.players.length - 1) / 2)));
        save();
        deal(s);
      });
    });
    draw();
  }

  function deal(s) {
    // Pick a deck first so the category hint matches the word.
    const decks = PB_DECKS.filter((d) => s.decks.includes(d.id)).map((d) => ({ d, words: PB.deckWords(d, s.levels, s.know) })).filter((x) => x.words.length);
    if (!decks.length) return PB.toast(L('Málo slov. Vyber víc balíčků nebo obtížností.', 'Not enough words. Pick more decks or levels.')) || setup();
    const pickD = PB.pick(decks), deck = pickD.d;
    const fresh = pickD.words.filter((w) => !used.has(w));
    const word = PB.pick(fresh.length ? fresh : pickD.words);
    used.add(word);
    const n = s.players.length;
    const imp = new Set(PB.shuffle([...Array(n).keys()]).slice(0, s.impostors));
    PB.keepAwake();
    const show = (i) => {
      if (i >= n) return discuss(s, word, deck, imp);
      PB.pass({ title: 'Impostor', name: pname(s, i), sub: `${i + 1} / ${n}`, onBack: setup,
        button: L('Jsem to já, ukaž', "It's me, show it"), onReady: () => reveal(i) });
    };
    const reveal = (i) => {
      const isImp = imp.has(i);
      PB.render(`
        ${PB.top(pname(s, i), { close: true })}
        <div class="play">
          <p class="muted">${L('Drž prst na kartě a dívej se jen ty.', 'Hold your finger on the card. Only you look.')}</p>
          <div class="reveal" data-r><span class="hold" data-hidden>${PB.art('hand', '')}${L('Podrž a koukni', 'Hold to look')}</span><div data-shown style="display:none">
            ${isImp
              ? `${PB.art('mask')}<div class="word">${L('Jsi IMPOSTOR', 'You are the IMPOSTOR')}</div>${s.hint ? `<p class="muted">${L('Kategorie', 'Category')}: ${PB.esc(deck.name)}</p>` : ''}`
              : `<p class="muted">${L('Tajné slovo', 'Secret word')}</p><div class="word">${PB.esc(word)}</div>`}
          </div></div>
        </div>
        <button class="btn big" data-next disabled>${L('Viděl/a jsem, schovat a dál', 'Seen it, hide and continue')}</button>
      `, (root) => {
        PB.bindTop(root, setup, true);
        const r = PB.$('[data-r]', root), next = PB.$('[data-next]', root);
        // Same sound and buzz for everyone: a different one would be heard and give the impostor away.
        const on = (e) => { e.preventDefault(); if (!r.classList.contains('shown')) { PB.sfx.flip(); PB.vibrate(15); } r.classList.add('shown'); PB.$('[data-hidden]', r).style.display = 'none'; PB.$('[data-shown]', r).style.display = ''; next.disabled = false; };
        const off = () => { r.classList.remove('shown'); PB.$('[data-hidden]', r).style.display = ''; PB.$('[data-shown]', r).style.display = 'none'; };
        r.addEventListener('pointerdown', on);
        ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => r.addEventListener(ev, off));
        r.addEventListener('contextmenu', (e) => e.preventDefault());
        next.addEventListener('click', () => { PB.sfx.whoosh(); show(i + 1); });
      });
    };
    show(0);
  }

  function discuss(s, word, deck, imp) {
    const first = PB.pick([...Array(s.players.length).keys()]);
    PB.render(`
      ${PB.top('Impostor', { close: true })}
      <div class="play">
        ${PB.art('talk')}
        <div class="muted">${L('Začíná', 'Starts')}</div>
        <div class="who">${PB.esc(pname(s, first))}</div>
        <div class="box rules">${L('Po směru hodinových ručiček řekne každý <b>jedno slovo</b> k tajnému slovu. Udělejte 1–2 kola, pak na tři ukažte na podezřelého.',
          'Going clockwise, everyone says <b>one word</b> related to the secret word. Do 1 or 2 rounds, then on three, everyone points at a suspect.')}</div>
      </div>
      <button class="btn big" data-rev>${L('Odhalit impostora', 'Reveal the impostor')}</button>
    `, (root) => {
      PB.bindTop(root, setup, true);
      // Reveal: the room "dims", a highlight hops between names and slows down, then the impostor's name slams in.
      PB.on(root, '[data-rev]', () => {
        const n = s.players.length, target = [...imp][0];
        const result = () => {
          PB.sfx.sting(); PB.vibrate([40, 40, 160]); PB.fx.flash();
          PB.render(`
            ${PB.top('Impostor')}
            <div class="play">
              ${PB.art('mask')}
              <p class="muted">${imp.size > 1 ? L('Impostoři byli', 'The impostors were') : L('Impostor byl/a', 'The impostor was')}</p>
              <div class="who slam">${[...imp].map((i) => PB.esc(pname(s, i))).join(', ')}</div>
              <p class="muted">${L('Tajné slovo', 'Secret word')}</p>
              <div class="word">${PB.esc(word)}</div>
              <button class="btn secondary small" data-disc>${PB.hidden.has('w', word) ? L('Vrátit slovo', 'Bring this word back') : L('Vyřadit toto slovo', 'Never show this word again')}</button>
            </div>
            <div class="stack"><button class="btn" data-again>${L('Další kolo', 'Next round')}</button><button class="btn secondary" data-set>${L('Nastavení', 'Settings')}</button></div>
          `, (r2) => {
            PB.bindTop(r2, setup);
            PB.fx.burstAt(PB.$('.who', r2), 70, { speed: 8, g: .16, life: 70, size: 4.5 });
            PB.on(r2, '[data-again]', () => deal(s));
            PB.on(r2, '[data-set]', setup);
            PB.on(r2, '[data-disc]', (e, el) => {
              const label = () => { el.textContent = PB.hidden.has('w', word) ? L('Vrátit slovo', 'Bring this word back') : L('Vyřadit toto slovo', 'Never show this word again'); };
              if (PB.hidden.has('w', word)) { PB.hidden.remove('w', word); label(); return; }
              PB.hidden.add('w', word); label(); PB.sfx.skip();
              PB.toast(L('Slovo vyřazeno.', 'Word discarded.'), { action: L('Zpět', 'Undo'), onAction: () => { PB.hidden.remove('w', word); label(); } });
            });
          });
        };
        if (PB.reduced()) return result();
        PB.render(`
          ${PB.top('Impostor', { close: true })}
          <div class="play">
            <p class="muted">${L('A impostor je…', 'And the impostor is…')}</p>
            <div class="names">${[...Array(n).keys()].map((i) => `<div class="nm" data-n="${i}">${PB.esc(pname(s, i))}</div>`).join('')}</div>
          </div>
        `, (r1) => {
          PB.bindTop(r1, setup, true);
          const els = PB.$$('[data-n]', r1);
          let k = 0, d = 70, alive = true;
          PB.track(() => { alive = false; });
          const hops = n * 3 + target;
          const hop = () => {
            if (!alive) return;
            els.forEach((e) => e.classList.remove('lit'));
            els[k % n].classList.add('lit'); PB.sfx.hop(k); PB.vibrate(6);
            if (k++ < hops) { d *= 1.16; setTimeout(hop, d); } else setTimeout(() => alive && result(), 650);
          };
          hop();
        });
      });
    });
  }

  PB.register({ id: 'impostor', icon: 'mask', ink: ['#00a86b', '#6b3df0'], name: () => 'Impostor', tagline: () => L('Všichni znají slovo, jen jeden ne. Blafuj, nebo ho odhal.', "Everyone knows the word except one. Bluff or catch them."), start: setup });
})();
