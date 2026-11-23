import type { CaseStudyScreenshot } from "../types/caseStudy";
export const barterBetterScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "loading",
    title: "01 / Branded loading screen",
    description:
      "The supplied splash screen establishes the Barter Better brand and Match. Trade. Save. positioning. A loading indicator is visible; it does not establish service readiness or measured loading performance.",
    alt: "Barter Better branded splash screen with pink and blue logo, Match Trade Save message, and loading indicator",
    width: 1606,
    height: 804,
    asset: "01-loading-screen.png",
  },
  {
    id: "registration",
    title: "02 / Account-registration interface",
    description:
      "Email, Google, Facebook, and Apple options introduce the intended registration experience. These are visible interface choices; working account creation and provider integration have not been verified.",
    alt: "Barter Better create-account interface with email and third-party sign-up choices and a login option",
    width: 1882,
    height: 883,
    asset: "02-account-registration.png",
  },
  {
    id: "name",
    title: "03 / Profile-name setup",
    description:
      "A name-entry screen introduces how a member will be identified. The empty field and character counter show presentation only, not verified validation or stored profile data.",
    alt: "Barter Better profile-name screen with empty name field, character counter, and Go button",
    width: 1477,
    height: 865,
    asset: "03-profile-name.png",
  },
  {
    id: "photo",
    title: "04 / Optional profile photo",
    description:
      "The photo-selection interface presents Take Selfie, Choose Photo, and Skip for Now choices. Camera access, uploads, storage, and persistence remain unverified.",
    alt: "Barter Better optional profile-photo screen with placeholder avatar, selfie and photo choices, and skip option",
    width: 1534,
    height: 853,
    asset: "04-profile-photo.png",
  },
  {
    id: "location",
    title: "05 / Approximate location & ZIP",
    description:
      "The location step offers approximate-location and ZIP concepts. The screenshot explicitly labels the selected location as a demo and says no real location was accessed; it does not demonstrate working geolocation or matching.",
    alt: "Barter Better location setup with a demo-location notice, Set Location button, empty ZIP field, and continuation control",
    width: 1507,
    height: 856,
    asset: "05-location-selection.png",
  },
  {
    id: "selection",
    title: "06 / Item or service selection",
    description:
      "Item and service categories with examples frame the user's trading intent. Continue and Skip for Now are shown; live listings, matching, and completed trades are not demonstrated.",
    alt: "Barter Better onboarding screen with item and service category examples and continue and skip controls",
    width: 1107,
    height: 832,
    asset: "06-item-service-selection.png",
  },
];
export const barterBetterEvidence = [
  [
    "Demonstrated in supplied screenshots",
    "Brand presentation and six onboarding screens: loading, registration, profile name, optional photo, demo location/ZIP, and item/service selection.",
  ],
  [
    "Not verified as completed functionality",
    "Account creation, Google/Facebook/Apple sign-in, profile persistence, photo capture/upload, real location access, matching, payments, REST endpoints, and backend persistence require source or functional evidence.",
  ],
] as const;
export const barterBetterStackEvidence = [
  [
    "React & TypeScript",
    "Established frontend stack per the owner. Screenshots are available; application source and responsive behavior have not been independently verified.",
  ],
  [
    "C#/.NET & REST APIs",
    "Established backend/API direction. Framework, endpoints, service deployment, and completed integrations are not documented publicly here.",
  ],
  [
    "Supabase",
    "Part of the established stack. Its precise role, authentication configuration, data model, and persistence behavior are unverified; no database engine is inferred.",
  ],
  [
    "Vercel",
    "Part of the established stack. No specific public URL, production deployment, or release status is asserted.",
  ],
] as const;
