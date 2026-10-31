// Bomb: name something from the category, pass the phone. Whoever holds it at the boom loses.
(function () {
  const L = (a, b) => PB.L(a, b);
  const defaults = { levels: [1, 2], letter: false, fuse: 'mid' };
  const FUSES = { short: [10, 25], mid: [20, 45], long: [35, 70] };
  const LETTERS = { cs: 'ABČDHJKLMNOPRSŠTVZ', en: 'ABCDEFGHILMNOPRSTW' };
  const used = new Set();

  function setup() {
    const { s, save } = PB.settings('bomb', defaults);
    const lvl = PB.levelNames();
    PB.render(`
      ${PB.top(L('Bomba', 'Bomb'))}
      <div class="box rules">${L(
        'Objeví se kategorie, třeba <b>„Ovoce"</b>. Kdo drží mobil, řekne něco, co do ní patří, a <b>předá mobil dalšímu</b>. Opakovat se nesmí. Rozbuška je náhodná a nikdo neví, kdy bouchne. U koho vybuchne, ten prohrál kolo.',
        'A category appears, say <b>"Fruits"</b>. Whoever holds the phone names something that fits and <b>passes the phone on</b>. No repeats. The fuse is random and nobody knows when it blows. Whoever holds it at the boom loses the round.')}</div>
      <h3>${L('Obtížnost', 'Difficulty')}</h3>
      <div class="chips" data-levels>${lvl.map((n, i) => `<button class="chip ${s.levels.includes(i + 1) ? 'on' : ''}" data-l="${i + 1}">${n}</button>`).join('')}</div>
      <h3>${L('Rozbuška', 'Fuse')}</h3>
      <div class="chips" data-fuse>${[['short', L('Krátká', 'Short')], ['mid', L('Střední', 'Medium')], ['long', L('Dlouhá', 'Long')]].map(([k, n]) => `<button class="chip ${s.fuse === k ? 'on' : ''}" data-f="${k}">${n}</button>`).join('')}</div>
      <h3>${L('Nastavení', 'Settings')}</h3>
      ${PB.ui.toggle('letter', L('Navíc počáteční písmeno', 'Add a starting letter'), s.letter, L('Odpověď musí začínat daným písmenem. Je to těžší.', 'Answers must start with the letter. Harder.'))}
      <div class="grow"></div><div class="spacer"></div>
      <button class="btn big" data-go>${L('Hrát', 'Play')}</button>
    `, (root) => {
      PB.bindTop(root, () => { save(); PB.home(); });
      PB.on(root, '[data-levels] .chip', (e, el) => {
        const l = +el.dataset.l;
        if (s.levels.includes(l)) { if (s.levels.length > 1) s.levels = s.levels.filter((x) => x !== l); } else s.levels.push(l);
        PB.$$('[data-levels] .chip', root).forEach((c) => c.classList.toggle('on', s.levels.includes(+c.dataset.l)));
      });
      PB.on(root, '[data-fuse] .chip', (e, el) => {
        s.fuse = el.dataset.f;
        PB.$$('[data-fuse] .chip', root).forEach((c) => c.classList.toggle('on', c.dataset.f === s.fuse));
      });
      PB.ui.bindToggle(root, 'letter', s);
      PB.on(root, '[data-go]', () => { save(); round(s); });
    });
  }

  function category(s) {
    const all = PB_BOMB.filter((b) => b.lang === PB.lang).flatMap((b) => s.levels.flatMap((l) => b.items[l] || []));
    let fresh = all.filter((c) => !used.has(c));
    if (!fresh.length) { used.clear(); fresh = all; }
    const c = PB.pick(fresh);
    used.add(c);
    return c;
  }

  function round(s) {
    let cat = category(s);
    const letter = s.letter ? PB.pick([...LETTERS[PB.lang]]) : null;
    const draw = () => PB.render(`
      ${PB.top(L('Bomba', 'Bomb'), { close: true })}
      <div class="play">
        <p class="muted">${L('Kategorie', 'Category')}</p>
        <div class="word">${PB.esc(cat)}</div>
        ${letter ? `<p>${L('Na písmeno', 'Starting with')} <b style="font-size:34px;color:var(--accent)">${letter}</b></p>` : ''}
      </div>
      <div class="stack">
        <button class="btn big" data-go>🧨 ${L('Zapálit', 'Light the fuse')}</button>
        <button class="btn secondary" data-other>${L('Jiná kategorie', 'Another category')}</button>
      </div>
    `, (root) => {
      PB.bindTop(root, setup);
      PB.on(root, '[data-other]', () => { cat = category(s); draw(); });
      PB.on(root, '[data-go]', () => fuse(s, cat, letter));
    });
    draw();
  }

  function fuse(s, cat, letter) {
    const [a, b] = FUSES[s.fuse] || FUSES.mid;
    const len = a + Math.random() * (b - a);
    let elapsed = 0, last = performance.now(), paused = false;
    PB.keepAwake();
    PB.render(`
      <div class="top">${PB.pauseBtn()}<div class="title"></div></div>
      <div class="play">
        <div class="word" style="min-height:120px">${PB.esc(cat)}${letter ? `<div style="color:var(--accent);font-size:40px">${letter}</div>` : ''}</div>
        <div class="bomb" data-b>💣</div>
        <p class="muted">${L('Řekni slovo a předej dál!', 'Say a word and pass it on!')}</p>
      </div>
    `, (root) => {
      const bomb = PB.$('[data-b]', root);
      let alive = true, flip = false;
      PB.track(() => { alive = false; });
      // Ticks speed up as the fuse burns down.
      const tick = () => {
        if (!alive) return;
        const now = performance.now();
        if (paused) { last = now; return setTimeout(tick, 200); }
        elapsed += now - last; last = now;
        const p = elapsed / 1000 / len;
        if (p >= 1) return explode(s);
        flip = !flip;
        flip ? PB.sfx.tick() : PB.sfx.tock();
        bomb.classList.toggle('pulse', flip);
        setTimeout(tick, Math.max(110, 700 - p * 600));
      };
      tick();
      PB.on(root, '[data-pause]', () => {
        paused = true;
        PB.menu(L('Pauza', 'Paused'), [
          { label: L('Pokračovat', 'Resume'), fn: () => { paused = false; } },
          { label: L('Zneškodnit a zpět', 'Defuse and go back'), cls: 'secondary', fn: () => { PB.stopAll(); round(s); } },
          { label: L('Odejít', 'Leave'), cls: 'secondary', fn: () => { PB.stopAll(); PB.home(); } },
        ]);
      });
    });
  }

  function explode(s) {
    PB.stopAll();
    PB.sfx.boom();
    PB.vibrate([400, 100, 400]);
    document.body.classList.add('boom');
    setTimeout(() => document.body.classList.remove('boom'), 600);
    PB.render(`
      ${PB.top(L('Bomba', 'Bomb'))}
      <div class="play">
        <div class="bomb">💥</div>
        <h1>${L('BUM!', 'BOOM!')}</h1>
        <p class="muted">${L('Kdo drží mobil, prohrál kolo.', 'Whoever holds the phone loses the round.')}</p>
      </div>
      <button class="btn big" data-n>${L('Další kolo', 'Next round')}</button>
    `, (root) => {
      PB.bindTop(root, setup);
      PB.on(root, '[data-n]', () => round(s));
    });
  }

  PB.register({ id: 'bomb', emoji: '💣', name: () => L('Bomba', 'Bomb'), tagline: () => L('Řekni slovo z kategorie a předej mobil, než bouchne.', 'Name something in the category and pass before it blows.'), start: setup });
})();
