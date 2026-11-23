# ITAMS — IT Asset Management System

## Specification and confirmed facts

Read the complete `CODEX_INSTRUCTIONS.md` and README from `ITAMS_Portfolio_Codex_Updated.zip`. Extracted into `/workspace/case-study-source/itams/`, outside public assets. The owner supplied production deployment, design/build responsibility, C#/.NET/WPF/SQL Server stack, and existing Microsoft Entra ID and Intune integration with automatic employee and managed-device retrieval.

No exact .NET version, Microsoft Graph endpoint, authentication method, transport, cadence, mapping, bidirectional synchronization, report library, schema, or security control is inferred. The page does not claim sole authorship of unverified integration components. Prior conversation mentioned Autopilot, but no detailed behavior is specified in the updated package, so the case study does not expand that claim.

Supported scope: equipment inventory, employee/location assignment, in-house and field assets, assignment/return/transfer history, audit history of movements, dashboard visibility, and management reporting including owner-described Excel exports and branded PDFs. These are not invented performance or ROI improvements. Warranty reporting is distinguished from unconfirmed future alerting; no roadmap enhancements are presented as implemented or promised. Entra ID/Intune integration is explicitly current, not future work.

## Portfolio integration

Route `/#/projects/itams`, project 08, appended after Formulary. All seven existing projects, order, numbering, production/development status, routes, PO legacy route alias, résumé links, and flagship designation are preserved.

- `src/data/projects.ts`: new typed project record and shared listing integration.
- `src/pages/ItamsCaseStudy.tsx`: overview, role, capabilities, current Microsoft integration, architecture, six-image gallery, outcomes, and future-scope boundary.
- `src/data/itamsCaseStudy.ts`: typed screenshot metadata, workflow captions and capability content.
- `src/components/ProjectCard.tsx`: same existing three-tile Formulary illustration branch, substituting device/people/history icons. Exact shared panel classes, body markup, typography, badges, spacing and footer are reused.
- `src/styles/formulary-case-study.css`: adds the new card to the same background selector; existing rules stay unchanged.
- `ScreenshotGallery`: validated local `itams` directory; viewer mechanics and security checks unchanged.

The page reuses existing reporting styles; no new design system, screenshot card header, external image host, package dependency, backend, tracking, unsafe HTML, or CSP weakening was introduced.

## Six-image privacy review

All six supplied PNGs were visually inspected and OCR checked. Employee and asset record tables are covered by the supplied opaque sanitization. No readable employee names/emails, asset tags, serial numbers, credentials or private source were found. The employee view retains clipped slivers of text at the right table edge; none formed an identifiable employee record in review. Selection fields in Assign/Return are empty.

The supplied sanitization intentionally retains aggregate counts and general location labels; the Employees view retains employer wording and a few screens retain small branding fragments. Debug toolbar/window framing also remains. These are preserved input screenshots, not AI replacements. Page disclosure and captions acknowledge the retained aggregate/location information and some employer wording. No numeric operational counts are repeated in portfolio text or treated as measurable outcomes. Owner approval of those retained details is still needed before public release, as the package requests. This local implementation does not publish them.

All six images have empty embedded PNG metadata. Copies in `public/images/itams/` are byte-for-byte identical to the supplied sanitized files, retain aspect ratio, use lazy loading, and are ordered Dashboard, Assets, Employees, Locations, Assign/Return, Reports. Source ZIP, original unredacted screenshots, instructions, and proprietary code are excluded from public assets.

## Local preview

```sh
npm run dev
```

Open the Vite URL followed by `#/projects/itams` (retain `/engineering-portfolio/` if printed as the configured base).

## Remaining review

Before public publication, owner review of retained screenshot counts, general locations, employer wording and partial mask edges. Additional technical specifics and enhancement scope need evidence before further claims. Employer permission is not established by the archive alone.

No commit, push, merge, deployment, publication or GitHub settings change was performed.

## Asset inventory

| Sanitized asset | Dimensions | SHA-256 |
| --- | --- | --- |
| `01-dashboard.png` | 1887 × 1149 | `17073420673088b7594f463f5871d60e2d85a17a0a18771c4d9857eb980f0f6c` |
| `02-assets.png` | 1897 × 1146 | `8f330322d0ff463c1b7240c9fb8206e9c3a2d5d43778e4f821ea63958dc7de6f` |
| `03-employees.png` | 1920 × 1173 | `c163f0c7d1950211bae413e364049379714a12276288ce14cad52fe3ef024e5e` |
| `04-locations.png` | 1900 × 1168 | `67183143f0665525c942b08aae382b9220ef62f616145159d614813173bd2add` |
| `05-assign-return.png` | 1927 × 1153 | `3b642d4ca94c82ba6f73022f071ee7163eb16f78ffa7dd71da0edf5fc05fc938` |
| `06-reports.png` | 1905 × 1159 | `43b3adc1838bae63265c40cdc25bdc0289da1cb6e1a62f5649fdf13b20dc3d58` |
