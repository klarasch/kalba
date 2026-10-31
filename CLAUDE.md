# Kalba!: notes for Claude

- Never use the middle dot (·) as a separator, in UI text, docs, commit messages or chat. Use separate elements, line breaks, commas or colons instead.
- Talk to Klára in English unless she switches language. Be friendly, blunt, recommend instead of listing endless options.
- Vanilla JS, no build step. Every game screen must be interruptible (back/close or the PB.menu pause).
- After changing files, bump VERSION in sw.js.
- Look and feel: follow design/SYSTEM.md (riso cards on paper; reference design/colour-lab.html). Fonts are Bricolage Grotesque (display) and Figtree (body), bundled in fonts/. No emoji in the UI: use PB.ico (line icons) and PB.art (two-ink game art).
- A new game registers `icon` (a PB.art shape; add one to ART in app.js if needed) and `ink: [main, second]` (plus `onInk` if white text is unreadable on the main ink). The screen takes the game's colour automatically; reuse the shared classes (.btn, .box, .word, .chip, .score, .list) instead of new styles.
- Effects go through PB.fx (burst, flash, shake) and PB.sfx; both respect prefers-reduced-motion. Give every player the same sound and haptic for secret information.
