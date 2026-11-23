# Jason Lewis · Engineering Portfolio

A static React + TypeScript portfolio for Jason Lewis, focused on enterprise applications, .NET/C#, SQL Server, modernization, and full-stack development. Designed for recruiters and engineering teams, with public-level case studies and explicit confirmation notes.

## Local development

Use Node.js 24 LTS and npm 11 (the versions used for validation). No credentials, environment files, database, or external services are required.

```sh
cd /workspace/engineering-portfolio # or your local checkout
npm ci
npm run dev
```

Open `http://localhost:5173/engineering-portfolio/`. If the environment cannot write npm's default cache, use `npm ci --cache /tmp/engineering-portfolio-npm-cache`.

```sh
npm run lint
npm run build
npm run preview
npm audit
npm audit --omit=dev
```

Preview serves the production artifact at `http://localhost:4173/engineering-portfolio/`. The production CSP is intentionally omitted only by the local Vite development transform to support HMR. Always validate security against `npm run build` and `npm run preview`, not just the development server.

## Architecture

- `src/App.tsx`: routes, page titles, route-change scroll and focus handling.
- `src/components/`: header, accessible mobile disclosure navigation, footer, section heading, project card, badges, calls to action, conceptual engineering illustration, and case-study layout.
- `src/data/projects.ts`: the single typed source for project summaries, technologies, case-study sections, and confirmation notes.
- `src/data/professional.ts`: typed skills categories and engineering experience, including AI-assisted development tools and responsibilities.
- `src/types/project.ts`: project contract.
- `src/assets/jason-lewis.jpg`: owner-supplied portrait, bundled locally with no third-party image requests.
- `src/pages/`: homepage and all primary pages, project detail routes, and 404 handling.
- `src/styles/`: design tokens, reusable styles, responsive rules, and reduced-motion overrides.
- `public/favicon.svg`: original local monogram favicon.
- `index.html`: metadata and restrictive production meta CSP.
- `.github/`: Dependabot and a manual-only Pages deployment workflow.

React safely renders text; there is no raw HTML rendering or runtime content fetching. The external-link component accepts only HTTPS GitHub and www.linkedin.com destinations, with embedded credentials and nonstandard ports rejected. Owner-supplied contact details live in `src/data/contact.ts`; email uses explicit `mailto:` links. There are no external fonts, analytics, embeds, form submissions, cookies, or application storage. The homepage illustration and shipping integration diagram are conceptual local visuals. The shipping case study includes three reviewed, redacted dashboard captures and four AI-assisted privacy-edited kiosk renders with a visible provenance disclosure. The VOC/HAP case study includes nine AI-assisted, privacy-edited screenshot renders with a visible provenance disclosure. See `docs/shipping-image-review.md` and `docs/voc-hap-case-study.md` for image review and publication considerations.

## Routing and GitHub Pages

`HashRouter` supports direct links and refreshes on static hosting, for example:

`https://jasonlewis007.github.io/engineering-portfolio/#/projects/enterprise-shipping-management-suite`

Routes are `/`, `/about`, `/projects`, `/projects/:slug`, `/experience`, `/skills`, `/contact`, and a catch-all 404. Unknown project slugs also show the 404 page. The hash is required; a bare server path such as `/engineering-portfolio/about` is not a supported deep link.

Vite defaults to `/engineering-portfolio/`. To build for a domain root or another repository path, set the nonsecret build variable `BASE_PATH`:

```sh
BASE_PATH=/ npm run build
```

Build-time variables are public. Never add credentials to `VITE_*` variables or frontend files.

## Deployment — owner approval required

No deployment or GitHub settings changes were performed. The workflow has **only `workflow_dispatch`**, so pushes and pull requests do not deploy. Do not dispatch it without explicit owner approval.

When approved:

1. Review the content and all confirmation notes below. Run the validation commands.
2. Commit and push the reviewed files through your normal process.
3. In repository **Settings → Pages**, select **GitHub Actions** as the build source. Consider a required reviewer on the `github-pages` environment.
4. On the approved default branch, manually run **Deploy portfolio to GitHub Pages** from the Actions tab. Do not dispatch an untrusted branch.
5. Verify the published homepage, assets, direct hash links, mobile menu, and refreshed case-study routes.

The build job has read-only repository access and does not retain checkout credentials. Only the deployment job receives `pages: write` and `id-token: write`; no PAT or deploy secret is required. Official actions are pinned to full commit SHAs. Dependabot checks npm and action dependencies weekly. The workflow is prepared but has not been executed or verified on GitHub.

## Professional content

Skills and engineering role descriptions are based on the owner-supplied `Jason_Lewis_Resume_10_9_26.docx`, with HarperLove listed as Software Engineer / IT Specialist (2023–Present) and Full Stack Solutions LLC as Full Stack Developer (2022–2023).

The owner-supplied public résumé is `public/Jason_Lewis_Modern_Engineering_Resume.pdf`, with separate open and download links on Contact. Both use Vite’s `import.meta.env.BASE_URL`, supporting the configured GitHub Pages subpath or a root deployment. Replace that public PDF to update the résumé, then rebuild. Business email and LinkedIn are active contact links.

Remaining confirmations:

- Manufacturing/ERP-specific ownership, delivery status, and public outcomes. Shipping ownership, production deployment, and observed outcomes are confirmed by the owner.
- VOC/HAP independent ownership, deployed/in-use status, and legacy VB.NET/Crystal Reports runtime context are confirmed. Current stack details, deeper implementation decisions, and any measured improvements need supporting facts before expanding the description.
- Owner approval of AI-edited image fidelity and employer permission for public use remain separate from image redaction review.

No degrees, certifications, dates, years of experience, metrics, customer names, testimonials, availability claims, or salary information were invented. Case studies deliberately identify unverified details. Review all enterprise descriptions for employer/publication permission before publishing.

## Shipping flagship case study

The dedicated shipping case study is at `/#/projects/enterprise-shipping-management-suite` (with the configured repository base path). The earlier `/#/projects/enterprise-shipping` URL redirects to it. Shared project data marks it as the flagship on Home and Projects.

- `src/pages/ShippingCaseStudy.tsx`: ownership, production status, application workflows, architecture, challenges, outcomes, technology stack, and closing links.
- `src/data/shippingCaseStudy.ts`: typed screenshot slots, workflow explanations, ownership stages, and challenges.
- `src/components/ScreenshotGallery.tsx`: reviewed screenshots, withheld-image placeholders, and a native dialog viewer with focus containment, Escape, close, previous/next controls, and arrow-key navigation.
- `src/components/ShippingArchitecture.tsx`: labeled conceptual integration diagram.
- `src/styles/shipping-case-study.css`: responsive case-study presentation; existing global reduced-motion handling remains in force.
- `public/images/shipping/`: three reviewed dashboard PNGs and four reviewed privacy-edited kiosk PNGs. Source candidates remain outside the repository.

Ownership, production deployment, and operational observations were supplied in the owner's shipping task. The older source document's uncertainty about those facts is superseded. Wrong-load elimination is explicitly an owner-observed production outcome; no percentage, deployment date, shipment count, or financial/time saving is claimed. Driver endorsement confirmation is self-attestation. Employer publication permission and corrected kiosk screenshots remain separate from the completed application implementation.

To inspect the production build locally:

```sh
npm run build
npm run preview -- --port 4173
```

Open `http://localhost:4173/engineering-portfolio/#/projects/enterprise-shipping-management-suite`.

## VOC/HAP reporting case study

The dedicated page remains at `/#/projects/reporting-modernization`. It presents independent ownership and deployed/in-use status, the legacy VB.NET reporting context, customer and recipient workflows, historical PDF review, monthly distribution, a conceptual workflow, engineering considerations, and the confirmed deployed replacement outcome. Historical review is explicitly PDF-only and does not send customer emails or update email history.

- `src/pages/ReportingCaseStudy.tsx`: dedicated reporting page.
- `src/data/reportingCaseStudy.ts`: typed image slots, captions, alt text, dimensions, and engineering considerations.
- `src/types/caseStudy.ts`: shared screenshot data contract.
- `src/components/ScreenshotGallery.tsx`: directory-scoped local PNG URLs; shipping remains the default directory.
- `src/styles/screenshot-gallery.css`: shared gallery/dialog presentation for both case studies.
- `src/styles/reporting-case-study.css`: responsive reporting-page styling.
- `public/images/voc-hap/`: nine reviewed edited PNGs from the handoff package.
- `docs/voc-hap-case-study.md`: source, image decisions, and implementation questions.

The images are AI-assisted privacy-edited renders and are identified as such on the page. Their typography, dimensions, and composition may differ from the original application captures. No original screenshots or source ZIP are included in public assets or build output. The documented .NET 8/WPF/SQL Server/QuestPDF stack is retained without inventing an email transport, runtime root cause, architecture decision, hardest challenge, or quantitative improvement.

After building, preview the page at `http://localhost:4173/engineering-portfolio/#/projects/reporting-modernization` using `npm run preview -- --port 4173`.

## Daily shipping and budget reporting

The daily shareholder-reporting case study is at `/#/projects/daily-shipping-report`. It covers the owner's confirmed design/build/test/deployment role, legacy VB reporting-day and Crystal Reports runtime problems, current and historical reporting, and PDF output. Technologies are limited to the confirmed C#, .NET 8, SQL, and QuestPDF stack; the UI framework and database engine are not inferred.

- `src/pages/DailyShippingCaseStudy.tsx`: dedicated case study.
- `src/data/dailyShippingCaseStudy.ts`: report measures, engineering considerations, and five reviewed image entries.
- `public/images/daily-shipping/`: four AI-assisted privacy-edited workflow renders and one clearly labeled fictional sample report. The sample uses invented figures and no company data.
- `src/styles/daily-shipping-case-study.css`: case-specific presentation, alongside shared reporting and gallery styles.
- `docs/daily-shipping-case-study.md`: confirmed content and remaining implementation questions.

The shared project list now contains four case studies. Shipping remains the flagship; the desktop gallery uses two columns for the four-card set. Potential is described as shipped-versus-ordered activity that can change daily, without inventing a formula or measured improvement.

## A/R aging reporting

The A/R Aging case study is at `/#/projects/ar-aging-report`. Shared Home and Projects data now includes five projects, with shipping retained as the flagship. It describes the confirmed receivables workflow, legacy reporting issues, selection criteria, historical reporting, QuestPDF and Excel output.

- `src/pages/ArAgingCaseStudy.tsx` and `src/data/arAgingCaseStudy.ts`: dedicated page and typed content.
- `public/images/ar-aging/`: two reviewed AI-assisted privacy-edited application renders and two fictional report illustrations. Visible disclosures distinguish edited application views from synthetic PDF-style and Excel-style samples.
- `scripts/generate-ar-aging-samples.mjs`: reproducible fictional report images, using Playwright/Chromium as a separate authoring tool, without adding application dependencies.
- `docs/ar-aging-case-study.md`: implementation handoff, image review, sample assumptions, and remaining factual questions.

## Formulary & Inventory Hub

New case study at `/#/projects/formulary-inventory-hub`, separate from all five pre-existing project entries. The card follows the supplied preview with formula, inventory-grid, and upward-arrow artwork. The case study covers replacement of backend-only formula entry, production status, the confirmed C# / .NET 8 / SQL Server stack, formula and inventory management, and the documented inventory-check entry point.

- `src/pages/FormularyCaseStudy.tsx` and `src/data/formularyCaseStudy.ts`: dedicated page and typed content.
- `src/styles/formulary-case-study.css`: card artwork and case-specific styling.
- `public/images/formulary-inventory/`: three reviewed supplied redacted application images and the clearly labeled fictional reorder-report illustration.
- `docs/formulary-inventory-case-study.md`: source clarification, image review, implementation details, and factual limitations.

## Heavenly Homes

In-development full-stack case study at `/#/projects/heavenly-homes`, using the existing Formulary-style project card with home/calendar/community motifs. Project 07 sits beside the shipping flagship, with all six earlier projects preserved. All eight supplied screenshots appear in order only in the case-study gallery, not in the project card header.

- `src/pages/HeavenlyHomesCaseStudy.tsx`: role, vision, UI preview, gallery, target architecture, roadmap, and current status.
- `src/data/heavenlyHomesCaseStudy.ts`: typed captions, screenshot dimensions, journeys, and planned features.
- `public/images/heavenly-homes/`: eight reviewed, unchanged supplied PNGs.
- `docs/heavenly-homes-case-study.md`: package instructions, implementation-status limits, visual consistency, and image review.

React/TypeScript frontend-preview attribution and the full target stack are owner supplied. Application source was not provided, so completed backend functionality, live availability, booking, accounts, and app responsiveness are not asserted. Portfolio layout responsiveness is independently checked. No invented preview/source links or launch metrics.

## Purchase Order Receiving & ERP Integration

The dedicated production case study at `/#/projects/purchase-order-receiving-erp` replaces the broad Manufacturing & ERP entry (project 05). Its former `/#/projects/manufacturing-erp` link remains an alias. The portfolio still has seven projects.

- `src/pages/PurchaseOrderCaseStudy.tsx` and `src/data/purchaseOrderCaseStudy.ts`: single-screen workflow, ownership, ERP context, confirmed technologies, and considerations.
- `public/images/purchase-order/po-adjustment-manager.png`: reviewed AI-assisted privacy edit with employer branding/debug overlay removed and empty business fields retained.
- `docs/purchase-order-case-study.md`: confirmed facts, image review, route compatibility, and remaining technical questions.

The stack is C#, .NET, SQL Server, and ERP integration. Neither a specific .NET version nor an API/file transport is inferred. Owner-reported receiving/receivables scope is distinguished from what the empty application screenshot directly shows.

## ITAMS — IT Asset Management System

Production-deployed enterprise IT operations case study at `/#/projects/itams`, with the same Formulary project-card styling and device/people/history illustration. Project 08 is added without replacing any existing entry. Confirmed stack: C#, .NET, WPF, SQL Server, Microsoft Entra ID, Microsoft Intune. Existing Entra/Intune integrations automatically retrieve employee and managed-device information; unverified mechanisms and sync details are not assumed.

- `src/pages/ItamsCaseStudy.tsx` and `src/data/itamsCaseStudy.ts`: role, workflows, current integrations, architecture, outcomes and six-view walkthrough.
- `public/images/itams/`: all six supplied sanitized screenshots in order; table records concealed, with aggregate counts/general locations and some employer wording retained for review.
- `docs/itams-case-study.md`: source facts, privacy findings, asset hashes and technical limitations.

No invented metrics, exact .NET version, API endpoints, authentication method, sync cadence, bidirectional behavior, report libraries, or future-enhancement completion claims. Review retained screenshot details before public release.

## Barter Better

Project 09 at `/#/projects/barter-better`: an in-development community trading marketplace, with Jason Lewis as Technical Co-Founder & Full-Stack Developer. The exact existing Formulary card conventions are reused; all eight earlier projects remain intact. The established stack is React, TypeScript, C#/.NET, REST APIs, Supabase and Vercel, without unverified backend-completion or production claims.

- `src/pages/BarterBetterCaseStudy.tsx` and `src/data/barterBetterCaseStudy.ts`: role, vision, evidence limits, architecture intent, next steps and six-step onboarding gallery.
- `public/images/barter-better/`: reviewed supplied screenshots, unchanged and ordered 01–06.
- `docs/barter-better-case-study.md`: source review, privacy checks, implementation scope and asset hashes.

The private application repository is not linked. Screenshots demonstrate interfaces; working sign-in, uploads, geolocation, matching and persistence require verification.

## Validation

Production build, strict TypeScript checking, ESLint, dependency audits, and local browser checks are described in `VALIDATION.md`. Automated checks do not replace final keyboard/screen-reader review or owner confirmation of professional content. See `SECURITY.md` for the security model and GitHub Pages limitations.
