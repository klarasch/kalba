# How to edit the cards

All word cards (for Klobouk, Na čele and Impostor) and all Bomba categories are plain text files. You can edit them on GitHub, also from a phone: open the file, tap the pencil icon, change the text, tap "Commit changes". You cannot break anything with a typo: a wrong line is just a card with odd text.

The Díra facts (`gap-cs.js`, `gap-en.js`) are different. They have several fields each (question, answer, a fake answer, source), so they stay in those files. Leave them to Claude, or copy an existing fact exactly and change only the texts.

## Where things are

```
data/index.txt          the list of files the app loads (add new files here)
data/decks/cs/*.txt     Czech decks, one file per deck
data/decks/en/*.txt     English decks
data/bomb/cs.txt        Bomba categories in Czech
data/bomb/en.txt        Bomba categories in English
data/names/cs.txt       absurd team names for the dice in Klobouk (one per line)
data/names/en.txt       the same in English
```

## What a deck file looks like

```
# České osobnosti
id: cs-osobnosti
lang: cs
games: fishbowl, guess
knowledge: czech

[easy]
Karel Gott
Václav Havel | european
[medium]
Zdeněk Svěrák
[hard]
Jan Kaplický
```

- The first line starting with `#` is the name of the deck as people see it.
- `id` is a short unique name (no spaces). Never reuse an id.
- `lang` is `cs` or `en`. The deck only shows up when the app is in that language.
- `games` says where the deck is offered: `fishbowl` (Klobouk), `guess` (Na čele), `impostor`. Leave out the ones you do not want.
- `knowledge` is the default tag for every card in the file (see below).
- `[easy]`, `[medium]`, `[hard]` start the three difficulty levels. Everything underneath belongs to that level until the next heading.
- One card per line. Just write it as it should appear on screen.

## Add, change, remove a card

- Add: write a new line under the right level.
- Change: edit the line.
- Remove: delete the line.
- Blank lines are ignored. A line that starts with `//` is a comment and is ignored too, so you can park a card there instead of deleting it.
- The same card twice in one game is shown only once, so duplicates do no harm.

## Knowledge tags

Language is what the app speaks. Knowledge is what a card assumes you know. At the start of a game people can switch groups of cards on and off, so a Czech-only card does not appear to a group that has never heard of it.

| tag | meaning | example |
| --- | --- | --- |
| `czech` | known mainly in Czechia (and Slovakia) | Rumcajs, Karel Gott |
| `european` | known across Europe, maybe not in the US | Škodovka, Trabant |
| `worldwide` | known almost everywhere | Einstein, pizza |

The tag after the card overrides the file default for that one line, separated by a vertical bar with spaces around it:

```
Karel Gott
Václav Havel | european
Albert Einstein | worldwide
```

A card without a tag gets the `knowledge:` value from the top of the file. If a file has no `knowledge:` line, its cards count as `worldwide`.

New tags work with no code change. Write `us` (or `uk`, `scandinavian`, anything in lower case without spaces) after a card and a chip with that name appears in the Knowledge filter. The three known tags have nice translated names, other tags show their raw name. In the English app everything except `czech` is switched on by default, in the Czech app everything is.

## Bomba categories

Same idea, simpler. A category is one line, with levels and optional tags:

```
# Categories for Bomb
lang: en
knowledge: worldwide

[easy]
Fruits
[medium]
European capital cities | european
[hard]
Greek gods | european
```

## Adding a whole new deck

1. Copy an existing file in `data/decks/cs/` or `data/decks/en/` and give the copy a new name, for example `data/decks/cs/zvirata.txt`.
2. Change the `#` name, the `id`, the cards and the tags.
3. Add one line to `data/index.txt`: `decks/cs/zvirata.txt`.

The app works offline too: it caches every file listed in `index.txt` the next time it is opened with internet. After an edit, a phone that already has the app may show the old cards once; closing and reopening the app fetches the new ones.

## Cards people throw away

In the game, players can discard a card they never want to see again (in the result lists, on the Impostor reveal, in Bomba and in Díra). That is stored only on that one phone and can be undone in each game's setup screen under "Vyřazeno / Discarded". It does not change these files.
