# Prompt Claro / Clear Prompt Builder

> Turn messy thoughts into a first prompt that is clear enough to use, then optionally check the AI answer against the original text.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.5-blue.svg)](VERSION)
[![No Backend](https://img.shields.io/badge/backend-none-lightgrey.svg)](#privacy)
[![Browser Only](https://img.shields.io/badge/runs-in_browser-brightgreen.svg)](#quick-start)

Prompt Claro, powered by the NHA method, is a small open-source browser tool for people who already use
ChatGPT, Gemini, Claude, or any AI tool, but still paste raw, messy thoughts
and get inconsistent results.

It helps you turn an initial idea, call note, WhatsApp-style message, client
brief, or legal/operations note into a cleaner prompt using a TCE + NHA style
workflow.

After the first prompt is generated, it can also help with the next step: paste
the AI response back in and create a checking prompt to see whether the AI
invented facts, skipped pending information, or drifted away from the original
text.

Live demo: [https://www.ashishpunj.com/nha-tce/](https://www.ashishpunj.com/nha-tce/)

## Why this exists

Most people do not need an "AI agent" on day one.

They first need a better way to ask.

Prompt Claro teaches that step. It gives users a simple pattern:

```text
raw thoughts -> TCE structure -> NHA rules -> better AI output
AI output -> checking prompt -> safer human review
```

The goal is not to replace judgment. The goal is to make the instruction more
explicit, separate facts from assumptions, and force missing information to stay
visible.

## What it does

- Turns a rough ask, message, or work context into a structured prompt.
- Works with ChatGPT, Gemini, Claude, or any AI you use.
- Supports Spanish, English, Hindi, and Punjabi.
- Keeps Spanish examples Mexico-first and English/Hindi/Punjabi examples India-first.
- Runs fully in the browser.
- Does not require login, install, backend, API key, or database.
- Includes examples for legal, consulting, CX, operations, coding/product, and proposals.
- Includes a human checklist before trusting AI output.
- Reveals the answer-checking flow only after the first prompt is ready.
- Generates a checking prompt to audit the AI response against the original text.

## Quick start

No setup required.

1. Download or clone this repo.
2. Open `index.html` in your browser.
3. Pick the work type.
4. Pick what you want to receive.
5. Write or paste your rough case, or load an example.
6. Generate the prompt.
7. Copy it into ChatGPT, Gemini, Claude, or any AI you use.
8. After the AI answers, paste the response back into the checking box if you want a second-pass review.
9. Generate a checking prompt and use it to review the answer before acting.

Optional check for contributors:

```bash
npm run check
```

## Privacy

The prompt is generated locally in your browser.

There is no backend in this project. The tool does not intentionally send your
text to a server or store it in a database. If you paste sensitive
information into any web page or into an AI tool, use your own judgment and
review the privacy policy of that AI tool.

## Languages

- Spanish
- English
- Hindi
- Punjabi

Language can be selected from the UI. The selected language can also be passed
with a query parameter or opened directly through a localized page:

```text
?lang=es
?lang=en
?lang=hi
?lang=pa
/en.html
/hi.html
/pa.html
```

## Project structure

```text
.
|-- index.html
|-- en.html
|-- hi.html
|-- pa.html
|-- info.html
|-- style.css
|-- app.js
|-- samples/
|-- docs/
|-- LICENSE
|-- VERSION
`-- CHANGELOG.md
```

## What TCE and NHA mean here

TCE means:

- Task
- Context
- Expectation

NHA means:

- keep the original text visible
- make assumptions explicit
- ask the AI to mark missing information
- keep human verification in the loop

This is intentionally practical, not academic. The project is meant to help
people move from casual prompting to a more reliable way of working with AI.

## Contributing

Good first contributions:

- improve translations
- add better examples
- add more output formats
- improve mobile UX
- add accessibility fixes
- make the prompt rules clearer
- create classroom exercises around the tool

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Roadmap

See [ROADMAP.md](ROADMAP.md).

## License

MIT License. See [LICENSE](LICENSE).

Copyright (c) 2026 Albert Punj.

## Star the project

If this helps you or your students get better AI outputs, please star the repo.
It helps more people discover a practical way to move beyond random prompting.
