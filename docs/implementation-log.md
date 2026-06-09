# Implementation Log

## Iteration 1

- Chose a single Node.js + Express server with a React + Tailwind frontend.
- Kept the app local-only with in-memory seed data rather than an external database.
- Added project-level documentation files and the shared TypeScript build configuration.
- Prepared the project for a bilingual UI and category-based filtering workflow.

## Iteration 2

- Seeded connectors across the requested category axes with bilingual explanations and examples.
- Built the Express `/connectors` endpoint with JSON-based multi-axis filtering.
- Added the responsive React interface with animated category chips, connector cards, and settings controls.
- Validated the app with TypeScript, a production build, and a live browser/API check.

## Iteration 3

- Expanded the shared category model with opinion, sequence, comparison, summary, and place axes.
- Added learn-view explanations for the new axes and wired the app/server selection state to match.
- Added supplemental connector tagging plus new seed records for the newly introduced categories.
- Rebuilt the app and confirmed the live API now returns the expanded connector set.

## Iteration 4

- Added a Practice panel alongside Learn and Explore.
- Built data-driven drag-and-drop fill-in exercises for connectors and punctuation from the current filtered connector set.
- Kept the practice deck synced with filtering so users can drill the full connector pool or a narrow subset.
- Validated the new workflow with TypeScript, a production build, the live API, and browser drag/drop smoke checks.

## Iteration 5

- Added an aqua light-blue tone preset for both light and dark modes.
- Added SweetAlert2-based confirmations and feedback for learner-facing actions.
- Added a GitHub Pages deployment workflow and a static-data fallback so the app still works without the Express server.
