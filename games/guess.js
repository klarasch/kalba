// Forehead / Na čele: phone on your forehead, others describe, tilt down = got it, tilt up = skip.
(function () {
  const L = (a, b) => PB.L(a, b);
  const defaults = { decks: null, levels: [1, 2], know: null, time: 60, tilt: true };

  function setup() {
    const { s, save } = PB.settings('guess', defaults);
    const draw = () => PB.render(`
      ${PB.top(L('Na čele', 'Forehead'))}
      <div class="box rules">${L(
        'Hádající si dá mobil <b>naležato na čelo</b> displejem ven. Ostatní popisují, předvádějí nebo zpívají. <b>Nakloň dolů</b>, když uhodneš. <b>Nakloň nahoru</b>, když chceš přeskočit. Bez naklánění to jde i ťukáním: vpravo uhodnuto, vlevo přeskočit. Po čase předejte mobil dalšímu.',
        'The guesser holds the phone <b>sideways on their forehead</b>, screen facing out. Everyone else describes, acts or sings. <b>Tilt down</b> when you get it, <b>tilt up</b> to skip. Without tilting you can tap: right side = got it, left side = skip. When time is up, pass the phone on.')}</div>
      ${PB.ui.deckPicker('guess', s)}
      <h3>${L('Nastavení', 'Settings')}</h3>
      <div class="stack">
        ${PB.ui.stepper('time', L('Čas', 'Time'), s.time, ' s')}
        ${PB.ui.toggle('tilt', L('Ovládání nakláněním', 'Tilt controls'), s.tilt, L('Vypni, pokud to na tvém mobilu blbne', 'Turn off if your phone acts up'))}
      </div>
      <div class="grow"></div><div class="spacer"></div>
      <button class="btn big" data-go>${L('Hrát', 'Play')}</button>
    `, (root) => {
      PB.bindTop(root, () => { save(); PB.home(); });
      PB.ui.bindDeckPicker(root, s, null, 'guess', draw);
      PB.ui.bindStepper(root, 'time', s, { min: 30, max: 180, step: 15, unit: ' s' });
      PB.ui.bindToggle(root, 'tilt', s);
      PB.on(root, '[data-go]', async () => {
        save();
        // iOS asks for motion permission; it must happen inside this tap.
        if (s.tilt && window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
          try { if ((await DeviceOrientationEvent.requestPermission()) !== 'granted') s.tilt = false; } catch (e) { s.tilt = false; }
        }
        try { await document.documentElement.requestFullscreen(); await screen.orientation.lock('landscape'); } catch (e) {}
        play(s);
      });
    });
    draw();
  }

  const exitFs = () => { try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) {} };

  function play(s) {
    const words = PB.pool(s.decks, s.levels, s.know);
    const results = [];
    let i = 0, state = 'count', timer;
    PB.keepAwake();
    PB.render(`<div class="fh" data-fh>
      <div class="corner" data-c></div>
      <div class="word" data-w>${L('Mobil na čelo!', 'Phone on forehead!')}</div>
      <div class="tapzones"><div data-skip></div><div data-ok></div></div>
      <div class="hint"><span>${L('Vlevo přeskočit, vpravo uhodnuto.', 'Left: skip. Right: got it.')}</span><button class="btn secondary small quit" data-quit>${L('Konec', 'Stop')}</button></div>
    </div>`, (root) => {
      const fh = PB.$('[data-fh]', root), w = PB.$('[data-w]', root), c = PB.$('[data-c]', root);
      let armed = false;
      const next = () => {
        if (i >= words.length) return end();
        w.textContent = words[i]; fh.className = 'fh'; state = 'word';
      };
      const mark = (ok) => {
        if (state !== 'word') return;
        state = 'flash';
        results.push({ w: words[i], ok }); i++;
        fh.className = 'fh ' + (ok ? 'good' : 'bad');
        if (ok) w.innerHTML = PB.ico('check'); else w.textContent = L('Dál', 'Pass');
        ok ? PB.sfx.good() : PB.sfx.skip();
        PB.vibrate(ok ? 60 : [30, 40, 30]);
        setTimeout(() => { if (state === 'flash') next(); }, 700);
      };
      const end = () => {
        if (state === 'end') return;
        state = 'end';
        timer && timer.stop();
        window.removeEventListener('deviceorientation', onTilt);
        PB.sfx.end(); PB.vibrate([200, 100, 200]);
        exitFs();
        summary(s, results);
      };
      // How much the screen faces up (1) or down (-1). Spec-consistent across iOS and Android.
      const onTilt = (e) => {
        if (e.beta == null || e.gamma == null) return;
        const up = Math.cos((e.beta * Math.PI) / 180) * Math.cos((e.gamma * Math.PI) / 180);
        if (Math.abs(up) < 0.35) { armed = true; return; }
        if (!armed || state !== 'word') return;
        if (up < -0.6) { armed = false; mark(true); }
        else if (up > 0.6) { armed = false; mark(false); }
      };
      if (s.tilt) window.addEventListener('deviceorientation', onTilt);
      PB.track(() => window.removeEventListener('deviceorientation', onTilt));
      PB.$('[data-ok]', root).addEventListener('click', () => mark(true));
      PB.$('[data-skip]', root).addEventListener('click', () => mark(false));
      PB.$('[data-quit]', root).addEventListener('click', (e) => { e.stopPropagation(); end(); });
      // 3-2-1, then the clock.
      let n = 3;
      const count = () => {
        if (state !== 'count') return;
        if (n === 0) {
          timer = PB.timer(s.time, (t) => { c.textContent = Math.ceil(t); if (t <= 5 && t > 0 && Math.abs(t - Math.round(t)) < 0.06) PB.sfx.warn(); }, end);
          return next();
        }
        w.textContent = n; PB.sfx.tick(); n--; setTimeout(count, 1000);
      };
      setTimeout(count, 1200);
    });
  }

  function summary(s, results) {
    const ok = results.filter((r) => r.ok).length;
    PB.keepAwake(false);
    PB.render(`
      ${PB.top(L('Na čele', 'Forehead'))}
      <div class="center">${PB.art('head')}<h1>${ok} ${L('uhodnuto', 'correct')}</h1></div>
      <div class="list">${results.map((r, i) => `<div class="it ${r.ok ? '' : 'off'}"><span>${PB.esc(r.w)}</span><span class="acts"><button class="iconbtn sm ${PB.hidden.has('w', r.w) ? 'on' : ''}" data-x="${i}" aria-label="${L('Vyřadit navždy', 'Discard forever')}: ${PB.esc(r.w)}">${PB.ico('trash')}</button>${PB.ico(r.ok ? 'check' : 'close')}</span></div>`).join('')}</div>
      <div class="spacer"></div>
      <div class="stack"><button class="btn big" data-again>${L('Další hráč', 'Next player')}</button><button class="btn secondary" data-set>${L('Nastavení', 'Settings')}</button></div>
    `, (root) => {
      PB.bindTop(root, setup);
      PB.on(root, '[data-again]', async () => {
        try { await document.documentElement.requestFullscreen(); await screen.orientation.lock('landscape'); } catch (e) {}
        play(s);
      });
      PB.on(root, '[data-set]', setup);
      PB.on(root, '[data-x]', (e, el) => {
        const w = results[+el.dataset.x].w;
        if (PB.hidden.has('w', w)) { PB.hidden.remove('w', w); el.classList.remove('on'); return; }
        PB.hidden.add('w', w); el.classList.add('on'); PB.sfx.skip();
        PB.toast(L('Vyřazeno: ', 'Discarded: ') + w, { action: L('Zpět', 'Undo'), onAction: () => { PB.hidden.remove('w', w); el.classList.remove('on'); } });
      });
    });
  }

  PB.register({ id: 'guess', icon: 'head', ink: ['#ff8a1f', '#0097a7'], onInk: '#18161c', name: () => L('Na čele', 'Forehead'), tagline: () => L('Mobil na čelo, ostatní napovídají, nakláněním odpovídáš.', 'Phone on your forehead, friends give clues, tilt to answer.'), start: setup });
})();
