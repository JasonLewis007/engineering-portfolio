import type { CaseStudyScreenshot } from "../types/caseStudy";
export const heavenlyHomesScreenshots: readonly CaseStudyScreenshot[] = [
  {
    id: "home",
    title: "01 / Landing page & search concept",
    description:
      "The homepage introduces faith-centered hospitality with destination, date, guest, vacation-stay, and long-term-stay UI. These controls are shown as a preview; working search and live availability are not verified.",
    alt: "Heavenly Homes landing page with lakefront imagery, hospitality message, and destination and date search controls",
    width: 1867,
    height: 907,
    asset: "01-homepage.png",
  },
  {
    id: "featured",
    title: "02 / Featured homes & community",
    description:
      "Property cards and community positioning connect stays with the hospitality vision. Demo listings and illustrative imagery are presentation content, not evidence of live inventory.",
    alt: "Heavenly Homes featured property cards above a community and hospitality introduction",
    width: 1825,
    height: 896,
    asset: "02-featured-homes-and-community.png",
  },
  {
    id: "stays",
    title: "03 / Vacation-stay discovery",
    description:
      "Destination, dates, guests, category filters, and sorting communicate the stay-discovery journey. The screenshot explicitly identifies a preview collection and says availability has not been checked.",
    alt: "Vacation stays preview showing search fields, category chips, filters, and a booking-coming-soon notice",
    width: 1818,
    height: 887,
    asset: "03-vacation-stays.png",
  },
  {
    id: "listings",
    title: "04 / Property browsing",
    description:
      "The card grid illustrates different stay types and links toward gathering planning. Property results, photographs, and preview actions do not establish live availability or reservations.",
    alt: "Property browsing preview with lakefront, mountain, and long-term stay cards and a retreats call to action",
    width: 1723,
    height: 817,
    asset: "04-property-listings.png",
  },
  {
    id: "gatherings",
    title: "05 / Retreats & gatherings",
    description:
      "A planning preview presents gathering types, group size, and a dates-to-space journey. Matching, live availability, and booking remain under development.",
    alt: "Retreat and gathering planner preview with gathering-type choices and a group summary panel",
    width: 1848,
    height: 903,
    asset: "05-retreats-and-gatherings.png",
  },
  {
    id: "network",
    title: "06 / Church & parish discovery",
    description:
      "Browse-by-area and nearby-search concepts sit alongside sample results and an illustrative map. Geolocation, API-backed parish results, and distances are not verified live functionality.",
    alt: "Christian Network preview showing area and nearby search controls, sample church listings, and an illustrative map",
    width: 1903,
    height: 900,
    asset: "06-christian-network.png",
  },
  {
    id: "mission",
    title: "07 / Mission & hospitality",
    description:
      "The mission page explains the brand's focus on rest, fellowship, belonging, and Christ-centered hospitality.",
    alt: "Heavenly Homes mission page describing rest, fellowship, belonging, and Christ-centered hospitality",
    width: 1887,
    height: 903,
    asset: "07-our-mission.png",
  },
  {
    id: "accounts",
    title: "08 / Account-access preview",
    description:
      "Sign-up, login, Google, Facebook, and email options communicate the intended access experience. The screen states accounts are coming soon; provider integration and account creation are roadmap work.",
    alt: "Heavenly Homes sign-up and login screen preview with Google, Facebook, and email options and an accounts-coming-soon notice",
    width: 1866,
    height: 898,
    asset: "08-sign-in-sign-up.png",
  },
];
export const heavenlyHomesJourneys = [
  [
    "Stay discovery",
    "Homepage search, vacation stays, long-term-stay concepts, category filters, and property browsing are visible UI previews.",
  ],
  [
    "Gathering planning",
    "Retreat and gathering choices communicate a multi-step planning journey; matching and booking are not verified.",
  ],
  [
    "Community discovery",
    "Church/parish area search and nearby-search concepts use sample results and illustrative mapping.",
  ],
  [
    "Mission and account access",
    "Brand storytelling and an authentication screen demonstrate the intended experience; accounts are marked coming soon.",
  ],
] as const;
export const heavenlyHomesRoadmap = [
  "Secure account creation and login through Google, Facebook, and email.",
  "Live property inventory, availability, booking, and payment integration.",
  "Host listing management and guest management workflows.",
  "Church/parish data API integration and verified nearby discovery.",
  "A planned 8% host booking commission model; not an operating revenue claim.",
  "Cleaning-service integrations.",
] as const;
