# English Connectors

A responsive learning app for categorizing English connectors with a React + Tailwind frontend and a single Node.js + Express backend.

## What it does

- Filters connectors by multiple category axes.
- Includes teaching axes for function, grammar, punctuation, CEFR, register, position, structure, frequency, rhetorical function, origin, opinion, sequence, comparison, summary, and place.
- Switches between Learn, Practice, and Explore views from the main header.
- Explains why each connector belongs to the selected categories.
- Shows at least four example sentences per connector.
- Highlights punctuation, connector words, and sentence position cues.
- Supports light/dark modes, tone presets, font sizing, motion reduction, and English/Spanish toggling.
- Runs from code only. No Docker or external database is required.

## Local setup

```bash
npm install
npm run dev
```

Then open the local address printed by the server.

## Production build

```bash
npm run build
npm run start
```

## GitHub Pages

This app can be deployed as a static site on GitHub Pages. The frontend falls back to local connector data if the Express API is not available, so the learning, practice, and explore views still work on Pages.

To publish with GitHub Pages:

1. Push the repository to GitHub.
2. In the repository settings, enable GitHub Pages from GitHub Actions.
3. Trigger the `Deploy to GitHub Pages` workflow in `.github/workflows/deploy-pages.yml`.

## API

- `GET /connectors`
- Query format: `categories` accepts a JSON payload of axis filters, for example `{"function":["addition"],"punctuation":["comma"]}`.
- Example request: `/connectors?categories=%7B%22function%22%3A%5B%22addition%22%5D%2C%22punctuation%22%3A%5B%22comma%22%5D%7D`
- Supported filter matching is OR within each axis and AND across different axes.

## Project structure

- `data/` shared category schema and seeded connector data.
- `server/` Express API and production asset serving.
- `src/` React interface and UI components.
- `.github/workflows/` GitHub Pages deployment workflow.

## Iteration log

See `docs/implementation-log.md` for the working record of implementation passes.

## TODO

See `TODO.md` for the current task list and follow-up items.
