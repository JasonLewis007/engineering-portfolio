// Fictional portfolio illustration, generated locally without application data.
// Requires Playwright through NODE_PATH; uses local Chromium.
import { createRequire } from "node:module";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import console from "node:console";
const load = createRequire(import.meta.url);
const { chromium } = load("playwright");
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const rows = [
  [
    "Sample North",
    120000,
    30000,
    150000,
    180000,
    144000,
    36000,
    180000,
    216000,
  ],
  ["Sample South", 90000, 25000, 115000, 140000, 108000, 30000, 138000, 168000],
  ["Sample West", 70000, 15000, 85000, 100000, 84000, 18000, 102000, 120000],
];
const totals = rows[0]
  .slice(1)
  .map((_, i) => rows.reduce((sum, r) => sum + r[i + 1], 0));
const n = (x) => x.toLocaleString("en-US");
const cells = (r) =>
  `<tr><th>${r[0]}</th>${r
    .slice(1)
    .map((x, i) => `<td>${i >= 4 ? "$" : ""}${n(x)}</td>`)
    .join("")}</tr>`;
const html = `<!doctype html><html lang="en"><meta charset="utf-8"><title>Fictional Daily Shipping Report</title><style>
*{box-sizing:border-box}body{margin:0;background:#fff;color:#142338;font:16px Arial,sans-serif}.sheet{padding:48px;width:1440px}.banner{background:#e9f1fc;border:2px solid #2563b8;padding:16px 20px;color:#154981;font-weight:bold;letter-spacing:1px}header{display:flex;justify-content:space-between;align-items:center;margin:34px 0 28px}h1{font-size:36px;margin:8px 0}h2{font-size:21px;margin:0 0 20px}.muted{color:#53647a}p{line-height:1.55}.eyebrow{color:#2563b8;font-size:13px;letter-spacing:2px;font-weight:bold}.period{text-align:right;line-height:1.8}.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px}.card{padding:22px;background:#f0f4f9;border-radius:8px}.card span{display:block;font-size:14px;color:#53647a}.card strong{display:block;font-size:29px;margin:10px 0}.card small{font-size:17px}table{width:100%;border-collapse:collapse;font-size:14px}th,td{padding:15px 10px;text-align:right;border-bottom:1px solid #d4dce7}th:first-child{text-align:left}thead{background:#142f53;color:white}thead th{font-size:12px}tbody th{font-weight:normal}tfoot{background:#e9f1fc;font-weight:bold}.bottom{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin-top:34px}.panel{border:1px solid #d4dce7;padding:24px;border-radius:8px}.bar{height:28px;margin:10px 0 18px;background:#edf1f6}.fill{height:100%;background:#2563b8}.green{background:#4b8f68}.label{display:flex;justify-content:space-between;font-size:15px}.note{padding:20px;background:#fff8e9;border-left:4px solid #d19b35;margin-top:28px;font-size:14px}footer{border-top:1px solid #d4dce7;margin-top:28px;padding-top:18px;font-size:13px;display:flex;justify-content:space-between}</style>
<div class="sheet"><div class="banner">FICTIONAL SAMPLE — PORTFOLIO DEMONSTRATION ONLY</div><header><div><div class="eyebrow">ILLUSTRATIVE REPORT OUTPUT</div><h1>Daily Shipping Report</h1><div class="muted">Shipping activity and monthly budget overview</div></div><div class="period"><b>Sample period</b><br>June 1–15, 2026<br><span class="muted">All names, dates, and figures are fictional</span></div></header>
<div class="cards">${["Shipped", "Ordered", "Potential", "Monthly budget"].map((label, i) => `<div class="card"><span>${label}</span><strong>${n(totals[i])} lb</strong><small>$${n(totals[i + 4])}</small></div>`).join("")}</div>
<h2>Illustrative regional summary</h2><table><thead><tr><th>Fictional region</th>${["Shipped lb", "Ordered lb", "Potential lb", "Budget lb", "Shipped $", "Ordered $", "Potential $", "Budget $"].map((x) => `<th>${x}</th>`).join("")}</tr></thead><tbody>${rows.map(cells).join("")}</tbody><tfoot>${cells(["Sample total", ...totals])}</tfoot></table>
<div class="bottom"><section class="panel"><h2>Sample shipped sales vs. monthly budget</h2><div class="label"><span>Shipped sales</span><b>$336,000</b></div><div class="bar"><div class="fill" style="width:66.6667%"></div></div><div class="label"><span>Monthly budget</span><b>$504,000</b></div><div class="bar"><div class="fill green" style="width:100%"></div></div><p class="muted">Illustrative month-to-date activity compared with a full-month budget.</p></section><section class="panel"><h2>Illustrative prior workday activity</h2><table><thead><tr><th>Sample date</th><th>Ordered lb</th><th>Shipped sales</th></tr></thead><tbody>${[
  ["June 12", 18000, 21000],
  ["June 11", 15000, 18000],
  ["June 10", 22000, 26400],
]
  .map(
    (r) => `<tr><th>${r[0]}</th><td>${n(r[1])}</td><td>$${n(r[2])}</td></tr>`,
  )
  .join("")}</tbody></table></section></div>
<div class="note"><b>Sample assumptions:</b> For this illustration only, potential equals shipped plus ordered. This sample convention does not document the production application's calculation or workday rules. This is a recreated portfolio illustration, not an export from the deployed application.</div><footer><span>Jason Lewis · Engineering portfolio</span><b>FICTIONAL DATA · NO COMPANY DATA</b></footer></div></html>`;
(async () => {
  const dest = path.resolve(scriptDirectory, "../public/images/daily-shipping");
  await fs.mkdir(dest, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/usr/bin/chromium",
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1200 },
    deviceScaleFactor: 1,
  });
  await page.setContent(html);
  await page
    .locator(".sheet")
    .screenshot({ path: path.join(dest, "daily-05-fictional-sample.png") });
  await browser.close();
  console.log("Generated fictional sample PNG");
})();
