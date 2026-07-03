# 🎆 4th of July Quiz Showdown

A single-page, no-build quiz app made to run on your phone, screen-mirrored to a TV. You drive it as quizmaster; everyone else yells their answer and you tap the option they shouted.

## How it works

1. **Setup screen** — pick how many correct answers are needed to win, choose a narrator voice, and tune "cowboy drawl" (pitch) and speaking speed. Hit **Test Voice** to preview before the party starts.
2. **Quiz screen** — the narrator reads each question and its options aloud. The question and 4 answer options are large enough to read from across a room. Tap whichever option the crowd shouted; it highlights green/red instantly, shows a fun fact, then reveals **Next Question**.
3. **Results screen** — final tally vs. the target, with a win/lose message (there are a few cheeky "Aussie Roast" trivia questions mixed in with the Americana).

Progress isn't saved between questions — refreshing resets the game, so once you hit Start, just run through it.

## Hosting on GitHub Pages

This is a static site (`index.html`, `styles.css`, `app.js`, `data.js`) — no build step required.

1. Merge this branch into `main` (GitHub Pages serves from a branch, and `main` is the simplest default).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, then pick `main` and `/ (root)`.
3. Wait a minute for it to publish, then open the URL GitHub gives you (something like `https://<username>.github.io/julyquiz/`) on your iPhone in Safari.

Tip: add it to your Home Screen (Share → Add to Home Screen) so it opens full-screen without Safari's UI, which looks better mirrored to a TV.

## About the voice

Browsers only have access to whatever text-to-speech voices are built into the device (the Web Speech API) — there's no true "cowboy" voice available. The app auto-selects the best available American English voice and lets you drop the pitch and slow the rate for a deeper, drawlier read. Use the voice dropdown and test button on the setup screen to find what sounds best on your specific iPhone before the party starts.

## Editing questions

All quiz content lives in `data.js` as a plain array — add, remove, or edit questions/categories there. Each entry needs `category`, `question`, `options` (array of 4), `correct` (index of the right answer), and `fact` (shown after reveal).
