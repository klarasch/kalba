# Kalba! design system

Rules for anything new: a game, a screen, a button. Reference: design/colour-lab.html (variant D). When in doubt, copy an existing screen, not your memory of one.

## Look
- Riso print on paper: dot-grain paper, hard 2.5px outlines (`--key`), hard offset shadows, nothing blurred. No gradients, no glass, no soft drop shadows.
- Slight tilt is part of the look: hero cards and list cards sit at -1.5 to +1.5 degrees. Lists the eye scans (results, settings) stay straight.
- Inside a game the whole screen is the game's main ink (`--g1`). The second ink (`--g2`) is for offset prints behind hero cards. White cards (`--card`) carry everything you read or tap.
- Dark mode is the same design on dark paper. Never hardcode a colour; use tokens from :root in style.css.

## Type
- Bricolage Grotesque (`--disp`, weight 800) for titles, words on cards, buttons, numbers.
- Figtree (`--body`) for running text and labels. Uppercase small labels = h3.
- Sentence case everywhere. No all-caps headlines.

## Components (use these, do not invent new ones)
- Primary action: `button.btn` (yellow, outline, offset shadow). One per screen. `.big` when it is the screen's main action; put it last in #app so it sticks to the bottom.
- Secondary: `.btn.secondary` (white). Positive in-game action: `.btn.good` (ink).
- Icon-only buttons: `.iconbtn` (white, outline, 3px offset shadow, 46px). Never a bare outlined icon without the shadow. Small inline variants inside list rows: `.iconbtn.sm` (38px).
- Text surfaces: `.box`, `.word` (the hero card), `.score`, `.list .it`, `.gp-fact`.
- Choices: `.chips` + `.chip` (checkbox inside; radio dot for single choice). Selected states are solid ink (`--ink` on `--paper`), never yellow: yellow means "action", so a chosen option can't be mistaken for the next button. Settings rows: PB.ui.stepper, PB.ui.toggle. Names: PB.ui.tags (pills).
- Feedback: PB.toast (with an Undo action for anything destructive), PB.sfx, PB.vibrate, PB.fx.
- Never underlined links in the app. Never emoji: PB.ico for line icons, PB.art for two-ink game art.

## A new game needs
1. `PB.register({ id, icon, ink: [main, second], onInk?, name, tagline, start })`. Pick an ink pair that differs from the other games; check white text contrast on `main`, else set `onInk`.
2. A PB.art shape for its icon (two-ink, 48x48, simple filled shapes plus optional `.ln` line details).
3. Setup screen order: rules box, players or teams, content pickers (decks, difficulty, knowledge), settings, discarded cards line, primary button.
4. Every screen interruptible (back/close or pause menu). Timers pause in the pause menu.
5. Secret information: same sound and haptic for every player.
6. Moments of delight go through PB.fx and PB.sfx and respect prefers-reduced-motion.

## Copy
- Czech and English via PB.L(cs, en). Short, plain, active. No middle dot as a separator.
