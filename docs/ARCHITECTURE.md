# Architecture

Prompt Claro / Clear Prompt Builder is a static browser app.

## Runtime

- `index.html` defines the main user interface.
- `info.html` explains how the tool works and the basic terms.
- `style.css` contains the visual design.
- `app.js` contains translations, examples, prompt assembly, copy/download
  actions, response-verification prompt assembly, and UI state.

## Data flow

```text
user input -> browser JavaScript -> generated prompt -> copy/download
AI response -> browser JavaScript -> verification prompt -> copy
```

There is no backend call in the prompt generation or verification prompt flow.

## Privacy model

The app does not intentionally store user text in a database or send it to a
server. User-entered text lives in the current browser page while the page is
open.

## Design principle

The app should remain understandable by reading the files directly. Avoid
frameworks and build steps unless they clearly improve the project without
raising the learning curve.
