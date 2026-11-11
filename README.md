# Nada Elsebaee Lab — Project Reference

> **Living project brief.** Last reviewed: 2026-11-11. Read this file before making changes, and update it when project facts, decisions, or delivery status change. VS Code agent sessions that support workspace hooks automatically record changed website source files below; assistants must still update factual context when it changes. See `AGENTS.md` for the assistant workflow.

## Project at a glance

Nada Elsebaee Lab is a bilingual (Arabic/English) personal portfolio for Nada Elsebaee. It presents her multidisciplinary work across operations, instructional design, cultural research, creative production, visual documentation, and digital tools. The site should establish professional authority through accurate evidence and selected work, without making unsupported claims.

## Current product and design direction

- Arabic is the default language and uses RTL; English uses LTR. The language toggle persists in `localStorage`.
- Arabic user-facing copy uses general, gender-neutral phrasing rather than addressing visitors with feminine or masculine forms.
- Main navigation places Experience Archive after About, labels the blog "Blog / المدونة" and the contact page "Collaborate / للتعاون"; navigation arrows use direction-stable SVG icons.
- The visual identity is warm, editorial, and creative, using the existing CSS design tokens in `style.css`. The raised-card, subtle 3D treatment and green/blue accents established on the Services page are shared across the site; each page keeps its own content and layout. Do not introduce page-specific fonts or colors without approval.
- A dedicated Services page presents seven expanded bilingual service offers, linking each to relevant archive projects. Cleared imagery is used where available; abstract CSS panels remain for offers without a suitable image. The homepage previews the services as alternating visual/text cards between the hero/highlights and experience archive; AI-assisted production, content and workflow support are described in relevant offers.
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
| `robots.txt` | Search-crawler guidance and sitemap location |
| `sitemap.xml` | Public pages and project-detail URLs |
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

- **Phase 1 visual content restoration:** The homepage uses `assets/images/projects/assetsimagesnada-portrait.webp`; the About page now uses Nada's separate portrait at `assets/images/projects/assetsimagesnada-portrait (2).webp`. Archive cards and project-detail covers omit the image area when no cleared image is assigned. Cleared imagery is used for Nassajat El Nile (a project poster), WUF12 (a camera setup), and Mastery Academy (an instructional infographic). Selected galleries remain for Lawha and Gelsa Orfeya. Service cards use approved WUF12 and Mastery imagery plus the cultural-development study where appropriate; remaining art is CSS-generated rather than an empty image placeholder. Two new optimized WebP derivatives are stored separately. No images were extracted from the portfolio PDF.
- **Remaining visual-content review:** GAIA Global, Sawa Sawa, Dar Al-Mabara, Makanuna visual projects, Al-Asmarat, Darb al-Ahmar tour, CARE Le Caire, Yomeddine, and Delta Festival have no cleared project-photo cover. Group and workshop photographs are withheld where participant publication permission is unverified; this includes children, young people, and participants in sensitive support programs. Nassajat videos are not shown in the Studio thumbnail gallery pending permission review, while their existing project-detail video URLs remain unchanged. Seven pre-existing covers remain explicitly marked as generated artwork, not documentary photographs: On Time/Pioneers, Hakim archive, Sky Events, South Sinai community, Palestinian training, actor showreels, and TEN TV.
- **Domain and hosting:** `CNAME` and `SITE.origin` identify `nadaelsebaee.com`; the existing GitHub Pages workflow serves the static site. Do not modify DNS or production configuration without explicit approval.
- **Contact form:** `SITE.formEndpoint` in `content.js` is empty. The form must remain disabled until Nada configures an endpoint in her own Formspree account.
- **Blog:** Temporarily hidden from all site navigation, footer, and homepage links; its index and four article pages have `noindex, nofollow` metadata and redirect to the homepage. Keep the content and files for future editing. The Arabic articles, methodology notes, research-source disclosure, and optional image metadata remain in `content.js`; do not delete them while the section is paused.
- **Studio:** Eight selected videos remain in the thumbnail gallery. Participant-focused videos are not previewed there pending permission review; their existing project-detail URLs remain unchanged. YouTube thumbnails and embedded playback load only as required, and cards use existing archive project IDs.
- **Master Factbook:** Add the public/shareable Notion URL only when Nada supplies the exact link and confirms it is intended for public sharing.
- **Services:** The seven bilingual service offers and homepage preview use relevant cleared project images when available and CSS-generated abstract panels otherwise. To add approved service photography, set an `image` path on the corresponding service item in both language arrays in `SITE.services`; service contact links use the current public site email and WhatsApp number.
- **Search metadata:** Public pages set bilingual titles, descriptions, canonical URLs, Open Graph, and Twitter metadata at runtime. `robots.txt` points to `sitemap.xml`, which lists the six public pages and 25 project-detail URLs; paused blog routes are excluded.
- **Automatic cleanup safety:** Cleanup is limited to replacing the generated sync summary with the latest one. Never automatically delete site content, images, assets, or project files. The sync baseline is one temporary file per project and is overwritten in place.

## Image mapping and editorial status

The original HTML/CSS/JavaScript site structure and URLs are unchanged. Existing project descriptions and external project URLs are preserved. The homepage portrait uses `assets/images/projects/assetsimagesnada-portrait.webp`; the About portrait uses `assets/images/projects/assetsimagesnada-portrait (2).webp`. Safe documentary or project-output images are used only where their subject is appropriate and does not expose unverified participants.

Project-detail pages use only matching, local project media:

| Project | Image source or derivative | Editorial label |
| --- | --- | --- |
| Nassajat El Nile | `assets/images/optimized/nassajat-alnil-project-poster.webp` (from `assets/images/projects/assetsimagesprojectsnassajat-alnil (1).webp`) | Project poster; no participant photos |
| WUF12 | `assets/images/projects/assetsimagesprojectswuf12 (2).webp` | Camera setup at the event; no identifiable faces |
| Mastery Academy | `assets/images/optimized/mastery-academy-infographic.webp` (from `assets/images/projects/mastery-academy (3).webp`) | Instructional-resource infographic |
| Lawha | `assets/images/optimized/lawha.webp`; gallery: `assets/images/projects/lawha (6).webp`, `assets/images/projects/lawha (10).webp` | Selected stills from the short film |
| Gelsa Orfeya | `assets/images/projects/gelsa-orfeya.webp`; gallery: `assets/images/projects/gelsa-orfeya (2).webp`, `assets/images/projects/gelsa-orfeya (3).webp` | Project visual material |

The service imagery uses the WUF12 camera-setup image for visual production, the Mastery infographic for cultural-program and creative-operations offers, and Nada's cultural-development study for market research. Offers without a clearly matching, cleared image retain CSS-generated artwork. Original source files remain untouched. Optimized derivatives in `assets/images/optimized/` are: Lawha (219 KB, 1116 × 1500), music-video documentation (43 KB, 1200 × 1800), Nassajat project poster (64 KB, 1200 × 675), and Mastery infographic (109 KB, 1200 × 1698). Archive-card and gallery images lazy-load and decode asynchronously; the homepage and About portraits are prioritized.

No PDF images were extracted. Original local assets were preferred, and existing project descriptions and URLs were retained. Identifiable participant and group imagery with unverified publication permission is withheld from project covers, galleries, service cards, and Studio thumbnails. This includes imagery associated with GAIA Global, Sawa Sawa, Nassajat workshops, Mastery Academy groups, Dar Al-Mabara, Makanuna initiatives, Al-Asmarat, Darb al-Ahmar, CARE Le Caire, and Delta Festival. The Yomeddine poster remains withheld because it depicts an identifiable child.

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
- Last sync (local time): `11 Nov 2026, 16:08:10 Africa/Cairo`
- Last sync (UTC): `2026-11-11T14:08:10.355Z`
- Files detected in the latest sync: `README.md`
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
