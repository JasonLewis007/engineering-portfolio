import type { CaseStudyScreenshot } from "../types/caseStudy";
export const novaScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "home",
    title: "01 / Home & spoken guidance",
    description:
      "Home presents keyboard instructions, Read instructions aloud, and Start spoken guide. The first-run guide teaches a calculation by keyboard and offers an optional voice exercise.",
    alt: "NOVA Home with spoken instructions and a button to start the guided tutorial.",
    width: 960,
    height: 755,
    asset: "nova-home.png",
  },
  {
    id: "calculator",
    title: "02 / Calculator",
    description:
      "The calculator interprets a limited arithmetic grammar. The supplied light-theme capture shows expression entry, keypad controls, calculation history, and spoken-answer message context.",
    alt: "NOVA light-theme calculator with an expression field, scientific keypad, and calculation history.",
    width: 960,
    height: 755,
    asset: "nova-calculator.png",
  },
  {
    id: "converter",
    title: "03 / Unit converter",
    description:
      "The converter supports eight categories, including temperature, mass, speed, and digital storage. The supplied capture demonstrates length conversion from meters to centimeters.",
    alt: "NOVA Converter showing a length conversion from meters to centimeters.",
    width: 960,
    height: 755,
    asset: "nova-converter.png",
  },
  {
    id: "settings",
    title: "04 / Display & speech settings",
    description:
      "Adjustable voice, recognition language, speech rate and volume, text size, and theme let learners tailor the desktop presentation and spoken guidance.",
    alt: "NOVA Settings with speech voice, recognition language, volume, text size, and theme controls.",
    width: 960,
    height: 755,
    asset: "nova-settings.png",
  },
];
export const novaCapabilities = [
  [
    "Narration and keyboard interaction",
    "Always-on narration reads focused controls, values, results, and errors. Keyboard navigation supports the calculation and conversion workflow.",
  ],
  [
    "Spoken first-run guide",
    "A guided first calculation teaches keyboard use, with an optional voice exercise.",
  ],
  [
    "Calculation and conversion",
    "A limited arithmetic grammar and eight conversion categories support focused math tasks. Keyboard calculation and conversion work offline.",
  ],
  [
    "Responsive audio work",
    "A background audio worker keeps the interface responsive during speech and microphone commands.",
  ],
] as const;
