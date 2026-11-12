# Nada Elsebaee Lab — Project Reference

> **Living project brief.** Last reviewed: 2026-11-11. Read this file before making changes, and update it when project facts, decisions, or delivery status change. VS Code agent sessions that support workspace hooks automatically record changed website source files below; assistants must still update factual context when it changes. See `AGENTS.md` for the assistant workflow.

## Project at a glance

Nada Elsebaee Lab is a bilingual (Arabic/English) personal portfolio for Nada Elsebaee. It presents her work across writing, cultural project design, learning content, visual production, and digital content and operations. The site should establish professional authority through accurate evidence and selected work, without making unsupported claims.

## Current product and design direction

- Arabic is the default language and uses RTL; English uses LTR. The language toggle persists in `localStorage`.
- Arabic user-facing copy uses general, gender-neutral phrasing rather than addressing visitors with feminine or masculine forms.
- Main navigation places Experience Archive after About, labels the blog "Blog / المدونة" and the contact page "Collaborate / للتعاون"; navigation arrows use direction-stable SVG icons.
- The visual identity is warm, editorial, and creative, using the existing CSS design tokens in `style.css`. The raised-card, subtle 3D treatment and green/blue accents established on the Services page are shared across the site; each page keeps its own content and layout. Do not introduce page-specific fonts or colors without approval.
- A dedicated Services page presents six expanded bilingual service offers with locally stored imagery and links to related archive projects. The homepage previews the offers as alternating visual/text cards between the hero/highlights and experience archive.
- A dedicated bilingual Studio page presents selected YouTube videos as lightweight thumbnail cards under the title "A Space for Visual Stories / مساحة للحكايات المرئية". Videos load in a privacy-enhanced embedded player only when selected; each video title links to its corresponding archive project, with no separate source or project-transition links.
- A persistent translucent return control sits at the lower-left of every page: it scrolls to the top when the page is scrolled and returns to the previous browser-history entry at the top, with the homepage as a no-history fallback.
- The homepage now uses a 3D editorial hero treatment, an asymmetric six-card services mosaic, and a Lawha film still in the Studio feature.
- Blog content is temporarily hidden from the site's navigation, footer, and homepage; its pages are marked `noindex` and their direct URLs redirect to the homepage. The four articles and their content remain in `SITE.blogPosts` and the standalone HTML files for later development. Published work and newsletter setup can be revisited when the blog is reopened.
- The About page presents one professional portrait, the latest user-approved bilingual profile copy, five competency areas, education and selected professional training, a five-step work approach, and a collaboration call to action. The profile names UNESCO, CARE International, Habitat for Humanity, EUNIC, and Makanuna among its collaborators, as supplied by Nada. Project and group photos are kept with their archive records.
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

- **Writing experience and archive cards:** The former screenplay-priority card is now a bilingual Writing Experience feature above the archive timeline, with details covering screenplays, Lawha, GAIA's Decoding Beauty content, Sawa Sawa educational writing, actor-showreel scenes, and the Cairo University Cultural Development capstone. Legacy `screenplays` detail URLs resolve to the writing record. Summary descriptions are omitted from archive and homepage experience cards; detail pages retain the full context.
- **Mastery Academy:** The record distinguishes the 2018–2019 setup contribution from the January 2021–June 2022 role and reflects the documented production of 30+ courses, team and schedule coordination, content review, and workflow/archive management.
- **About profile:** Updated the bilingual introduction, career overview, collaborators, five areas of work, education/training headings, five-step methodology, and collaboration copy to match Nada's latest supplied text. The DisasterReady.org training entry links to its public website.

- **Visual archive:** Project galleries use local project-matched assets for GAIA Global, Weavers of the Nile, Al-Asmarat, Makanuna/Darb al-Ahmar, CARE, Lawha, Gelsa Orfeya, Bara Geiby, and Delta Little Queen Festival. Captions are not displayed; meaningful alternative text remains for accessibility, and gallery tiles use a consistent 4:3 frame without cropping the source image. Duplicate filenames are shown once per project and once in the Studio gallery. Records without verified project images are text-only rather than displaying placeholders. The Cultural Development Diploma group photo is now in the writing/research archive record; About keeps one portrait and no field-photo gallery. The general camera photo is no longer assigned to Hakim, Sky, South Sinai, or Studio. The Styling Roles card uses the Yomeddine poster without attributing film awards to Nada. Screenplays are prioritized at the top of the archive. The Falouga training and Pioneers Academy experience records were removed from the public archive at Nada's request; their source image files remain unchanged. Lawha's cover and gallery together show its available local project images. Original assets were not changed or moved; no images were extracted from the portfolio deck/PDF.
- **Video mapping:** `SITE.studioVideos` remains the single source for the 12 selected videos. Every Studio video is also embedded on its linked project page; titles link to the project, and the original-source links are omitted from cards. The Lawha film and Galala University behind-the-scenes video map to Lawha and Sky, respectively. Neither is classified as makeup documentation.
- **Remaining visual/source confirmations:** No project-specific image is available for Hakim, Sky, or South Sinai, so those records no longer reuse the general camera photo. No dedicated TEN Channel or Batata Film image was found; the Yomeddine poster is used as the Styling Roles cover without attributing film awards to Nada. No official GAIA blog URL was found in the supplied profile or on the supplied shop page, so only the verified official shop link is published. The profile identifies the Weavers of the Nile screening at the Italian Cultural Institute; the requested Spanish Cultural Center venue is not asserted without a matching source.
- **Domain and hosting:** No domain, DNS provider, or hosting configuration is recorded in this project. Confirm the domain owner and chosen static host before deployment. Never request account passwords or make DNS/production changes without explicit approval.
- **Contact form:** `SITE.formEndpoint` in `content.js` is empty. The form must remain disabled until Nada configures an endpoint in her own Formspree account.
- **Blog:** Temporarily hidden from all site navigation, footer, and homepage links; its index and four article pages have `noindex, nofollow` metadata and redirect to the homepage. Keep the content and files for future editing. The Arabic articles, methodology notes, research-source disclosure, and optional image metadata remain in `content.js`; do not delete them while the section is paused.
- **Studio:** Twelve unique supplied video links are included; duplicated references are stored once. Video thumbnails come from YouTube and embedded playback loads on user interaction. Video and photo project titles link to their archive records; source links and visible image captions are omitted. Photo galleries use project-matched assets, a consistent display size and duplicate suppression. Targeted Arabic/English phone and desktop browser checks found no horizontal overflow or broken local images.
- **Master Factbook:** Add the public/shareable Notion URL only when Nada supplies the exact link and confirms it is intended for public sharing.
- **Services:** The six bilingual service offers and homepage preview use expanded descriptions and local images. The visual-documentation and cultural-project-design illustrations are assigned in both language arrays, and the latter service is titled “تصميم وتنسيق المشروعات الثقافية والفنية والتعليمية / Cultural, Arts & Education Project Design and Coordination.” The creative-operations offer was removed; its unused image file remains unchanged. Service contact links use the current public site email and WhatsApp number.
- **Automatic cleanup safety:** Cleanup is limited to replacing the generated sync summary with the latest one. Never automatically delete site content, images, assets, or project files. The sync baseline is one temporary file per project and is overwritten in place.

## Image mapping and editorial status

The existing static HTML/CSS/JavaScript structure and shared `project.html?id=...` route remain in use; no framework or page route was added. Existing project links for Yomeddine and TEN resolve to the combined styling record, while the former music-video documentation link resolves to Sky. The homepage portrait remains `assets/images/projects/assetsimagesnada-portrait.webp`; the Yomeddine poster is used only in the explicitly requested styling-work context.

Project-detail and Studio galleries use existing local project media:

| Project | Gallery sources | Editorial label |
| --- | --- | --- |
| GAIA Global | `assets/images/projects/assetsimagesprojectsgaia-global (2).webp` through `(4).webp`; official shop `https://gaia-global.shop/` | Jewellery collections and brand visuals |
| Weavers of the Nile | `assets/images/projects/assetsimagesprojectsnassajat-alnil (1).webp` through `(5).webp` | Project activities, crafts, and documentation |
| Al-Asmarat | `assets/images/projects/assetsimagesprojectsalasmarat.webp`; `assetsimagesprojectsalasmarat (2).webp`; `https://youtu.be/L-MSt3wE81A` | Project visuals and embedded documentary |
| Makanuna Lens / Darb al-Ahmar | `assets/images/projects/makanuna-visual.webp` as the 2025 archive/detail cover; `darb-al-ahmar-tour.webp` and `(2)`–`(4).webp`; `https://youtu.be/1vPOFFTtjMY` | One consolidated detail record for place, activities, and tour documentation |
| CARE International / Le Caire | `assets/images/projects/care-lecaire.webp`; `care-lecaire (2).webp` | Nada before the CARE banner and a project-context group photo |
| Sky Event Management | `https://youtu.be/Wy_BOSZIYtE` | Galala University music-video behind-the-scenes; no project-specific cover photo is assigned |
| Lawha | `lawha.webp` and `lawha (1).webp` through `(17).webp`; `https://youtu.be/4g0vl2CBbi0` | All available film images and original film |
| Gelsa Orfeya / Bara Geiby | `gelsa-orfeya.webp` and `(2)`–`(3).webp`; `bara-geiby.webp` and `(2).webp` | Selected film/theatre images reused in Studio |
| Delta Little Queen Festival | `delta-festival.webp` and `(2)`–`(4).webp` | Festival documentation |
| About Nada / Writing Experience | One professional portrait in About; `assetsimagesnada-culturaldevelepment-college (3).webp` in the writing/research project; CARE group photo remains linked to CARE | About keeps one portrait; group photos remain in the archive records relevant to their context |

The Yomeddine, TEN Channel, and Batata Film records are presented together under “Styling Roles / أدوار تنسيق الملابس.” Existing Yomeddine and TEN project query URLs resolve to that combined record. The original Yomeddine poster is displayed as supplied; its festival awards are not attributed to Nada. No TEN Channel or Batata Film images are available in the project image archive.

Gallery images keep Arabic and English alternative text for accessibility, load lazily, and display in consistent 4:3 frames without cropping. The Cultural Development Diploma photo remains in the writing/research archive context, and CARE participants appear only in CARE context. All local image paths referenced by project data are verified against existing files. Project covers are not repeated in their galleries. No new framework, route, or image derivative was created for this task. The source material contains no verified GAIA blog link or project-specific Hakim, Sky, or South Sinai cover photo; the general camera photo is no longer referenced by those project records.

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
- Last sync (local time): `12 Nov 2026, 16:31:39 Africa/Cairo`
- Last sync (UTC): `2026-11-12T14:31:39.616Z`
- Files detected in the latest sync: `style.css`
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
