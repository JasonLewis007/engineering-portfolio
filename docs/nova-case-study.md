# NOVA | Spoken Math Assistant

## Source and repository handling

Cloned only Calculator's `portfolio-kit` branch into `/tmp/nova-calculator-portfolio-kit`, separately from the engineering portfolio. Kit commit: `c143e6f0311b384130fef3b087e708b48391837d`. Read `NOVA-Portfolio-Kit/PORTFOLIO-CARD.md` and `IMAGES.md` completely, and used them as content/alt-text authority. Calculator checkout remains clean. No Calculator files, commits, branches or settings were modified. Only the five required image files are copied into portfolio public assets.

The requested GitHub URL was verified through successful clone and read-only remote lookup. Portfolio links use the existing HTTPS external-link component (new tab, noopener/noreferrer). No credentials or private configuration are copied.

## Integration

Exactly one new card, project 10, appended after the original nine projects. No existing project is removed, reordered, or changed. The card retains the existing component, body markup, typography, badges, spacing, borders, hover, and responsive layout. NOVA alone uses a supplied photo-style cover instead of an illustrated panel, as explicitly requested. The original 190-pixel desktop/mobile header and tablet side-panel layout are preserved; the full dark calculator screenshot is contained without cropping. Its exact kit alt text is exposed to accessibility APIs, rather than hidden with decorative artwork.

- Shared optional project fields: cover metadata, role, and source URL. Existing projects do not use these fields and their output remains unchanged.
- `src/data/projects.ts`: exact requested title, description, role, four technology tags, repository URL, and project 10 placement.
- `src/data/novaCaseStudy.ts`: exact IMAGES.md alt text, dark cover, four gallery records, and kit-supported capabilities.
- `src/pages/NovaCaseStudy.tsx`: existing case-study layout/style patterns and screenshot viewer; role, learning workflow, technology, connectivity and support boundaries.
- `src/styles/nova-case-study.css`: NOVA-scoped cover/role rules only.
- `ScreenshotGallery`: adds the existing local path convention's `nova` directory; preserves validation and controls.

Card title opens the dedicated gallery page at `/#/projects/nova-spoken-math-assistant`; the primary card footer uses the requested `View on GitHub` label and Calculator URL. The detail page also exposes that same source link. No live application web URL is invented.

## Technical accuracy

The owner and kit confirm solo development and deployment ownership. NOVA is a Python desktop application distributed through GitHub, designed for blind and low-vision learners. Supported descriptions include narration, spoken first-run guidance, keyboard navigation, adjustable display/speech settings, limited arithmetic grammar, eight converter categories, and background audio work.

Keyboard calculation/conversion work offline. SpeechRecognition/PyAudio uses Google's online recognizer; offline speech recognition is not asserted. Windows SAPI is text-to-speech via pywin32. The kit also documents pyttsx3/eSpeak NG for Linux output. No formal accessibility compliance, universal screen-reader compatibility, deployment date, user count, performance metric or coverage percentage is claimed.

The kit references unittest application test areas; this task validates only portfolio integration and does not claim a new Calculator application test run.

## Images

Visually reviewed all five supplied captures. Only generic calculation examples, settings, and instructional text are shown; no visible private user records, tokens, emails, internal URLs, or secrets found. Images are unchanged, preserve intrinsic 960 × 755 dimensions and aspect ratios, and use the exact corresponding IMAGES.md alt text.

Dark cover: `nova-calculator-dark.png`. Four gallery images in order: Home (`nova-home.png`), Calculator (`nova-calculator.png`), Converter (`nova-converter.png`), Settings (`nova-settings.png`). All live in `public/images/nova/`. No duplicate project card or dark-cover gallery slide is added.

## Preview

```sh
npm run dev
```

Append `#/projects/nova-spoken-math-assistant` to the Vite URL (retain the printed base).

No commit, push, deployment or publication performed. No outstanding implementation issue identified; platform-specific application behavior remains governed by the kit's stated scope.

## Asset inventory

| Asset | Dimensions | SHA-256 |
| --- | --- | --- |
| `nova-calculator-dark.png` | 960 × 755 | `e799aaa6252066e4b56616e4b06a26a6d6d6de11f63d56411cdd65ca964c2437` |
| `nova-calculator.png` | 960 × 755 | `75fafab099557966fae2bd2014f83fc845aa4b5e07f2a585c8794e0437aa11d6` |
| `nova-converter.png` | 960 × 755 | `c1be0d8c6eb7c41b97c572ba4ebae71b9bb3d89bcefcac62b4c1622014405e84` |
| `nova-home.png` | 960 × 755 | `7a466e21add82d5477feafb9649c237a34002516af7c894d1bc22110007bb5fc` |
| `nova-settings.png` | 960 × 755 | `9c373c73359f332cb3efb8165e2fa9cccc47efd6c98f917716895d730211983f` |
