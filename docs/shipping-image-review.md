# Shipping case-study image review

## Kiosk replacement review — November 17, 2026

The four previously withheld kiosk images have been replaced with reviewed AI-assisted privacy-edited renders based on the supplied source candidates. The entire top header conceals branding fragments and dates; the shipment-review render conceals customer/location, products, dates, quantities and weights; driver information conceals the pickup identifier. Empty form controls and generic workflow prompts remain visible. No fictional shipment data was added.

Each exported PNG was inspected visually at its exported resolution and checked with OCR for residual numbers, dates, known business labels and product details. No sensitive details were found in that review. The exported PNGs contain no embedded metadata. These checks are a privacy review, not a claim of exact visual fidelity: the image model may alter layout, typography, and spacing. Visible page text and alt text disclose AI-assisted privacy editing. Exported aspect ratios are preserved by the gallery.

| Public asset | Exported dimensions | SHA-256 |
| --- | --- | --- |
| `kiosk-pickup-lookup.png` | 1624 × 969 | `0376e8c6bfcc51530a2a01578d9732a73b356d0f3f3f09d74d23b056ca05ae1c` |
| `kiosk-endorsement.png` | 1622 × 970 | `8be81e7f6cc976574c4b48e410f66e5d6aa07785a669be2d4ecea0e71f6b5c3b` |
| `kiosk-pickup-confirmation.png` | 1616 × 973 | `520167f68c00351f404e1d154dde373aef5cdd34c5a811913e69017a746712d7` |
| `kiosk-driver-information.png` | 1619 × 972 | `62dc364b8c8b07669b99bb8e4dc7d09f674ce313bff70df2fed6ed0927638620` |

The three existing dashboard PNGs (`dashboard-truck-arrivals.png`, `dashboard-recently-shipped.png`, and `dashboard-missing-bol.png`) remain unchanged and preserve their original reviewed pixels. Business information and some operational indicators are concealed in those supplied redacted captures.

Source candidates and source archives remain outside public assets and the repository. Only the four reviewed replacement exports are added. All seven shipping images are available through the existing accessible screenshot viewer; there are no kiosk placeholders remaining.

## Content authority and publication

The user's task supplies the corrected facts: Jason Lewis is the end-to-end engineer and application owner; the suite is fully deployed in production; check-in events support truck-arrival measurement and visibility; wrong-load errors have been eliminated according to the owner's operational observations. Those corrections supersede the older source `CASE_STUDY.md` statements about unconfirmed ownership, rollout, and outcomes.

The observed wrong-load outcome is attributed to the owner and is not presented as an audited statistic, experimental finding, or invented percentage. Endorsement confirmation is driver self-attestation, not independent credential verification. The architecture diagram is conceptual application integration, not an exact infrastructure topology.

Employer approval for public screenshots/descriptions remains a publication consideration. The owner subsequently authorized committing and pushing this case study to the repository. That authorization does not deploy the website or establish employer permission for public use.
