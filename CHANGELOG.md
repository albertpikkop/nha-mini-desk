# Changelog

## v0.1.12 - 2026-05-15

- Added beginner task choices for common daily AI use cases.
- Added prompt scoring with strengths and missing-item guidance.
- Added a copyable before/after share card.
- Split prompt data and prompt engine code from UI behavior.
- Updated asset query strings to force the new score/share flow to load on hosted pages.

## v0.1.11 - 2026-05-07

- Added category-specific process steps for career, sales, marketing, business, SaaS build, legal, study, and general prompts.
- Kept the user flow unchanged while making generated prompts more task-aware.
- Updated asset query strings to force the new prompt engine to load on shared links.

## v0.1.10 - 2026-05-07

- Added an Anthropic-style process section to generated prompts so the AI identifies the task, extracts facts, marks missing information, and only then drafts the output.
- Added a low-confidence rule: if the AI is not sure, it must mark uncertainty instead of guessing.
- Added a final self-check section before the requested output format.
- Bumped asset query strings to avoid stale cached launch files.

## v0.1.9 - 2026-05-07

- Reworked the mobile launch flow so users paste first, generate second, and copy third.
- Moved options and examples behind a simpler "Options and examples" control.
- Put the copy button above the generated prompt and hid the download button on mobile.
- Show star rating only after copy, with non-blocking rating failures.
- Clarified privacy copy and added a guard when users paste the first prompt into the answer-checking field.

## v0.1.8 - 2026-05-07

- Replaced the text feedback form with a simple one-tap star rating.
- Removed the top Feedback button so the core flow stays focused.
- Added hosted rating tracking without sending the user's prompt text.

## v0.1.7 - 2026-05-07

- Added an always-visible Feedback button near the language selector.
- The Feedback button opens the feedback card without requiring the user to generate a prompt first.

## v0.1.6 - 2026-05-07

- Added an in-page feedback card that appears after a user generates a prompt.
- Feedback can be copied or shared through the device share sheet / WhatsApp.
- Kept the feedback flow browser-only so the tool still has no login, backend, or database.

## v0.1.5 - 2026-05-07

- Simplified the first-use journey so the core flow is pick work, load or paste, generate, copy to AI.
- Hid the AI answer-checking section until the first prompt exists, reducing first-screen confusion.
- Replaced public "verification prompt" wording with simpler "checking/review prompt" language.
- Added a quick before/after proof example above the main form.

## v0.1.4 - 2026-05-06

- Added a second verification loop so users can paste an AI response back into the tool.
- Generates a verification prompt that checks the AI response against the original text.
- Added source-material guardrails so original text is treated as evidence, not hidden instructions.
- Added mobile-friendly scrolling to the generated verification prompt.

## v0.1.3 - 2026-05-06

- Rewrote Spanish, English, Hindi, and Punjabi UI copy to feel colloquial instead of literally translated.
- Shifted public wording from "notes" to more natural phrases such as case, rough ask, original text, and jo AI se karwana hai.
- Polished Hindi and Punjabi with more natural Hinglish/Punjabi-English phrasing for Indian users.
- Updated README language to match the public product copy.

## v0.1.2 - 2026-05-06

- Added culturally specific names and local business details to the examples.
- Spanish examples now include Mexican names such as Mariana López, Carlos Rivas, Ana Sofía Martínez, and José Luis Hernández.
- English and Hindi examples now include Indian names such as Riya Sharma, Amit Mehra, Neha Kapoor, and Harpreet Singh.
- Punjabi examples now include Punjabi/North India names in Gurmukhi, such as ਸਿਮਰਨ ਕੌਰ, ਜਸਪ੍ਰੀਤ ਸਿੰਘ, ਨੇਹਾ ਕਪੂਰ, and ਹਰਪ੍ਰੀਤ ਸਿੰਘ.

## v0.1.1 - 2026-05-06

- Replaced insider-facing Spanish "notas" copy with more generic public wording such as idea, message, request, and original text.
- Kept Spanish examples Mexico-first with RFC, IVA, and S.A. de C.V. context.
- Localized English, Hindi, and Punjabi examples for Indian audiences with India-specific business, GST, GSTIN, CIN, INR, and Mohali/Gurugram context.
- Updated the public footer version.

## v0.1.0 - 2026-05-06

- Initial public browser release.
- Added Spanish, English, Hindi, and Punjabi interface.
- Added local prompt generation with no login and no app download.
- Added MIT License and copyright notice.
