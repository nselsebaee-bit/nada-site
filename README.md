# Nada Elsebaee Lab — Project Reference

> **Living project brief.** Last reviewed: 2026-10-20. Read this file before making changes, and update it when project facts, decisions, or delivery status change. VS Code agent sessions that support workspace hooks automatically record changed website source files below; assistants must still update factual context when it changes. See `AGENTS.md` for the assistant workflow.

## Project at a glance

Nada Elsebaee Lab is a bilingual (Arabic/English) personal portfolio for Nada Elsebaee. It presents her multidisciplinary work across operations, instructional design, cultural research, creative production, visual documentation, and digital tools. The site should establish professional authority through accurate evidence and selected work, without making unsupported claims.

## Current product and design direction

- Arabic is the default language and uses RTL; English uses LTR. The language toggle persists in `localStorage`.
- Arabic user-facing copy uses general, gender-neutral phrasing rather than addressing visitors with feminine or masculine forms.
- Main navigation places Experience Archive after About, labels the blog "Blog / المدونة" and the contact page "Collaborate / للتعاون"; navigation arrows use direction-stable SVG icons.
- The visual identity is warm, editorial, and creative, using the existing CSS design tokens in `style.css`. The raised-card, subtle 3D treatment and green/blue accents established on the Services page are shared across the site; each page keeps its own content and layout. Do not introduce page-specific fonts or colors without approval.
- A dedicated Services page presents seven expanded bilingual service offers with CSS-generated visual panels (temporary until approved service images are added) and links to related archive projects. The homepage previews the services as alternating visual/text cards between the hero/highlights and experience archive; AI-assisted production, content and workflow support are described in relevant offers.
- A dedicated bilingual Studio page presents selected YouTube videos as lightweight thumbnail cards under the title "A Space for Visual Stories / مساحة للحكايات المرئية". Its introduction describes the range of visual work generally rather than naming only selected project types. Videos load in a privacy-enhanced embedded player only when selected; each card links to its corresponding project in the archive.
- A persistent translucent return control sits at the lower-left of every page: it scrolls to the top when the page is scrolled and returns to the previous browser-history entry at the top, with the homepage as a no-history fallback.
- The homepage now uses a 3D editorial hero treatment and an asymmetric seven-card services mosaic; abstract graphics remain CSS-generated so the layout does not depend on placeholder artwork.
- Blog content is temporarily hidden from the site's navigation, footer, and homepage; its pages are marked `noindex` and their direct URLs redirect to the homepage. The four articles and their content remain in `SITE.blogPosts` and the standalone HTML files for later development. Published work and newsletter setup can be revisited when the blog is reopened.
- The About page has a 3D-inspired hero, a four-part competencies graphic, education, a professional-training timeline, a designed five-field approach section, and a contact call to action.
- Motion is decorative and should respect `prefers-reduced-motion`. Keep all pages responsive and keyboard accessible.
- Use approved photographs and project imagery only. Do not publish identifiable images of children or program participants without appropriate permission.

## Site structure

| File | Responsibility |
| --- | --- |
| `index.html` | Homepage, featured work, and capabilities |
| `archive.html` | Filterable experience and project archive |
| `project.html?id=<project-id>` | Shared project detail page |
| `articles.html` | Blog index, filters, and published work |
| `fifteen-minute-operations-check.html` | Blog article: operations check |
| `write-a-clear-learning-objective.html` | Blog article: learning design |
| `field-documentation-shot-list.html` | Blog article: visual documentation |
| `popular-culture-critical-thinking.html` | Blog article adapted from supplied research themes |
| `studio.html` | Selected video work and links to related projects |
| `services.html` | Services overview and related project links |
| `about.html` | Profile, competencies, education, training, and selected work |
| `contact.html` | Contact links and optional contact form |
| `content.js` | Arabic/English copy, project data, public links, contact settings |
| `script.js` | Shared page rendering, navigation, localization, and interactions |
| `style.css` | Shared components, design tokens, responsive layouts, and page styles |

The site is plain HTML, CSS, and vanilla JavaScript. It has no package dependencies, build step, or configured test suite. For local navigation, serve the folder with a static HTTP server rather than relying on `file://` when browser restrictions interfere.

## Content and accuracy guardrails

- Preserve the user's supplied facts. Do not invent roles, dates, qualifications, clients, awards, media coverage, or impact metrics.
- If a fact is uncertain or sources conflict, flag it for Nada to confirm instead of silently choosing or publishing it as verified.
- The current profile describes more than 11 years of experience, 2014–2026. Education, work dates, organization names, and publication descriptions should follow the latest user-approved copy in `content.js`.
- Distinguish published outputs from unpublished academic research. Do not describe unpublished research as journal publications.
- Keep confidential Notion/Airtable material private. Never add private workspace URLs or credentials to the public site.
- The public Master Factbook card exists, but its direct Notion URL has not been supplied.

## Delivery status and open items

- **Photography:** The homepage hero still uses a designed placeholder; no approved portrait/image assets are present in the project root. Follow the image plan below when adding approved assets. Preserve meaningful alt text and do not publish identifiable images of children or program participants without permission.
- **Domain and hosting:** No domain, DNS provider, or hosting configuration is recorded in this project. Confirm the domain owner and chosen static host before deployment. Never request account passwords or make DNS/production changes without explicit approval.
- **Contact form:** `SITE.formEndpoint` in `content.js` is empty. The form must remain disabled until Nada configures an endpoint in her own Formspree account.
- **Blog:** Temporarily hidden from all site navigation, footer, and homepage links; its index and four article pages have `noindex, nofollow` metadata and redirect to the homepage. Keep the content and files for future editing. The Arabic articles, methodology notes, research-source disclosure, and optional image metadata remain in `content.js`; do not delete them while the section is paused.
- **Studio:** Twelve unique supplied video links are included; a duplicated GAIA Global video URL is shown once. Video thumbnails come from YouTube and embedded playback loads on user interaction. Cards use the existing archive project IDs.
- **Master Factbook:** Add the public/shareable Notion URL only when Nada supplies the exact link and confirms it is intended for public sharing.
- **Services:** The seven bilingual service offers and homepage preview are implemented with expanded descriptions and CSS-generated image panels as temporary placeholders. To add approved service photography, set an `image` path on the corresponding service item in both language arrays in `SITE.services`; service contact links use the current public site email and WhatsApp number.
- **Automatic cleanup safety:** Cleanup is limited to replacing the generated sync summary with the latest one. Never automatically delete site content, images, assets, or project files. The sync baseline is one temporary file per project and is overwritten in place.

## Image asset plan

The homepage portrait and service-card graphics are currently placeholders/CSS artwork. Only use photographs, film stills, publication covers, and project materials that Nada owns or has permission to publish. The project filenames below are suggested image files, not automatically wired page assets yet. Keep the paths/names consistent so they can be connected to the matching project records later:

| Priority | Suggested file | Use |
| --- | --- | --- |
| First | `assets/images/nada-portrait.webp` | Homepage portrait (the About-page visual is currently CSS artwork; a portrait there is optional and would require a separate design update) |
| Featured | `assets/images/projects/gaia-global.webp` | GAIA Global archive card and project cover |
| Featured | `assets/images/projects/sawa-sawa.webp` | Sawa Sawa archive card and project cover; guide cover is suitable |
| Featured | `assets/images/projects/nassajat-alnil.webp` | Nassajat El Nile archive card and project cover |
| Featured | `assets/images/projects/wuf12.webp` | WUF12 archive card and project cover |
| Featured | `assets/images/projects/dar-al-mabra.webp` | Amten / Dar Al-Mabara archive card and project cover |
| Featured | `assets/images/projects/makanuna-visual.webp` | Makanuna archive card and project cover |
| Featured | `assets/images/projects/alasmarat.webp` | Al-Asmarat archive card and project cover |
| Next | `assets/images/projects/darb-al-ahmar-tour.webp` | Darb Al-Ahmar tour archive card and project cover |
| Next | `assets/images/projects/mastery-academy.webp` | Mastery Academy archive card and project cover |
| Next | `assets/images/projects/on-time-pioneers.webp` | On Time Group / Pioneers Academy archive card and project cover |
| Next | `assets/images/projects/hakim-archive.webp` | Hakim archive card and project cover |
| Next | `assets/images/projects/care-lecaire.webp` | CARE International / Le Caire archive card and project cover |
| Optional | `assets/images/projects/sky-events.webp` | Sky Events archive card and project cover |
| Optional | `assets/images/projects/yomeddine.webp` | Yomeddine archive card and project cover |
| Optional | `assets/images/projects/lawha.webp` | Lawha archive card and project cover |
| Optional | `assets/images/projects/independent-films.webp` | Independent film projects archive card and project cover |
| Optional | `assets/images/projects/gelsa-orfeya.webp` | Gelsa Orfeya archive card and project cover |
| Optional | `assets/images/projects/bara-geiby.webp` | Bara Geiby archive card and project cover |
| Optional | `assets/images/projects/screenplays.webp` | Screenwriting archive card and project cover |
| Optional | `assets/images/projects/music-video-documentation.webp` | Music video documentation archive card and project cover |
| Optional | `assets/images/projects/sinai-community.webp` | South Sinai community arts archive card and project cover |
| Optional | `assets/images/projects/palestinian-training.webp` | Palestinian training documentation archive card and project cover |
| Optional | `assets/images/projects/actor-showreels.webp` | Actor showreels archive card and project cover |
| Optional | `assets/images/projects/ten-tv.webp` | TEN TV archive card and project cover |
| Optional | `assets/images/projects/delta-festival.webp` | Delta Little Queen archive card and project cover |

Start with the portrait and one cover image for each featured project. Archive cards and service cards can be wired to approved image paths; project-detail hero and gallery support will need implementation before those images can be displayed there. Service cards can reuse a relevant project image, so separate service photos are not required at first. WebP is preferred; keep originals separately, export portrait images near 1200 px on the long edge and project covers around 1200 × 800 px, and avoid uploading large camera originals to the website. Place assets in the matching folders under `assets/images/`; after adding them, the image paths still need to be connected in `content.js`.

## Adding blog posts

The blog is intentionally static and dependency-free. Add a post to both language arrays in `SITE.blogPosts` in `content.js`, with a category, reading-time estimate, title, SEO description, introduction, methodology/scope note, and ordered `sections` containing headings and paragraphs. The article detail renderer supports optional section-level images and a gallery; supply verified image date, location, caption, and alt text. English versions may be concise adaptations but should say so in `englishEditionNote`. The index renders filterable cards, and each article has a standalone detail page. Do not label work as peer-reviewed or published without confirmation. Published portfolio outputs are maintained separately in `SITE.publishedWorks`. The newsletter link stays hidden until `SITE.substack` contains the confirmed public URL; the page does not collect email addresses until a real subscription service is configured.

## Validation workflow

After editing JavaScript, run:

```powershell
node --check .\content.js
node --check .\script.js
```

For UI changes, preview both Arabic and English, verify RTL/LTR and keyboard interaction, and check narrow mobile, tablet, and desktop widths (for example 375px, 768px, and 1440px). Confirm there is no unintended horizontal overflow. There is currently no automated test or build command.

## Automatic source-change tracking

<!-- AUTO-SYNC:START -->
- Last sync (local time): `21 Oct 2026, 00:37:14 Africa/Cairo`
- Last sync (UTC): `2026-10-20T21:37:14.228Z`
- Files detected in the latest sync: `assets/images/projects/assetsimagesnada-culturaldevelepment-college (2).webp`, `assets/images/projects/assetsimagesnada-culturaldevelepment-college (3).webp`, `assets/images/projects/assetsimagesnada-culturaldevelepment-college (4).webp`, `assets/images/projects/assetsimagesnada-culturaldevelepment-college (5).webp`, `assets/images/projects/assetsimagesnada-culturaldevelepment-college (6).webp`, `assets/images/projects/assetsimagesnada-culturaldevelepment-college (7).webp`, `assets/images/projects/assetsimagesnada-culturaldevelepment-college (8).webp`, `assets/images/projects/assetsimagesnada-culturaldevelepment-college.webp`, `assets/images/projects/assetsimagesnada-culturaldevelepment-study.webp`, `assets/images/projects/assetsimagesnada-portrait (2).webp`, `assets/images/projects/assetsimagesnada-portrait (4).webp`, `assets/images/projects/assetsimagesnada-portrait.webp`, `assets/images/projects/assetsimagesprojectsalasmarat (2).webp`, `assets/images/projects/assetsimagesprojectsalasmarat.webp`, `assets/images/projects/assetsimagesprojectsdar-al-mabra (2).webp`, `assets/images/projects/assetsimagesprojectsdar-al-mabra (3).webp`, `assets/images/projects/assetsimagesprojectsdar-al-mabra (4).webp`, `assets/images/projects/assetsimagesprojectsdar-al-mabra (5).webp`, `assets/images/projects/assetsimagesprojectsdar-al-mabra (6).webp`, `assets/images/projects/assetsimagesprojectsdar-al-mabra.webp`, `assets/images/projects/assetsimagesprojectsgaia-global (2).webp`, `assets/images/projects/assetsimagesprojectsgaia-global (3).webp`, `assets/images/projects/assetsimagesprojectsgaia-global (4).webp`, `assets/images/projects/assetsimagesprojectsgaia-global.webp`, `assets/images/projects/assetsimagesprojectsmakanuna-visual (1).webp`, `assets/images/projects/assetsimagesprojectsnassajat-alnil (1).webp`, `assets/images/projects/assetsimagesprojectsnassajat-alnil (2).webp`, `assets/images/projects/assetsimagesprojectsnassajat-alnil (3).webp`, `assets/images/projects/assetsimagesprojectsnassajat-alnil (4).webp`, `assets/images/projects/assetsimagesprojectsnassajat-alnil (5).webp`, `assets/images/projects/assetsimagesprojectsnassajat-alnil.webp`, `assets/images/projects/assetsimagesprojectssawa-sawa (2).webp`, `assets/images/projects/assetsimagesprojectssawa-sawa (3).webp`, `assets/images/projects/assetsimagesprojectssawa-sawa (4).webp`, `assets/images/projects/assetsimagesprojectssawa-sawa (5).webp`, `assets/images/projects/assetsimagesprojectssawa-sawa (6).webp`, `assets/images/projects/assetsimagesprojectssawa-sawa (7).webp`, `assets/images/projects/assetsimagesprojectssawa-sawa.webp`, `assets/images/projects/assetsimagesprojectswuf12 (2).webp`, `assets/images/projects/assetsimagesprojectswuf12.webp`, `assets/images/projects/bara-geiby (2).webp`, `assets/images/projects/bara-geiby.webp`, `assets/images/projects/care-lecaire (2).webp`, `assets/images/projects/care-lecaire.webp`, `assets/images/projects/darb-al-ahmar-tour (2).webp`, `assets/images/projects/darb-al-ahmar-tour (3).webp`, `assets/images/projects/darb-al-ahmar-tour (4).webp`, `assets/images/projects/darb-al-ahmar-tour.webp`, `assets/images/projects/delta-festival (2).webp`, `assets/images/projects/delta-festival (3).webp`, `assets/images/projects/delta-festival (4).webp`, `assets/images/projects/delta-festival.webp`, `assets/images/projects/gelsa-orfeya (2).webp`, `assets/images/projects/gelsa-orfeya (3).webp`, `assets/images/projects/gelsa-orfeya.webp`, `assets/images/projects/independent-films.webp`, `assets/images/projects/lawha (1).webp`, `assets/images/projects/lawha (10).webp`, `assets/images/projects/lawha (11).webp`, `assets/images/projects/lawha (12).webp`, `assets/images/projects/lawha (13).webp`, `assets/images/projects/lawha (14).webp`, `assets/images/projects/lawha (15).webp`, `assets/images/projects/lawha (16).webp`, `assets/images/projects/lawha (17).webp`, `assets/images/projects/lawha (2).webp`, `assets/images/projects/lawha (3).webp`, `assets/images/projects/lawha (4).webp`, `assets/images/projects/lawha (5).webp`, `assets/images/projects/lawha (6).webp`, `assets/images/projects/lawha (7).webp`, `assets/images/projects/lawha (8).webp`, `assets/images/projects/lawha (9).webp`, `assets/images/projects/lawha.webp`, `assets/images/projects/mastery-academy (2).webp`, `assets/images/projects/mastery-academy (3).webp`, `assets/images/projects/mastery-academy.webp`, `assets/images/projects/music-video-documentation.webp`, `assets/images/projects/nada-develepment-lab (2).webp`, `assets/images/projects/nada-develepment-lab.webp`, `assets/images/projects/screenplays.webp`, `assets/images/projects/yomeddine.webp`
- Retention: latest sync only; each update replaces this record instead of accumulating an old log.
- This hook detects changed website source/assets; assistants must still update the project facts and open-item sections when those change.
<!-- AUTO-SYNC:END -->

The workspace hook is configured in `.github/hooks/project-reference.json`; its script is `scripts/sync-project-reference.js`. It detects changes to website source, documentation, configuration, and image files and records the latest changed paths with local and UTC timestamps here. Only the latest sync is kept; the previous generated sync details are replaced, not accumulated. README's generated status block is normalized during change detection so updating its timestamp does not trigger an endless sync loop. The hook's single hash snapshot is stored in the operating-system temporary directory and overwritten on each source change. The hook cannot infer the meaning of a change, and it runs only in assistant environments that support VS Code workspace hooks. Other tools must follow `AGENTS.md`; no hook can guarantee updates in every unrelated AI extension or application.

## Safe update protocol for assistants

1. Read this project reference and inspect the relevant source files before editing.
2. Treat the implementation as authoritative for current behavior and this file as the summary of approved context, decisions, and outstanding work.
3. After a meaningful change, update only the affected sections above: record new approved facts or decisions, current completion state, and remaining blockers.
4. Do not claim that the domain is connected, images are installed, or integrations work until verified in the actual project/deployment.
5. Never put passwords, API keys, private Notion links, or other secrets in this file.
