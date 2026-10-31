// Partybox core: storage, language, sounds, timers, shared UI pieces and the home screen.
(function () {
  const PB = (window.PB = {});
  window.PB_DECKS = window.PB_DECKS || [];
  window.PB_BOMB = window.PB_BOMB || [];

  // ---------- storage ----------
  PB.store = {
    get(k, d) { try { const v = localStorage.getItem('pb:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('pb:' + k, JSON.stringify(v)); } catch (e) {} },
    del(k) { try { localStorage.removeItem('pb:' + k); } catch (e) {} },
  };

  // ---------- language ----------
  const navLang = (navigator.language || 'en').toLowerCase();
  PB.lang = PB.store.get('lang', navLang.startsWith('cs') || navLang.startsWith('sk') ? 'cs' : 'en');
  PB.L = (cs, en) => (PB.lang === 'cs' ? cs : en);
  PB.setLang = (l) => { PB.lang = l; PB.store.set('lang', l); document.documentElement.lang = l; };
  document.documentElement.lang = PB.lang;

  // ---------- helpers ----------
  PB.esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  PB.shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  PB.pick = (a) => a[Math.floor(Math.random() * a.length)];
  PB.$ = (sel, root) => (root || document).querySelector(sel);
  PB.$$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  PB.vibrate = (p) => { try { navigator.vibrate && navigator.vibrate(p); } catch (e) {} };

  const app = () => document.getElementById('app');
  PB.render = (html, bind) => {
    const root = app();
    root.innerHTML = html;
    window.scrollTo(0, 0);
    if (bind) bind(root);
  };
  PB.on = (root, sel, fn, ev) => PB.$$(sel, root).forEach((el) => el.addEventListener(ev || 'click', (e) => fn(e, el)));

  PB.top = (title, opts = {}) => `
    <div class="top">
      <button class="iconbtn" data-back aria-label="back">${opts.close ? '✕' : '←'}</button>
      <div class="title">${PB.esc(title)}</div>
      ${opts.right || ''}
    </div>`;
  // Wire the back/close button. confirmExit asks before leaving a running game.
  PB.bindTop = (root, onBack, confirmExit) => {
    PB.on(root, '[data-back]', () => {
      const leave = () => { PB.stopAll(); onBack ? onBack() : PB.home(); };
      if (confirmExit) PB.ask(PB.L('Ukončit hru?', 'Quit the game?'), leave); else leave();
    });
  };

  // In-page dialogs (native confirm/alert are blocked in some embeds).
  PB.ask = (msg, onYes) => {
    const d = document.createElement('div');
    d.className = 'dlg';
    d.innerHTML = `<div class="dlgbox"><p>${PB.esc(msg)}</p><div class="row"><button class="btn secondary" data-no>${PB.L('Ne', 'No')}</button><button class="btn" data-yes>${PB.L('Ano', 'Yes')}</button></div></div>`;
    document.body.appendChild(d);
    d.querySelector('[data-no]').onclick = () => d.remove();
    d.querySelector('[data-yes]').onclick = () => { d.remove(); onYes(); };
  };
  // Pause menu: items = [{label, cls, fn}]. Tapping outside does nothing on purpose.
  PB.menu = (title, items) => {
    const d = document.createElement('div');
    d.className = 'dlg';
    d.innerHTML = `<div class="dlgbox"><p>${PB.esc(title)}</p>${items.map((it, i) => `<button class="btn ${it.cls || ''}" data-i="${i}">${PB.esc(it.label)}</button>`).join('')}</div>`;
    document.body.appendChild(d);
    d.querySelectorAll('[data-i]').forEach((b) => (b.onclick = () => { d.remove(); items[+b.dataset.i].fn(); }));
    PB.track(() => d.remove());
  };
  PB.pauseBtn = () => `<button class="iconbtn" data-pause aria-label="pause">❚❚</button>`;
  PB.toast = (msg) => {
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2600);
  };

  // ---------- running things that must stop when leaving a screen ----------
  const running = new Set();
  PB.track = (stopFn) => { running.add(stopFn); return stopFn; };
  PB.stopAll = () => { running.forEach((f) => { try { f(); } catch (e) {} }); running.clear(); };

  // ---------- timer (robust to tab throttling) ----------
  PB.timer = (seconds, onTick, onEnd) => {
    let remaining = seconds * 1000, last = performance.now(), paused = false, done = false;
    const id = setInterval(() => {
      const now = performance.now();
      if (!paused) remaining -= now - last;
      last = now;
      if (remaining <= 0 && !done) { done = true; clearInterval(id); onTick && onTick(0); onEnd && onEnd(); return; }
      onTick && onTick(Math.max(0, remaining / 1000));
    }, 100);
    const t = {
      stop() { done = true; clearInterval(id); },
      pause() { paused = true; },
      resume() { paused = false; last = performance.now(); },
      left() { return Math.max(0, remaining / 1000); },
    };
    PB.track(t.stop);
    onTick && onTick(seconds);
    return t;
  };

  // ---------- sound ----------
  let ctx;
  const ac = () => {
    if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  PB.soundOn = PB.store.get('sound', true);
  const tone = (freq, dur, type = 'sine', vol = 0.25, when = 0) => {
    if (!PB.soundOn) return;
    const c = ac(); if (!c) return;
    const t0 = c.currentTime + when;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    o.connect(g).connect(c.destination);
    o.start(t0); o.stop(t0 + dur + 0.02);
  };
  PB.sfx = {
    unlock() { ac(); },
    tick() { tone(1200, 0.05, 'square', 0.12); },
    tock() { tone(800, 0.05, 'square', 0.12); },
    good() { tone(660, 0.1, 'sine', 0.3); tone(990, 0.15, 'sine', 0.3, 0.08); },
    skip() { tone(300, 0.12, 'triangle', 0.3); },
    warn() { tone(880, 0.08, 'square', 0.15); },
    end() { tone(440, 0.25, 'sawtooth', 0.25); tone(330, 0.4, 'sawtooth', 0.25, 0.22); },
    boom() {
      if (!PB.soundOn) return;
      const c = ac(); if (!c) return;
      const len = c.sampleRate * 0.9, buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.5);
      const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
      f.type = 'lowpass'; f.frequency.value = 900; g.gain.value = 0.9;
      s.buffer = buf; s.connect(f).connect(g).connect(c.destination); s.start();
      tone(70, 0.8, 'sine', 0.6);
    },
  };
  document.addEventListener('pointerdown', () => PB.sfx.unlock(), { once: true });

  // ---------- keep screen awake during games ----------
  let lock = null, wantLock = false;
  const grab = async () => { try { if (wantLock && 'wakeLock' in navigator && document.visibilityState === 'visible') lock = await navigator.wakeLock.request('screen'); } catch (e) {} };
  PB.keepAwake = (on = true) => { wantLock = on; if (on) grab(); else if (lock) { lock.release().catch(() => {}); lock = null; } };
  document.addEventListener('visibilitychange', grab);

  // ---------- decks ----------
  PB.decksFor = (game) => PB_DECKS.filter((d) => d.lang === PB.lang && d.games.includes(game));
  PB.levelNames = () => [PB.L('Lehká', 'Easy'), PB.L('Střední', 'Medium'), PB.L('Těžká', 'Hard')];
  // Unique, shuffled words from the chosen decks and levels.
  PB.pool = (deckIds, levels) => {
    const seen = new Set(), out = [];
    PB_DECKS.filter((d) => deckIds.includes(d.id)).forEach((d) =>
      levels.forEach((l) => (d.words[l] || []).forEach((w) => {
        const k = w.toLowerCase();
        if (!seen.has(k)) { seen.add(k); out.push(w); }
      })));
    return PB.shuffle(out);
  };

  // Settings saved per game and language.
  PB.settings = (game, defaults) => {
    const key = 'set:' + game + ':' + PB.lang;
    const s = Object.assign({}, defaults, PB.store.get(key, {}));
    return { s, save: () => PB.store.set(key, s) };
  };

  // ---------- shared setup widgets ----------
  PB.ui = {
    // Deck chips + difficulty chips. s.decks and s.levels are arrays.
    deckPicker(game, s) {
      const decks = PB.decksFor(game);
      if (!s.decks || !s.decks.some((id) => decks.find((d) => d.id === id))) s.decks = decks.map((d) => d.id);
      return `
        <h3>${PB.L('Balíčky', 'Decks')}</h3>
        <div class="chips" data-decks>
          ${decks.map((d) => `<button class="chip ${s.decks.includes(d.id) ? 'on' : ''}" data-id="${d.id}">${d.emoji} ${PB.esc(d.name)}</button>`).join('')}
        </div>
        <h3>${PB.L('Obtížnost', 'Difficulty')}</h3>
        <div class="chips" data-levels>
          ${PB.levelNames().map((n, i) => `<button class="chip ${s.levels.includes(i + 1) ? 'on' : ''}" data-l="${i + 1}">${n}</button>`).join('')}
        </div>`;
    },
    bindDeckPicker(root, s, onChange) {
      PB.on(root, '[data-decks] .chip', (e, el) => {
        const id = el.dataset.id;
        if (s.decks.includes(id)) { if (s.decks.length > 1) s.decks = s.decks.filter((x) => x !== id); }
        else s.decks.push(id);
        PB.$$('[data-decks] .chip', root).forEach((c) => c.classList.toggle('on', s.decks.includes(c.dataset.id)));
        onChange && onChange();
      });
      PB.on(root, '[data-levels] .chip', (e, el) => {
        const l = +el.dataset.l;
        if (s.levels.includes(l)) { if (s.levels.length > 1) s.levels = s.levels.filter((x) => x !== l); }
        else s.levels.push(l);
        PB.$$('[data-levels] .chip', root).forEach((c) => c.classList.toggle('on', s.levels.includes(+c.dataset.l)));
        onChange && onChange();
      });
    },
    stepper(key, label, value, unit = '') {
      return `<div class="stepper" data-step="${key}"><span>${label}</span>
        <span class="ctrls"><button class="iconbtn" data-d="-1">−</button><span class="val">${value}${unit}</span><button class="iconbtn" data-d="1">+</button></span></div>`;
    },
    // opts: {min, max, step, unit}
    bindStepper(root, key, s, opts, onChange) {
      const el = PB.$(`[data-step="${key}"]`, root); if (!el) return;
      PB.on(el, '[data-d]', (e, b) => {
        s[key] = Math.min(opts.max, Math.max(opts.min, s[key] + (+b.dataset.d) * (opts.step || 1)));
        PB.$('.val', el).textContent = s[key] + (opts.unit || '');
        onChange && onChange();
      });
    },
    toggle(key, label, on, sub) {
      return `<div class="toggle"><div>${label}${sub ? `<div class="muted small">${sub}</div>` : ''}</div><button class="switch ${on ? 'on' : ''}" data-tog="${key}" aria-label="${PB.esc(label)}"></button></div>`;
    },
    bindToggle(root, key, s, onChange) {
      const el = PB.$(`[data-tog="${key}"]`, root); if (!el) return;
      el.addEventListener('click', () => { s[key] = !s[key]; el.classList.toggle('on', s[key]); onChange && onChange(); });
    },
    // Editable list of names. s[key] is an array of strings.
    names(key, list, placeholder) {
      return `<div class="stack" data-names="${key}">
        ${list.map((n, i) => `<div class="namerow"><input type="text" value="${PB.esc(n)}" data-i="${i}" placeholder="${PB.esc(placeholder)} ${i + 1}" maxlength="24"><button class="iconbtn" data-rm="${i}">✕</button></div>`).join('')}
        <button class="btn secondary" data-add>+ ${PB.L('Přidat', 'Add')}</button></div>`;
    },
    bindNames(root, key, s, rerender, opts = {}) {
      const el = PB.$(`[data-names="${key}"]`, root); if (!el) return;
      PB.on(el, 'input', (e, inp) => { s[key][+inp.dataset.i] = inp.value; }, 'input');
      PB.on(el, '[data-rm]', (e, b) => {
        if (s[key].length <= (opts.min || 1)) return;
        s[key].splice(+b.dataset.rm, 1); rerender();
      });
      PB.on(el, '[data-add]', () => {
        if (s[key].length >= (opts.max || 30)) return;
        s[key].push(''); rerender();
        const ins = PB.$$(`[data-names="${key}"] input`); ins[ins.length - 1].focus();
      });
    },
  };

  // Full-screen "hand the phone to X" step.
  PB.pass = ({ title, name, sub, button, onReady, onBack }) => {
    PB.render(`
      ${PB.top(title || '', { close: true })}
      <div class="play">
        <div class="huge">📱</div>
        <div class="muted">${PB.L('Předej mobil', 'Pass the phone to')}</div>
        <div class="who">${PB.esc(name)}</div>
        ${sub ? `<div class="muted">${sub}</div>` : ''}
      </div>
      <button class="btn big" data-ready>${button || PB.L('Jsem tu, pokračovat', "I'm here, continue")}</button>
    `, (root) => {
      PB.bindTop(root, onBack, true);
      PB.on(root, '[data-ready]', () => onReady());
    });
  };

  // ---------- games registry + home ----------
  PB.games = [];
  PB.register = (g) => PB.games.push(g);

  PB.home = () => {
    PB.stopAll();
    PB.keepAwake(false);
    PB.render(`
      <div class="top">
        <div class="title"><span style="font-size:26px">🎉</span></div>
        <button class="iconbtn" data-sound>${PB.soundOn ? '🔊' : '🔇'}</button>
        <button class="iconbtn" data-lang>${PB.lang === 'cs' ? 'CZ' : 'EN'}</button>
      </div>
      <h1>Partybox</h1>
      <p class="muted">${PB.L('Hry na dlouhý večer. Stačí jeden mobil, který koluje. Funguje i offline.', 'Party games for a long night. One phone, passed around. Works offline.')}</p>
      <div class="games">
        ${PB.games.map((g) => `<button class="gamecard" data-g="${g.id}"><div class="emo">${g.emoji}</div><div><b>${PB.esc(g.name())}</b><span>${PB.esc(g.tagline())}</span></div></button>`).join('')}
      </div>
      <div class="grow"></div>
      <div class="footer">${PB.L('Vlastní obsah, otevřený kód (MIT).', 'Original content, open source (MIT).')} · <a href="https://github.com/klarasch/partybox" target="_blank" rel="noopener">GitHub</a></div>
    `, (root) => {
      PB.on(root, '[data-g]', (e, el) => PB.games.find((g) => g.id === el.dataset.g).start());
      PB.on(root, '[data-lang]', () => { PB.setLang(PB.lang === 'cs' ? 'en' : 'cs'); PB.home(); });
      PB.on(root, '[data-sound]', () => { PB.soundOn = !PB.soundOn; PB.store.set('sound', PB.soundOn); PB.home(); });
    });
  };

  window.addEventListener('DOMContentLoaded', () => {
    PB.home();
    if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
  });
})();
