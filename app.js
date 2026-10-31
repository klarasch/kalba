// Kalba! core: storage, language, sounds, timers, shared UI pieces and the home screen.
(function () {
  const PB = (window.PB = {});
  window.PB_DECKS = window.PB_DECKS || [];
  window.PB_BOMB = window.PB_BOMB || [];
  window.PB_NAMES = window.PB_NAMES || { cs: [], en: [] };

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


  // ---------- icons: UI line icons (currentColor) and two-ink game art ----------
  const UI = {
    back: '<path d="M19 12H6M11 6l-6 6 6 6"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    pause: '<path d="M9 5v14M15 5v14" stroke-width="3.2"/>',
    sound: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
    mute: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="m17 9 5 6M22 9l-5 6"/>',
    check: '<path d="M5 12.5 9.5 17 19 7" stroke-width="3"/>',
    plus: '<path d="M12 5v14M5 12h14" stroke-width="3"/>',
    clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M9 2h6"/>',
    cards: '<rect x="4" y="6" width="12" height="15" rx="2"/><path d="M8 3h10a2 2 0 0 1 2 2v13"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    trophy: '<path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3M12 14v4M8 21h8"/>',
    talk: '<path d="M4 5h16v11h-9l-5 4v-4H4z"/><path d="M8 10h8"/>',
    hand: '<path d="M9 12V5a1.5 1.5 0 0 1 3 0v6M12 11V4a1.5 1.5 0 0 1 3 0v7M15 11V6a1.5 1.5 0 0 1 3 0v7c0 4.5-2.7 8-7 8-3 0-5-1.8-6.2-4.5L3.3 13a1.5 1.5 0 0 1 2.6-1.5L9 15"/>',
    warn: '<path d="M12 4 2.5 20h19z"/><path d="M12 10v4M12 17v.5"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v5M14 11v5"/>',
    swap: '<path d="M4 9h14l-4-4M20 15H6l4 4"/>',
    flag: '<path d="M6 21V4M6 5h12l-3 4.2L18 13H6"/>',
    dice: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01" stroke-width="3.2"/>',
    undo: '<path d="M9 5 4 10l5 5"/><path d="M4 10h10a6 6 0 0 1 0 12h-3"/>',
  };
  PB.ico = (n) => `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${UI[n] || ''}</svg>`;
  // Game art: s = the shape printed twice (two inks, out of register), x = ink line details on top.
  const ART = {
    hat: { s: '<path d="M15 30V17c0-5.5 4-9 9-9s9 3.5 9 9v13z"/><path d="M4 33c0-2 4-3.5 8-3.5h24c4 0 8 1.5 8 3.5s-8 5-20 5-20-3-20-5z"/>', x: '<path class="ln" d="M15 24h18"/>' },
    mask: { s: '<path fill-rule="evenodd" d="M4 19c5-5 14-5 20-1 6-4 15-4 20 1 0 9-4 15-10 15-4 0-6-3-10-3s-6 3-10 3C8 34 4 28 4 19zM11 22a4 3 0 1 0 8 0 4 3 0 1 0-8 0zM29 22a4 3 0 1 0 8 0 4 3 0 1 0-8 0z"/>', x: '' },
    bomb: { s: '<circle cx="21" cy="29" r="14"/><path d="m27 18 5-5 4 4-5 5z"/>', x: '<path class="ln" d="M34 14c2-4 6-6 10-4"/>' },
    head: { s: '<circle cx="24" cy="33" r="12"/><rect x="13" y="5" width="22" height="15" rx="2"/>', x: '' },
    gap: { s: '<path d="M5 9h38v24H21l-9 8v-8H5z"/>', x: '<path class="ln" d="M14 21h7M27 21h7"/>' },
    vabank: { s: '<rect x="5" y="31" width="25" height="9" rx="4.5"/><rect x="8" y="22" width="25" height="9" rx="4.5"/><rect x="5" y="13" width="25" height="9" rx="4.5"/><circle cx="36" cy="14" r="8"/>', x: '<path class="ln" d="M36 10v8M33 14h6"/>' },
    phone: { s: '<rect x="15" y="5" width="18" height="33" rx="4.5" transform="rotate(-14 24 22)"/>', x: '<rect x="18.5" y="9.5" width="11" height="21" rx="1.5" transform="rotate(-14 24 22)" style="fill:var(--card)"/><path class="ln" d="M7 15c-2.5 4-2.5 9 0 13M43 18c2 3 2 7 0 10"/>' },
  };
  // PB.art(name): game art, or a UI icon / digit on a card disc. cls '' = bare art (e.g. inside a home card).
  PB.art = (n, cls = 'disc') => {
    const a = ART[n];
    if (a) return `<span class="art ${cls}"><svg viewBox="0 0 48 48" aria-hidden="true"><g class="l1">${a.s}</g><g class="l2">${a.s}</g>${a.x}</svg></span>`;
    if (/^\d$/.test(n)) return `<span class="art ${cls} ui"><span class="huge">${n}</span></span>`;
    return `<span class="art ${cls} ui"><svg viewBox="0 0 24 24" aria-hidden="true">${UI[n] || ''}</svg></span>`;
  };
  // The logo mark: a box of the game inks, printed with an offset.
  // Dictionary entry under the logo. English starts with the plain definition, Czech readers
  // already know the word, so they get cross-references. Tap the entry for the next one.
  const KALBA = {
    en: [
      '<b>kalba!</b> <i>(KAL-ba), noun, Czech, informal.</i> A lively party with plenty of drinking; a bender.',
      '<b>kalba!</b> <i>noun.</i> 1. A night that was supposed to be "just one game". 2. A night that ends at 3 a.m. with someone arguing about the rules.',
      '<b>kalba!</b> <i>noun.</i> One more round (of anything).',
      '<b>kalba!</b> <i>noun.</i> Not to be confused with the city in the UAE, which is much quieter.',
    ],
    cs: [
      '<b>kalba, -y, ž.</b> <i>(hovor.)</i> bujará zábava. <i>Viz též:</i> jen na jednu hru.',
      '<b>kalba, -y, ž.</b> <i>(hovor.)</i> bujará zábava. <i>Viz též:</i> ještě jedno kolo.',
      '<b>kalba, -y, ž.</b> <i>(hovor.)</i> bujará zábava. <i>Viz též:</i> odchod ve 22:00 (nesplněno).',
      '<b>kalba, -y, ž.</b> <i>(hovor.)</i> bujará zábava. <i>Viz též:</i> ráno.',
      '<b>Kalba!</b> Jak hovado.',
    ],
  };
  let kalbaAt = 0;
  PB.kalba = (next) => {
    const list = KALBA[PB.lang] || KALBA.en;
    if (next) kalbaAt = (kalbaAt + 1) % list.length;
    return list[kalbaAt % list.length];
  };

  PB.mark = () => '<svg viewBox="0 0 46 46" aria-hidden="true"><rect x="4" y="4" width="17" height="17" rx="4" fill="#1f4be0"/><rect x="1" y="1" width="17" height="17" rx="4" fill="#ff3d8b"/><rect x="28" y="4" width="17" height="17" rx="4" fill="#6b3df0"/><rect x="25" y="1" width="17" height="17" rx="4" fill="#00a86b"/><rect x="4" y="28" width="17" height="17" rx="4" fill="#ffb300"/><rect x="1" y="25" width="17" height="17" rx="4" fill="#ff4a1c"/><rect x="28" y="28" width="17" height="17" rx="4" fill="#0097a7"/><rect x="25" y="25" width="17" height="17" rx="4" fill="#ff8a1f"/></svg>';

  // ---------- visual effects (skipped when the phone asks for reduced motion) ----------
  PB.reduced = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } };
  PB.fx = (() => {
    let cv, cx, ps = [], raf = 0;
    const rnd = (a, b) => a + Math.random() * (b - a);
    const fit = () => {
      if (!cv || !cv.isConnected) { cv = document.createElement('canvas'); cv.className = 'fxlayer'; document.body.appendChild(cv); cx = cv.getContext('2d'); }
      const d = devicePixelRatio || 1;
      if (cv.width !== Math.round(innerWidth * d) || cv.height !== Math.round(innerHeight * d)) { cv.width = innerWidth * d; cv.height = innerHeight * d; }
      cx.setTransform(d, 0, 0, d, 0, 0);
    };
    const loop = () => {
      fit(); cx.clearRect(0, 0, innerWidth, innerHeight);
      ps = ps.filter((p) => p.life > 0);
      for (const p of ps) {
        p.vy += p.g; p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
        cx.save(); cx.globalAlpha = Math.min(1, p.life / 18); cx.translate(p.x, p.y); cx.rotate(p.rot); cx.fillStyle = p.c;
        if (p.shape === 'circle') { cx.beginPath(); cx.arc(0, 0, p.s, 0, 7); cx.fill(); }
        else if (p.shape === 'tri') { cx.beginPath(); cx.moveTo(0, -p.s); cx.lineTo(p.s, p.s); cx.lineTo(-p.s, p.s); cx.fill(); }
        else cx.fillRect(-p.s, -p.s * .5, p.s * 2, p.s);
        cx.restore();
      }
      raf = ps.length ? requestAnimationFrame(loop) : (cx.clearRect(0, 0, innerWidth, innerHeight), 0);
    };
    const inks = () => { const cs = getComputedStyle(document.documentElement); return ['--g1', '--g2', '--y', '--ink', '--card'].map((v) => cs.getPropertyValue(v).trim()); };
    const api = {
      inks,
      burst(x, y, n, o = {}) {
        if (PB.reduced()) return;
        const colors = o.colors || inks(), shapes = o.shape || ['circle', 'tri', 'rect'];
        for (let i = 0; i < n; i++) {
          const a = o.angle != null ? o.angle + rnd(-o.spread, o.spread) : rnd(0, Math.PI * 2), sp = rnd(.3, 1) * (o.speed || 6);
          ps.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: o.g ?? .2, life: rnd(.6, 1) * (o.life || 60), s: rnd(.6, 1) * (o.size || 4), rot: rnd(0, 6), vr: rnd(-.3, .3), c: colors[i % colors.length], shape: shapes[i % shapes.length] });
        }
        if (!raf) raf = requestAnimationFrame(loop);
      },
      burstAt(el, n, o) { if (!el) return; const r = el.getBoundingClientRect(); api.burst(r.left + r.width / 2, r.top + r.height / 2, n, o); },
      flash() { const f = document.createElement('div'); f.className = 'flash'; document.body.appendChild(f); setTimeout(() => f.remove(), 650); },
      shake(el) { if (PB.reduced()) return; el = el || document.getElementById('app'); el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 600); },
    };
    return api;
  })();

  const app = () => document.getElementById('app');
  PB.render = (html, bind) => {
    const root = app();
    PB.$$('.toast.act').forEach((x) => x.remove()); // an Undo belongs to the screen it was shown on
    root.innerHTML = html;
    window.scrollTo(0, 0);
    if (bind) bind(root);
  };
  PB.on = (root, sel, fn, ev) => PB.$$(sel, root).forEach((el) => el.addEventListener(ev || 'click', (e) => fn(e, el)));

  PB.top = (title, opts = {}) => `
    <div class="top">
      <button class="iconbtn" data-back aria-label="${opts.close ? 'close' : 'back'}">${PB.ico(opts.close ? 'close' : 'back')}</button>
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
  PB.pauseBtn = () => `<button class="iconbtn" data-pause aria-label="pause">${PB.ico('pause')}</button>`;
  // PB.toast(msg, {action: 'Undo', onAction}): with an action the toast stays longer and has a button.
  PB.toast = (msg, o = {}) => {
    PB.$$('.toast').forEach((x) => x.remove());
    const t = document.createElement('div');
    t.className = 'toast' + (o.action ? ' act' : '');
    t.setAttribute('role', 'status');
    const m = document.createElement('span'); m.textContent = msg; t.appendChild(m);
    if (o.action) {
      const b = document.createElement('button'); b.type = 'button'; b.textContent = o.action;
      b.onclick = () => { t.remove(); o.onAction && o.onAction(); };
      t.appendChild(b);
    }
    document.body.appendChild(t);
    setTimeout(() => t.remove(), o.action ? 5200 : 2600);
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
  const noise = (dur, { vol = 0.3, type = 'lowpass', f = 1200, f2 = null, q = 1, when = 0 } = {}) => {
    if (!PB.soundOn) return;
    const c = ac(); if (!c) return;
    const t0 = c.currentTime + when, buf = c.createBuffer(1, Math.ceil(c.sampleRate * dur), c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain();
    src.buffer = buf; fl.type = type; fl.Q.value = q; fl.frequency.setValueAtTime(f, t0);
    if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t0 + dur);
    g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    src.connect(fl).connect(g).connect(c.destination); src.start(t0);
  };
  PB.sfx = {
    unlock() { ac(); },
    deal() { noise(0.12, { vol: 0.18, type: 'bandpass', f: 1800, f2: 4200, q: 0.8 }); },
    whoosh() { noise(0.28, { vol: 0.25, type: 'bandpass', f: 400, f2: 2600, q: 0.7 }); },
    flip() { noise(0.07, { vol: 0.2, type: 'bandpass', f: 2500, q: 1.2 }); },
    crackle() { if (Math.random() < 0.3) noise(0.02, { vol: 0.05, type: 'highpass', f: 3000 }); },
    hop(i) { tone(500 + (i % 4) * 90, 0.05, 'square', 0.06); noise(0.06, { vol: 0.12, type: 'bandpass', f: 220, q: 2 }); },
    sting() { [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.9, 'triangle', 0.13, i * 0.03)); noise(0.8, { vol: 0.15, type: 'highpass', f: 5000 }); },
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

  // ---------- content: text files loaded at startup ----------
  // data/index.txt lists the files. Decks live in data/decks/, Bomb categories in data/bomb/.
  // See data/README.md for the format.
  const LEVELS = { easy: 1, medium: 2, hard: 3, 1: 1, 2: 2, 3: 3 };
  const cleanLines = (txt) => String(txt).replace(/^﻿/, '').split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith('//'));
  // Parse one text file: header keys, then [easy]/[medium]/[hard] sections of cards.
  PB.parseCards = (txt) => {
    const meta = { name: '' }, items = { 1: [], 2: [], 3: [] }, tags = {};
    let level = 0;
    const dflt = () => String(meta.knowledge || 'worldwide').toLowerCase();
    cleanLines(txt).forEach((line) => {
      const sec = line.match(/^\[\s*([^\]]+?)\s*\]$/);
      if (sec) { level = LEVELS[sec[1].toLowerCase()] || 0; return; }
      if (!level) {
        if (line.startsWith('#')) { meta.name = line.replace(/^#+\s*/, ''); return; }
        const kv = line.match(/^([A-Za-z]+)\s*:\s*(.*)$/);
        if (kv) meta[kv[1].toLowerCase()] = kv[2].trim();
        return;
      }
      const cut = line.lastIndexOf(' | ');
      const text = (cut > 0 ? line.slice(0, cut) : line).trim();
      if (!text) return;
      items[level].push(text);
      if (cut > 0) { const tg = line.slice(cut + 3).trim().toLowerCase(); if (tg && tg !== dflt()) tags[text] = tg; }
    });
    meta.knowledge = dflt();
    return { meta, items, tags };
  };
  PB.loadData = async () => {
    const get = async (url) => { const r = await fetch(url); if (!r.ok) throw new Error(url + ' ' + r.status); return r.text(); };
    const files = cleanLines(await get('data/index.txt'));
    const texts = await Promise.all(files.map((f) => get('data/' + f).then((t) => [f, t])));
    PB_DECKS.length = 0; PB_BOMB.length = 0; PB_NAMES.cs = []; PB_NAMES.en = [];
    texts.forEach(([f, txt]) => {
      if (f.startsWith('names/')) { const l = (f.match(/names\/(cs|en)\./) || [])[1]; if (l) PB_NAMES[l] = cleanLines(txt); return; }
      const { meta, items, tags } = PB.parseCards(txt);
      const lang = (meta.lang || (f.match(/(?:^|\/)(cs|en)(?:\/|\.)/) || [])[1] || 'en').toLowerCase();
      if (f.startsWith('bomb/')) PB_BOMB.push({ lang, knowledge: meta.knowledge, items, tags });
      else PB_DECKS.push({ id: meta.id || f.replace(/\.txt$/, '').replace(/\//g, '-'), lang, name: meta.name || f, knowledge: meta.knowledge,
        games: (meta.games || 'fishbowl, guess, impostor').split(',').map((x) => x.trim()).filter(Boolean), words: items, tags });
    });
  };

  // ---------- knowledge tags: what the cards assume you know (separate from the UI language) ----------
  const KNOW = { czech: ['Česko', 'Czech'], european: ['Evropa', 'European'], worldwide: ['Svět', 'Worldwide'] };
  PB.knowLabel = (tag) => (KNOW[tag] ? PB.L(KNOW[tag][0], KNOW[tag][1]) : tag);
  // Known tags first, in a fixed order, then any new ones alphabetically.
  PB.knowSort = (tags) => Array.from(new Set(tags)).sort((a, b) => {
    const ia = Object.keys(KNOW).indexOf(a), ib = Object.keys(KNOW).indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || (a < b ? -1 : 1);
  });
  // Czech UI: everything on. Other UIs: everything except Czech-only cards.
  PB.knowDefault = (tags) => { const d = PB.lang === 'cs' ? tags : tags.filter((t) => t !== 'czech'); return d.length ? d : tags; };
  // Make s.know a valid selection of the tags that exist in this content.
  PB.knowFix = (s, tags) => {
    s.know = Array.isArray(s.know) ? s.know.filter((t) => tags.includes(t)) : [];
    if (!s.know.length) s.know = PB.knowDefault(tags);
    return s.know;
  };
  PB.tagOf = (d, w) => (d.tags && d.tags[w]) || d.knowledge || 'worldwide';
  PB.deckTags = (decks) => PB.knowSort(decks.flatMap((d) => [d.knowledge || 'worldwide'].concat(Object.values(d.tags || {}))));
  PB.bombEntries = () => PB_BOMB.filter((b) => b.lang === PB.lang);
  PB.bombTags = () => PB.knowSort(PB.bombEntries().flatMap((b) => [b.knowledge || 'worldwide'].concat(Object.values(b.tags || {}))));
  PB.bombCats = (levels, know) => PB.bombEntries().flatMap((b) => levels.flatMap((l) => (b.items[l] || [])
    .filter((c) => (!know || know.includes((b.tags && b.tags[c]) || b.knowledge)) && !PB.hidden.has('b', c))));

  // ---------- discarded cards (per device, per language) ----------
  // kind: 'w' deck words and names, 'b' Bomb categories, 'g' Gap facts (by id).
  PB.hidden = (() => {
    const key = (kind) => (kind === 'w' ? 'hidden:' : 'hidden:' + kind + ':') + PB.lang;
    const norm = (kind, t) => (kind === 'g' ? String(t) : String(t).trim().toLowerCase());
    const read = (kind) => { const v = PB.store.get(key(kind), []); return Array.isArray(v) ? v : []; };
    const api = {
      norm: (t) => norm('w', t),
      list: (kind) => read(kind),
      has: (kind, t) => read(kind).includes(norm(kind, t)),
      add(kind, t) { const l = read(kind), k = norm(kind, t); if (!l.includes(k)) { l.push(k); PB.store.set(key(kind), l); } },
      remove(kind, t) { const k = norm(kind, t); PB.store.set(key(kind), read(kind).filter((x) => x !== k)); },
      removeMany(kind, ts) { const ks = ts.map((t) => norm(kind, t)); PB.store.set(key(kind), read(kind).filter((x) => !ks.includes(x))); },
    };
    return api;
  })();

  // Absurd team names for the current language (data/names/).
  PB.teamNames = () => (PB_NAMES[PB.lang] || []).slice();

  // ---------- decks ----------
  PB.decksFor = (game) => PB_DECKS.filter((d) => d.lang === PB.lang && d.games.includes(game));
  PB.levelNames = () => [PB.L('Lehká', 'Easy'), PB.L('Střední', 'Medium'), PB.L('Těžká', 'Hard')];
  // Words of one deck for these levels and knowledge tags, minus discarded ones.
  PB.deckWords = (d, levels, know) => levels.flatMap((l) => d.words[l] || [])
    .filter((w) => (!know || know.includes(PB.tagOf(d, w))) && !PB.hidden.has('w', w));
  // Unique, shuffled words from the chosen decks, levels and knowledge tags.
  PB.pool = (deckIds, levels, know) => {
    const seen = new Set(), out = [];
    PB_DECKS.filter((d) => deckIds.includes(d.id)).forEach((d) =>
      PB.deckWords(d, levels, know).forEach((w) => {
        const k = w.toLowerCase();
        if (!seen.has(k)) { seen.add(k); out.push(w); }
      }));
    return PB.shuffle(out);
  };
  // Discarded words that belong to these decks, for the restore list: [{key, text}].
  PB.hiddenWords = (decks) => {
    const hid = PB.hidden.list('w'), seen = new Set(), out = [];
    decks.forEach((d) => [1, 2, 3].forEach((l) => (d.words[l] || []).forEach((w) => {
      const k = PB.hidden.norm(w);
      if (hid.includes(k) && !seen.has(k)) { seen.add(k); out.push({ key: k, text: w }); }
    })));
    return out;
  };

  // Settings saved per game and language.
  PB.settings = (game, defaults) => {
    const key = 'set:' + game + ':' + PB.lang;
    const s = Object.assign({}, defaults, PB.store.get(key, {}));
    return { s, save: () => PB.store.set(key, s) };
  };

  // ---------- shared setup widgets ----------
  PB.ui = {
    // Deck chips, difficulty chips, knowledge chips, word counter and the discarded-cards line.
    // s.decks, s.levels and s.know are arrays.
    deckPicker(game, s) {
      const decks = PB.decksFor(game);
      if (!s.decks || !s.decks.some((id) => decks.find((d) => d.id === id))) s.decks = decks.map((d) => d.id);
      return `
        <h3>${PB.L('Balíčky', 'Decks')}</h3>
        <div class="chips" data-decks>
          ${decks.map((d) => `<button class="chip ${s.decks.includes(d.id) ? 'on' : ''}" data-id="${d.id}">${PB.esc(d.name)}</button>`).join('')}
        </div>
        <h3>${PB.L('Obtížnost', 'Difficulty')}</h3>
        <div class="chips" data-levels>
          ${PB.levelNames().map((n, i) => `<button class="chip ${s.levels.includes(i + 1) ? 'on' : ''}" data-l="${i + 1}">${n}</button>`).join('')}
        </div>
        ${PB.ui.knowPicker(s, PB.deckTags(decks))}
        <p class="muted small" data-avail></p>
        ${PB.ui.hiddenBar()}`;
    },
    bindDeckPicker(root, s, onChange, game, back) {
      const decks = game ? PB.decksFor(game) : [];
      const refresh = () => {
        const el = PB.$('[data-avail]', root);
        if (el) el.textContent = PB.L('Dostupných slov: ', 'Available words: ') + PB.pool(s.decks, s.levels, s.know).length;
        PB.ui.updateHidden(root);
        onChange && onChange();
      };
      PB.on(root, '[data-decks] .chip', (e, el) => {
        const id = el.dataset.id;
        if (s.decks.includes(id)) { if (s.decks.length > 1) s.decks = s.decks.filter((x) => x !== id); }
        else s.decks.push(id);
        PB.$$('[data-decks] .chip', root).forEach((c) => c.classList.toggle('on', s.decks.includes(c.dataset.id)));
        refresh();
      });
      PB.on(root, '[data-levels] .chip', (e, el) => {
        const l = +el.dataset.l;
        if (s.levels.includes(l)) { if (s.levels.length > 1) s.levels = s.levels.filter((x) => x !== l); }
        else s.levels.push(l);
        PB.$$('[data-levels] .chip', root).forEach((c) => c.classList.toggle('on', s.levels.includes(+c.dataset.l)));
        refresh();
      });
      PB.ui.bindKnow(root, s, refresh);
      PB.ui.bindHiddenBar(root, () => PB.hiddenWords(decks), (keys) => PB.hidden.removeMany('w', keys), back, refresh);
      refresh();
    },
    // "What do you know" chips, generated from the tags present in the content (tags = sorted array).
    knowPicker(s, tags) {
      PB.knowFix(s, tags);
      return `<h3>${PB.L('Znalosti', 'Knowledge')}</h3>
        <div class="chips" data-know>
          ${tags.map((k) => `<button class="chip ${s.know.includes(k) ? 'on' : ''}" data-k="${PB.esc(k)}">${PB.esc(PB.knowLabel(k))}</button>`).join('')}
        </div>`;
    },
    bindKnow(root, s, onChange) {
      PB.on(root, '[data-know] .chip', (e, el) => {
        const k = el.dataset.k;
        if (s.know.includes(k)) { if (s.know.length > 1) s.know = s.know.filter((x) => x !== k); }
        else s.know.push(k);
        PB.$$('[data-know] .chip', root).forEach((c) => c.classList.toggle('on', s.know.includes(c.dataset.k)));
        onChange && onChange();
      });
    },
    // "Discarded: N [Show]" line. Hidden when nothing is discarded.
    hiddenBar() {
      return `<div class="hidbar" data-hidbar hidden><span>${PB.L('Vyřazeno', 'Discarded')}: <b data-hidn>0</b></span><button class="btn secondary small" data-hidopen>${PB.L('Zobrazit', 'Show')}</button></div>`;
    },
    // items() returns [{key, text}] of discarded cards in this game's content; restore(keys) brings them back.
    bindHiddenBar(root, items, restore, back, onChange) {
      const bar = PB.$('[data-hidbar]', root); if (!bar) return;
      bar._items = items;
      PB.on(bar, '[data-hidopen]', () => PB.hiddenScreen(items, restore, () => { back && back(); }));
    },
    updateHidden(root) {
      const bar = PB.$('[data-hidbar]', root); if (!bar || !bar._items) return;
      const n = bar._items().length;
      PB.$('[data-hidn]', bar).textContent = n;
      bar.hidden = n === 0;
    },
    stepper(key, label, value, unit = '') {
      return `<div class="stepper" data-step="${key}"><span>${label}</span>
        <span class="ctrls"><button class="iconbtn sm" data-d="-1" aria-label="−">−</button><span class="val">${value}${unit}</span><button class="iconbtn sm" data-d="1" aria-label="+">+</button></span></div>`;
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
    // Name pills: typing a comma or pressing Enter turns the text into a pill; tap the cross to remove one.
    tags(key, list, placeholder) {
      return `<div class="tags" data-tags="${key}">${list.map((n, i) => `<span class="tag">${PB.esc(n)}<button type="button" data-tx="${i}" aria-label="${PB.L('Odebrat', 'Remove')} ${PB.esc(n)}">${PB.ico('close')}</button></span>`).join('')}<input type="text" data-ti maxlength="24" enterkeyhint="done" autocomplete="off" placeholder="${PB.esc(placeholder)}"></div>`;
    },
    // get() returns the current names, set(list) stores them.
    bindTags(root, key, get, set, placeholder) {
      const el = PB.$(`[data-tags="${key}"]`, root); if (!el) return;
      const redraw = (focus) => {
        const tmp = document.createElement('div'); tmp.innerHTML = PB.ui.tags(key, get(), placeholder);
        el.innerHTML = tmp.firstElementChild.innerHTML; wire();
        if (focus) PB.$('[data-ti]', el).focus();
      };
      const commit = (text, focus) => {
        const add = String(text).split(',').map((x) => x.trim()).filter(Boolean);
        if (!add.length) return false;
        set(get().concat(add)); PB.sfx.tick(); redraw(focus); return true;
      };
      const wire = () => {
        const inp = PB.$('[data-ti]', el);
        inp.addEventListener('input', () => { if (inp.value.includes(',')) { const v = inp.value; inp.value = ''; commit(v, true); } });
        inp.addEventListener('keydown', (e) => {
          // Enter with text adds a pill; Enter on an empty field moves on (handled by the form flow below).
          if (e.key === 'Enter' && inp.value.trim()) { e.preventDefault(); const v = inp.value; inp.value = ''; commit(v, true); }
          else if (e.key === 'Backspace' && !inp.value && get().length) { set(get().slice(0, -1)); redraw(true); }
        });
        inp.addEventListener('blur', () => { const v = inp.value; if (v.trim()) { inp.value = ''; commit(v, false); } });
        PB.$$('[data-tx]', el).forEach((b) => b.addEventListener('click', () => { const l = get(); l.splice(+b.dataset.tx, 1); set(l); redraw(false); }));
      };
      wire();
    },
    // Editable list of names. s[key] is an array of strings.
    names(key, list, placeholder) {
      return `<div class="stack" data-names="${key}" data-flow>
        ${list.map((n, i) => `<div class="namerow"><input type="text" value="${PB.esc(n)}" data-i="${i}" placeholder="${PB.esc(placeholder)} ${i + 1}" maxlength="24"><button class="iconbtn" data-rm="${i}" aria-label="remove">${PB.ico('close')}</button></div>`).join('')}
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
        ${PB.art('phone')}
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

  // The list of discarded cards with a restore button per row. back() returns to the setup screen.
  PB.hiddenScreen = (items, restore, back) => {
    const draw = () => {
      const list = items();
      PB.render(`
        ${PB.top(PB.L('Vyřazeno', 'Discarded'), { close: true })}
        ${list.length ? `<div class="list">${list.map((it, i) => `<div class="it" data-row="${i}"><span>${PB.esc(it.text)}</span><button class="btn secondary small" data-restore="${i}">${PB.L('Obnovit', 'Restore')}</button></div>`).join('')}</div>`
          : `<p class="muted center">${PB.L('Nic tu není.', 'Nothing here.')}</p>`}
        <div class="spacer"></div>
        ${list.length ? `<button class="btn big" data-all>${PB.L('Obnovit vše', 'Restore all')}</button>` : `<button class="btn big" data-done>${PB.L('Zpět', 'Back')}</button>`}
      `, (root) => {
        PB.bindTop(root, back);
        PB.on(root, '[data-restore]', (e, el) => { restore([list[+el.dataset.restore].key]); PB.sfx.good(); draw(); });
        PB.on(root, '[data-all]', () => { restore(list.map((x) => x.key)); PB.sfx.good(); back(); });
        PB.on(root, '[data-done]', () => back());
      });
    };
    draw();
  };

  // ---------- form flow: Enter jumps to the next field, the last one closes the keyboard ----------
  // Opt in by putting data-flow on a container of text inputs.
  const flowFields = (inp) => { const box = inp.closest('[data-flow]'); return box ? PB.$$('input[type=text]', box) : []; };
  document.addEventListener('focusin', (e) => {
    const inp = e.target; if (!(inp instanceof HTMLInputElement) || !inp.closest('[data-flow]')) return;
    const all = flowFields(inp); inp.enterKeyHint = all.indexOf(inp) < all.length - 1 ? 'next' : 'done';
  });
  document.addEventListener('keydown', (e) => {
    const inp = e.target;
    if (e.key !== 'Enter' || e.defaultPrevented || !(inp instanceof HTMLInputElement) || !inp.isConnected || !inp.closest('[data-flow]')) return;
    e.preventDefault();
    const all = flowFields(inp), next = all[all.indexOf(inp) + 1];
    if (next) next.focus(); else inp.blur();
  });

  // ---------- games registry + home ----------
  // Each game registers { id, icon, ink: [main, second], onInk?, name(), tagline(), start }.
  // A new game only needs its two inks and an icon; the whole look follows from them.
  PB.games = [];
  PB.register = (g) => PB.games.push(g);
  PB.setGame = (g) => {
    const r = document.documentElement, meta = document.querySelector('meta[name=theme-color]');
    if (!g) { delete r.dataset.game; ['--g1', '--g2', '--on-g'].forEach((v) => r.style.removeProperty(v)); }
    else { r.dataset.game = g.id; r.style.setProperty('--g1', g.ink[0]); r.style.setProperty('--g2', g.ink[1]); r.style.setProperty('--on-g', g.onInk || '#ffffff'); }
    if (meta) meta.content = g ? g.ink[0] : getComputedStyle(r).getPropertyValue('--paper').trim() || '#f5f3ee';
  };

  PB.home = () => {
    PB.stopAll();
    PB.keepAwake(false);
    PB.setGame(null);
    PB.render(`
      <div class="hd">
        <h1 class="logo" aria-label="Kalba!">kalba<span class="bang" aria-hidden="true"><i></i>${PB.mark()}</span></h1>
        <button class="dict" data-dict aria-live="polite">${PB.kalba()}</button>
      </div>
      <div class="games">
        ${PB.games.map((g) => `<button class="gamecard" data-g="${g.id}" style="--g1:${g.ink[0]};--g2:${g.ink[1]}">${PB.art(g.icon, '')}<span class="tx"><b>${PB.esc(g.name())}</b><span>${PB.esc(g.tagline())}</span></span></button>`).join('')}
      </div>
      <div class="homebar">
        <button class="iconbtn" data-lang>${PB.lang === 'cs' ? 'Čeština' : 'English'}</button>
        <button class="iconbtn" data-sound aria-pressed="${PB.soundOn}">${PB.ico(PB.soundOn ? 'sound' : 'mute')} ${PB.soundOn ? PB.L('Zvuk', 'Sound') : PB.L('Ticho', 'Muted')}</button>
      </div>
      <div class="grow"></div>
      <div class="footer">${PB.L('Funguje i offline. Vlastní obsah, otevřený kód (MIT).', 'Works offline. Original content, open source (MIT).')} <a href="https://github.com/klarasch/kalba" target="_blank" rel="noopener">GitHub</a></div>
      <div class="footer credit"><a href="https://ksch.cz" target="_blank" rel="noopener"><svg viewBox="4 2 8 12" width="11" height="16" aria-hidden="true" shape-rendering="crispEdges"><path fill="currentColor" d="M8 2h2v1h-2zM8 3h3v1h-3zM8 4h4v1h-4zM8 5h1v1h-1zM10 5h2v1h-2zM8 6h1v1h-1zM11 6h1v1h-1zM8 7h1v1h-1zM11 7h1v1h-1zM8 8h1v1h-1zM10 8h1v1h-1zM8 9h1v1h-1zM5 10h4v1h-4zM4 11h5v1h-5zM4 12h5v1h-5zM10 12h2v1h-2zM5 13h4v1h-4zM10 13h2v1h-2z"/></svg>${PB.L('Navajbkódila a vyladila Klára', 'Vibe-coded and refined by Klára')}</a></div>
    `, (root) => {
      PB.on(root, '[data-g]', (e, el) => { const g = PB.games.find((x) => x.id === el.dataset.g); PB.sfx.deal(); PB.setGame(g); g.start(); });
      PB.on(root, '[data-dict]', (e, el) => { PB.sfx.tick(); el.innerHTML = PB.kalba(true); });
      PB.on(root, '[data-lang]', () => { PB.setLang(PB.lang === 'cs' ? 'en' : 'cs'); PB.home(); });
      PB.on(root, '[data-sound]', () => { PB.soundOn = !PB.soundOn; PB.store.set('sound', PB.soundOn); PB.home(); });
    });
  };

  // Load the text files, then show home. Safe to call more than once.
  let booted = null;
  PB.boot = () => {
    if (booted) return booted;
    PB.render('<div class="center muted" style="padding-top:40vh">…</div>');
    booted = PB.loadData().then(() => PB.home(), () => {
      booted = null;
      PB.render(`<div class="play"><h2>${PB.L('Nepodařilo se načíst data.', 'Could not load the data.')}</h2><p class="muted">${PB.L('Zkontroluj připojení a zkus to znovu.', 'Check your connection and try again.')}</p></div>
        <button class="btn big" data-retry>${PB.L('Zkusit znovu', 'Try again')}</button>`, (root) => PB.on(root, '[data-retry]', () => PB.boot()));
    });
    return booted;
  };
  const go = () => {
    PB.boot();
    if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
  };
  if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', go);
  else if (document.querySelector('#app')) setTimeout(go, 0);
})();
