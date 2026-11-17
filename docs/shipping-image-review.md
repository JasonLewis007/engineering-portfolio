# Shipping case-study image review

All seven publication candidates were visually inspected at original resolution. The three dashboard files below have no visible business identifiers in this review and have no embedded PNG metadata. This is a visual redaction review, not a statement of employer publication permission. No original unredacted files, source ZIP, or source documents are included in the application.

| Source candidate                    | Decision                               | Public asset / reason                                                                 |
| ----------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------- |
| `kiosk_01_pickup_lookup.png`        | Withheld; labeled placeholder          | Date remains visible; possible branding fragments remain at the edges of a redaction. |
| `kiosk_02_endorsement.png`          | Withheld; labeled placeholder          | Date remains visible; possible branding fragments remain at the edges of a redaction. |
| `kiosk_03_pickup_confirmation.png`  | Withheld; labeled placeholder          | Customer/location and product information, weights, and dates remain visible.         |
| `kiosk_04_driver_information.png`   | Withheld; labeled placeholder          | Pickup identifier and date remain visible.                                            |
| `dashboard_01_truck_arrivals.png`   | Visually cleared for local integration | `public/images/shipping/dashboard-truck-arrivals.png`                                 |
| `dashboard_02_recently_shipped.png` | Visually cleared for local integration | `public/images/shipping/dashboard-recently-shipped.png`                               |
| `dashboard_03_missing_bol.png`      | Visually cleared for local integration | `public/images/shipping/dashboard-missing-bol.png`                                    |

The dashboard captures preserve their original pixels and aspect ratios. Heavy redaction also obscures operational labels and timestamps; the captions acknowledge this rather than claiming those details are visible. No fictional or recreated application screenshots were generated.

## Completing the kiosk gallery

Supply replacement PNGs with all branding, business identifiers, customer/location and product information, shipment numbers, weights, dates, and other sensitive details fully concealed. Reinspect every replacement, including image metadata. Only then copy it into `public/images/shipping/` and replace its `withheldReason` with the reviewed `asset` filename in `src/data/shippingCaseStudy.ts`. Update dimensions to match the replacement and verify the image and enlarged view.

The four current kiosk candidates remain outside the repository and build. The page already includes their workflow descriptions and clearly labeled placeholders.

## Content authority and publication

The user's task supplies the corrected facts: Jason Lewis is the end-to-end engineer and application owner; the suite is fully deployed in production; check-in events support truck-arrival measurement and visibility; wrong-load errors have been eliminated according to the owner's operational observations. Those corrections supersede the older source `CASE_STUDY.md` statements about unconfirmed ownership, rollout, and outcomes.

The observed wrong-load outcome is attributed to the owner and is not presented as an audited statistic, experimental finding, or invented percentage. Endorsement confirmation is driver self-attestation, not independent credential verification. The architecture diagram is conceptual application integration, not an exact infrastructure topology.

Employer approval for public screenshots/descriptions remains a publication consideration. The owner subsequently authorized committing and pushing this case study to the repository. That authorization does not deploy the website or establish employer permission for public use.
