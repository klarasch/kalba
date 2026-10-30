# Partybox 🎉

Party games for a long night. One phone, passed around. Works offline (PWA). Czech & English, with Czech-specific decks.

**Games**
- 🎩 **Klobouk / Fishbowl** – teams guess the same card stack in 3 rounds: describe → one word → mime. Own cards, difficulty, timer, leftover-time carry-over, game saved on reload.
- 🕵️ **Impostor** – everyone sees the secret word except the impostor(s).
- 💣 **Bomba / Bomb** – name something in the category and pass the phone before it blows.
- 🤔 **Na čele / Forehead** – phone on the forehead, tilt down = correct, tilt up = skip.

**Run locally:** any static server, e.g. `python3 -m http.server`, then open http://localhost:8000.
No build step, no dependencies.

**Add words:** edit `data/decks-*.js` (levels 1 = easy, 2 = medium, 3 = hard) and `data/bomb-*.js`. Bump `VERSION` in `sw.js` after changes.

All word lists are original. Not affiliated with any commercial game. MIT license.
