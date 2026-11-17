// Synthetic report illustrations only. No company data or production report code.
// Run with Playwright available via NODE_PATH and /usr/bin/chromium installed.
import { createRequire } from "node:module";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import console from "node:console";
const { chromium } = createRequire(import.meta.url)("playwright");
const destination = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/images/ar-aging",
);
const rows = [
  ["Sample Alder Works", "DEMO-A", "DEMO-001", "2026-06-20", 4200, 0, 0, 0, 0],
  ["Sample Brook Supply", "DEMO-B", "DEMO-002", "2026-06-05", 0, 1800, 0, 0, 0],
  [
    "Sample Cedar Packaging",
    "DEMO-C",
    "DEMO-003",
    "2026-05-01",
    0,
    0,
    2600,
    0,
    0,
  ],
  [
    "Sample Delta Materials",
    "DEMO-D",
    "DEMO-004",
    "2026-04-01",
    0,
    0,
    0,
    900,
    0,
  ],
  ["Sample Elm Products", "DEMO-E", "DEMO-005", "2026-02-01", 0, 0, 0, 0, 500],
];
const totals = Array.from({ length: 5 }, (_, i) =>
  rows.reduce((s, r) => s + r[i + 4], 0),
);
const balance = totals.reduce((s, x) => s + x, 0);
const money = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n,
  );
const headings = [
  "Fictional customer",
  "Demo ID",
  "Demo invoice",
  "Sample due date",
  "Current",
  "1–30",
  "31–60",
  "61–90",
  "91+",
  "Balance",
];
const rowHtml = rows
  .map(
    (r) =>
      `<tr>${r.map((v, i) => `<td>${i >= 4 ? money(v) : v}</td>`).join("")}<td>${money(r.slice(4).reduce((s, v) => s + v, 0))}</td></tr>`,
  )
  .join("");
function html(excel) {
  return `<!doctype html><html lang="en"><meta charset="utf-8"><title>Fictional A/R Aging ${excel ? "Spreadsheet" : "Report"}</title><style>*{box-sizing:border-box}body{margin:0;color:#142338;background:white;font:16px Arial,sans-serif}.sheet{width:1600px;padding:44px}.banner{padding:18px;background:#e8f1fc;color:#174b83;border:2px solid #2563b8;font-weight:bold;letter-spacing:1px}h1{font-size:38px;margin:30px 0 10px}.subtitle{color:#52647c;line-height:1.6}.cards{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin:28px 0}.card{background:#f0f4f9;padding:20px;border-radius:6px}.card span{display:block;color:#52647c;margin-bottom:12px}.card strong{font-size:25px}table{width:100%;border-collapse:collapse;font-size:14px;margin:28px 0}td,th{padding:18px 10px;border-bottom:1px solid #d4dce7;text-align:right;white-space:nowrap}td:first-child,th:first-child{text-align:left}thead{background:${excel ? "#176e55" : "#163657"};color:white}tfoot{background:#e8f1fc;font-weight:bold}${excel ? "td,th{border:1px solid #ccd8d1}tbody tr:nth-child(even){background:#f0f7f3}" : ""}.note{background:#fff8e9;border-left:4px solid #c48e2e;padding:20px;font-size:15px;line-height:1.6;margin-top:28px}footer{display:flex;justify-content:space-between;border-top:1px solid #d4dce7;padding-top:22px;margin-top:30px;font-size:14px}</style><div class="sheet"><div class="banner">FICTIONAL SAMPLE — NO COMPANY OR CUSTOMER DATA</div><h1>A/R Aging ${excel ? "Spreadsheet Illustration" : "Report Illustration"}</h1><div class="subtitle">Sample as-of date: June 15, 2026 · Five fictional customers · USD<br>Recreated portfolio illustration — not an export from the production application</div>${excel ? "" : `<div class="cards">${["Current", "1–30 days", "31–60 days", "61–90 days", "91+ days", "Open balance"].map((x, i) => `<div class="card"><span>${x}</span><strong>${money(i < 5 ? totals[i] : balance)}</strong></div>`).join("")}</div>`}<table><thead><tr>${headings.map((x) => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rowHtml}</tbody><tfoot><tr><td colspan="4">Sample totals</td>${totals.map((x) => `<td>${money(x)}</td>`).join("")}<td>${money(balance)}</td></tr></tfoot></table><div class="note"><b>Illustrative rules only:</b> Buckets in this sample use calendar days after the sample due date; current includes invoices not yet overdue. Each row is assigned to one non-overlapping bucket. These sample assumptions do not document the production application's aging logic, credit handling, or historical reconstruction. All dates, names, IDs, and balances are invented.</div><footer><span>Jason Lewis · Engineering portfolio</span><b>FICTIONAL DATA · ${excel ? "EXCEL-STYLE SAMPLE" : "PDF-STYLE SAMPLE"}</b></footer></div></html>`;
}
await fs.mkdir(destination, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath: "/usr/bin/chromium",
  args: ["--no-sandbox"],
});
const page = await browser.newPage({
  viewport: { width: 1600, height: 1100 },
  deviceScaleFactor: 1,
});
for (const [excel, name] of [
  [false, "ar-03-fictional-pdf.png"],
  [true, "ar-04-fictional-excel.png"],
]) {
  await page.setContent(html(excel));
  await page
    .locator(".sheet")
    .screenshot({ path: path.join(destination, name) });
}
await browser.close();
console.log({ totals, balance });
