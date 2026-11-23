# NOVA | Spoken Math Assistant

## Source and repository handling

Cloned only Calculator's `portfolio-kit` branch into `/tmp/nova-calculator-portfolio-kit`, separately from the engineering portfolio. Kit commit: `c143e6f0311b384130fef3b087e708b48391837d`. Read `NOVA-Portfolio-Kit/PORTFOLIO-CARD.md` and `IMAGES.md` completely, and used them as content/alt-text authority. Calculator checkout remains clean. No Calculator files, commits, branches or settings were modified. Only the five required image files are copied into portfolio public assets.

The requested GitHub URL was verified through successful clone and read-only remote lookup. Portfolio links use the existing HTTPS external-link component (new tab, noopener/noreferrer). No credentials or private configuration are copied.

## Integration

Exactly one new card, project 10, appended after the original nine projects. Following the owner's subsequent styling correction, NOVA now shares the exact Formulary/Barter illustrated panel, body markup, typography, badges, spacing, borders, hover, responsive layout and Explore case study footer. Calculator, spoken-audio and conversion icons replace the prior screenshot cover. The role line stays on the detail page rather than creating an extra card row.

`src/data/projects.ts` retains the exact requested title, description, role, tags and repository URL. `src/data/novaCaseStudy.ts` supplies the four gallery images with exact kit alt text. `src/pages/NovaCaseStudy.tsx` preserves the role, technical content, gallery and GitHub link. Shared Formulary CSS includes NOVA in its existing background selector; the separate cover CSS and unused cover fields have been removed.

Card title and footer open `/#/projects/nova-spoken-math-assistant`. The detail page retains View on GitHub. Existing nine project entries and résumé/navigation behavior remain unchanged.

## Technical accuracy

The owner and kit confirm solo development and deployment ownership. NOVA is a Python desktop application distributed through GitHub, designed for blind and low-vision learners. Supported descriptions include narration, spoken first-run guidance, keyboard navigation, adjustable display/speech settings, limited arithmetic grammar, eight converter categories, and background audio work.

Keyboard calculation/conversion work offline. SpeechRecognition/PyAudio uses Google's online recognizer; offline speech recognition is not asserted. Windows SAPI is text-to-speech via pywin32. The kit also documents pyttsx3/eSpeak NG for Linux output. No formal accessibility compliance, universal screen-reader compatibility, deployment date, user count, performance metric or coverage percentage is claimed.

The kit references unittest application test areas; this task validates only portfolio integration and does not claim a new Calculator application test run.

## Images

Visually reviewed all five supplied captures. Only generic calculation examples, settings, and instructional text are shown; no visible private user records, tokens, emails, internal URLs, or secrets found. Images are unchanged, preserve intrinsic 960 × 755 dimensions and aspect ratios, and use the exact corresponding IMAGES.md alt text.

The previously used dark cover asset `nova-calculator-dark.png` remains available but is not displayed on the card. Four gallery images in order: Home (`nova-home.png`), Calculator (`nova-calculator.png`), Converter (`nova-converter.png`), Settings (`nova-settings.png`). All live in `public/images/nova/`. No duplicate project card or dark-cover gallery slide is added.

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
