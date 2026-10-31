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
        ${letter ? `<p>${L('Na písmeno', 'Starting with')} <b class="huge" style="font-size:44px">${letter}</b></p>` : ''}
      </div>
      <div class="stack">
        <button class="btn big" data-go>${L('Zapálit doutnák', 'Light the fuse')}</button>
        <button class="btn secondary" data-other>${L('Jiná kategorie', 'Another category')}</button>
      </div>
    `, (root) => {
      PB.bindTop(root, setup);
      PB.on(root, '[data-other]', () => { cat = category(s); draw(); });
      PB.on(root, '[data-go]', () => fuse(s, cat, letter));
    });
    draw();
  }

  // The bomb drawing. The fuse path starts at the bomb, so burning hides it from the far end inwards.
  const FUSE = 'M168 118 C 190 92, 222 104, 232 76 S 222 26, 186 34 S 128 44, 136 12';
  const bombSvg = () => `<svg class="bombart" viewBox="0 0 280 260" aria-hidden="true">
      <path class="ash" d="${FUSE}"/><path class="fuse" d="${FUSE}"/>
      <g class="bb"><circle class="body" cx="112" cy="182" r="70"/>
        <rect class="cap" x="144" y="106" width="30" height="24" rx="4" transform="rotate(42 159 118)"/>
        <ellipse class="hi" cx="88" cy="152" rx="16" ry="10" transform="rotate(-35 88 152)"/>
        <text class="lbl" x="112" y="192" text-anchor="middle">${L('BUM', 'BOOM')}</text></g>
      <g class="spark"><circle class="glow" r="12"/><circle class="core" r="5"/></g>
    </svg>`;

  function fuse(s, cat, letter) {
    const [a, b] = FUSES[s.fuse] || FUSES.mid;
    const len = (a + Math.random() * (b - a)) * 1000;
    let elapsed = 0, last = performance.now(), paused = false;
    PB.keepAwake();
    PB.render(`
      <div class="top">${PB.pauseBtn()}<div class="title"></div></div>
      <div class="play">
        <div class="word" style="min-height:110px;font-size:clamp(26px,7.5vw,38px)">${PB.esc(cat)}${letter ? `<span style="font-size:44px">${letter}</span>` : ''}</div>
        ${bombSvg()}
      </div>
      <button class="btn big" data-pass>${L('Řekl/a jsem, předat dál', 'Said it, pass it on')}</button>
    `, (root) => {
      const svg = PB.$('.bombart', root), fuseEl = PB.$('.fuse', root), spark = PB.$('.spark', root), body = PB.$('.bb', root);
      const L0 = fuseEl.getTotalLength();
      fuseEl.style.strokeDasharray = `${L0} ${L0}`;
      let alive = true, flip = false, nextTick = 0, passes = 0;
      PB.track(() => { alive = false; });
      const frame = (now) => {
        if (!alive) return;
        if (paused) { last = now; return requestAnimationFrame(frame); }
        elapsed += now - last; last = now;
        const p = Math.min(1, elapsed / len), burned = L0 * p, pt = fuseEl.getPointAtLength(L0 - burned);
        fuseEl.style.strokeDashoffset = burned;
        spark.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
        PB.sfx.crackle();
        if (!PB.reduced()) {
          const r = svg.getBoundingClientRect(), k = r.width / 280;
          PB.fx.burst(r.left + pt.x * k, r.top + pt.y * k, 2, { colors: ['#fff3b0', '#ffb400', '#ff6a00'], speed: 2.4, g: .06, life: 22, size: 1.6, shape: ['circle'], angle: -Math.PI / 2, spread: 1.4 });
        }
        // Ticks speed up as the fuse burns down; near the end the bomb starts to tremble.
        if (elapsed >= nextTick) {
          flip = !flip; flip ? PB.sfx.tick() : PB.sfx.tock();
          body.classList.remove('tick'); void body.getBoundingClientRect(); body.classList.add('tick');
          nextTick = elapsed + Math.max(110, 700 - p * 600);
        }
        body.classList.toggle('nervous', p > .75 && !PB.reduced());
        if (p >= 1) return explode(s);
        requestAnimationFrame(frame);
      };
      requestAnimationFrame((t) => { last = t; frame(t); });
      PB.on(root, '[data-pass]', () => {
        passes++; PB.sfx.whoosh(); PB.vibrate(25);
        PB.$('[data-pass]', root).textContent = L('Řekl/a jsem, předat dál', 'Said it, pass it on') + ` (${passes})`;
      });
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
    const art = document.querySelector('.bombart .bb');
    const r = art ? art.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0, height: 0 };
    PB.stopAll();
    PB.sfx.boom();
    PB.vibrate([400, 100, 400]);
    PB.fx.flash(); PB.fx.shake();
    PB.fx.burst(r.left + r.width / 2, r.top + r.height / 2, 120, { speed: 12, g: .22, life: 85, size: 5.5 });
    PB.render(`
      ${PB.top(L('Bomba', 'Bomb'))}
      <div class="play">
        <div class="boomtxt slam">${L('BUM!', 'BOOM!')}</div>
        <h2>${L('Kdo drží mobil, prohrál kolo.', 'Whoever holds the phone loses the round.')}</h2>
      </div>
      <button class="btn big" data-n>${L('Další kolo', 'Next round')}</button>
    `, (root) => {
      PB.bindTop(root, setup);
      PB.on(root, '[data-n]', () => round(s));
    });
  }

  PB.register({ id: 'bomb', icon: 'bomb', ink: ['#ff4a1c', '#ffb300'], name: () => L('Bomba', 'Bomb'), tagline: () => L('Řekni slovo z kategorie a předej mobil, než bouchne.', 'Name something in the category and pass before it blows.'), start: setup });
})();
