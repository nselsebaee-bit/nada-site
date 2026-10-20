# Project Assistant Instructions

- Read `README.md` before making project changes; it is the shared, user-facing source of approved context, decisions, and pending work.
- After meaningful changes, update the relevant project facts and delivery status in `README.md`; the workspace hook records changed paths and local/UTC timestamps, but cannot infer change meaning. It retains only the latest sync record.
- If workspace hooks are supported, `.github/hooks/project-reference.json` runs the automatic source-change tracker after agent tool calls. Do not claim other AI applications run this hook unless verified.
- Automatic cleanup may replace only the generated sync summary and update its single temporary baseline. Never auto-delete project content, images, assets, or other user files.
- Treat the source files as authoritative for implemented behavior. Preserve approved Arabic/English copy and avoid inventing biographical facts, dates, URLs, or credentials.
- Keep the site bilingual and responsive, preserve RTL/LTR behavior, and use the existing design tokens in `style.css`.
- For JavaScript changes, run `node --check .\content.js` and `node --check .\script.js`. For UI changes, preview both languages and mobile/desktop layouts.
- Never expose secrets, private workspace links, or account credentials. Do not change production DNS or deploy without explicit approval.
