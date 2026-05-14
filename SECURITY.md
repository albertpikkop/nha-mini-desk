# Security Policy

## Supported version

The current public version is listed in `VERSION`.

## Reporting a security issue

If you find a security or privacy issue, please open a GitHub issue and mark it
clearly as a security or privacy concern.

Do not include private user text, secrets, API keys, or personal data in public
issues.

## Privacy boundary

Prompt Claro / Clear Prompt Builder is designed as a browser-first tool:

- no login
- no API key required
- no intentional server-side storage of user text
- prompt generation happens in the browser
- optional star ratings may be stored by the hosted version with basic metadata such as language, work type, page path, session ID, and browser user agent
- local/static copies do not have the rating endpoint; the app should explain that rating storage is unavailable instead of sending prompt text elsewhere

Please discuss any contribution that would change this boundary before opening
a pull request.
