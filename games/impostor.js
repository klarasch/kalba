// Impostor: everyone sees the secret word except the impostor(s). Talk, then vote.
(function () {
  const L = (a, b) => PB.L(a, b);
  const defaults = { decks: null, levels: [1, 2], players: ['', '', '', ''], impostors: 1, hint: true };
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
      PB.ui.bindDeckPicker(root, s);
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
    const decks = PB_DECKS.filter((d) => s.decks.includes(d.id));
    let word, deck;
    for (let tries = 0; tries < 50; tries++) {
      deck = PB.pick(decks);
      const words = s.levels.flatMap((l) => deck.words[l] || []);
      word = PB.pick(words);
      if (word && !used.has(word)) break;
    }
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
          <div class="reveal" data-r><span data-hidden>👆 ${L('Podrž', 'Hold')}</span><div data-shown style="display:none">
            ${isImp
              ? `<div class="huge">🕵️</div><div class="word">${L('Jsi IMPOSTOR', 'You are the IMPOSTOR')}</div>${s.hint ? `<p class="muted">${L('Kategorie', 'Category')}: ${deck.emoji} ${PB.esc(deck.name)}</p>` : ''}`
              : `<p class="muted">${L('Tajné slovo', 'Secret word')}</p><div class="word">${PB.esc(word)}</div>`}
          </div></div>
        </div>
        <button class="btn big" data-next disabled>${L('Viděl/a jsem, schovat a dál', 'Seen it, hide and continue')}</button>
      `, (root) => {
        PB.bindTop(root, setup, true);
        const r = PB.$('[data-r]', root), next = PB.$('[data-next]', root);
        const on = (e) => { e.preventDefault(); r.classList.add('shown'); PB.$('[data-hidden]', r).style.display = 'none'; PB.$('[data-shown]', r).style.display = ''; next.disabled = false; };
        const off = () => { r.classList.remove('shown'); PB.$('[data-hidden]', r).style.display = ''; PB.$('[data-shown]', r).style.display = 'none'; };
        r.addEventListener('pointerdown', on);
        ['pointerup', 'pointerleave', 'pointercancel'].forEach((ev) => r.addEventListener(ev, off));
        r.addEventListener('contextmenu', (e) => e.preventDefault());
        next.addEventListener('click', () => show(i + 1));
      });
    };
    show(0);
  }

  function discuss(s, word, deck, imp) {
    const first = PB.pick([...Array(s.players.length).keys()]);
    PB.render(`
      ${PB.top('Impostor', { close: true })}
      <div class="play">
        <div class="huge">🗣️</div>
        <div class="muted">${L('Začíná', 'Starts')}</div>
        <div class="who">${PB.esc(pname(s, first))}</div>
        <div class="box rules">${L('Po směru hodinových ručiček řekne každý <b>jedno slovo</b> k tajnému slovu. Udělejte 1–2 kola, pak na tři ukažte na podezřelého.',
          'Going clockwise, everyone says <b>one word</b> related to the secret word. Do 1 or 2 rounds, then on three, everyone points at a suspect.')}</div>
      </div>
      <button class="btn big" data-rev>${L('Odhalit impostora', 'Reveal the impostor')}</button>
    `, (root) => {
      PB.bindTop(root, setup, true);
      PB.on(root, '[data-rev]', () => {
        PB.sfx.boom(); PB.vibrate(200);
        PB.render(`
          ${PB.top('Impostor')}
          <div class="play">
            <div class="huge">🕵️</div>
            <p class="muted">${imp.size > 1 ? L('Impostoři byli', 'The impostors were') : L('Impostor byl/a', 'The impostor was')}</p>
            <div class="who">${[...imp].map((i) => PB.esc(pname(s, i))).join(', ')}</div>
            <p class="muted">${L('Tajné slovo', 'Secret word')}</p>
            <div class="word">${PB.esc(word)}</div>
          </div>
          <div class="stack"><button class="btn" data-again>${L('Další kolo', 'Next round')}</button><button class="btn secondary" data-set>${L('Nastavení', 'Settings')}</button></div>
        `, (r2) => {
          PB.bindTop(r2, setup);
          PB.on(r2, '[data-again]', () => deal(s));
          PB.on(r2, '[data-set]', setup);
        });
      });
    });
  }

  PB.register({ id: 'impostor', emoji: '🕵️', name: () => 'Impostor', tagline: () => L('Všichni znají slovo, jen jeden ne. Blafuj, nebo ho odhal.', "Everyone knows the word except one. Bluff or catch them."), start: setup });
})();
