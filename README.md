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
- `src/types/project.ts`: project contract.
- `src/pages/`: homepage and all primary pages, project detail routes, and 404 handling.
- `src/styles/`: design tokens, reusable styles, responsive rules, and reduced-motion overrides.
- `public/favicon.svg`: original local monogram favicon.
- `index.html`: metadata and restrictive production meta CSP.
- `.github/`: Dependabot and a manual-only Pages deployment workflow.

React safely renders text; there is no raw HTML rendering or runtime content fetching. The external-link component accepts only HTTPS GitHub and www.linkedin.com destinations, with embedded credentials and nonstandard ports rejected. Owner-supplied contact details live in `src/data/contact.ts`; email uses explicit `mailto:` links. There are no external fonts, analytics, embeds, form submissions, cookies, or application storage. All illustrations are conceptual local CSS/SVG visuals, not screenshots or representations of proprietary architecture.

## Routing and GitHub Pages

`HashRouter` supports direct links and refreshes on static hosting, for example:

`https://jasonlewis007.github.io/engineering-portfolio/#/projects/enterprise-shipping`

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

## Content requiring confirmation

- A reviewed public résumé remains to be supplied. Business email and LinkedIn were supplied by the owner and are active contact links.
- Official title and employment dates at HarperLove Adhesives LLC.
- Individual project ownership/responsibilities, implementation and deployment status, and approved public examples or outcomes.
- Which VOC/HAP reporting, PDF, recipient-management, and email-delivery capabilities are implemented, tested, and deployed.

No degrees, certifications, dates, years of experience, metrics, customer names, testimonials, availability claims, or salary information were invented. Case studies deliberately identify unverified details. Review all enterprise descriptions for employer/publication permission before publishing.

## Validation

Production build, strict TypeScript checking, ESLint, dependency audits, and local browser checks are described in `VALIDATION.md`. Automated checks do not replace final keyboard/screen-reader review or owner confirmation of professional content. See `SECURITY.md` for the security model and GitHub Pages limitations.
